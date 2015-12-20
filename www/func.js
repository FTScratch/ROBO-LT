function getImg(lang, block) {
	var img = document.createElement('IMG');
	img.src=('www/' + lang + '/' + block + '.png');
	img.className = 'img';
	return img;
}



function getBlock(block) {
	
	var outer = document.createElement('DIV');
	outer.className = 'blockDesc';
	
	var imgs = document.createElement('DIV');
	imgs.className = 'images';
	
	var title = document.createElement('DIV');
	title.className = 'title';
	
	imgs.appendChild(getImg('en', block));
	imgs.appendChild(getImg('de', block));
	
	var text = document.createElement('DIV');
	text.className = 'text';
	text.innerHTML = Lang.get(block);
	
	
	outer.appendChild(imgs);
	outer.appendChild(text);
	var blockDescs = document.getElementById('blockDescs');
	blockDescs.appendChild(title);
	blockDescs.appendChild(outer);
	
}

function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

var Lang = {
	
	get: function(what) {
		var langCode = (getURLParameter('lang') || navigator.language || navigator.userLanguage).substr(0,2);
		var translations = this[langCode];					// requested translations
		if (!translations) { translations = this['en']; }	// fallback
		return translations[what];
	},
	
	set: function(what, objID) {
		document.getElementById(objID).innerHTML = Lang.get(what);
	},
	
	de: {
		
		about:				'Über',
		aboutText:			'<b>FTScratch</b> ermöglicht auf PCs bzw. Notebooks mit Microsoft Windows Betriebssystem die Verwendung des Fischertechnik <a href="http://www.fischertechnik.de/desktopdefault.aspx/tabid-21/39_read-311/usetemplate-2_column_pano/">ROBO LT</a> zusammen mit der einfach zu erlernenden Programmiersprache <a href="https://scratch.mit.edu">Scratch</a>. So können im Handumdrehen kleine Anwendungen zur Steuerung von Motoren und Lampen mittels Tastern und Lichtschranken erstellt werden. Durch die Vielzahl an Möglichkeiten, die die Programmiersprache Scratch bietet, können auch weitaus größere Programme erstellt werden.<br/><br/>Neue Scratch-Erweiterungen, wie FTScratch, verwenden hierzu die Entwicklerversion <a href="http://scratchx.org/">ScratchX</a>.',
		
		howtoText:			'1) ROBO LT mit dem PC verbinden<br/>2) Treiber <a href="http://www.fischertechnik.de/home/downloads/Computing.aspx">herunterladen</a> und installieren<br/>3) FTScratch <a href="http://ftscratch.github.io/ROBO-LT/bin/FTScratch.exe">herunterladen</a> und starten. (<small>benötigt .NET Framework 4, i.d.R. auf Windows PCs vorhanden</small>)<br/>4) ScratchX mit Erweiterung <a href="http://scratchx.org/?url=http://ftscratch.github.io/ROBO-LT/src/ext.js#scratch">öffnen</a> (<small>Firefox oder Chrome</small>)<br/>5) Loslegen!',
		
		blockDesc:			'Blockbeschreibung',
		blockDescText:		'Aus Gründen der Kompabilität orientieren sich die folgenden Blöcke an RoboPro Light. Die Sprachversion der Blöcke (deutsch / englisch) orientiert sich an Ihrer Browsereinstellung. ',
		
		onButton:			'Dieses Ereignis löst aus, sobald ein Taster an Eingang I1 (I2, I3) gedrückt (oder losgelassen) wird.',
		onLightBarrier:		'Dieses Ereignis löst aus, sobald die Lichtschranke geöffnet (geschlossen) wird, d.h. der Lichtstrahl zwischen einer Lichtquelle und einer Photodiode an Eingang I3 (I1, I2) unterbrochen (oder nicht mehr unterbrochen) wird. Als Lichtquelle kann z.B. eine Glühbirne an M1 (M2) verwendet werden.',

		getButton:			'Dieser Block fragt ab, ob ein Taster an Eingang I1 (I2, I3) gedrückt ist. Dieser Block läßt sich mit Blöcken aus den Rubriken "Steuerung" und "Operatoren" kombinieren.',
		getLightBarrier:	'Dieser Block fragt ab, ob eine Lichtschranke an Eingang I3 (I1, I2) geschlossen ist. Dieser Block läßt sich mit Blöcken aus den Rubriken "Steuerung" und "Operatoren" kombinieren.',
		getOutput:			'Über diesen Block kann der aktuelle Wert von Ausgang M1 (M2) abgefragt und für Berechnungen oder Bedingungen in Kombination mit Blöcken aus den Rubriken "Steuerung", "Operatoren" und "Ereignisse" verwendet werden. Der abgefragte Wert liegt zwischen -8 (Motor rückwärts) und +8 (Motor vorwärts).',
		
		setLampVal:			'Über diesen Block kann der Ausgang M1 (M2) für z.B. eine Lampe auf einen Wert von 0...8 gesetzt werden.',
		setMotorValDir:		'Über diesen Block kann der Ausgang M1 (M2) für z.B. einen Motor auf vorwärts (rückwärts) gesetzt werden mit einem Wert von 0...8.',
		setMotorDir:		'Über diesen Block kann der Ausgang M1 (M2) für z.B. einen Motor zur Änderung der Drehrichtung bei gleichbleibendem Wert auf vorwärts (rückwärts) gesetzt werden.',
		setOutputVal:		'Mit diesem Block kann der Ausgang M1 (M2) auf einen festen oder einen variablen Wert gesetzt werden, der sich z.B. aus einem eingelesenen Wert (siehe Block "Lese Wert von Ausgang ...") und/oder in Kombination mit Blöcken aus den Rubriken "Steuerung", "Operatoren" und "Ereignisse" ergibt.',

		reset:				'Dieser Block setzt den ROBO LT zurück. Alle Ausgänge werden auf 0 gesetzt.',
	
	},
	
	en: {
		
		about:				'About',
		aboutText:			'<b>FTScratch</b> allows PCs running Microsoft Windows to use the Fischertechnik <a href="http://www.fischertechnik.de/desktopdefault.aspx/tabid-21/39_read-311/usetemplate-2_column_pano/">ROBO LT</a> in combination with the visual, easy-to-learn programming language <a href="https://scratch.mit.edu">Scratch</a>. Small applications to control motors and indicator lights can be created instantly by means of mini-switches and phototransistors. Due to the variety of opportunities offered by the Scratch programming language, large programs may be developed.<br/><br/>Experimental extensions to Scratch, such as FTScratch, use the development version <a href="http://scratchx.org/">ScratchX</a>.',
		
		howtoText:			'1) Connect ROBO LT to the PC<br/>2) <a href="http://www.fischertechnik.de/home/downloads/Computing.aspx">Download</a> and install drivers<br/>3) <a href="http://ftscratch.github.io/ROBO-LT/bin/FTScratch.exe">Download</a> and run FTScratch (<small>requires .NET Framework 4, usually installed on Windows PCs</small>)<br/>4) <a href="http://scratchx.org/?url=http://ftscratch.github.io/ROBO-LT/src/ext.js#scratch">Open</a> ScratchX with the extension (<small>Firefox or Chrome</small>)<br/>5) Get Started!',
		
		blockDesc:			'Block description',
		blockDescText:		'For compatibility reasons, the following blocks are based on ROBO PRO Light. The language version of the blocks (German / English) is based on the browser settings.',
		
		onButton:			'This event triggers when a mini-switch on input I1 (I2, I3) is pressed (or released).',
		onLightBarrier:		'This event triggers as soon as a light barrier opens (closes), i.e., the light beam between an indicator light and a phototransistor on input I3 (I1, I2) is disrupted (or not disrupted). The indicator light or any other light source may be on output M1 (M2). ',
		
		getButton:			'This block polls the status (pressed or released) of a mini-switch on input I1 (I2, I3). This block can be combined with blocks under the headings "Operators" and "Control".',
		getLightBarrier:	'This block polls the status (closed or opened) of a light barrier on input I3 (I1, I2). This block can be combined with blocks under the headings "Operators" and "Control".',
		getOutput:			'This block retrieves the current value of output M1 (M2) that may be used for calculations or conditional expressions in combination with blocks under the headings "Operators", "Control" and "Events". The value retrieved is between -8 (motor backwards) and +8 (motor forward). ',
		
		setLampVal:			'This block sets output M1 (M2) to a value from 0...8, e.g. for an indicator light.',
		setMotorValDir:		'This block sets output M1 (M2) to forward (backwards) with a value of 0...8, e.g. for a motor.',
		setMotorDir:		'This block sets output M1 (M2) to forward (backwards/reverse) with the value unchanged, e.g. to change the rotational direction of a motor at a constant value.',
		setOutputVal:		'This block sets output M1 (M2) to a fixed value or a variable value which is e.g. retrieved form a get value block (see block "get value of output M1 (M2)") and / or in combination with blocks under the headings "Control", "Operators" and "Events".',
		
		reset:				'This block resets the ROBO LT. All outputs are set to 0.',
		
		
		//onButton:			'This event triggers when a button is pressed (or released). The Button is attached to either input I1 or I2.',
		//onLightBarrier:		'This event triggers when the light-ray between a light-source and a photodiode (attached to I3) is interrupted (or re-established). A possible light-source is e.g. a lamp attached to M1 (or M2) which is activated by setting the corresponding output to 100.',
		//onChange:			'This event triggers when the value of the chosen input changes by more than the given percentage. This may e.g. be used for a more sensitive obstacle detection using the light-barrier.',
		//getSensor:			'This block provides the current value of the chosen input for using within calculations or conditions. The value is between 0 (min) and 100 (max).',
		//getOutput:			'This block provides the current value of the chosen output for using within calculations or conditions. The value is between -100 (motor backward) and +100 (motor forward).',
		//setOutput_1:		'This block allows setting the current value for one of the outputs M1 or M2. The value is between -100 (motor backward) and +100 (motor forward).',
		//setOutput_2:		'This block allows, like the previous one, setting the current value for M1 or M2. Here, however, the value is not static but a variable. This allows using e.g. calculations to determine the output\'s value.',
		//setOutputReverse:	'This block reverses a currently running motor attached to either M1 or M2 by negating the output\'s current value. -50 is changed to +50, +100 is changed to -100. A disabled output (value: 0) is not affected.',
		//setOutputToggle:	'This block toggles the chosen output between 0 and 100: A currently running motor will stop, a stopped motor will start running.',
		//reset:				'This block resets the ROBO-LT and will set all of its outputs to 0.',
	}
	
}