
function getButtonState(state) {
	return Lang.get(state);
}

function getLightBarrierState(state) {
	return Lang.get(state);
}

var Lang = {
	
	// browser's language code
	langCode: (navigator.language || navigator.userLanguage).substr(0,2),
	
	trans: {
		
		// german translation
		de: {
			evtChange:				'Wenn sich Eingang %m.inputs um > %n ändert',
			evtButton:				'Wenn Schalter %m.buttons %m.buttonStates',
			evtLightBarrier:		'Wenn Lichtschranke %m.lightBarrier %m.lightBarrierStates',
			doSetOutputToPreset:	'Setze Ausgang %m.outputs auf %m.outputValues',
			doSetOutputToVal:		'Setze Ausgang %m.outputs auf %n',
			doReverseMotor:			'laufenden Motor %m.outputs umdrehen',
			doReset:				'Zurücksetzen',
			doToggle:				'Ausgang %m.outputs umschalten',
			getSensorValue:			'Lese Wert von Sensor %m.inputs',
			getOutputValue:			'Lese Wert von Ausgang %m.outputs',
			
			pressed:				'gedrückt',
			released:				'losgelassen',
			opens:					'öffnet',
			closes:					'schließt',
		},
		
		// english translation
		en: {
			evtChange:				'input %m.inputs changed by > %n',
			evtButton:				'button %m.buttons %m.buttonStates',
			evtLightBarrier:		'light-barrier %m.lightBarrier %m.lightBarrierStates',
			doSetOutputToPreset:	'set output %m.outputs to %m.outputValues',
			doSetOutputToVal:		'set output %m.outputs to %n',
			doReverseMotor:			'reverse running motor %m.outputs',
			doReset:				'reset',
			doToggle:				'toggle output %m.outputs',
			getSensorValue:			'get value of sensor %m.inputs',
			getOutputValue:			'get value of output %m.outputs',
			
			pressed:				'pressed',
			released:				'released',
			opens:					'opens',
			closes:					'closes',
		}
		
	},	
	
	// get a translated version for the given constant
	get: function(what) {
		var v1 = this.trans[this.langCode][what];
		var v2 = this.trans['en'][what];
		return (v1) ? (v1) : (v2);
	}
	
};

var IO = {

	// the URL of the host application interfacing the ROBO-LT
	host: 'http://localhost:8000/',
	
	// the latest result of updateStatus()
	status: {status: 1, msg: 'Connecting'},
	
	// request timeout after x msec
	timeout: 500,

	// get the current time as string
	getTimeString: function() {
		var d = new Date();
		var h = d.getHours();	h = (h<10) ? ('0'+h) : (h);
		var m = d.getMinutes();	m = (m<10) ? ('0'+m) : (m);
		var s = d.getSeconds();	s = (s<10) ? ('0'+s) : (s);
		return '(' + h + ':' + m + ':' + s + ') ';
	},
	
	// ping the host application
	updateStatus: function() {
		try {
			var time = this.getTimeString();
			var self = this;
			this.doGet('getStatus')
				.done( function(dev)	{self.status = {status: 2, msg: time + dev[0]};} )							// app responded
				.fail( function()		{self.status = {status: 0, msg: time + 'Application not responding'};} );	// app did not respond within timeout
		} catch (err) {return {status: 1, msg: 'Connecting'};}
		return this.status;
	},

	// POST the given command and corresponding values to the host application
	doPost: function(command, values) {
		return $.ajax({
              async: true,
			  url: this.host + command,
              dataType: 'json',
			  method: 'POST',
			  data: JSON.stringify(values),
			  crossDomain: true,
        });
	},
	
	// GET the given command and return the response data from the host application
	doGet: function(command) {
		return $.ajax({
              async: true,
			  timeout: this.timeout,
			  url: this.host + command,
              dataType: 'json',
			  method: 'GET',
			  crossDomain: true,
        });
	},

	
};

