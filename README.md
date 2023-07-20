This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

// CHALLEGEN MODYO - MEMORY GAME

Este proyecto es una implementación del famoso juego de memoria (Memory Game) utilizando React, Next.js y Tailwindcss. El juego consiste en encontrar las parejas de cartas con imágenes de animales, volteando dos cartas a la vez y recordando su posición para hacer coincidir las parejas.

## Desarrollo del Juego de Memory:

El juego de Memory se desarrolló utilizando React, Next.js y Tailwindcss, lo que facilita la creación de componentes reutilizables y una estructura de archivos organizada.

## Archivo Page.js:

En el archivo Page.Js se encuentra el componente principal GamePage que contiene la lógica principal del juego y muestra la interfaz de usuario. Aquí el jugador puede ingresar su nombre, iniciar el juego, ver su puntaje (aciertos y errores) y recibir mensajes de felicitación al completar el juego. Cuando el jugador hace clic en "Comenzar", el juego inicia cambiando el estado isGameStarted a true, lo que muestra el tablero de juego (Board) y oculta el formulario de inicio.

## Archivo Board.js:

Board.js es el componente que representa el tablero de juego. Contiene la lógica para cargar las imágenes de animales desde una API utilizando el archivo api.js y crea las cartas con las imágenes en pares. Cuando el jugador hace clic en una carta, el estado isFlipped cambia, lo que muestra la imagen en la carta si está volteada o el signo de interrogación si no lo está. Cuando se seleccionan dos cartas, se verifica si forman una pareja. Si es una pareja, las cartas permanecen visibles; de lo contrario, las cartas se voltean nuevamente para ocultar las imágenes. Además, se actualizan los estados de matches y errors para llevar el control del puntaje del jugador. Cuando se completan todas las parejas, el estado gameStatus se actualiza a 'completed' y se muestra un mensaje de felicitación.

## Archivo Card.js:

Card.js es un componente reutilizable que representa una carta del juego. Puede estar volteada o no, y muestra una imagen de animal o un signo de interrogación según el estado. El componente recibe propiedades como image, isFlipped y onClick, y muestra la imagen de animal o el signo de interrogación según el valor de isFlipped.

## Archivo Scoreboard.js:

Scoreboard.js es un componente simple que muestra el puntaje del jugador en el juego. Recibe las propiedades aciertos y errores y muestra la cantidad de aciertos y errores del jugador en tiempo real.

## Tecnologías Utilizadas:

React
Next.js
Tailwindcss
## Instalación y Uso:

Clonar este repositorio en una máquina local.
Instalar las dependencias con el comando: npm install.
Instalar dependencias de Tailwindcss: npm install tailwindcss
Ejecutar el proyecto localmente con el comando: npm run dev.
