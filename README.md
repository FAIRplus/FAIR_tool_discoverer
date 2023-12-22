# FAIRification Tool Discoverer 

<p align="center">
  <img src="./static/img/logo-clean.png" /> 
</p>

<div align="center"> 

  
[![Docker Image Version (latest semver)](https://img.shields.io/docker/v/emartps/tools-discoverer-nuxt?sort=semver)](https://hub.docker.com/r/emartps/tools-discoverer-nuxt)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache-red.svg)](https://opensource.org/licenses/Apache-2.0)
[![build and push](https://github.com/FAIRplus/FAIR_tool_discoverer/actions/workflows/main.yml/badge.svg)](https://github.com/FAIRplus/FAIR_tool_discoverer/actions/workflows/main.yml) 

[Home](https://fair-tool-discoverer.bsc.es/) - [Help](https://fair-tool-discoverer.bsc.es/help) - [API](https://fair-tool-discoverer.bsc.es/api) - [Publication]()

</div> 

The FAIRification Tool Discoverer is a tool that allows to discover tools that can be used to FAIRify data. The tool is composed of two parts: the back-end and the front-end. The back-end is a [REST API](https://github.com/FAIRplus/FAIR_tool_discoverer_backend) that allows to query the database of tools. The front-end is a web application that allows to query the database of tools and visualize the results.

This repository contains the code of the **Front-end** of the FAIR Tools Obervatory. It is a [Nuxt.js](https://nuxtjs.org/) application that uses [Vuetify](https://vuetifyjs.com/) as UI framework.

## Development 

### Native execution

1. Install dependencies
```sh
npm install
```
2. Run server - dev
```sh
npm run dev
```

### Docker execution 

An image of the application is available in [Docker Hub](https://hub.docker.com/r/emartps/tools-discoverer-nuxt). To run the application using Docker, follow the next steps: 

1. Pull the image from Docker Hub
```sh
docker pull emartps/tools-discoverer-nuxt
```
2. Run the image
```sh
docker run -p 8080:80 emartps/tools-discoverer-nuxt
``` 

The application will be available at http://localhost:8080.



## CI/CD

The deployment is done through GitHub Actions. The file `github/worflows.main.yml` contains the definition of the workflow. The workflow is triggered manually. The workflow performs the following steps:
- Build of the docker image of the application.
- Push of the image to the Docker Hub.

