/////////////////////////////////VARIABLES DEL JUEGO/////////////////////////
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
var victoriaJ2;
var victoriaJ1;

var musicaFondo;
var musicaJuego;
var rebote;
var audioJasper;
var audioJeanne;
var audioEmanuel; 
var audioCesar;
var audioFrancisco; 
var audioPhilippe;
var audioIrene; 
var audioDmitri; 
var punto;
/////////////////////////////////VARIABLES SELECCIÓN DE PERSONAJES/////////////////////////
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


/////////////////////////////////VARIABLES HABILIDADES ESPECIALES/////////////////////////
efectoHabilidadIreneMerkel1 = false;
efectoHabilidadIreneMerkel2 = false;
poderActivarHabilidad1 = true;
poderActivarHabilidad2 = true;
var habilidad1;
var habilidad2;
var torrePisa;
var efectoHabilidadDmitriEfremov1 = false;
var efectoHabilidadDmitriEfremov2 = false;
var efectoHabilidadFranciscoFernandez1 = false;
var efectoHabilidadFranciscoFernandez2 = false;
var torreEiffel;
var CTE1;
var CTE2;
var CTE3;


/////////////////////////////////FUNCIONES PARA LAS HABILIDADES/////////////////////////
//Activar la habilidad del player1
function activacionHabilidades1() {
	poderActivarHabilidad1 = true;
	habilidad1 = this.physics.add.image(100, 600, 'habilidadP1').setScale(0.1);
	habilidad1.setCollideWorldBounds(true);
}

//Activar la habilidad del player2
function activacionHabilidades2() {
	poderActivarHabilidad2 = true;
	habilidad2 = this.physics.add.image(1300, 600, 'habilidadP2').setScale(0.1);
	habilidad2.setCollideWorldBounds(true);
}

//Gestionar la habilidad de Irene Merkel
function habilidadIreneMerkel() {
	efectoHabilidadIreneMerkel1 = false;
	efectoHabilidadIreneMerkel2 = false;
}

//Gestionar la habilidad de Cesar Augusto
function habilidadCesarAugusto() {
	torrePisa.disableBody(true, true);
}

//Gestionar la habilidad de Emanuel Durao
function habilidadEmanuelDurao() {
	pelota.setCircle(46);
	pelota.setScale(1);
}

//Gestionar la habilidad de Dmitri Efremov
function habilidadDmitriEfremov() {
	efectoHabilidadDmitriEfremov1 = false;
	efectoHabilidadDmitriEfremov2 = false;
}

//Gestionar la habilidad de Philippe Depoortere
function habilidadPhilippeDepoortere() {
	player1.setScale(3);
	player2.setScale(3);
}

//Gestionar la habilidad de Francisco Fernandez
function habilidadFranciscoFernandez() {
	efectoHabilidadFranciscoFernandez1 = false;
	efectoHabilidadFranciscoFernandez2 = false;
}

//Gestionar la habilidad de Jasper Kluivert
function habilidadJasperKluivert() {
	player1.setScale(3);
	player2.setScale(3);
}

//Gestionar la habilidad de Jeanne Louise Calment
function habilidadJeanneLouiseCalment() {
	torreEiffel.disableBody(true, true);
	CTE1.disableBody(true, true);
	CTE2.disableBody(true, true);
	CTE3.disableBody(true, true);
}

//Pantalla de creditos
function pantallaCreditos(){
	this.scene.start('Creditos')
}

/////////////////////////////////FUNCION PARA TERMINAR EL JUEGO POR TIEMPO/////////////////////////
function finDeJuego() {
	if (marcadorJ1 > marcadorJ2) {
		victoriaJ1 = this.add.text(200, 216, 'HA GANADO EL JUGADOR 1', { fontSize: '75px', fill: '#000' });
		player2.setTint(0xff0000);
		player1.setTint(0x00ff00);
		timedEvent.paused = true;
		pelota.disableBody(true, true);
		this.physics.pause();
		player1.anims.play('turn1');
		player2.anims.play('turn2');
	} else if (marcadorJ1 < marcadorJ2) {
		victoriaJ2 = this.add.text(200, 216, 'HA GANADO EL JUGADOR 2', { fontSize: '75px', fill: '#000' });
		player1.setTint(0xff0000);
		player2.setTint(0x00ff00);
		timedEvent.paused = true;
		pelota.disableBody(true, true);
		this.physics.pause();
		player1.anims.play('turn1');
		player2.anims.play('turn2');
	} else {
		empate = this.add.text(540, 216, 'EMPATE', { fontSize: '100px', fill: '#000' });
		timedEvent.paused = true;
		pelota.disableBody(true, true);
		this.physics.pause();
		player1.anims.play('turn1');
		player2.anims.play('turn2');
	}
	this.time.delayedCall(5000, pantallaCreditos, [], this);
}


