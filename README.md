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
  * 2.3. Personaje
    * 2.3.1. Jeanne Louise Calment
    * 2.3.2. Emanuel Durão
    * 2.3.3. César Augusto
    * 2.3.4. Irene Merkel
    * 2.3.5. Francisco Fernández
    * 2.3.6. Philippe Depoortere
    * 2.3.7. Dmitri Efremov
    * 2.3.8. Jasper Kluivert
  * 2.4. Interacción en red
* 3.**Arte** 

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

<img src="https://github.com/iperezc2019urjc/VolleyFighter/blob/main/Imagenes%20GDD/ImagenEjemploGenero.jpg" alt="JuveR" width="700px">;

_Figura 1. Ejemplo de género de juego, Wind Jammers_

&nbsp;

## 1.4. Público objetivo
El público objetivo de Volley Fighters es jugadores dentro de un rango amplio de edades, tanto adultos como niños debido a su simpleza tanto en las mecánicas como en el estilo gráfico (2D con personajes chibis).

&nbsp;

## 1.5. Estilo visual
Volley Fighters cuenta con un estilo visual sencillo sin mucho detalle. Los personajes tienen una forma chibi (cuerpo pequeño y gran cabeza). El escenario está caracterizado por una red que divide en dos la pantalla ya que está inspirado en el voleibol. La red tiene una altura que mide el doble el doble que la estatura del personaje. El balón tiene un tamaño grande (más grande que el personaje).

&nbsp;

## 1.6. Música
La música empleada en el videojuego Volley Fighters consistirá en una música electrónica dentro de la escena de juego, en cambio, en el menú de inicio se podrá encontrar una banda sonora compuesta por cánticos deportivos.

<img src="https://github.com/iperezc2019urjc/VolleyFighter/blob/main/Imagenes%20GDD/ImagenEjemploMusica.jpg" alt="JuveR" width="700px">;

_Figura 2. Ejemplo de música de juego, Pokemon Escudo y Pokemon Espada_

&nbsp;

# 2. Mecánicas de juego
En este apartado se explica con más detalle las mecánicas y escenarios de Volley Fighters.

Se procede a detallar las acciones principales del jugador y todas las mecánicas que este puede realizar. Además se ofrece una lista con todos los personajes disponibles dentro del videojuego con una explicación de su procedencia y su habilidad especial que le identifica.

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

El jugador inicia Volley Fighter y lo primero que verá será el menú principal donde tendrá que seleccionar si quiere jugar en el modo de dos jugadores o en el modo de cuatro.

En la siguiente pantalla el jugador tendrá la opción de seleccionar el modo de juego que desee. Hay dos modos de juego, el modo de juego por tiempo y el modo de juego por puntos. Por último, antes de entrar en partida, el jugador podrá elegir el escenario y el personaje con el que quiere jugar su partida. 

El personaje comienza la partida en un campo de volley y en el escenario seleccionado y se le avisará con una cuenta atrás de 3 segundos de que el partido va a comenzar. Según el modo de juego, tendrá un objetivo u otro. El jugador será derrotado en ambos casos si tiene menos puntos que su rival. El jugador podrá seleccionar la habilidad especial de su personaje siempre y cuando esté cargada. La habilidad se recarga por tiempo.

Si el personaje pierde le aparecerá en pantalla un mensaje de “Game Over” y lo devolverá al menú principal. Si el personaje gana le aparecerá un mensaje de “You WIN” y se le devolverá al menú principal.

&nbsp;

## 2.3. Personajes
En este apartado se procederá a la presentación de cada personaje así cómo a la explicación de su habilidad, la cual está relacionada con su región de procedencia.

&nbsp;

### 2.3.1. Jeanne Louise Calment
Jeanne Louise Calment es un personaje procedente de la región francesa, su habilidad consiste en obtener una baguette para ampliar su rango de golpeo del balón.

&nbsp;

### 2.3.2. Emanuel Durão
Emanuel Durão es un personaje procedente de la región portuguesa, su habilidad consiste en hacer la pelota de juego más pequeña.

&nbsp;

### 2.3.3. César Augusto
César Augusto es un personaje procedente de la región italiana, su habilidad consiste en poder invocar la Torre de Pizza de forma defensiva para ayudarle a defender puntos.

&nbsp;

### 2.3.4. Irene Merkel
Irene Merkel es un personaje procedente de la región alemana, su habilidad consiste en quemar a su oponente, impidiendo que éste se mueva durante 3 segundos.

&nbsp;

### 2.3.5. Francisco Fernández
Francisco Fernández es un personaje procedente de la región española, su habilidad consiste en aumentar la potencia de la bola de juego, ocasionando que el rival retroceda y pierda velocidad.

&nbsp;

### 2.3.6. Philippe Depoortere
Philippe Depoortere es un personaje procedente de la región belga, su habilidad consiste en aumentar el tamaño del personaje durante una cantidad determinada de tiempo.

&nbsp;

### 2.3.7. Dmitri Efremov
Dmitri Efremov es un personaje procedente de la región rusa, su habilidad consiste en poder consumir un elixir que aumenta su velocidad de movimiento y salto en un 50% durante 5 segundos.

&nbsp;

### 2.3.8. Jasper Kluivert
Jasper Kluivert es un personaje procedente de la región holandesa, su habilidad consiste en poder hacer que el suelo del rival se convierta en una superficie deslizante, complicando el movimiento.

&nbsp;

## 2.4. Interacción en red
Durante la ejecución del juego, todos los jugadores jugarían de forma simultánea viendo así todos los movimientos de su rival a tiempo real, pudiendo así interaccionar con la pelota a la vez que el otro.
Para el matchmaking uno de los jugadores actuaría como host de la partida permitiendo al resto unirse a su partida.

&nbsp;

# 3. Arte
En este apartado se muestran ejemplos de cómo va a ser el diseño de los personajes, además de mostrar cómo sería la implementación de las diferentes interfaces del juego.

&nbsp;

# 4. Referencias
En este apartado podemos encontrar todas las referencias empleadas para la realización de este documento de diseño del juego.





