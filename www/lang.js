function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

var Lang = {
	
	getCode: function() {
		return (getURLParameter('lang') || navigator.language || navigator.userLanguage).substr(0,2);
	},
	
	get: function(what) {
		var langCode = this.getCode();
		var translations = this[langCode];					// requested translations
		if (!translations) { translations = this['en']; }	// fallback
		var tmp = translations[what];
		tmp = tmp.replace('{LNK_ROBOLT}', '<a href="http://www.fischertechnik.de/desktopdefault.aspx/tabid-21/39_read-311/usetemplate-2_column_pano/">ROBO LT</a>');
		tmp = tmp.replace('{LNK_SCRATCH}', '<a href="https://scratch.mit.edu">Scratch</a>');
		tmp = tmp.replace('{LNK_SCRATCHX}', '<a href="http://scratchx.org/">ScratchX</a>');
		tmp = tmp.replace('{LNK_DRV}', 'http://ftscratch.github.io/ROBO-LT/driver/LT_Controller_driver.zip');
		tmp = tmp.replace('{LNK_BIN}', 'http://ftscratch.github.io/ROBO-LT/bin/FTScratch.exe');
		tmp = tmp.replace('{LNK_RUN}', 'http://scratchx.org/?url=http://ftscratch.github.io/ROBO-LT/src/ext.js#scratch');
		return tmp;
	},
	
	de: {
		
		about:				'Über',
		aboutText:			'<b>FTScratch</b> ermöglicht auf PCs bzw. Notebooks mit Microsoft Windows Betriebssystem die Verwendung des Fischertechnik \
							{LNK_ROBOLT}\
							zusammen mit der einfach zu erlernenden Programmiersprache\
							{LNK_SCRATCH}.\
							So können im Handumdrehen kleine Anwendungen zur Steuerung von Motoren und Lampen mittels Tastern und Lichtschranken erstellt werden. Durch die Vielzahl an Möglichkeiten, die die Programmiersprache Scratch bietet, können auch weitaus größere Programme erstellt werden.\
							<br/><br/>\
							Neue Scratch-Erweiterungen, wie FTScratch, verwenden hierzu die Entwicklerversion {LNK_SCRATCHX}.',
		
		howto:				'HowTo',
		howtoText:			'1) ROBO LT mit dem PC verbinden<br/>\
							2) Treiber <a href="{LNK_DRV}">herunterladen</a> und installieren<br/>\
							3) FTScratch <a href="{LNK_BIN}">herunterladen</a> und starten. (<small>benötigt .NET Framework 4, i.d.R. auf Windows PCs vorhanden</small>)<br/>\
							4) ScratchX mit Erweiterung <a href="{LNK_RUN}">öffnen</a> (<small>Firefox oder Chrome</small>)<br/>\
							5) Loslegen!',
		
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
		aboutText:			'<b>FTScratch</b> allows PCs running Microsoft Windows to use the Fischertechnik\
							{LNK_ROBOLT}\
							in combination with the visual, easy-to-learn programming language\
							{LNK_SCRATCH}.\
							Small applications to control motors and indicator lights can be created instantly by means of mini-switches and phototransistors. Due to the variety of opportunities offered by the Scratch programming language, large programs may be developed.\
							<br/><br/>\
							Experimental extensions to Scratch, such as FTScratch, use the development version {LNK_SCRATCHX}.',
		
		howto:				'HowTo',
		howtoText:			'1) Connect ROBO LT to the PC<br/>\
							2) <a href="{LNK_DRV}">Download</a> and install drivers<br/>\
							3) <a href="{LNK_BIN}">Download</a> and run FTScratch (<small>requires .NET Framework 4, usually installed on Windows PCs</small>)<br/>\
							4) <a href="{LNK_RUN}">Open</a> ScratchX with the extension (<small>Firefox or Chrome</small>)<br/>\
							5) Get Started!',
		
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

	},
	
	es: {
	
		about:				'Acerca de',
		aboutText:			'<b>FTScratch</b> permite utilizar en PC u ordenadores portátiles con sistema operativo Windows el Fischertechnik \
							{LNK_ROBOLT} \
							junto con el lenguaje de programación de fácil aprendizaje \
							{LNK_SCRATCH}.\
							Así es posible crear en cuestión de segundos pequeñas aplicaciones para controlar motores y lámparas mediante pulsadores y barreras de luz. Gracias al sinnúmero de posibilidades que ofrece el lenguaje de programación Scratch, también se pueden crear programas mucho más grandes.\
							<br/><br/>\
							Las nuevas ampliaciones de Scratch, como FTScratch, utilizan para ello la versión de desarrollo\
							{LNK_SCRATCHX}.',
		
		howto:				'Instrucciones breves',
		howtoText:			'1) Conectar el ROBO LT al PC<br/>\
							2) <a href="{LNK_DRV}">Descargar</a> el controlador e instalarlo<br/>\
							3) <a href="{LNK_BIN}">Descargar</a> FTScratch e iniciarlo (<small>requiere .NET Framework 4, disponible en general en las PC con Windows</small>)<br/>\
							4) <a href="{LNK_RUN}">Abrir</a> ScratchX con la ampliación (<small>Firefox o Chrome</small>)<br/>\
							5) ¡A empezar!',
		
		blockDesc:			'Descripción de los bloques',
		blockDescText:		'',
		
		onButton:			'Este evento se activa en cuanto se pulsa o se suelta un pulsador en la entrada I1 (I2, I3).',
		onLightBarrier:		'Este evento se activa en cuanto se abre o se cierra la barrera de luz, es decir, se interrumpe o se deja de interrumpir el rayo de luz entre una fuente luminosa y un fotodiodo en la entrada I3 (I1, I2). Como fuente luminosa se puede utilizar, p. ej., una bombilla en M1 (M2).',
		
		getButton:			'Este bloque consulta si un pulsador está presionado en la entrada I1 (I2, I3). Este bloque se puede combinar con bloques de las categorías "Control" y "Operadores".',
		getLightBarrier:	'Este bloque consulta si una barrera de luz está cerrada en la entrada I3 (I1, I2). Este bloque se puede combinar con bloques de las categorías "Control" y "Operadores".',
		getOutput:			'Mediante este bloque es posible consultar el valor actual de la salida M1 (M2) que se puede utilizar para cálculos y condiciones en combinación con bloques de las categorías "Control", "Operadores" y "Eventos". El valor consultado se encuentra entre -8 (motor marcha atrás) y +8 (motor marcha adelante).',
		
		setLampVal:			'Mediante este bloque es posible establecer la salida M1 (M2), p. ej. para una lámpara, en un valor de 0...8.',
		setMotorValDir:		'Mediante este bloque es posible establecer la salida M1 (M2), p. ej. para un motor en marcha adelante (marcha atrás), en un valor de 0...8.',
		setMotorDir:		'Mediante este bloque es posible establecer la salida M1 (M2), p. ej. para un motor, para cambiar el sentido de giro con un valor constante a marcha adelante (marcha atrás).',
		setOutputVal:		'Con este bloque es posible establecer la salida M1 (M2) en un valor fijo o uno variable que, p. ej., resulte de un valor leído (véase el bloque "Leer valor de salida...") y/o en combinación con los bloques de las categorías "Control", "Operadores" y "Eventos".',
		
		reset:				'Este bloque restablece el ROBO LT. Todas las salidas se establecen en 0.',
	
	},
	
	fr: {
	
		about:				'En ce qui concerne',
		aboutText:			'<b>FTScratch</b> permet, sur les microordinateurs (PC) et/ou ordinateurs portables dotés du système d\'exploitation Microsoft Windows, d\'utiliser le Fischertechnik \
							{LNK_ROBOLT} \
							ensemble avec le langage de programmation facile à apprendre \
							{LNK_SCRATCH}.\
							Grâce à ce langage, vous pouvez créer de petites applications de commande des moteurs et lampes à l\'aide des boutons et barrières lumineuses en un tour de main. Le langage de programmation Scratch offre également une grande diversité d\'autres possibilités pour la création de programmes nettement plus volumineux.\
							<br/><br/>\
							Pour ce faire, les nouvelles extensions de Scratch, tel FTScratch, utilise la version de développement\
							{LNK_SCRATCHX}.',
		
		howto:				'Instructions succinctes',
		howtoText:			'1) Relier ROBO LT avec le PC<br/>\
							2) <a href="{LNK_DRV}">Télécharger</a> le pilote et l\'installer<br/>\
							3) <a href="{LNK_BIN}">Télécharger</a> FTScratch et démarrer le programme. (<small>exige .NET Framework 4, habituellement disponible sur les PC Windows</small>)<br/>\
							4) <a href="{LNK_RUN}">Ouvrir</a> ScratchX avec l\'extension (<small>Firefox ou Chrome</small>)<br/>\
							5) C\'est parti !',
		
		blockDesc:			'Description des blocs',
		blockDescText:		'',
		
		onButton:			'L\'événement se produit dès l\'activation ou la désactivation d\'un bouton sur l\'entrée I1 (I2, I3).',
		onLightBarrier:		'Cet événement se produit dès l\'ouverture ou la fermeture de la barrière lumineuse, c.-à-d. dès que le faisceau lumineux entre la source de lumière et une photodiode sur l\'entrée I3 (I1, I2) est coupé ou pas coupé. Une ampoule sur M1 (M2) peut p. ex. servir de source de lumière.',
		
		getButton:			'Ce bloc interroge si un bouton est appuyé sur l\'entrée I1 (I2, I3). La combinaison de ce bloc avec les blocs des rubriques « Commande » et « Opérateurs » est possible.',
		getLightBarrier:	'Ce bloc interroge si une barrière lumineuse est fermée sur l\'entrée I1 (I2, I3). La combinaison de ce bloc avec les blocs des rubriques « Commande » et « Opérateurs » est possible',
		getOutput:			'Via ce bloc, il est possible de consulter la valeur actuelle sur la sortie M1 (M2) et de l\'utiliser pour les calculs ou conditions en combinaison avec les blocs des rubriques « Commande », « Opérateurs » et « Événements ». La valeur consultée se situe entre -8 (moteur marche arrière) et +8 (moteur marche avant).',
		
		setLampVal:			'Ce bloc permet de placer une valeur de 0...8, p. ex. pour une lampe, sur la sortie M1 (M2).',
		setMotorValDir:		'Ce bloc permet de placer une valeur de 0...8, p. ex. pour un moteur en marche avant (marche arrière), sur la sortie M1 (M2).',
		setMotorDir:		'Ce bloc permet de placer la sortie M1 (M2) p. ex. pour le changement du sens de rotation d\'un moteur bien que la valeur de marche avant (marche arrière) demeure constante.',
		setOutputVal:		'Ce bloc permet de placer la sortie M1 (M2) sur une valeur constante ou variable, donc p. ex. sur une valeur lue (voir le bloc « Lire la valeur de la sortie... ») et/ou sur celle résultant de la combinaison des blocs des rubriques « Commande », « Opérateurs » et « Événdements ».',
		
		reset:				'Ce bloc remet le ROBO LT à zéro. Toutes les sorties sont placées sur 0.',
	
	},
	
	pt: {
		about:				'Sobre',
		aboutText:			'O <b>FTScratch</b> possibilita a utilização do \
							{LNK_ROBOLT} \
							da Fischertechnik, juntamente com a linguagem de programação \
							{LNK_SCRATCH}\
							de fácil aprendizado, em computadores e notebooks com o sistema operacional Microsoft Windows. Assim, pequenas aplicações para o controle de motores e lâmpadas podem ser criadas, em um piscar de olhos, por meio de botões de pressão e células fotoelétricas. Através do grande número de possibilidades que a linguagem de programação Scratch oferece, muitos programas maiores podem também ser criados.\
							<br/><br/>\
							Novas extensões do Scratch, como o FTScratch, utilizam para isso a versão de desenvolvedor \
							{LNK_SCRATCHX}.',
		
		howto:				'Instruções breves',
		howtoText:			'1) Conecte o ROBO LT ao computador<br/>\
							2) <a href="{LNK_DRV}">Baixe</a> e instale o driver<br/>\
							3) <a href="{LNK_BIN}">Baixe</a> e inicie o FTScratch. (<small>requer .NET Framework 4, geralmente disponível em computadores com Windows</small>)<br/>\
							4) <a href="{LNK_RUN}">Abra</a> o ScratchX com extensão (<small>Firefox ou Chrome</small>)<br/>\
							5) E pode começar!',
		
		blockDesc:			'Descrição dos blocos',
		blockDescText:		'',
		
		onButton:			'Este evento é ativado assim que um botão de pressão na entrada I1 (I2, I3) for pressionado ou liberado.',
		onLightBarrier:		'Este evento é ativado assim que a célula fotoelétrica for aberta ou fechada, isto é, o raio luminoso entre uma fonte de luz e um fotodiodo na entrada I3 (I1, I2) for interrompido ou deixar de ser interrompido. Como fonte de luz pode ser utilizada, por exemplo, uma lâmpada incandescente na M1 (M2).',
		
		getButton:			'Este bloco questiona se um botão de pressão está pressionado na entrada I1 (I2, I3). Este bloco pode ser combinado com blocos dos tópicos "Controle" e "Operadores".',
		getLightBarrier:	'Este bloco questiona se uma célula fotoelétrica está fechada na entrada I3 (I1, I2). Este bloco pode ser combinado com blocos dos tópicos "Controle" e "Operadores".',
		getOutput:			'Através desse bloco, o valor atual da saída M1 (M2) pode ser apurado e utilizado para cálculos ou condições em combinação com blocos dos tópicos "Controle", "Operadores" e "Eventos". O valor apurado está entre -8 (motor desloca-se para trás) e +8 (motor desloca-se para frente).',
		
		setLampVal:			'Através desse bloco, um valor de 0...8 pode ser definido para a saída M1 (M2) para uma lâmpada, por exemplo.',
		setMotorValDir:		'Através desse bloco, um valor de 0...8 pode ser definido para a saída M1 (M2) para um motor com deslocamento para frente (deslocamento para trás), por exemplo.',
		setMotorDir:		'Através desse bloco, a saída M1 (M2) pode ser definida como para frente (para trás) para, por exemplo, um motor, de modo a alterar a direção de rotação, mantendo o valor.',
		setOutputVal:		'Com esse bloco, a saída M1 (M2) pode ser definida com um valor fixo ou um valor variável que resulta, por exemplo, de um valor lido (veja o bloco "Valor de leitura da saída...") e/ou da combinação com blocos dos tópicos "Controle", "Operadores" e "Eventos".',
		
		reset:				'Esse bloco reinicia o ROBO LT. Todas as saídas são definidas como 0.',
	},
	
	it: {
		about:				'Info su',
		aboutText:			'<b>FTScratch</b> consente, nei PC o notebook con sistema operativo . Microsoft Windows, di usare il \
							{LNK_ROBOLT} \
							di Fischertechnik insieme al linguaggio di programmazione \
							{LNK_SCRATCH}\
							facile da apprendere. In tal modo si possono creare immediatamente piccole applicazioni per il comando dei motori e delle lampade tramite pulsanti e barriere fotoelettriche. Le numerose possibilità offerte dal linguaggio di programmazione Scratch consentono anche di creare programmi di gran lunga più complessi.\
							<br/><br/>\
							Nuove espansioni di Scratch, come FTScratch, utilizzano a tale scopo la versione per sviluppatori\
							{LNK_SCRATCHX}.',
		
		howto:				'Guida rapida',
		howtoText:			'1) Collegare ROBO LT al PC<br/>\
							2) <a href="{LNK_DRV}">Scaricare</a> e installare il driver<br/>\
							3) <a href="{LNK_BIN}">Scaricare</a> e avviare FTScratch. (<small>richiede .NET Framework 4, di regola presente nei PC Windows</small>)<br/>\
							4) <a href="{LNK_RUN}">Avviare</a> ScratchX con l\'espansione (<small>Firefox o Chrome</small>)<br/>\
							5) Fatto!',
		
		blockDesc:			'Descrizione dei blocchi',
		blockDescText:		'',
		
		onButton:			'Questo evento scatta non appena si preme o si rilascia un pulsante sull\'ingresso I1 (I2, I3).',
		onLightBarrier:		'Questo evento scatta non appena si apre o si chiude la barriera fotoelettrica, cioè viene interrotto o non più interrotto il raggio luminoso tra una fonte di luce e un fotodiodo all\'ingresso I3 (I1, I2). Come fonte di luce si può usare per es. una lampadina a incandescenza in M1 (M2).',
		
		getButton:			'Questo blocco verifica se è premuto un pulsante all\'ingresso I1 (I2, I3). Questo blocco si può combinare con blocchi delle rubriche "Comando" e "Operatori".',
		getLightBarrier:	'Questo blocco verifica se una barriera fotoelettrica all\'ingresso I3 (I1, I2) è chiusa. Questo blocco si può combinare con blocchi delle rubriche "Comando" e "Operatori".',
		getOutput:			'Con questo blocco può interrogare il valore attuale dell\'uscita M1 (M2) utilizzandolo per calcoli o condizioni in combinazione con i blocchi delle rubriche "Comando", "Operatori" ed "Eventi". Il valore controllato è compreso tra -8 (motore indietro) e +8 (motore avanti).',
		
		setLampVal:			'Con questo blocco si può impostare l\'uscita M1 (M2), ad es. per una lampada, su un valore compreso nell\'intervallo 0...8.',
		setMotorValDir:		'Con questo blocco si può impostare l’uscita M1 (M2), ad es. per un motore su avanti (indietro), con un valore compreso nell\'intervallo 0...8.',
		setMotorDir:		'Con questo blocco si può impostare su avanti (indietro) l’uscita M1 (M2), ad es. in un motore per cambiare il senso di marcia in caso di valore costante.',
		setOutputVal:		'Con questo blocco si può impostare l’uscita M1 (M2) su un valore fisso o variabile risultante ad es. da un valore rilevato (vedi blocco "Leggi valore uscita ...") e/o in combinazione con blocchi delle rubriche "Comando", "Operatori" ed "Eventi".',
		
		reset:				'Questo blocco resetta il ROBO LT. Tutti i parametri vengono impostati a 0.',
	},
	
}