/////////////////////////////////FUNCIONES PARA UN FUNCIONAMIENTO CORRECTO/////////////////////////
//Deshabilitar el salto de los personajes
function nopoderSaltar() {
	puedeSaltar = false;
}

//Habilitar el salto de los personajes
function poderSaltar() {
	puedeSaltar = true;
}

//Dar velocidad a la pelota al ser golpeada por el player1
function player1HitBall(player1, pelota) {
	pelota.setVelocity(250, -700);
	rebote.play();
}

//Dar velocidad a la pelota al ser golpeada por el player2
function player2HitBall(player2, pelota) {
	pelota.setVelocity(-250, -700);
	rebote.play();
}

function colisonRed(red, pelota){
	rebote.play();
}

function colisionObjeto(red, pelota){
	rebote.play();
}
//Mover al player1 si pasa la red
function teletransporteJ1(player1, plataformaDER) {
	player1.setPosition(100, 550);
}

//Mover al player2 si pasa la red
function teletransporteJ2(player2, plataformaIZQ) {
	player2.setPosition(1300, 550);
}

//Colision bola y plataformas izquierda
function ballScore(pelota, plataformaIZQ) {
	punto.play();
	marcadorJ2 += 1;
	textoMarcadorJ2.setText('Puntuación: ' + marcadorJ2);

	pelota.setPosition(700, 50);
	pelota.setCircle(46);
	pelota.setScale(1);
	pelota.setVelocity(-350, -100);
}

//Colision bola y plataformas derecha
function ballScore2(pelota, plataformaDER) {
	punto.play();
	marcadorJ1 += 1;
	textoMarcadorJ1.setText('Puntuación: ' + marcadorJ1);

	pelota.setPosition(700, 50);
	pelota.setCircle(46);
	pelota.setScale(1);
	pelota.setVelocity(350, -100);
}


/////////////////////////////////ESCENA DE PRECARGA/////////////////////////
class PreCarga extends Phaser.Scene {
	constructor() {
		super({ key: 'PreCarga' });
	}

	preload() {
		this.load.image('menuPrincipal', 'assets/menu principal.png');
		this.load.image('boton', 'assets/JUGAR boton.png');
		this.load.image('botonTuto', 'assets/BotonTutorial.png');
	}

	create() {
		this.add.image(700, 375, 'menuPrincipal').setScale(1);
		this.add.sprite(400, 570, 'boton').setScale(0.8);
		this.add.sprite(950, 620, 'botonTuto').setScale(1.2);

		var jugar = this.add.zone(210, 510, 400, 110);
        jugar.setOrigin(0);
        jugar.setInteractive();
        jugar.once('pointerdown', () => {
            this.scene.start('SeleccionJ1')
        });
        
        var tutorial = this.add.zone(775, 570, 330, 90);
        tutorial.setOrigin(0);
        tutorial.setInteractive();
        tutorial.once('pointerdown', () => {
            this.scene.start('Tutorial')
        });
	}
}

/////////////////////////////////ESCENA DE TUTORIAL/////////////////////////
class Tutorial extends Phaser.Scene {
	constructor() {
		super({ key: 'Tutorial' });
	}

	preload() {
		this.load.image('tuto', 'assets/tutorial.png');
		this.load.image('botonVolver', 'assets/BotonVolver.png');
		this.load.audio('musicaFondo', 'sounds/menus.mp3');
	}

	create() {
		this.add.image(700, 375, 'tuto').setScale(1);
		this.add.sprite(1000, 615, 'botonVolver').setScale(1).setInteractive();
		
		musicaFondo = this.sound.add('musicaFondo', { loop: false });
        musicaFondo.play();
		
		var volver = this.add.zone(870, 570, 250, 80);
        volver.setOrigin(0);
        volver.setInteractive();
        volver.once('pointerdown', () => {
			musicaFondo.stop();
            this.scene.start('PreCarga')
        });
	}
}

/////////////////////////////////ESCENA DE SELECCIÓN JUGADOR 1/////////////////////////
class SeleccionJ1 extends Phaser.Scene {
	constructor() {
		super({ key: 'SeleccionJ1' });
	}

	preload() {
		this.load.image('EscJ1', 'assets/JUGADOR 1.png');
		this.load.image('personaje1', 'assets/Personaje1.png');
		this.load.image('personaje2', 'assets/Personaje2.png');
		this.load.image('personaje3', 'assets/Personaje3.png');
		this.load.image('personaje4', 'assets/Personaje4.png');
		this.load.image('personaje5', 'assets/Personaje5.png');
		this.load.image('personaje6', 'assets/Personaje6.png');
		this.load.image('personaje7', 'assets/Personaje7.png');
		this.load.image('personaje8', 'assets/Personaje8.png');
		this.load.audio('musicaFondo', 'sounds/menus.mp3');
	}

