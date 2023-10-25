# Ta-Te-Ti: Un ejemplo de TDD en Express con Mocha

Este repositorio contiene un ejemplo paso a paso para el desarrollo de un servidor de backend basado en NodeJS y Express que sirve un juego de TaTeTi.

## Preparación del Entorno

1. Instalar el generador de proyectos de express ([referencia](https://expressjs.com/es/starter/generator.html))

```
npm install express-generator -g
```

2. Generar el proyecto express

```
express --no-view  --git tateti
```

2. Instalar las herramientas de testing

```
npm install --save-dev mocha chai nyc chai-http
```

3. Modificar el archivo `package.json` para agregar el comando de pruebas

```
  "scripts": {
    "start": "node ./bin/www",
    "test": "cucumber-js --publish-quiet",
    "coverage": "nyc --reporter=html cucumber-js --publish-quiet"
  },
```

## Ejecución de las pruebas

```
npm test
```

## Ejecucion de los servidores

### Luego de clonar el repositorio ejecutar para inicializar el frontend:

```
cd client
npm install
npm start
```

### En otra terminal ejecutar para inicializar el backend:

```
npm install
npm start
```
