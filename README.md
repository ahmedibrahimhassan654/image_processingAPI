# Image Processing API

## Overview

This project provides a simple, high-level interface to image processing.requried in UDACTITY Addvanced Full stack Nanodegree presented from EGYPTIAN covernment.

## How to build and start the server

The project can be built and run in the following ways

### 1. Install all dependencies

`npm install`

### 2. Build

`npm run build`

### 3. production

`npm run prod`

### 4. development

`npm run dev`

### 5. test

`npm run tset`

### 6. Linting

`npm run lint`



## Endpoint

### `/api/images/preview/?filename=<image_name>`

Method: `get`
URL Params: `height` and `width` - the height or width of the image in pixels
Query Param: `filename` - the specific image you are requesting.

    For example: `localhost:3000/api/images/preview/?filename=fjord`

### `/api/images/resize/?width=<width>&height=<height>&filename=<image_name>`

Method: `get`
URL Params: `height` and `width` - the height or width of the image in pixels
Query Param: `filename` - the specific image you are requesting.

    For example: `localhost:3000/api/images/resize/?width=300&height=300&filename=fjord`

#### Available Image options

1. `encenadaport`
2. `fjord`
3. `icelandwaterfall`
4. `palmtunnel`
5. `santamonica`

### Functionality

- User can query endpoint using various params and queries to retrieve an image with a specified height and width.
- The default height and width is set to 200px.
- All images requested will be saved to disk.
- There is a cache layer. If a user requests an image size that has already been requested, there is no need for resizing and the previously resized image will be returned.

## Coding Styles

The project uses `husky` for `git` hooks. There are pre-commit hooks to run `eslint` and `prettier` on staged files. There is a pre-push hook that runs the unit tests. The configuration for this is present inside the `package.json` file.

## Built With

- [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
- [Express](https://expressjs.com/) - The web framework.
- [TypeScript](https://www.typescriptlang.org/) - The language used.
- [Sharp](https://sharp.pixelplumbing.com/) - NodeJS image processor.