(function(ext) {
	
	// the current sensor values from the device
	ext.currentValues = null;
	
	// the previous values from the device (for change detection)
	ext.oldValues = null;
		
	// Cleanup function when the extension is unloaded
	ext._shutdown = function() {};
	
	// Status reporting code
	// Use this to report missing hardware, plugin or unsupported browser
	ext._getStatus = function() {
		return IO.updateStatus();
	};
	
	// reset the device
	ext.reset = function() {
		IO.doGet('reset');
	};
	
	// set the output (in percent) [-100:+100]
	ext.setOutput = function(output, speed) {
		switch(output) {
			case 'M1': IO.doPost('setOutput', {idx: 0, speed: speed}); break;
			case 'M2': IO.doPost('setOutput', {idx: 1, speed: speed}); break;
		}
	};
	
	// get the current output (in percent)
	ext.getOutput = function(output) {
		switch(output) {
			case 'M1':	return this.currentValues.m1_percent;
			case 'M2':	return this.currentValues.m2_percent;
			default:	return false;
		}
	}
	
	// set the given output to 0
	ext.setOutputOff = function(output) {
		this.setOutput(output, 0);
	}
	
	// negate the output (+100? -> -100)
	ext.setOutputNeg = function(output) {
		this.setOutput(output, -this.getOutput(output))
	}
	
	// toggle between [0 and 100]
	ext.toggleOutput = function(output) {
		var current = this.getOutput(output);
		if (current === false) {return;}
		if (current == 0)	{this.setOutput(output, 100);}
		else				{this.setOutput(output, 0);}
	}
	
	// get the current value of the idx-th sensor
	ext.getInput = function(sensor) {
		if (this.currentValues == null) {return 0;}
		switch(sensor) {
			case 'I1': return this.currentValues.ax_percent;
			case 'I2': return this.currentValues.ay_percent;
			case 'I3': return this.currentValues.a1_percent;
		}
	};
	
	// get the difference between the last two readings for the given sensor (returns false on errors)
	ext.getInputDelta = function(sensor) {
		if (this.currentValues == null)	{return false;}
		if (this.oldValues == null)		{return false;}
		switch(sensor) {
			case 'I1':	return (this.currentValues.ax_percent - this.oldValues.ax_percent);
			case 'I2':	return (this.currentValues.ay_percent - this.oldValues.ay_percent);
			case 'I3':	return (this.currentValues.a1_percent - this.oldValues.a1_percent);
			default:	return false;
		}
	}
	
	// get the current value of the given output
	//ext.getOutput = function(output, callback) {
	//	if (this.currentValues == null) {return 0;}
	//	switch(output) {
	//		case 'M1': return this.currentValues.m1_percent;
	//		case 'M1': return this.currentValues.m2_percent;
	//	}
	//};
	
	// returns true when the given input has changed by more than x %
	ext.inputChange = function(sensor, difference) {
		var diff = this.getInputDelta(sensor);
		if (diff === false) {return false;}
		return (Math.abs(diff) > difference);
	}
	
	// returns true when the value for the given input changed by +/- 50%
	ext.buttonChange = function(sensor, direction) {
		var diff = this.getInputDelta(sensor);
		if (diff === false) {return false;}
		if (direction == getButtonState('pressed'))		{return diff < -50;}		// 50% down
		if (direction == getButtonState('released'))	{return diff < +50;}		// 50% up
		return false;
	}
	
	// returns true when the value for the given input changed by +/- 20%
	ext.lightBarrierChange = function(sensor, direction) {
		var diff = this.getInputDelta(sensor);
		if (diff === false) {return false;}
		if (direction == getLightBarrierState('closes'))	{return diff < +15;}		// 15% up
		if (direction == getLightBarrierState('opens'))		{return diff < -15;}		// 15% down
		return false;
	}
	

	
	// update the current sensor values from the device
	ext.doUpdate = function() {
		IO.doGet('getSensors')
			.done(function(data) {
				ext.oldValues = ext.currentValues;
				ext.currentValues = data;
			})
			.fail(function( xhr, status, err ) {
				console.log(err);						// DEBUG
			});
	};
	
	

		
	// Block and block menu descriptions
	var descriptor = {
		
		blocks: [
			
			// events
			['h', Lang.get('evtButton'), 'buttonChange', 'I1', getButtonState('pressed')],
			['h', Lang.get('evtLightBarrier'), 'lightBarrierChange', 'I3', getLightBarrierState('opens')],
			['h', Lang.get('evtChange'), 'inputChange', 'I1', 50],
			
			// gets
			['r', Lang.get('getSensorValue'), 'getInput', 'I1'],
			['r', Lang.get('getOutputValue'), 'getOutput', 'M1'],
			
			// sets
			[' ', Lang.get('doSetOutputToPreset'), 'setOutput', 'M1', 0],
			[' ', Lang.get('doSetOutputToVal'), 'setOutput', 'M1', 0],
			[' ', Lang.get('doReverseMotor'), 'setOutputNeg', 'M1'],
			[' ', Lang.get('doToggle'), 'toggleOutput', 'M1'],
			[' ', Lang.get('doReset'), 'reset'],
			
		],
		
		menus: {
			inputs:				['I1', 'I2', 'I3'],
			buttons:			['I1', 'I2'],
			buttonStates:		[getButtonState('pressed'), getButtonState('released')],
			lightBarrierStates:	[getLightBarrierState('opens'), getLightBarrierState('closes')],
			outputs:			['M1', 'M2'],
			outputValues:		[-100, -75, -50, -25, 0, +25, +50, +75, +100],
		},
		
		url: 'http://www.fischertechnik.de/desktopdefault.aspx/tabid-21/39_read-311/usetemplate-2_column_pano/',
		
	};
	
	// Register the extension
	ScratchExtensions.register('FischerTechnik ROBO-LT', descriptor, ext);
	
	// start the update loop: periodically fetch sensor values from the device
	setInterval(ext.doUpdate, 60);
	
	// ensure the ROBO LT is reset
	ext.reset();
	
})({});

