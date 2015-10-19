
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
			evtButton:				'Wenn Schalter %m.buttons %m.buttonStates',
			evtLightBarrier:		'Wenn Lichtschranke %m.lightBarrier %m.lightBarrierStates',
			doSetOutputToPreset:	'Setze Ausgang %m.outputs auf %m.outputValues',
			doSetOutputToVal:		'Setze Ausgang %m.outputs auf %n',
			doReverseMotor:			'laufenden Motor %m.outputs umdrehen',
			doReset:				'Zurücksetzen',
			doToggle:				'Ausgang %m.outputs umschalten',
			getSensorValue:			'Wert von Sensor %m.inputs',
			getOutputValue:			'Wert von Ausgang %m.outputs',
			
			pressed:				'gedrückt',
			released:				'losgelassen',
			opens:					'öffnet',
			closes:					'schließt',
		},
		
		// english translation
		en: {
			evtButton:				'button %m.buttons %m.buttonStates',
			evtLightBarrier:		'light-barrier %m.lightBarrier %m.lightBarrierStates',
			doSetOutputToPreset:	'set output %m.outputs to %m.outputValues',
			doSetOutputToVal:		'set output %m.outputs to %n',
			doReverseMotor:			'reverse running motor %m.outputs',
			doReset:				'reset',
			doToggle:				'toggle output %m.outputs',
			getSensorValue:			'sensor-value %m.inputs',
			getOutputValue:			'output-value %m.outputs',
			
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
