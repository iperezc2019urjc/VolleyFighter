# DOCUMENTO DE DISEÑO DE JUEGO
![](https://github.com/iperezc2019urjc/VolleyFighter/blob/main/Imagenes%20GDD/Urjc-Etsii.PNG)


<img src="https://github.com/iperezc2019urjc/VolleyFighter/blob/main/Imagenes%20GDD/Logo.png" alt="JuveR" width="300px">

# Uly Top - VolleyFighter


**Descripción de la temática del juego**: Juego, en vista horizontal y 2D, multijugador de dos a cuatro personas que compiten entre sí en un partido de volleyball caracterizado por unos personajes con la cabeza muy grande.

&nbsp;

**Integrantes del equipo 7:**
- Pablo Burgaleta de la Peña, p.burgaleta.2019@alumnos.urjc.es PBurgaleta

- Iván Pérez Ciruelos, i.perezc.2019@alumnos.urjc.es, iperezc2019urjc

- Adrián Mira García, a.mira.2019@alumnos.urjc.es, AdrianMira

- Javier Duran Cerro, j.duran.2019@alumnos.urjc.es, JavierDuranCerro

&nbsp;

# Índice
* 1.**Introducción**
  *  1.1. Concepto del juego
  *  1.2. Historia del juego
  *  1.3. Género
  *  1.4. Público objetivo
  *  1.5. Estilo visual
  *  1.6. Música
* 2.**Mecánicas de juego**
  * 2.1. Jugabilidad 
  * 2.2. Flujo de juego
    * 2.2.1. Flujo de pantallas
  * 2.3. API REST
  * 2.4. WebSockets
  * 2.5. Personajes
    * 2.5.1. Jeanne Louise Calment
    * 2.5.2. Emanuel Durão
    * 2.5.3. César Augusto
    * 2.5.4. Irene Merkel
    * 2.5.5. Francisco Fernández
    * 2.5.6. Philippe Depoortere
    * 2.5.7. Dmitri Efremov
    * 2.5.8. Jasper Kluivert
* 3.**Arte** 
  * 3.1. Escenario 
  * 3.2. Personaje
  * 3.3. Diseño final del escenario 
  * 3.4. Diseño final de los personajes
    * 3.4.1. Jeanne Louise Calment
    * 3.4.2. Emanuel Durão
    * 3.4.3. César Augusto
    * 3.4.4. Irene Merkel
    * 3.4.5. Francisco Fernández
    * 3.4.6. Philippe Depoortere
    * 3.4.7. Dmitri Efremov
    * 3.4.8. Jasper Kluivert
  * 3.5. Música y efectos de sonido
* 4.**Instrucciones ejecución del juego** 
* 5.**Referencias**

&nbsp;

# 1. Introducción
Este es el documento de diseño de Volley Fighters. El videojuego se desarrolla para PC usando Java con SpringBoot para el lado del servidor y JavaScript con el framework Phaser 3. Con este documento se queda plasmado todos los elementos que ha de incluir el videojuego Volley Fighters, así como una explicación del mismo para entender su desarrollo.

&nbsp;

## 1.1. Concepto del juego
Volley Fighters es un videojuego en el que controlamos a un personaje que nosotros elijamos entre diferentes opciones, estos personajes son característicos por el tamaño desproporcionado de su cabeza y las habilidades especiales únicas de cada personaje. 

&nbsp;

## 1.2. Historia del juego
En un mundo devastado por las guerras, el mundo se ha dividido en pequeñas regiones para intentar garantizar su supervivencia tras la firma de la paz.
Para conmemorar la paz en este mundo, cada año se realiza un evento en el que cada región ha de enviar a un representante sabiendo que si pierde morirá, pero si gana su región será honrada por las demás, pudiendo tener así más poder.
Este evento característico se trata de un partido de voleibol realizado en el un coliseo construido para el momento.

&nbsp;

## 1.3. Género
Volley Fighter es en su base un juego arcade (mecánica simple y repetitiva) con una temática deportiva (voleibol).

<img src="https://github.com/iperezc2019urjc/VolleyFighter/blob/main/Imagenes%20GDD/ImagenEjemploGenero.jpg" alt="JuveR" width="700px">

_Figura 1. Ejemplo de género de juego (Wind Jammers)_

&nbsp;

## 1.4. Público objetivo
El público objetivo de Volley Fighters es jugadores dentro de un rango amplio de edades, tanto adultos como niños debido a su simpleza tanto en las mecánicas como en el estilo gráfico (2D con personajes chibis).

&nbsp;

## 1.5. Estilo visual
Volley Fighters cuenta con un estilo visual sencillo sin mucho detalle. Los personajes tienen una forma chibi (cuerpo pequeño y gran cabeza). El escenario está caracterizado por una red que divide en dos la pantalla ya que está inspirado en el voleibol. La red tiene una altura que mide el doble el doble que la estatura del personaje. El balón tiene un tamaño grande (más grande que el personaje).

<img src="https://github.com/iperezc2019urjc/VolleyFighter/blob/main/Imagenes%20GDD/ImagenEjemploEstiloVisual.jpg" alt="JuveR" width="700px">

_Figura 2. Imagen ejemplo estilo visual del juego (Streets of Rage 4)_

&nbsp;

## 1.6. Música
La música empleada en el videojuego Volley Fighters consistirá en una música electrónica dentro de la escena de juego, en cambio, en el menú de inicio se podrá encontrar una banda sonora compuesta por cánticos deportivos.

<img src="https://github.com/iperezc2019urjc/VolleyFighter/blob/main/Imagenes%20GDD/ImagenEjemploMusica.jpg" alt="JuveR" width="700px">

_Figura 3. Ejemplo de música de juego (Pokémon Escudo y Pokémon Espada)_

&nbsp;

# 2. Mecánicas de juego
En este apartado se explica con más detalle las mecánicas y escenarios de Volley Fighters.

Se procede a detallar las acciones principales del jugador y todas las mecánicas que este puede realizar. Además, se ofrece una lista con todos los personajes disponibles dentro del videojuego con una explicación de su procedencia y su habilidad especial que le identifica.

&nbsp;

## 2.1. Jugabilidad
**Modo de juego**:
- El **modo de juego 1** por tiempo consistirá en una partida con un tiempo límite en la que cada jugador tendrá que intentar hacer el máximo puntos posibles para ganar el juego. 
- El **modo de juego 2** por puntos consistirá en una partida que para ganar, el jugador tendrá que conseguir 25 puntos.

**Habilidades**: Según el tipo de personaje que elijas tendrás una habilidad especial detallada en el apartado de personajes.

**Movimiento:** El personaje podrá moverse de izquierda a derecha y saltar.

&nbsp;

## 2.2. Flujo de juego
En esta sección se va a detallar el transcurso de una partida. Se explicarán los pasos que debe seguir el jugador desde que empieza el juego hasta completar una partida. 

El jugador inicia Volley Fighter y lo primero que verá será el menú principal donde tendrá que seleccionar si quiere jugar o ir a la pantalla de tutorial o créditos.

En la siguiente pantalla el jugador tendrá la opción de seleccionar el modo de juego que desee. Hay dos modos de juego, el modo de juego por tiempo y el modo de juego por puntos. Por último, antes de entrar en partida, el jugador podrá elegir el escenario y el personaje con el que quiere jugar su partida. 

El personaje comienza la partida en un campo de volley y en el escenario seleccionado y se le avisará con una cuenta atrás de 3 segundos de que el partido va a comenzar. Según el modo de juego, tendrá un objetivo u otro. El jugador será derrotado en ambos casos si tiene menos puntos que su rival. El jugador podrá seleccionar la habilidad especial de su personaje siempre y cuando esté cargada. La habilidad se recarga por tiempo.

&nbsp;

### 2.2.1. Flujo de pantallas
![image](https://user-images.githubusercontent.com/79656478/172044806-e426ee0b-7c32-4583-a616-41f9f051f194.png)

_Figura 5. Pantalla de inicio de Juego_

&nbsp;

![image](https://user-images.githubusercontent.com/79656478/172045071-cd88d4b1-42ff-49f5-b093-52eb38046999.png)

_Figura 6. Pantalla de tutorial_

&nbsp;

![image](https://user-images.githubusercontent.com/79656478/172045091-366603c1-ae28-4f23-ae74-848175faa203.png)

_Figura 7. Pantalla de selección de nombre del jugador 1_

&nbsp;

![image](https://user-images.githubusercontent.com/79656478/172045111-3f654942-2fc3-4b87-ac04-13e8d1de44a8.png)

_Figura 8. Pantalla de selección de nombre del jugador 2_

&nbsp;

![image](https://user-images.githubusercontent.com/79656478/172045140-e5733899-9ae2-4e08-8d24-a15838346c89.png)

_Figura 9. Pantalla de selección de personaje del jugador 1_

&nbsp;

![image](https://user-images.githubusercontent.com/79656478/172045180-49883bd7-8585-4590-a7f1-bf46fa6be9f7.png)

_Figura 10. Pantalla de selección de personaje del jugador 2_

&nbsp;

![image](https://user-images.githubusercontent.com/79656478/172045201-646393a0-b537-4f14-ac1c-f45afb39ec06.png)

_Figura 11. Pantalla previa a iniciar el juego_

&nbsp;

![image](https://user-images.githubusercontent.com/79656478/172045245-1334c072-406f-4a7e-9509-68e1a621d8f1.png)

_Figura 12. Pantalla de sala de chat_

&nbsp;

![image](https://user-images.githubusercontent.com/79656478/172045284-055bd111-ad13-4c4f-8072-70e7526973a7.png)

_Figura 13. Pantalla de juego_

&nbsp;

![image](https://user-images.githubusercontent.com/79656478/172045345-595d8e19-17a9-4363-8240-c34b69a967ad.png)

_Figura 14. Pantalla de créditos_

&nbsp;

![image](https://user-images.githubusercontent.com/79656478/172045839-1e1fa7af-c66f-4d12-9c59-ec83ef3f56a1.png)

_Figura 15. Flujo de pantallas_

&nbsp;

## 2.3. API REST
Para la creación de la API REST en el lenguaje de programación Java, se ha empleado el IDE Eclipse.
La API contiene:
- Una clase salaChat con su respectivo salaChatRestController, en las cuales se definen constructores, getters y setters, y los métodos GET, PUT, DELETE y POST respectivamente para el correcto funcionamiento de una sala de chat que permite la comunicación entre usuarios. 
- Una clase username con su respectivo usernameRestController, en las cuales se definen constructores, getters y setters, y los métodos GET, PUT, DELETE y POST respectivamente para permitir a cada usuario seleccionar un nombre que le identifique para jugar la partida. 

&nbsp;

![image](https://user-images.githubusercontent.com/79656478/172046614-e941d90b-841d-40a5-9acd-d9a8e5aa65e6.png)

_Figura 16. Clases de la API REST_

&nbsp;

## 2.4. WebSockets
La clase que maneja el WebSocket del videojuego es WebsockeVolleyFighterstHandler, esta clase esta formada por los siguientes métodos:
- afterConnectionEstablished(): asigna el valor 1 al primer usuario que se conecta al servidor y un 0 al segundo que se conecta. Además muestra por pantalla un aviso de que existe un nuevo jugador junto a su ID.
- afterConnectionClosed(): muestra por pantalla que un jugador ha salido del servidor junto a su ID.
- handleTextMessage(): recibe un mensaje JSON desde el códido de phaser con todos los cambios del juego que queremos actualizar y los prepara para ser leídos por el método enviarInfo().
- enviarInfo(): manda toda la información actualizada a diferentes jugadores conectados al servidor.

Los elementos que el cliente le comunica al servidor son:
- La posición de los jugadores.
- La orientación de los jugadores.
- El tiempo de juego.
- La posición de la pelota.
- Los puntos que lleva cada jugador.
- La información sobre la activación de las habilidades especiales de cada personaje.

&nbsp;

## 2.5. Personajes
En este apartado se procederá a la presentación de cada personaje, así como a la explicación de su habilidad, la cual está relacionada con su región de procedencia.

Como se ha mencionado anteriormente, los personajes dispondrán de un tamaño de cabeza desproporcionado respecto al cuerpo, tal y cómo se muestra en la imagen siguiente.

<img src="https://github.com/iperezc2019urjc/VolleyFighter/blob/main/Imagenes%20GDD/BocetoPersonaje2.png" alt="JuveR" width="350px">

_Figura 17. Imagen referencia del estilo de los personajes_

&nbsp;

### 2.5.1. Jeanne Louise Calment
Jeanne Louise Calment es un personaje procedente de la región francesa, su habilidad consiste en crear la Torre Eiffel durante 6 segundos.

&nbsp;

### 2.5.2. Emanuel Durão
Emanuel Durão es un personaje procedente de la región portuguesa, su habilidad consiste en hacer la pelota de juego más pequeña durante 6 segundos.

&nbsp;

### 2.5.3. César Augusto
César Augusto es un personaje procedente de la región italiana, su habilidad consiste en poder invocar la Torre de Pisa de forma defensiva para ayudarle a defender puntos durante 6 segundos.

&nbsp;

### 2.5.4. Irene Merkel
Irene Merkel es un personaje procedente de la región alemana, su habilidad consiste en quemar a su oponente, impidiendo que éste se mueva durante 3 segundos.

&nbsp;

### 2.5.5. Francisco Fernández
Francisco Fernández es un personaje procedente de la región española, su habilidad consiste en aumentar la potencia del juego, ocasionando que el rival retroceda y pierda velocidad durante 10 segundos.

&nbsp;

### 2.5.6. Philippe Depoortere
Philippe Depoortere es un personaje procedente de la región belga, su habilidad consiste en aumentar el tamaño del personaje durante 7 segundos.

&nbsp;

### 2.5.7. Dmitri Efremov
Dmitri Efremov es un personaje procedente de la región rusa, su habilidad consiste en poder consumir un elixir que aumenta su velocidad de movimiento en un 50% durante 5 segundos.

&nbsp;

### 2.5.8. Jasper Kluivert
Jasper Kluivert es un personaje procedente de la región holandesa, su habilidad consiste en reducir el tamaño de su oponente durante 7 segundos.

&nbsp;

# 3. Arte
En este apartado se muestran ejemplos de cómo va a ser el diseño de los personajes, además de mostrar cómo sería la implementación de las diferentes interfaces del juego.

&nbsp;

## 3.1. Escenario

Como se muestra en la imagen, el escenario estaría basado en un coliseo romano, contando con gradas llenas de espectadores y un campo donde se juega. El campo estaría dividido en 2 por una red de voleibol. 

<img src="https://github.com/iperezc2019urjc/VolleyFighter/blob/main/Imagenes%20GDD/BocetoColiseo.png" alt="JuveR" width="700px">

_Figura 18. Imagen referencia del escenario de juego_

&nbsp;

## 3.2. Personaje

<img src="https://github.com/iperezc2019urjc/VolleyFighter/blob/main/Imagenes%20GDD/BocetoPersonaje.png" alt="JuveR" width="700px">

_Figura 19. Imagen referencia del escenario de juego_

&nbsp;

## 3.3. Diseño final del escenario

<img src="Imagenes GDD/FirstBackground.png" alt="JuveR" width="700px">

_Figura 20. Imagen referencia del diseño final del escenario de juego_

&nbsp;

## 3.4. Diseño final de los personajes

### 3.4.1. Jeanne Louise Calment

<img src="Imagenes GDD/Personaje6.png" alt="JuveR" width="500px">

&nbsp;

### 3.4.2. Emanuel Durão

<img src="Imagenes GDD/Personaje3.png" alt="JuveR" width="500px">

&nbsp;

### 3.4.3. César Augusto

<img src="Imagenes GDD/Personaje2.png" alt="JuveR" width="500px">

&nbsp;

### 3.4.4. Irene Merkel

<img src="Imagenes GDD/Personaje1.png" alt="JuveR" width="500px">

&nbsp;

### 3.4.5. Francisco Fernández

<img src="Imagenes GDD/Personaje7.png" alt="JuveR" width="500px">

&nbsp;

### 3.4.6. Philippe Depoortere

<img src="Imagenes GDD/Personaje5.png" alt="JuveR" width="500px">

&nbsp;

### 3.4.7. Dmitri Efremov

<img src="Imagenes GDD/Personaje4.png" alt="JuveR" width="500px">

&nbsp;

### 3.4.8. Jasper Kluivert

<img src="Imagenes GDD/Personaje8.png" alt="JuveR" width="500px">

&nbsp;

## 3.5. Música y efectos de sonido

https://user-images.githubusercontent.com/79656478/146990039-bbf4ed30-6aba-4211-a973-e886da870dd5.mp4

https://user-images.githubusercontent.com/79656478/146990286-d01cb54e-5e99-491a-9dc3-2f69ec643282.mp4

https://user-images.githubusercontent.com/79656478/146990312-97937660-9cb6-450c-8fed-4b9d0e217d9d.mp4

https://user-images.githubusercontent.com/79656478/146990316-2d1d9827-6a32-4302-82e4-9232f41cf99d.mp4

https://user-images.githubusercontent.com/79656478/146990317-5b5649ce-a1bf-44d6-8aa2-09401fe6361e.mp4

https://user-images.githubusercontent.com/79656478/146990320-0b27594d-b792-4628-af82-9b12aa33a6d6.mp4

https://user-images.githubusercontent.com/79656478/146990322-4fe2820b-b734-41da-869e-42b9393e1a82.mp4

https://user-images.githubusercontent.com/79656478/146990323-f4a659b2-8a30-43aa-a680-76e5fd0f18ef.mp4

https://user-images.githubusercontent.com/79656478/146990324-a4554abe-d84f-49b9-95e8-a4015373eb49.mp4

https://user-images.githubusercontent.com/79656478/146990326-118776f0-ec40-4717-9b58-88d7382a5b5b.mp4

https://user-images.githubusercontent.com/79656478/170252296-77f6ba48-6199-4306-9ae5-509eecdc74b8.mp4

https://user-images.githubusercontent.com/79656478/170252308-e3eb32dc-833c-4272-a296-8d8bf2d9ffc5.mp4

&nbsp;

# 4. Instrucciones ejecución del juego
Para ejecutar la aplicación hay que seguir los siguientes pasos:
&nbsp;

1- Levantar el servidor: para ello será necesario estar en posesión del proyecto, importarlo y ejecutarlo en Eclipse.
&nbsp;

2- Acceder al navegador para poder jugar, preferiblemente Google Chrome.
&nbsp;

3- Acceder a la direción IP de la máquina que ha levantado el servidor.
&nbsp;

# 5. Referencias
En este apartado podemos encontrar todas las referencias empleadas para la realización de este documento de diseño del juego.

https://en.wikipedia.org/wiki/Windjammers_(video_game) 

https://www.streets4rage.com/ 

https://swordshield.pokemon.com/es-es/ 

https://craftpix.net/categorys/sprites/

