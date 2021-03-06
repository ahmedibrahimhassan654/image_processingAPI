# Image Processing API

## Overview

This project provides a simple, high-level interface to image processing.requried in UDACTITY Addvanced Full stack Nanodegree presented from Egypt-FWD-MCIT.

## How to build and start the server

The project can be built and run in the following ways

### 1. Install all dependencies

`npm install`

### 2. Build

`npm run build`

### 3. production

`npm run prod`

![server dev ](https://github.com/ahmedibrahimhassan654/image_processingAPI/blob/master/screens/production.PNG?raw=true)

### 4. development

`npm run dev`

![server dev ](https://github.com/ahmedibrahimhassan654/image_processingAPI/blob/master/screens/server%20run.PNG?raw=true)

### 5. test

`npm run tset`

![server test ](https://github.com/ahmedibrahimhassan654/image_processingAPI/blob/master/screens/test%20snipets.PNG?raw=true)

### 6. Linting

`npm run lint`

![server test ](https://github.com/ahmedibrahimhassan654/image_processingAPI/blob/master/screens/lint.PNG?raw=true)

### 6. prettier format

`npm run format`

![server test ](https://github.com/ahmedibrahimhassan654/image_processingAPI/blob/master/screens/formate%20with%20prettier.PNG?raw=true)

## Endpoint

### `/api/images/resize?filename=<filename>&width=<width>&height=<height>`

Method: `get`
URL Params: `height` and `width` - the height or width of the image in pixels
Query Param: `filename` - the specific image you are requesting.
for example: `http://localhost:3000/api/images/resize?filename=palmtunnel&width=80&height=80`

![Postman res ](https://github.com/ahmedibrahimhassan654/image_processingAPI/blob/master/screens/postman%20res.PNG?raw=true)

![Browser res ](https://github.com/ahmedibrahimhassan654/image_processingAPI/blob/master/screens/rest-response%20in%20the%20browser.PNG?raw=true)

#### Available Image options

1. `encenadaport`
2. `fjord`
3. `icelandwaterfall`
4. `palmtunnel`
5. `santamonica`

### Functionality

- User can query endpoint using various params and queries to retrieve an image with a specified height and width.
- If the image is not found, a 404 error is returned.
- All images requested will be saved to disk.
- There is a cache layer. If a user requests an image size that has already been requested, there is no need for resizing and the previously resized image will be returned.

## Built With

- [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
- [Express](https://expressjs.com/) - The web framework.
- [TypeScript](https://www.typescriptlang.org/) - The language used.
- [Sharp](https://sharp.pixelplumbing.com/) - NodeJS image processor.
- [Postman](https://www.getpostman.com/) - The REST API tool.
- [Prettier](https://prettier.io/) - The code formatter.
- [eslint](https://eslint.org/) - Find and fix problems in code.
- [jasmine](https://jasmine.github.io/) - The test framework.
- [Git](https://git-scm.com/) - The version control system.
