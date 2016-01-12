
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
		   
			getButton:             'interruptor %m.inputs presionado?',
			getLightBarrier:       'barrera de luz %m.inputs closed?',
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
			getLightBarrier:       'barrera de llum %m.inputs closed?',
			getOutputValue:        'obtén valor de sortida %m.outputs',
		   
			pressed:               'pitjat',
			released:              'alliberat',
			opens:                 'encesa',
			closes:                'apagada',
			forward:               'endavant',
			backwards:             'endarrere',
		}
		
	},	
	
	// get a translated version for the given constant
	get: function(what) {
		var codes = this.trans[this.langCode];		// requested language
		if (!codes) { codes = this.trans['en']; }	// fallback
		return codes[what];
	}
	
};
