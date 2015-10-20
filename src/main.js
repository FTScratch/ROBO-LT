
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
	ext.getInput = function(sensor, callback) {
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
	ext.getInput = function(output, callback) {
		if (this.currentValues == null) {return 0;}
		switch(output) {
			case 'M1': return this.currentValues.m1_percent;
			case 'M1': return this.currentValues.m2_percent;
		}
	};
	
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

