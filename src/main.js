//Variables que se usan en el juego
var fondo;
var IreneMerkel;
var CesarAugusto;
var plataformaIZQ;
var plataformaDER;
var objInvisible;
var marcadorJ1 = 0;
var textoMarcadorJ2;
var marcadorJ2 = 0;
var textoMarcadorJ1;
var redes;
var pelota;
var textoTiempo;
var tiempoDeJuego;
var puedeSaltar = true;
var timedEvent;
var player1;
var player2;

//Variables selección de personajes
var jugador1;
var jugador2;
var SelP1;
var SelP2;
var SelP3;
var SelP4;
var SelP5;
var SelP6;
var SelP7;
var SelP8;


function onEvent() {
	if (marcadorJ1 > marcadorJ2) {
		victoriaJ1 = this.add.text(200, 216, 'HA GANADO EL JUGADOR 1', { fontSize: '75px', fill: '#000' });
		textoTiempo.setText('Tiempo para finalizar: 0');
	} else if (marcadorJ1 < marcadorJ2) {
		victoriaJ2 = this.add.text(200, 216, 'HA GANADO EL JUGADOR 2', { fontSize: '75px', fill: '#000' });
		textoTiempo.setText('Tiempo para finalizar: 0');
	} else {
		empate = this.add.text(540, 216, 'EMPATE', { fontSize: '100px', fill: '#000' });
		textoTiempo.setText('Tiempo para finalizar: 0');
	}
	pelota.disableBody(true, true);
}

function nopoderSaltar() {
	puedeSaltar = false;
}

function poderSaltar() {
	puedeSaltar = true;
}

function contactoJ1(player1, pelota) {
	player1.body.immovable = true;
}

function contactoJ2(player2, pelota) {
	player2.body.immovable = true;
}
function player1HitBall(player1, pelota) {
	pelota.setVelocity(250, -700);
}

function player2HitBall(player2, pelota) {
	pelota.setVelocity(-250, -700);
}


//Colision bola y plataformas izquierda
function ballScore(pelota, plataformaIZQ) {
	marcadorJ2 += 1;
	textoMarcadorJ2.setText('Puntuación: ' + marcadorJ2);

	pelota.setPosition(700, 50);
	pelota.setVelocity(-350, -100);

}

//Colision bola y plataformas derecha
function ballScore2(pelota, plataformaDER) {
	marcadorJ1 += 1;
	textoMarcadorJ1.setText('Puntuación: ' + marcadorJ1);

	pelota.setPosition(700, 50);
	pelota.setVelocity(350, -100);

}
/////////////////////////////////ESCENA DE PRECARGA/////////////////////////
class PreCarga extends Phaser.Scene {
	constructor() {
		super({ key: 'PreCarga' });
	}

	preload() {
		this.load.image('escenario', 'assets/sky.png');
	}

	create() {
		this.add.image(400, 300, 'escenario').setScale(3.5);
		this.add.text(300, 400, 'Click to Start', { fontSize: '32px', fill: '#000' });
		this.input.once('pointerdown', () => {
			this.scene.start('SeleccionJ1');
		});

	}
}

/////////////////////////////////ESCENA DE SELECCIÓN JUGADOR 1/////////////////////////
class SeleccionJ1 extends Phaser.Scene {
	constructor() {
		super({ key: 'SeleccionJ1' });
	}

	preload() {
		this.load.image('escenario', 'assets/sky.png');
		this.load.image('personaje1', 'assets/Personaje1.png');
		this.load.image('personaje2', 'assets/Personaje2.png');
		this.load.image('personaje3', 'assets/Personaje3.png');
		this.load.image('personaje4', 'assets/Personaje4.png');
		this.load.image('personaje5', 'assets/Personaje5.png');
		this.load.image('personaje6', 'assets/Personaje6.png');
		this.load.image('personaje7', 'assets/Personaje7.png');
		this.load.image('personaje8', 'assets/Personaje8.png');
	}

