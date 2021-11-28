var config = {
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
			scene: {
				preload: preload,
				create: create,
				update: update
			}
		};
		
		//Variables del juego
		var fondo;
		var IreneMerkel;
		var CesarAugusto;
		var platformaIZQ;
		var platformaDER;
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
		
		//Necesario para iniciar un juego
		var game = new Phaser.Game(config); 
		
		//Función que precarga los assets
		function preload ()
		{
			this.load.image('escenario', 'assets/sky.png');
			this.load.image('suelo', 'assets/platform.png');
			this.load.spritesheet('jugador1', 'assets/IreneMerkel.png',
								{ frameWidth: 32, frameHeight: 48 });
			this.load.spritesheet('jugador2', 'assets/CesarAugusto.png',
								{ frameWidth: 32, frameHeight: 48 });
			this.load.image('balon', 'assets/wizball.png');
			this.load.image('redV', 'assets/red.png');
			this.load.image('objInvisible', 'assets/objInvisible.png');
		}
		
		//Función que se encarga de crear las cosas
		function create ()
		{
			//////////////////////////CREACIÓN DEL FONDO///////////////////////
			fondo = this.add.image(400, 300, 'escenario');
			fondo.setScale(3.5);
			
			
			//////////////////////////CREACIÓN DE LAS PLATAFORMAS///////////////////////
			platformaIZQ = this.physics.add.staticGroup();
			platformaDER = this.physics.add.staticGroup();
			redes = this.physics.add.staticGroup();
			objInvisible = this.physics.add.staticGroup();
			
			platformaIZQ.create(98, 700, 'suelo').setScale(3).refreshBody();
			platformaDER.create(1302, 700, 'suelo').setScale(3).refreshBody();
			redes.create(700,1000, 'redV').setScale(1).refreshBody();
			objInvisible.create(0,250, 'objInvisible').setScale(8).refreshBody();
			
			
			//////////////////////////CREACIÓN DEL PERSONAJE 1///////////////////////
			IreneMerkel = this.physics.add.sprite(100, 450, 'jugador1');
			IreneMerkel.setScale(2.5)
			IreneMerkel.setCollideWorldBounds(true);

			this.anims.create({
				key: 'left1',
				frames: this.anims.generateFrameNumbers('jugador1', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn1',
				frames: [ { key: 'jugador1', frame: 4 } ],
				frameRate: 20
			});

			this.anims.create({
				key: 'right1',
				frames: this.anims.generateFrameNumbers('jugador1', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
			
			
			//////////////////////////CREACIÓN DEL PERSONAJE 2///////////////////////
			CesarAugusto = this.physics.add.sprite(1300, 450, 'jugador2');
			CesarAugusto.setScale(2.5)
			CesarAugusto.setCollideWorldBounds(true);

			this.anims.create({
				key: 'left2',
				frames: this.anims.generateFrameNumbers('jugador2', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});

			this.anims.create({
				key: 'turn2',
				frames: [ { key: 'jugador2', frame: 4 } ],
				frameRate: 20
			});

			this.anims.create({
				key: 'right2',
				frames: this.anims.generateFrameNumbers('jugador2', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
			
			
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
			timedEvent = this.time.delayedCall(100000, onEvent, [], this);
			//100000 - 1min 40 seg
		
			//////////////////////////DETECCIÓN DE COLISIONES///////////////////////
			this.physics.add.overlap(IreneMerkel, objInvisible, nopoderSaltar, null, this);
			this.physics.add.collider(IreneMerkel, platformaIZQ, poderSaltar, null, this);
			this.physics.add.collider(IreneMerkel, platformaIZQ);
			this.physics.add.collider(IreneMerkel, platformaDER);
			this.physics.add.collider(IreneMerkel, pelota);
			this.physics.add.collider(IreneMerkel, redes);
			this.physics.add.overlap(CesarAugusto, objInvisible, nopoderSaltar, null, this);
			this.physics.add.collider(CesarAugusto, platformaIZQ, poderSaltar, null, this);
			this.physics.add.collider(CesarAugusto, platformaIZQ);
			this.physics.add.collider(CesarAugusto, platformaDER);
			this.physics.add.collider(CesarAugusto, pelota);
			this.physics.add.collider(CesarAugusto, redes);
			this.physics.add.collider(pelota, platformaIZQ);
			this.physics.add.collider(pelota, platformaDER);
			this.physics.add.collider(pelota, redes);
			this.physics.add.collider(IreneMerkel, pelota, player1HitBall, null, this);
			this.physics.add.collider(CesarAugusto, pelota, player2HitBall, null, this);
			this.physics.add.overlap(pelota, platformaIZQ, ballScore, null, this);
			this.physics.add.overlap(pelota, platformaDER, ballScore2, null, this);
		}
		
		
		function update ()
		{	
			//Tiempo de juego
			textoTiempo.setText('Tiempo para finalizar: ' + timedEvent.getProgress().toString().substr(0, 5));
			
			//Control del jugador 1
			this.input.keyboard.on("keydown_A", () => {
                IreneMerkel.setVelocityX(-300);

                IreneMerkel.anims.play('left1', true);
            });
            this.input.keyboard.on("keydown_D", () => {
                IreneMerkel.setVelocityX(300);

                IreneMerkel.anims.play('right1', true);
            });
            this.input.keyboard.on("keyup_A", () => {
                IreneMerkel.setVelocityX(0);

                IreneMerkel.anims.play('turn1');
            });
            this.input.keyboard.on("keyup_D", () => {
                IreneMerkel.setVelocityX(0);

                IreneMerkel.anims.play('turn1');
            });
			
			this.input.keyboard.on("keyup_W", () => {
				if(puedeSaltar === true){
					IreneMerkel.setVelocityY(-430);
				}
			});
			
			this.input.keyboard.on("keydown_S", () => {
               //Accion de la habiliad especial al pulsar S
			   CesarAugusto.setVelocity(150, -800)
            });
			
			
			//Control del jugador 2
			this.input.keyboard.on("keydown_J", () => {
                CesarAugusto.setVelocityX(-300);

                CesarAugusto.anims.play('left2', true);
            });
            this.input.keyboard.on("keydown_L", () => {
                CesarAugusto.setVelocityX(300);

                CesarAugusto.anims.play('right2', true);
            });
            this.input.keyboard.on("keyup_J", () => {
                CesarAugusto.setVelocityX(0);

                CesarAugusto.anims.play('turn2');
            });
            this.input.keyboard.on("keyup_L", () => {
                CesarAugusto.setVelocityX(0);

                CesarAugusto.anims.play('turn2');
            });
			this.input.keyboard.on("keyup_I", () => {
				if(puedeSaltar === true){
					CesarAugusto.setVelocityY(-430);
				}
			});
			this.input.keyboard.on("keydown_K", () => {
               //Accion de la habiliad especial al pulsar K
            });
		}
		
		
		function player1HitBall (IreneMerkel, pelota)
		{
			pelota.setVelocity(150, -800);
		}
		
		function player2HitBall (CesarAugusto, pelota)
		{
			pelota.setVelocity(150, -800);
		}
		
		
		//Colision bola y plataformas izquierda
		function ballScore (pelota, platformaIZQ)
		{
			marcadorJ2 += 1;
			textoMarcadorJ2.setText('Puntuación: ' + marcadorJ2);
			
			pelota.setPosition(700,50);
			pelota.setVelocity(-350, -100);
			
		}
		
		//Colision bola y plataformas derecha
		function ballScore2 (pelota, platformaDER)
		{
			marcadorJ1 += 1;
			textoMarcadorJ1.setText('Puntuación: ' + marcadorJ1);
			
			pelota.setPosition(700,50);
			pelota.setVelocity(350, -100);
			
		}
		
		function nopoderSaltar (IreneMerkel, objInvisible) 
		{
			puedeSaltar = false;
			console.log("Hola bb");
		}
		
		function poderSaltar () 
		{
			puedeSaltar = true;
			console.log("Hola gg");
		}
		
		function onEvent ()
		{
			if(marcadorJ1 > marcadorJ2)
			{
			victoriaJ1 = this.add.text(200, 216, 'HA GANADO EL JUGADOR 1', { fontSize: '75px', fill: '#000' });
			}else if(marcadorJ1 < marcadorJ2)
			{
			victoriaJ2 = this.add.text(200, 216, 'HA GANADO EL JUGADOR 2', { fontSize: '75px', fill: '#000' });
			}else{
			empate = this.add.text(540, 216, 'EMPATE', { fontSize: '100px', fill: '#000' });
			}
			pelota.disableBody(true,true);
		}
		