# onegorilla-backend

Proyecto de prueba para puesto Desarrollador Full Stack

├── README.md               <-- Este archivo
├── package.json            <-- NodeJS dependencies and scripts
├── src                     <-- Código fuente
|   ├── app.js              <-- Aplicación
|   ├── config.js           <-- Configuración de base de datos
|   ├── index.js            <-- Inicio de aplicación
|   ├── controllers         
|   |     └── params.js     <-- Funciones de params
|   ├── models              
|   |     └── params.js     <-- Schema params
|   └── routes              
|         └── index.js      <-- Routes api

## Configuración Base de datos

En archivo src/config.js existen dos configuraciones de base de datos (local y cloud mongodb), descomentar local para pruebas.


## Ejecutar aplicación

Instara dependencias con npm install
para ejecutar aplicacion ejecutar comando npm start