	create() {
		this.add.image(700, 375, 'EscJ1').setScale(1);
		SelP1 = this.add.sprite(300, 300, 'personaje1').setInteractive();
		SelP1.setScale(0.3);
		SelP2 = this.add.sprite(550, 300, 'personaje2').setInteractive();
		SelP2.setScale(0.3);
		SelP3 = this.add.sprite(800, 300, 'personaje3').setInteractive();
		SelP3.setScale(0.3);
		SelP4 = this.add.sprite(1050, 300, 'personaje4').setInteractive();
		SelP4.setScale(0.3);
		SelP5 = this.add.sprite(300, 600, 'personaje5').setInteractive();
		SelP5.setScale(0.3);
		SelP6 = this.add.sprite(550, 610, 'personaje6').setInteractive();
		SelP6.setScale(0.7);
		SelP7 = this.add.sprite(800, 600, 'personaje7').setInteractive();
		SelP7.setScale(0.3);
		SelP8 = this.add.sprite(1050, 590, 'personaje8').setInteractive();
		SelP8.setScale(0.32);
		
		musicaFondo = this.sound.add('musicaFondo', { loop: false });
        musicaFondo.play();
		
		//Cambiar el color al personaje que tiene el cursor encima
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

		//Selección del personaje del player1
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
		this.load.image('EscJ2', 'assets/JUGADOR 2.png');
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
		this.add.image(700, 375, 'EscJ2').setScale(1);

		//Bucles para asegurar que no se escogen los mismos personajes
		if (jugador1 === 'IreneMerkel') { //P1
			SelP2 = this.add.sprite(550, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP3 = this.add.sprite(800, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP4 = this.add.sprite(1050, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP5 = this.add.sprite(300, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP6 = this.add.sprite(550, 610, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP7 = this.add.sprite(800, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
			SelP8 = this.add.sprite(1050, 590, 'personaje8').setInteractive();
			SelP8.setScale(0.32);
		}
		else if (jugador1 === 'CesarAugusto') { //P2
			SelP1 = this.add.sprite(300, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP3 = this.add.sprite(800, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP4 = this.add.sprite(1050, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP5 = this.add.sprite(300, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP6 = this.add.sprite(550, 610, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP7 = this.add.sprite(800, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
			SelP8 = this.add.sprite(1050, 590, 'personaje8').setInteractive();
			SelP8.setScale(0.32);
		}
		else if (jugador1 === 'EmanuelDurao') { //P3
			SelP1 = this.add.sprite(300, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(550, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP4 = this.add.sprite(1050, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP5 = this.add.sprite(300, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP6 = this.add.sprite(550, 610, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP7 = this.add.sprite(800, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
			SelP8 = this.add.sprite(1050, 590, 'personaje8').setInteractive();
			SelP8.setScale(0.32);
		}
		else if (jugador1 === 'DmitriEfremov') { //P4
			SelP1 = this.add.sprite(300, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(550, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP3 = this.add.sprite(800, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP5 = this.add.sprite(300, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP6 = this.add.sprite(550, 610, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP7 = this.add.sprite(800, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
			SelP8 = this.add.sprite(1050, 590, 'personaje8').setInteractive();
			SelP8.setScale(0.32);
		}
		else if (jugador1 === 'PhilippeDepoortere') { //P5
			SelP1 = this.add.sprite(300, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(550, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP3 = this.add.sprite(800, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP4 = this.add.sprite(1050, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP6 = this.add.sprite(550, 610, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP7 = this.add.sprite(800, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
			SelP8 = this.add.sprite(1050, 590, 'personaje8').setInteractive();
			SelP8.setScale(0.32);
		}
		else if (jugador1 === 'JeanneLouiseCalment') { //P6
			SelP1 = this.add.sprite(300, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(550, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP3 = this.add.sprite(800, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP4 = this.add.sprite(1050, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP5 = this.add.sprite(300, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP7 = this.add.sprite(800, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
			SelP8 = this.add.sprite(1050, 590, 'personaje8').setInteractive();
			SelP8.setScale(0.32);
		}
		else if (jugador1 === 'FranciscoFernandez') { //P7
			SelP1 = this.add.sprite(300, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(550, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP3 = this.add.sprite(800, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP4 = this.add.sprite(1050, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP5 = this.add.sprite(300, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP6 = this.add.sprite(550, 610, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP8 = this.add.sprite(1050, 590, 'personaje8').setInteractive();
			SelP8.setScale(0.32);
		}
		else { //P8
			SelP1 = this.add.sprite(300, 300, 'personaje1').setInteractive();
			SelP1.setScale(0.3);
			SelP2 = this.add.sprite(550, 300, 'personaje2').setInteractive();
			SelP2.setScale(0.3);
			SelP3 = this.add.sprite(800, 300, 'personaje3').setInteractive();
			SelP3.setScale(0.3);
			SelP4 = this.add.sprite(1050, 300, 'personaje4').setInteractive();
			SelP4.setScale(0.3);
			SelP5 = this.add.sprite(300, 600, 'personaje5').setInteractive();
			SelP5.setScale(0.3);
			SelP6 = this.add.sprite(550, 610, 'personaje6').setInteractive();
			SelP6.setScale(0.7);
			SelP7 = this.add.sprite(800, 600, 'personaje7').setInteractive();
			SelP7.setScale(0.3);
		}

		//Cambiar el color al personaje que tiene el cursor encima
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

		//Selección del personaje del player1
		SelP1.on('pointerdown', function (pointer) {
			jugador2 = 'IreneMerkel';
		});

		SelP2.on('pointerdown', function (pointer) {
			jugador2 = 'CesarAugusto';
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

/////////////////////////////////ESCENA DE PREJUEGO/////////////////////////
class EscenaPreJuego extends Phaser.Scene {
	constructor() {
		super({ key: 'EscenaPreJuego' });
	}

	preload() {
		this.load.image('EscPre', 'assets/fondo.png');
		this.load.image('boton', 'assets/JUGAR boton.png');
	}
	create() {
		this.add.image(700, 375, 'EscPre').setScale(1);
		this.add.text(280, 400, 'El jugador 1 ha seleccionado: ' + jugador1, { fontSize: '50px', fill: '#000', fontFamily: 'fuente' });
		this.add.text(280, 600, 'El jugador 2 ha seleccionado: ' + jugador2, { fontSize: '50px', fill: '#000', fontFamily: 'fuente' });
		this.add.sprite(490, 200, 'boton').setScale(0.8);

		var juego = this.add.zone(290, 140, 400, 110);
        juego.setOrigin(0);
        juego.setInteractive();
        juego.once('pointerdown', () => {
			musicaFondo.stop();
            this.scene.start('EscenaJuego')
        });
	}
}


/////////////////////////////////ESCENA DE JUEGO/////////////////////////
class EscenaJuego extends Phaser.Scene {
	constructor() {
		super({ key: 'EscenaJuego' });

	}

	preload() {
		this.load.image('FirstBackground', 'assets/FirstBackground.png');
		this.load.image('suelo', 'assets/platform.png');
		this.load.spritesheet('spriteP1', 'assets/IreneMerkel.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP2', 'assets/CesarAugusto.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP3', 'assets/EmanuelDurao.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP4', 'assets/DmitriEfremov.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP5', 'assets/PhilippeDepoortere.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP6', 'assets/JeanneLouiseCalment.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP7', 'assets/FranciscoFernandez.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('spriteP8', 'assets/JasperKluivert.png',
			{ frameWidth: 32, frameHeight: 48 });
		this.load.image('balon', 'assets/wizball.png');
		this.load.image('redV', 'assets/red.png');
		this.load.image('objInvisible', 'assets/objInvisible.png');
		this.load.image('habilidadP1', 'assets/habilidad.png');
		this.load.image('habilidadP2', 'assets/habilidad.png');
		this.load.image('torrePisa', 'assets/torrePisa.png');
		this.load.image('torreEiffel', 'assets/torreEiffel.png');
		this.load.image('CTE1', 'assets/CTE1.png');
		this.load.image('CTE2', 'assets/CTE2.png');
		this.load.image('CTE3', 'assets/CTE3.png');
		this.load.audio('musicaJuego', '/sounds/juego.mp3');
		this.load.audio('musicaRebote', '/sounds/rebote.mp3');
		this.load.audio('audioJasper', '/sounds/audioJasper.mp3');
		this.load.audio('audioJeanne', '/sounds/audioJeanne.mp3');
		this.load.audio('audioEmanuel', '/sounds/audioEmanuel.mp3');
		this.load.audio('audioCesar', '/sounds/audioCesar.mp3');
		this.load.audio('audioFrancisco', '/sounds/audioFrancisco.mp3');
		this.load.audio('audioPhilippe ', '/sounds/audioPhilippe .mp3');
		this.load.audio('audioIrene', '/sounds/audioIrene.mp3');
		this.load.audio('audioDmitri', '/sounds/audioDmitri.mp3');
		this.load.audio('musicaPunto', '/sounds/punto.mp3');
	}

	create() {
		//////////////////////////CREACIÓN DE LA MÚSICA///////////////////////
		musicaJuego = this.sound.add('musicaJuego', { loop: false });
		rebote = this.sound.add('musicaRebote', { loop: false });
		punto = this.sound.add('musicaPunto', { loop: false });
		
		audioJasper = this.sound.add('audioJasper', { loop: false });
		audioJeanne = this.sound.add('audioJeanne', { loop: false });
		audioEmanuel = this.sound.add('audioEmanuel', { loop: false });
		audioCesar = this.sound.add('audioCesar', { loop: false });
		audioFrancisco = this.sound.add('audioFrancisco', { loop: false });
		audioPhilippe = this.sound.add('audioPhilippe', { loop: false });
		audioIrene = this.sound.add('audioIrene', { loop: false });
		audioDmitri = this.sound.add('audioDmitri', { loop: false });
       	musicaJuego.play();

		//////////////////////////CREACIÓN DEL FONDO///////////////////////
		this.add.image(700, 375, 'FirstBackground').setScale(1);
		habilidad1 = this.physics.add.image(100, 600, 'habilidadP1').setScale(0.1);
		habilidad2 = this.physics.add.image(1300, 600, 'habilidadP2').setScale(0.1);
		habilidad1.setCollideWorldBounds(true);
		habilidad2.setCollideWorldBounds(true);

		//////////////////////////CREACIÓN DEL ESCENARIO///////////////////////
		plataformaIZQ = this.physics.add.staticGroup();
		plataformaDER = this.physics.add.staticGroup();
		redes = this.physics.add.staticGroup();
		objInvisible = this.physics.add.staticGroup();

		plataformaIZQ.create(98, 790, 'suelo').setScale(3).refreshBody();
		plataformaDER.create(1302, 790, 'suelo').setScale(3).refreshBody();
		redes.create(700, 700, 'redV').setScale(1).refreshBody();
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

			this.anims.create({
				key: 'turnDef1',
				frames: [{ key: 'spriteP1', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef1',
				frames: [{ key: 'spriteP2', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef1',
				frames: [{ key: 'spriteP3', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef1',
				frames: [{ key: 'spriteP4', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef1',
				frames: [{ key: 'spriteP5', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef1',
				frames: [{ key: 'spriteP6', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef1',
				frames: [{ key: 'spriteP7', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef1',
				frames: [{ key: 'spriteP8', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef2',
				frames: [{ key: 'spriteP1', frame: 0 }],
				frameRate: 20
			});

		}
		else if (jugador2 === 'CesarAugusto') {
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

			this.anims.create({
				key: 'turnDef2',
				frames: [{ key: 'spriteP2', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef2',
				frames: [{ key: 'spriteP3', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef2',
				frames: [{ key: 'spriteP4', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef2',
				frames: [{ key: 'spriteP5', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef2',
				frames: [{ key: 'spriteP6', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef2',
				frames: [{ key: 'spriteP7', frame: 0 }],
				frameRate: 20
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

			this.anims.create({
				key: 'turnDef2',
				frames: [{ key: 'spriteP8', frame: 0 }],
				frameRate: 20
			});
		}

		player1.body.immovable = true;
		player2.body.immovable = true;


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
		timedEvent = this.time.delayedCall(200000, finDeJuego, [], this);//3'3 minutos de juego


		//////////////////////////DETECCIÓN DE COLISIONES///////////////////////
		this.physics.add.overlap(player1, objInvisible, nopoderSaltar, null, this);
		this.physics.add.collider(player1, plataformaIZQ, poderSaltar, null, this);
		this.physics.add.collider(player1, plataformaIZQ);
		this.physics.add.overlap(player1, redes, teletransporteJ1, null, this);
		this.physics.add.collider(player1, redes);
		this.physics.add.collider(player1, pelota, player1HitBall, null, this);

		this.physics.add.overlap(player2, objInvisible, nopoderSaltar, null, this);
		this.physics.add.collider(player2, plataformaIZQ, poderSaltar, null, this);
		this.physics.add.collider(player2, plataformaIZQ);
		this.physics.add.collider(player2, plataformaDER);
		this.physics.add.overlap(player2, redes, teletransporteJ2, null, this);
		this.physics.add.collider(player2, redes);
		this.physics.add.collider(player2, pelota, player2HitBall, null, this);

		this.physics.add.collider(pelota, plataformaIZQ);
		this.physics.add.collider(pelota, plataformaDER);
		this.physics.add.collider(pelota, redes, colisonRed, null, this);
		this.physics.add.overlap(pelota, plataformaIZQ, ballScore, null, this);
		this.physics.add.overlap(pelota, plataformaDER, ballScore2, null, this);
		
	}

	update() {
		//Tiempo de juego
		textoTiempo.setText('Tiempo para finalizar: ' + (200 - ((timedEvent.getProgress() * 200).toString().substr(0, 3))));

		//Terminar el juego al llegar a 20 puntos
		if (marcadorJ2 == 20 || marcadorJ1 == 20) {
			if (marcadorJ1 > marcadorJ2) {
				victoriaJ1 = this.add.text(200, 216, 'HA GANADO EL JUGADOR 1', { fontSize: '75px', fill: '#000' });
				player2.setTint(0xff0000);
				player1.setTint(0x00ff00);
			} else if (marcadorJ1 < marcadorJ2) {
				victoriaJ2 = this.add.text(200, 216, 'HA GANADO EL JUGADOR 2', { fontSize: '75px', fill: '#000' });
				player1.setTint(0xff0000);
				player2.setTint(0x00ff00);
			} else {
				empate = this.add.text(540, 216, 'EMPATE', { fontSize: '100px', fill: '#000' });
			}
			timedEvent.paused = true;
			pelota.disableBody(true, true);
			this.physics.pause();
			player1.anims.play('turn1');
			player2.anims.play('turnDef2');
			this.time.delayedCall(5000, pantallaCreditos, [], this);
		}

		//////////////////////////CONTROL DEL PLAYER1///////////////////////
		this.input.keyboard.on("keydown_A", () => {
			if (efectoHabilidadIreneMerkel2 === false) {
				player1.setVelocityX(-400);
				player1.anims.play('left1', true);
			}
			if (efectoHabilidadDmitriEfremov1 === true) {
				player1.setVelocityX(-600);
				player1.anims.play('left1', true);
			}
			if (efectoHabilidadFranciscoFernandez2 === true) {
				player1.setVelocityX(-250);
				player1.anims.play('left1', true);
			}
		});
		this.input.keyboard.on("keydown_D", () => {
			if (efectoHabilidadIreneMerkel2 === false) {
				player1.setVelocityX(400);
				player1.anims.play('right1', true);
			}
			if (efectoHabilidadDmitriEfremov1 === true) {
				player1.setVelocityX(600);
				player1.anims.play('right1', true);
			}
			if (efectoHabilidadFranciscoFernandez2 === true) {
				player1.setVelocityX(250);
				player1.anims.play('right1', true);
			}
		});
		this.input.keyboard.on("keyup_A", () => {
			player1.setVelocityX(0);

			player1.anims.play('turnDef1');
		});
		this.input.keyboard.on("keyup_D", () => {
			player1.setVelocityX(0);

			player1.anims.play('turn1');
		});

		this.input.keyboard.on("keyup_W", () => {
			if (puedeSaltar === true && efectoHabilidadIreneMerkel2 === false) {
				player1.setVelocityY(-430);
			}
		});

		this.input.keyboard.on("keydown_S", () => {
			if (poderActivarHabilidad1 === true) {
				if (jugador1 === 'IreneMerkel') {
					efectoHabilidadIreneMerkel1 = true;
					this.time.delayedCall(3000, habilidadIreneMerkel, [], this);

					poderActivarHabilidad1 = false;
					habilidad1.disableBody(true, true);
					audioIrene.play();
					this.time.delayedCall(60000, activacionHabilidades1, [], this);
				}
				else if (jugador1 === 'CesarAugusto') {
					torrePisa = this.physics.add.image(540, 700, 'torrePisa').setScale(0.3);
					torrePisa.setCollideWorldBounds(true);
					torrePisa.body.immovable = true;
					this.physics.add.collider(torrePisa, pelota, colisionObjeto, null, this);
					this.physics.add.overlap(player1, torrePisa, teletransporteJ1, null, this);
					this.time.delayedCall(6000, habilidadCesarAugusto, [], this);

					poderActivarHabilidad1 = false;
					habilidad1.disableBody(true, true);
					audioCesar.play();
					this.time.delayedCall(60000, activacionHabilidades1, [], this);
				}
				else if (jugador1 === 'EmanuelDurao') {
					pelota.setCircle(23);
					pelota.setScale(0.5);
					this.time.delayedCall(6000, habilidadEmanuelDurao, [], this);

					poderActivarHabilidad1 = false;
					habilidad1.disableBody(true, true);
					audioEmanuel.play();
					this.time.delayedCall(60000, activacionHabilidades1, [], this);
				}
				else if (jugador1 === 'DmitriEfremov') {
					efectoHabilidadDmitriEfremov1 = true;
					this.time.delayedCall(5000, habilidadDmitriEfremov, [], this);

					poderActivarHabilidad1 = false;
					habilidad1.disableBody(true, true);
					audioDmitri.play();
					this.time.delayedCall(60000, activacionHabilidades1, [], this);
				}
				else if (jugador1 === 'PhilippeDepoortere') {
					player1.setScale(6);
					this.time.delayedCall(7000, habilidadPhilippeDepoortere, [], this);

					poderActivarHabilidad1 = false;
					habilidad1.disableBody(true, true);
					audioPhilippe.play();
					this.time.delayedCall(60000, activacionHabilidades1, [], this);
				}
				else if (jugador1 === 'JeanneLouiseCalment') {
					torreEiffel = this.physics.add.image(600, 500, 'torreEiffel').setScale(0.25);
					torreEiffel.setCollideWorldBounds(true);
					CTE1 = this.physics.add.image(600, 670, 'CTE1').setScale(0.25);
					CTE1.setCollideWorldBounds(true);
					CTE1.body.immovable = true;
					CTE2 = this.physics.add.image(600, 440, 'CTE2').setScale(0.25);
					CTE2.setCollideWorldBounds(true);
					CTE2.body.immovable = true;
					CTE3 = this.physics.add.image(600, 440, 'CTE3').setScale(0.25);
					CTE3.setCollideWorldBounds(true);
					CTE3.body.immovable = true;

					this.physics.add.collider(CTE1, pelota, colisionObjeto, null, this);
					this.physics.add.collider(CTE2, pelota, colisionObjeto, null, this);
					this.physics.add.collider(CTE3, pelota, colisionObjeto, null, this);
					this.physics.add.overlap(player1, CTE1, teletransporteJ1, null, this);
					this.physics.add.overlap(player1, CTE2, teletransporteJ1, null, this);
					this.physics.add.overlap(player1, CTE3, teletransporteJ1, null, this);

					this.time.delayedCall(6000, habilidadJeanneLouiseCalment, [], this);

					poderActivarHabilidad1 = false;
					habilidad1.disableBody(true, true);
					audioJeanne.play();
					this.time.delayedCall(60000, activacionHabilidades1, [], this);
				}
				else if (jugador1 === 'FranciscoFernandez') {
					efectoHabilidadFranciscoFernandez1 = true;
					this.time.delayedCall(10000, habilidadFranciscoFernandez, [], this);

					poderActivarHabilidad1 = false;
					habilidad1.disableBody(true, true);
					audioFrancisco.play();
					this.time.delayedCall(60000, activacionHabilidades1, [], this);
				}
				else {
					player2.setScale(1.5);
					this.time.delayedCall(7000, habilidadJasperKluivert, [], this);

					poderActivarHabilidad1 = false;
					habilidad1.disableBody(true, true);
					audioPhilippe.play();
					this.time.delayedCall(60000, activacionHabilidades1, [], this);
				}
			}
		});


		//////////////////////////CONTROL DEL PLAYER2///////////////////////
		this.input.keyboard.on("keydown_J", () => {
			if (efectoHabilidadIreneMerkel1 === false) {
				player2.setVelocityX(-400);
				player2.anims.play('left2', true);
			}
			if (efectoHabilidadDmitriEfremov2 === true) {
				player2.setVelocityX(-600);
				player2.anims.play('left2', true);
			}
			if (efectoHabilidadFranciscoFernandez1 === true) {
				player2.setVelocityX(-250);
				player2.anims.play('left2', true);
			}

		});
		this.input.keyboard.on("keydown_L", () => {
			if (efectoHabilidadIreneMerkel1 === false) {
				player2.setVelocityX(400);
				player2.anims.play('right2', true);
			}
			if (efectoHabilidadDmitriEfremov2 === true) {
				player2.setVelocityX(600);
				player2.anims.play('right2', true);
			}
			if (efectoHabilidadFranciscoFernandez1 === true) {
				player2.setVelocityX(250);
				player2.anims.play('right2', true);
			}
		});
		this.input.keyboard.on("keyup_J", () => {
			player2.setVelocityX(0);

			player2.anims.play('turnDef2');
		});
		this.input.keyboard.on("keyup_L", () => {
			player2.setVelocityX(0);

			player2.anims.play('turn2');
		});
		this.input.keyboard.on("keyup_I", () => {
			if (puedeSaltar === true && efectoHabilidadIreneMerkel1 === false) {
				player2.setVelocityY(-430);
			}
		});
		this.input.keyboard.on("keydown_K", () => {
			if (poderActivarHabilidad2 === true) {
				if (jugador2 === 'IreneMerkel') {
					efectoHabilidadIreneMerkel2 = true;
					this.time.delayedCall(3000, habilidadIreneMerkel, [], this);

					poderActivarHabilidad2 = false;
					habilidad2.disableBody(true, true);
					audioIrene.play();
					this.time.delayedCall(60000, activacionHabilidades2, [], this);
				}
				else if (jugador2 === 'CesarAugusto') {
					torrePisa = this.physics.add.image(860, 700, 'torrePisa').setScale(0.3);
					torrePisa.setCollideWorldBounds(true);
					torrePisa.body.immovable = true;
					this.physics.add.collider(torrePisa, pelota, colisionObjeto, null, this);
					this.physics.add.overlap(player2, torrePisa, teletransporteJ2, null, this);
					this.time.delayedCall(6000, habilidadCesarAugusto, [], this);

					poderActivarHabilidad2 = false;
					habilidad2.disableBody(true, true);
					audioCesar.play();
					this.time.delayedCall(60000, activacionHabilidades2, [], this);
				}
				else if (jugador2 === 'EmanuelDurao') {
					pelota.setCircle(23);
					pelota.setScale(0.5);
					this.time.delayedCall(6000, habilidadEmanuelDurao, [], this);

					poderActivarHabilidad2 = false;
					habilidad2.disableBody(true, true);
					audioEmanuel.play();
					this.time.delayedCall(60000, activacionHabilidades2, [], this);
				}
				else if (jugador2 === 'DmitriEfremov') {
					efectoHabilidadDmitriEfremov2 = true;
					this.time.delayedCall(5000, habilidadDmitriEfremov, [], this);

					poderActivarHabilidad2 = false;
					habilidad2.disableBody(true, true);
					audioDmitri.play();
					this.time.delayedCall(60000, activacionHabilidades2, [], this);
				}
				else if (jugador2 === 'PhilippeDepoortere') {
					player2.setScale(6);
					this.time.delayedCall(7000, habilidadPhilippeDepoortere, [], this);

					poderActivarHabilidad2 = false;
					habilidad2.disableBody(true, true);
					audioPhilippe.play();
					this.time.delayedCall(60000, activacionHabilidades2, [], this);
				}
				else if (jugador2 === 'JeanneLouiseCalment') {
					torreEiffel = this.physics.add.image(900, 670, 'torreEiffel').setScale(0.25);
					torreEiffel.setCollideWorldBounds(true);

					CTE1 = this.physics.add.image(900, 670, 'CTE1').setScale(0.25);
					CTE1.setCollideWorldBounds(true);
					CTE1.body.immovable = true;
					CTE2 = this.physics.add.image(900, 440, 'CTE2').setScale(0.25);
					CTE2.setCollideWorldBounds(true);
					CTE2.body.immovable = true;
					CTE3 = this.physics.add.image(900, 440, 'CTE3').setScale(0.25);
					CTE3.setCollideWorldBounds(true);
					CTE3.body.immovable = true;

					this.physics.add.collider(CTE1, pelota, colisionObjeto, null, this);
					this.physics.add.collider(CTE2, pelota, colisionObjeto, null, this);
					this.physics.add.collider(CTE3, pelota, colisionObjeto, null, this);
					this.physics.add.overlap(player2, CTE1, teletransporteJ2, null, this);
					this.physics.add.overlap(player2, CTE2, teletransporteJ2, null, this);
					this.physics.add.overlap(player2, CTE3, teletransporteJ2, null, this);

					this.time.delayedCall(6000, habilidadJeanneLouiseCalment, [], this);

					poderActivarHabilidad2 = false;
					habilidad2.disableBody(true, true);
					audioJeanne.play();
					this.time.delayedCall(60000, activacionHabilidades2, [], this);
				}
				else if (jugador2 === 'FranciscoFernandez') {
					efectoHabilidadFranciscoFernandez2 = true;
					this.time.delayedCall(10000, habilidadFranciscoFernandez, [], this);

					poderActivarHabilidad2 = false;
					habilidad2.disableBody(true, true);
					audioFrancisco.play();
					this.time.delayedCall(60000, activacionHabilidades2, [], this);
				}
				else {
					player1.setScale(1.5);
					this.time.delayedCall(7000, habilidadJasperKluivert, [], this);

					poderActivarHabilidad2 = false;
					habilidad2.disableBody(true, true);
					audioPhilippe.play();
					this.time.delayedCall(60000, activacionHabilidades2, [], this);
				}

			}
		});
		
	}
}

/////////////////////////////////ESCENA DE CREDITOS/////////////////////////
class Creditos extends Phaser.Scene {
	constructor() {
		super({ key: 'Creditos' });
	}

	preload() {
		this.load.image('creditosFondo', 'assets/creditos.png');
		this.load.image('botonVolverInicio', 'assets/botonInicio.png');
	}

	create() {
		this.add.image(700, 375, 'creditosFondo').setScale(1);
		this.add.sprite(1010, 615, 'botonVolverInicio').setScale(1).setInteractive();
		
		var volver = this.add.zone(740, 570, 560, 80);
        volver.setOrigin(0);
        volver.setInteractive();
        volver.once('pointerdown', () => {
			musicaJuego.stop();
            this.scene.start('PreCarga')
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
	scene: [PreCarga, Tutorial, SeleccionJ1, SeleccionJ2, EscenaPreJuego, EscenaJuego, Creditos],
};

let game = new Phaser.Game(config);