	create() {
		this.add.image(400, 300, 'escenario').setScale(3.5);
		this.add.text(300, 100, 'Jugador 1 seleccione personaje', { fontSize: '32px', fill: '#000' });
		SelP1 = this.add.sprite(200, 300, 'personaje1').setInteractive();
		SelP1.setScale(0.3);
		SelP2 = this.add.sprite(450, 300, 'personaje2').setInteractive();
		SelP2.setScale(0.3);
		SelP3 = this.add.sprite(700, 300, 'personaje3').setInteractive();
		SelP3.setScale(0.3);
		SelP4 = this.add.sprite(950, 300, 'personaje4').setInteractive();
		SelP4.setScale(0.3);
		SelP5 = this.add.sprite(200, 600, 'personaje5').setInteractive();
		SelP5.setScale(0.3);
		SelP6 = this.add.sprite(450, 600, 'personaje6').setInteractive();
		SelP6.setScale(0.7);
		SelP7 = this.add.sprite(700, 600, 'personaje7').setInteractive();
		SelP7.setScale(0.3);
		SelP8 = this.add.sprite(950, 600, 'personaje8').setInteractive();
		SelP8.setScale(0.3);

		this.input.on('gameobjectover', function (pointer, gameObject) {

			gameObject.setTint(0x00ff00);

		});

		this.input.on('gameobjectout', function (pointer, gameObject) {

			if (gameObject.input.isDown) {
				gameObject.setTint(0xff0000);
			}
			else {
				gameObject.clearTint();
			}
		});

		SelP1.on('pointerdown', function (pointer) {
			jugador1 = 'IreneMerkel';
		});

		SelP2.on('pointerdown', function (pointer) {
			jugador1 = 'CesarAugusto';
		});

		SelP3.on('pointerdown', function (pointer) {
			jugador1 = 'EmanuelDurao';
		});

		SelP4.on('pointerdown', function (pointer) {
			jugador1 = 'DmitriEfremov';
		});

		SelP5.on('pointerdown', function (pointer) {
			jugador1 = 'PhilippeDepoortere';
		});

		SelP6.on('pointerdown', function (pointer) {
			jugador1 = 'JeanneLouiseCalment';
		});

		SelP7.on('pointerdown', function (pointer) {
			jugador1 = 'FranciscoFernandez';
		});

		SelP8.on('pointerdown', function (pointer) {
			jugador1 = 'JasperKluivert';
		});

		this.input.once('pointerdown', () => {
			this.scene.start('SeleccionJ2');
		});
	}
}

/////////////////////////////////ESCENA DE SELECCIÓN JUGADOR 2/////////////////////////
class SeleccionJ2 extends Phaser.Scene {
	constructor() {
		super({ key: 'SeleccionJ2' });
	}

	preload() {
		this.load.image('escenario', 'assets/sky.png');
		this.load.image('personaje1', 'assets/Personaje1.png');
		this.load.image('personaje2', 'assets/Personaje2.png');
		this.load.image('personaje3', 'assets/Personaje3.png');
		this.load.image('personaje4', 'assets/Personaje4.png');
		this.load.image('personaje5', 'assets/Personaje5.png');
		this.load.image('personaje6', 'assets/Personaje6.png');
		this.load.image('personaje7', 'assets/Personaje7.png');
		this.load.image('personaje8', 'assets/Personaje8.png');
	}

