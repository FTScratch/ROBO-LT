
function getButtonState(state) {
	return Lang.get(state);
}

function getLightBarrierState(state) {
	return Lang.get(state);
}

function getMotorDirection(dir) {
	return Lang.get(dir);
}

var Lang = {
	
	// browser's language code
	langCode: (navigator.language || navigator.userLanguage).substr(0,2),
	
	trans: {
		
		// german translation
		de: {
			evtButton:				'Wenn Schalter %m.inputs %m.buttonStates',
			evtLightBarrier:		'Wenn Lichtschranke %m.inputs %m.lightBarrierStates',
			
			setLampVal:				'Setze Lampe %m.outputs auf %m.outputValues',
			setMotorValDir:			'Setze Motor %m.outputs auf %m.outputValues %m.outputDirections',
			setMotorDir:			'Setze Motor %m.outputs auf %m.outputDirections',
			setOutputVal:			'Setze Ausgang %m.outputs auf %n',
			reset:					'Zurücksetzen',
			
			getButton:				'Schalter %m.inputs gedrückt?',
			getLightBarrier:		'Lichtschranke %m.inputs geschlossen?',
			getOutputValue:			'Lese Wert von Ausgang %m.outputs',
			
			pressed:				'gedrückt',
			released:				'losgelassen',
			opens:					'öffnet',
			closes:					'schließt',
			forward:				'vorwärts',
			backwards:				'rückwärts',
		},
		
		// english translation
		en: {
			evtButton:				'button %m.inputs %m.buttonStates',
			evtLightBarrier:		'light-barrier %m.inputs %m.lightBarrierStates',
			
			setLampVal:				'set lamp %m.outputs to %m.outputValues',
			setMotorValDir:			'set motor %m.outputs to %m.outputValues %m.outputDirections',
			setMotorDir:			'set motor %m.outputs to %m.outputDirections',
			setOutputVal:			'set output %m.outputs to %n',
			reset:					'reset',
			
			getButton:				'button %m.inputs pressed?',
			getLightBarrier:		'light-barrier %m.inputs closed?',
			getOutputValue:			'get value of output %m.outputs',
			
			pressed:				'pressed',
			released:				'released',
			opens:					'opens',
			closes:					'closes',
			forward:				'forward',
			backwards:				'backwards',
		},
		
		// spanish translation
		es: {
			evtButton:             'interruptor %m.inputs %m.buttonStates',
			evtLightBarrier:       'barrera de luz %m.inputs %m.lightBarrierStates',
	 
			setLampVal:            'fijar lámpara %m.outputs a %m.outputValues',
			setMotorValDir:        'fijar motor %m.outputs a %m.outputValues %m.outputDirections',
			setMotorDir:           'fijar motor %m.outputs a %m.outputDirections',
			setOutputVal:          'fijar valor de salida %m.outputs a %n',
			reset:                 'reinicio',
		   
			getButton:             'interruptor %m.inputs presionada?',
			getLightBarrier:       'barrera de luz %m.inputs apagada?',
			getOutputValue:        'obtener valor de salida %m.outputs',
		   
			pressed:               'presionado',
			released:              'liberado',
			opens:                 'encendida',
			closes:                'apagada',
			forward:               'adelante',
			backwards:             'atrás',
		},
		
		// catalan translation
		ca: {
			evtButton:             'interruptor %m.inputs %m.buttonStates',
			evtLightBarrier:       'barrera de llum %m.inputs %m.lightBarrierStates',
	 
			setLampVal:            'fixa làmpada %m.outputs a %m.outputValues',
			setMotorValDir:        'fixa motor %m.outputs a %m.outputValues %m.outputDirections',
			setMotorDir:           'fixa motor %m.outputs a %m.outputDirections',
			setOutputVal:          'fixa valor de sortida %m.outputs a %n',
			reset:                 'reinicialitzar',
		   
			getButton:             'interruptor %m.inputs pitjat?',
			getLightBarrier:       'barrera de llum %m.inputs apagada?',
			getOutputValue:        'obtén valor de sortida %m.outputs',
		   
			pressed:               'pitjat',
			released:              'alliberat',
			opens:                 'encesa',
			closes:                'apagada',
			forward:               'endavant',
			backwards:             'endarrere',
		},
		
		// french translation
		fr: {
			evtButton:				'bouton %m.inputs %m.buttonStates',
			evtLightBarrier:		'barrière optique %m.inputs %m.lightBarrierStates', 
			
			setLampVal:				'mettre la lampe %m.outputs à %m.outputValues',
			setMotorValDir:			'régler le moteur %m.outputs à %m.outputValues %m.outputDirections',
			setMotorDir:			'paramétrer le moteur %m.outputs pour %m.outputDirections',
			setOutputVal:			'mettre la sortie %m.outputs à %n',
			reset:					'remise à zero',
			
			getButton:				'bouton %m.inputs appuyé?',
			getLightBarrier:		'barrière optique %m.inputs coupée?',
			getOutputValue:			'lire la valeur de la sortie %m.outputs',  
			
			pressed:				'appuyé',
			released:				'relâché',
			opens:					'ouvert',
			closes:					'fermé',
			forward:				'avancer',
			backwards:				'reculer',		
		},
		
		// italian translation
		it: {
			evtButton:				'pulsante %m.inputs %m.buttonStates',
			evtLightBarrier:		'barriera fotoelettrica %m.inputs %m.lightBarrierStates',
 
			setLampVal:				'imposta lampada %m.outputs a %m.outputValues',
			setMotorValDir:			'imposta motore %m.outputs a %m.outputValues %m.outputDirections',
			setMotorDir:			'imposta motore %m.outputs a %m.outputDirections',
			setOutputVal:			'imposta uscita %m.outputs a %n',
			reset:					'resetta',
        
			getButton:				'pulsante %m.inputs premuto?',
			getLightBarrier:		'barriera fotoelettrica %m.inputs chiusa?',
			getOutputValue:			'rileva valore da uscita %m.outputs',
        
			pressed:				'premuto',
			released:				'rilasciato',
			opens:					'si apre',
			closes:					'si chiude',
			forward:				'avanti',
			backwards:				'indietro',
		},
		
		// portuguese translation
		pt: {
			evtButton:				'botão %m.inputs %m.buttonStates',
			evtLightBarrier:		'célula fotoelétrica %m.inputs %m.lightBarrierStates',
 
			setLampVal:				'definir lâmpada %m.outputs para %m.outputValues',
			setMotorValDir:			'definir motor %m.outputs para %m.outputValues %m.outputDirections',
			setMotorDir:			'definir motor %m.outputs para %m.outputDirections',
			setOutputVal:			'definir saída %m.outputs para %n',
			reset:					'reiniciar',
        
			getButton:				'botão %m.inputs pressionado?',
			getLightBarrier:		'célula fotoelétrica %m.inputs fechada?',
			getOutputValue:			'obter valor da saída %m.outputs',
        
			pressed:				'pressionado',
			released:				'liberado',
			opens:					'abre',
			closes:					'fecha',
			forward:				'para frente',
			backwards:				'para trás',
		},
		
	},	
	
	// get a translated version for the given constant
	get: function(what) {
		var codes = this.trans[this.langCode];		// requested language
		if (!codes) { codes = this.trans['en']; }	// fallback
		return codes[what];
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
	
	// set the output [-100:+100]
	ext.setOutputPercent = function(output, speed) {
		switch(output) {
			case 'M1':	IO.doPost('setOutput', {idx: 0, speed: Math.round(speed)}); break;
			case 'M2':	IO.doPost('setOutput', {idx: 1, speed: Math.round(speed)}); break;
			default:	throw "error";
		}
	};
		
	// get the current output [-100:+100]
	ext.getOutputPercent = function(output) {
		switch(output) {
			case 'M1':	return this.currentValues.m1_percent;
			case 'M2':	return this.currentValues.m2_percent;
			default:	return false;
		}
	}
	
	// get the current value of the Ix input: [0:100]
	ext.getInputPercent = function(sensor) {
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
	
	
	
	
	
	// get the current [0,1] value for a button attached to Ix
	ext.getButtonBinary = function(sensor) {
		return this.getInputPercent(sensor) < 15;
	}
	
	// get the current [0,1] value for a light-barrier attached to Ix
	ext.getLightBarrierBinary = function(sensor) {
		return this.getInputPercent(sensor) > 15;
	}
	
	// returns true when the value for the given input changed by +/- 15%
	ext.onButtonChange = function(sensor, direction) {
		var diff = this.getInputDelta(sensor);
		if		(diff === false) {return false;}
		if		(direction == getButtonState('pressed'))		{return diff < -15;}		// 15% down
		else if	(direction == getButtonState('released'))		{return diff < +15;}		// 15% up
		else													throw "error";
	}
	
	// returns true when the value for the given input changed by +/- 15%
	ext.onLightBarrierChange = function(sensor, direction) {
		var diff = this.getInputDelta(sensor);
		if		(diff === false) {return false;}
		if		(direction == getLightBarrierState('closes'))	{return diff < +15;}		// 15% up
		else if (direction == getLightBarrierState('opens'))	{return diff < -15;}		// 15% down
		else													throw "error";
	}
	
	// get the current output of Mx [-8:+8]
	ext.getOutputVal = function(output) {
		return Math.round(this.getOutputPercent(output) / 100 * 8)
	}

	// set he current output of Mx to [-8:+8]
	ext.setOutputVal = function(output, val) {
		this.setOutputPercent(output, val * 100 / 8);
	}
	
	// set the brightness of a lamp attached to Mx
	ext.setLampVal = function(output, val) {
		this.setOutputVal(output, val);
	}
	
	// set the speed [0:8] and direction of a motor attached to Mx
	ext.setMotorValDir = function(output, speed, dir) {
		if		(dir == getMotorDirection('forward'))	{this.setOutputVal(output, +speed);}
		else if	(dir == getMotorDirection('backwards'))	{this.setOutputVal(output, -speed);}
		else											throw 'error';
	}

	// set the direction of a motor attached to Mx
	ext.setMotorDir = function(output, dir) {
		var speed = this.getOutputVal(output);
		if		(dir == getMotorDirection('forward'))	{this.setOutputVal(output, +Math.abs(speed));}
		else if	(dir == getMotorDirection('backwards'))	{this.setOutputVal(output, -Math.abs(speed));}
		else											throw 'error';
	}
		
	// Block and block menu descriptions
	var descriptor = {
		
		blocks: [
			
			// events
			['h', Lang.get('evtButton'),			'onButtonChange',		'I1', getButtonState('pressed')],
			['h', Lang.get('evtLightBarrier'),		'onLightBarrierChange',	'I3', getLightBarrierState('opens')],
			
			// gets
			['b', Lang.get('getButton'),			'getButtonBinary',		'I1'],
			['b', Lang.get('getLightBarrier'),		'getLightBarrierBinary','I3'],
			['r', Lang.get('getOutputValue'),		'getOutputVal',			'M1'],
			
			// sets
			[' ', Lang.get('setLampVal'),			'setLampVal',			'M1', 0],
			[' ', Lang.get('setMotorValDir'),		'setMotorValDir',		'M1', 0, getMotorDirection('forward')],
			[' ', Lang.get('setMotorDir'),			'setMotorDir',			'M1', getMotorDirection('forward')],
			[' ', Lang.get('setOutputVal'),			'setOutputVal',			'M1', 0],

			[' ', Lang.get('reset'),				'reset'],
			
		],
		
		menus: {
			inputs:				['I1', 'I2', 'I3'],
			buttonStates:		[getButtonState('pressed'), getButtonState('released')],
			lightBarrierStates:	[getLightBarrierState('opens'), getLightBarrierState('closes')],
			outputs:			['M1', 'M2'],
			outputValues:		[0, 1, 2, 3, 4, 5, 6, 7, 8],
			outputDirections:	[getMotorDirection('forward'), getMotorDirection('backwards')],
		},
		
		url: 'http://www.fischertechnik.de/desktopdefault.aspx/tabid-21/39_read-311/usetemplate-2_column_pano/',
		
	};
	
	// Register the extension
	ScratchExtensions.register('FischerTechnik ROBO-LT', descriptor, ext);
	
	// start the update loop: periodically fetch sensor values from the device
	setInterval(ext.doUpdate, 55);
	
	// ensure the ROBO LT is reset
	ext.reset();
	
})({});