	create() {
		this.add.image(400, 300, 'escenario').setScale(3.5);
		this.add.text(300, 100, 'Jugador 2 seleccione personaje', { fontSize: '32px', fill: '#000' });

		if (jugador1 === 'IreneMerkel') { //P1
			SelP2 = this.add.sprite(450, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP3 = this.add.sprite(700, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP4 = this.add.sprite(950, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP5 = this.add.sprite(200, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP6 = this.add.sprite(450, 600, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP7 = this.add.sprite(700, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
			SelP8 = this.add.sprite(950, 600, 'personaje8').setInteractive();
			SelP8.setScale(0.3);
		}
		else if (jugador1 === 'CesarAugusto') { //P2
			SelP1 = this.add.sprite(200, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(450, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP4 = this.add.sprite(950, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP5 = this.add.sprite(200, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP6 = this.add.sprite(450, 600, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP7 = this.add.sprite(700, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
			SelP8 = this.add.sprite(950, 600, 'personaje8').setInteractive();
			SelP8.setScale(0.3);
		}
		else if (jugador1 === 'EmanuelDurao') { //P3
			SelP1 = this.add.sprite(200, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(450, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP4 = this.add.sprite(950, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP5 = this.add.sprite(200, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP6 = this.add.sprite(450, 600, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP7 = this.add.sprite(700, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
			SelP8 = this.add.sprite(950, 600, 'personaje8').setInteractive();
			SelP8.setScale(0.3);
		}
		else if (jugador1 === 'DmitriEfremov') { //P4
			SelP1 = this.add.sprite(200, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(450, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP3 = this.add.sprite(700, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP5 = this.add.sprite(200, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP6 = this.add.sprite(450, 600, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP7 = this.add.sprite(700, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
			SelP8 = this.add.sprite(950, 600, 'personaje8').setInteractive();
			SelP8.setScale(0.3);
		}
		else if (jugador1 === 'PhilippeDepoortere') { //P5
			SelP1 = this.add.sprite(200, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(450, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP3 = this.add.sprite(700, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP4 = this.add.sprite(950, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP6 = this.add.sprite(450, 600, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP7 = this.add.sprite(700, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
			SelP8 = this.add.sprite(950, 600, 'personaje8').setInteractive();
			SelP8.setScale(0.3);
		}
		else if (jugador1 === 'JeanneLouiseCalment') { //P6
			SelP1 = this.add.sprite(200, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(450, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP3 = this.add.sprite(700, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP4 = this.add.sprite(950, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP5 = this.add.sprite(200, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP7 = this.add.sprite(700, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
			SelP8 = this.add.sprite(950, 600, 'personaje8').setInteractive();
			SelP8.setScale(0.3);
		}
		else if (jugador1 === 'FranciscoFernandez') { //P7
			SelP1 = this.add.sprite(200, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(450, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP3 = this.add.sprite(700, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP4 = this.add.sprite(950, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP5 = this.add.sprite(200, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP6 = this.add.sprite(450, 600, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP8 = this.add.sprite(950, 600, 'personaje8').setInteractive();
			SelP8.setScale(0.3);
		}
		else { //P8
			SelP1 = this.add.sprite(200, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(450, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP3 = this.add.sprite(700, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP4 = this.add.sprite(950, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP5 = this.add.sprite(200, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP6 = this.add.sprite(450, 600, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP7 = this.add.sprite(700, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
		}

		this.input.on('gameobjectover', function (pointer, gameObject) {

			gameObject.setTint(0x00ff00);

		});

		this.input.on('gameobjectout', function (pointer, gameObject) {

			if (gameObject.input.isDown) {
				gameObject.setTint(0xff0000);
			}
			else {
				gameObject.clearTint();
			}
		});

		SelP1.on('pointerdown', function (pointer) {
			jugador2 = 'IreneMerkel';
		});

		SelP2.on('pointerdown', function (pointer) {
			jugador2 = ' CesarAugusto';
		});

		SelP3.on('pointerdown', function (pointer) {
			jugador2 = 'EmanuelDurao';
		});

		SelP4.on('pointerdown', function (pointer) {
			jugador2 = 'DmitriEfremov';
		});

		SelP5.on('pointerdown', function (pointer) {
			jugador2 = 'PhilippeDepoortere';
		});

		SelP6.on('pointerdown', function (pointer) {
			jugador2 = 'JeanneLouiseCalment';
		});

		SelP7.on('pointerdown', function (pointer) {
			jugador2 = 'FranciscoFernandez';
		});

		SelP8.on('pointerdown', function (pointer) {
			jugador2 = 'JasperKluivert';
		});

		this.input.once('pointerdown', () => {
			this.scene.start('EscenaPreJuego');
		});
	}
}


/////////////////////////////////ESCENA DE JUEGO/////////////////////////
class EscenaPreJuego extends Phaser.Scene {
	constructor() {
		super({ key: 'EscenaPreJuego' });

	}

	preload() {
		this.load.image('escenario', 'assets/sky.png');
	}
	create() {
		this.add.image(400, 300, 'escenario').setScale(3.5);
		this.add.text(300, 400, 'El jugador 1 ha seleccionado: ' + jugador1, { fontSize: '32px', fill: '#000' });
		this.add.text(300, 600, 'El jugador 2 ha seleccionado: ' + jugador2, { fontSize: '32px', fill: '#000' });
		this.add.text(300, 200, 'Pulsar para jugar', { fontSize: '32px', fill: '#000' });

		this.input.once('pointerdown', () => {
			this.scene.start('EscenaJuego');
		});
	}

}

/////////////////////////////////ESCENA DE PREJUEGO/////////////////////////
class EscenaJuego extends Phaser.Scene {
	constructor() {
		super({ key: 'EscenaJuego' });

	}

	preload() {
		this.load.image('escenario', 'assets/sky.png');
		this.load.image('suelo', 'assets/platform.png');
		this.load.spritesheet('spriteP1', 'assets/IreneMerkel.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP2', 'assets/CesarAugusto.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP3', 'assets/EmanuelDurao.png',
			{ frameWidth: 32, frameHeight: 48 });
		//Sprites por crear
		this.load.spritesheet('spriteP4', 'assets/CesarAugusto.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP5', 'assets/CesarAugusto.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP6', 'assets/CesarAugusto.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP7', 'assets/CesarAugusto.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP8', 'assets/CesarAugusto.png',
			{ frameWidth: 32, frameHeight: 48 });
		//Sprites por crear

		this.load.image('balon', 'assets/wizball.png');
		this.load.image('redV', 'assets/red.png');
		this.load.image('objInvisible', 'assets/objInvisible.png');
	}

	create() {
		//////////////////////////CREACIÓN DEL FONDO///////////////////////
		this.add.image(400, 300, 'escenario').setScale(3.5);


		//////////////////////////CREACIÓN DE LAS PLATAFORMAS///////////////////////
		plataformaIZQ = this.physics.add.staticGroup();
		plataformaDER = this.physics.add.staticGroup();
		redes = this.physics.add.staticGroup();
		objInvisible = this.physics.add.staticGroup();

		plataformaIZQ.create(98, 790, 'suelo').setScale(3).refreshBody();
		plataformaDER.create(1302, 790, 'suelo').setScale(3).refreshBody();
		redes.create(700, 1000, 'redV').setScale(1).refreshBody();
		objInvisible.create(0, 250, 'objInvisible').setScale(8).refreshBody();


		//////////////////////////CREACIÓN DEL PERSONAJE 1///////////////////////
		if (jugador1 === 'IreneMerkel') {
			player1 = this.physics.add.sprite(100, 450, 'spriteP1');
			player1.setScale(3);
			player1.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left1',
				frames: this.anims.generateFrameNumbers('spriteP1', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn1',
				frames: [{ key: 'spriteP1', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right1',
				frames: this.anims.generateFrameNumbers('spriteP1', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else if (jugador1 === 'CesarAugusto') {
			player1 = this.physics.add.sprite(100, 450, 'spriteP2');
			player1.setScale(3)
			player1.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left1',
				frames: this.anims.generateFrameNumbers('spriteP2', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn1',
				frames: [{ key: 'spriteP2', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right1',
				frames: this.anims.generateFrameNumbers('spriteP2', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else if (jugador1 === 'EmanuelDurao') {
			player1 = this.physics.add.sprite(100, 450, 'spriteP3');
			player1.setScale(3)
			player1.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left1',
				frames: this.anims.generateFrameNumbers('spriteP3', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn1',
				frames: [{ key: 'spriteP3', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right1',
				frames: this.anims.generateFrameNumbers('spriteP3', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else if (jugador1 === 'DmitriEfremov') {
			player1 = this.physics.add.sprite(100, 450, 'spriteP4');
			player1.setScale(3)
			player1.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left1',
				frames: this.anims.generateFrameNumbers('spriteP4', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn1',
				frames: [{ key: 'spriteP4', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right1',
				frames: this.anims.generateFrameNumbers('spriteP4', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else if (jugador1 === 'PhilippeDepoortere') {
			player1 = this.physics.add.sprite(100, 450, 'spriteP5');
			player1.setScale(3)
			player1.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left1',
				frames: this.anims.generateFrameNumbers('spriteP5', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn1',
				frames: [{ key: 'spriteP5', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right1',
				frames: this.anims.generateFrameNumbers('spriteP5', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else if (jugador1 === 'JeanneLouiseCalment') {
			player1 = this.physics.add.sprite(100, 450, 'spriteP6');
			player1.setScale(3)
			player1.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left1',
				frames: this.anims.generateFrameNumbers('spriteP6', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn1',
				frames: [{ key: 'spriteP6', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right1',
				frames: this.anims.generateFrameNumbers('spriteP6', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else if (jugador1 === 'FranciscoFernandez') {
			player1 = this.physics.add.sprite(100, 450, 'spriteP7');
			player1.setScale(3)
			player1.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left1',
				frames: this.anims.generateFrameNumbers('spriteP7', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn1',
				frames: [{ key: 'spriteP7', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right1',
				frames: this.anims.generateFrameNumbers('spriteP7', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else {
			player1 = this.physics.add.sprite(100, 450, 'spriteP8');
			player1.setScale(3)
			player1.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left1',
				frames: this.anims.generateFrameNumbers('spriteP8', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn1',
				frames: [{ key: 'spriteP8', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right1',
				frames: this.anims.generateFrameNumbers('spriteP8', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}


		//////////////////////////CREACIÓN DEL PERSONAJE 2///////////////////////
		if (jugador2 === 'IreneMerkel') {
			player2 = this.physics.add.sprite(1300, 450, 'spriteP1');
			player2.setScale(3);
			player2.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left2',
				frames: this.anims.generateFrameNumbers('spriteP1', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn2',
				frames: [{ key: 'spriteP1', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right2',
				frames: this.anims.generateFrameNumbers('spriteP1', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else if (jugador2 === 'CesarAugusto') {
			console.log('a');
			player2 = this.physics.add.sprite(1300, 450, 'spriteP2');
			player2.setScale(3)
			player2.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left2',
				frames: this.anims.generateFrameNumbers('spriteP2', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn2',
				frames: [{ key: 'spriteP2', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right2',
				frames: this.anims.generateFrameNumbers('spriteP2', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else if (jugador2 === 'EmanuelDurao') {
			player2 = this.physics.add.sprite(1300, 450, 'spriteP3');
			player2.setScale(3)
			player2.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left2',
				frames: this.anims.generateFrameNumbers('spriteP3', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn2',
				frames: [{ key: 'spriteP3', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right2',
				frames: this.anims.generateFrameNumbers('spriteP3', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else if (jugador2 === 'DmitriEfremov') {
			player2 = this.physics.add.sprite(1300, 450, 'spriteP4');
			player2.setScale(3)
			player2.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left2',
				frames: this.anims.generateFrameNumbers('spriteP4', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn2',
				frames: [{ key: 'spriteP4', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right2',
				frames: this.anims.generateFrameNumbers('spriteP4', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else if (jugador2 === 'PhilippeDepoortere') {
			player2 = this.physics.add.sprite(1300, 450, 'spriteP5');
			player2.setScale(3)
			player2.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left2',
				frames: this.anims.generateFrameNumbers('spriteP5', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn2',
				frames: [{ key: 'spriteP5', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right2',
				frames: this.anims.generateFrameNumbers('spriteP5', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else if (jugador2 === 'JeanneLouiseCalment') {
			player2 = this.physics.add.sprite(1300, 450, 'spriteP6');
			player2.setScale(3)
			player2.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left2',
				frames: this.anims.generateFrameNumbers('spriteP6', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn2',
				frames: [{ key: 'spriteP6', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right2',
				frames: this.anims.generateFrameNumbers('spriteP6', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else if (jugador2 === 'FranciscoFernandez') {
			player2 = this.physics.add.sprite(1300, 450, 'spriteP7');
			player2.setScale(3)
			player2.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left2',
				frames: this.anims.generateFrameNumbers('spriteP7', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn2',
				frames: [{ key: 'spriteP7', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right2',
				frames: this.anims.generateFrameNumbers('spriteP7', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}
		else {
			player2 = this.physics.add.sprite(1300, 450, 'spriteP8');
			player2.setScale(3)
			player2.setCollideWorldBounds(true);
			this.anims.create({
				key: 'left2',
				frames: this.anims.generateFrameNumbers('spriteP8', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn2',
				frames: [{ key: 'spriteP8', frame: 4 }],
				frameRate: 20
			});

			this.anims.create({
				key: 'right2',
				frames: this.anims.generateFrameNumbers('spriteP8', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
		}


		//////////////////////////CREACIÓN DE LA BOLA///////////////////////
		pelota = this.physics.add.image(700, 50, 'balon');
		pelota.setCircle(46);
		pelota.setCollideWorldBounds(true);
		pelota.setBounce(1);
		pelota.setVelocity(-350, 0);


		//////////////////////////CREACIÓN DEL MARCADOR///////////////////////
		textoMarcadorJ1 = this.add.text(16, 16, 'Puntuación: 0', { fontSize: '32px', fill: '#000' });
		textoMarcadorJ2 = this.add.text(1110, 16, 'Puntuación: 0', { fontSize: '32px', fill: '#000' });


		//////////////////////////TIEMPO DE JUEGO///////////////////////
		textoTiempo = this.add.text(450, 16, 'Tiempo para finalizar', { fontSize: '32px', fill: '#000' });
		timedEvent = this.time.delayedCall(300000, onEvent, [], this);
		//300000 - 5 min


		//////////////////////////DETECCIÓN DE COLISIONES///////////////////////
		this.physics.add.overlap(player1, objInvisible, nopoderSaltar, null, this);
		this.physics.add.collider(player1, plataformaIZQ, poderSaltar, null, this);
		this.physics.add.collider(player1, plataformaIZQ);
		this.physics.add.collider(player1, plataformaDER);
		this.physics.add.collider(player1, pelota, contactoJ1, null, this);
		this.physics.add.collider(player1, redes);
		this.physics.add.collider(player1, pelota, player1HitBall, null, this);

		this.physics.add.overlap(player2, objInvisible, nopoderSaltar, null, this);
		this.physics.add.collider(player2, plataformaIZQ, poderSaltar, null, this);
		this.physics.add.collider(player2, plataformaIZQ);
		this.physics.add.collider(player2, plataformaDER);
		this.physics.add.collider(player2, pelota, contactoJ2, null, this);
		this.physics.add.collider(player2, redes);
		this.physics.add.collider(player2, pelota, player2HitBall, null, this);

		this.physics.add.collider(pelota, plataformaIZQ);
		this.physics.add.collider(pelota, plataformaDER);
		this.physics.add.collider(pelota, redes);
		this.physics.add.overlap(pelota, plataformaIZQ, ballScore, null, this);
		this.physics.add.overlap(pelota, plataformaDER, ballScore2, null, this);

	}

	update() {
		//Tiempo de juego
		textoTiempo.setText('Tiempo para finalizar: ' + (3 - timedEvent.getProgress().toString().substr(1, 3)));

		//Control del jugador 1
		this.input.keyboard.on("keydown_A", () => {
			player1.setVelocityX(-400);

			player1.anims.play('left1', true);
		});
		this.input.keyboard.on("keydown_D", () => {
			player1.setVelocityX(400);

			player1.anims.play('right1', true);
		});
		this.input.keyboard.on("keyup_A", () => {
			player1.setVelocityX(0);

			player1.anims.play('turn1');
		});
		this.input.keyboard.on("keyup_D", () => {
			player1.setVelocityX(0);

			player1.anims.play('turn1');
		});

		this.input.keyboard.on("keyup_W", () => {
			if (puedeSaltar === true) {
				player1.setVelocityY(-430);
			}
		});

		this.input.keyboard.on("keydown_S", () => {
			//Accion de la habiliad especial al pulsar S
		});


		//Control del jugador 2
		this.input.keyboard.on("keydown_J", () => {
			player2.setVelocityX(-400);

			player2.anims.play('left2', true);
		});
		this.input.keyboard.on("keydown_L", () => {
			player2.setVelocityX(400);

			player2.anims.play('right2', true);
		});
		this.input.keyboard.on("keyup_J", () => {
			player2.setVelocityX(0);

			player2.anims.play('turn2');
		});
		this.input.keyboard.on("keyup_L", () => {
			player2.setVelocityX(0);

			player2.anims.play('turn2');
		});
		this.input.keyboard.on("keyup_I", () => {
			if (puedeSaltar === true) {
				player2.setVelocityY(-430);
			}
		});
		this.input.keyboard.on("keydown_K", () => {
			//Accion de la habiliad especial al pulsar K
		});
	}
}

/////////////////////////////////CONFIGURACION Y CARGA DE LAS ESCENAS/////////////////////////
const config = {
	type: Phaser.AUTO,
	width: 1400,
	height: 750,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 500 },
			debug: false
		}
	},
	parent: 'phaser-example',
	scene: [PreCarga, SeleccionJ1, SeleccionJ2, EscenaPreJuego, EscenaJuego],
};

let game = new Phaser.Game(config);
