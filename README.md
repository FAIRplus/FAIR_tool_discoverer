# FAIRification Tool Discoverer 

<p align="center">
  <img src="./static/img/logo-clean.png" /> 
</p>

<div align="center"> 

  
[![Docker Image Version (latest semver)](https://img.shields.io/docker/v/emartps/tools-discoverer-nuxt?sort=semver)](https://hub.docker.com/r/emartps/tools-discoverer-nuxt)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache-red.svg)](https://opensource.org/licenses/Apache-2.0)
[![build and push](https://github.com/FAIRplus/FAIR_tool_discoverer/actions/workflows/main.yml/badge.svg)](https://github.com/FAIRplus/FAIR_tool_discoverer/actions/workflows/main.yml) 

</div> 

The FAIRification Tool Discoverer is a tool that allows to discover tools that can be used to FAIRify data. The tool is composed of two parts: the back-end and the front-end. The back-end is a [REST API](https://github.com/FAIRplus/FAIR_tool_discoverer_backend) that allows to query the database of tools. The front-end is a web application that allows to query the database of tools and visualize the results.

This repository contains the code of the Front-end of the FAIR Tools Obervatory. 


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


### Docker-compose  
The file `docker-compose-dev.yml` contains the definition of the development environment. It contains all the necessary services for development, which are the following:

```yaml
version: '3.8'

services:
  mongodb:
    container_name: mongo_dev
    image: mongo
    ports:
      - '27017:27017'

  mongo-seed:
    container_name: mongo_seed
    build: ./database/mongo-seed
    depends_on:
      - 'mongodb'
  
  prepare-data:
    container_name: prepare_data
    build: ./database/prepare-data
    depends_on:
      - 'mongo-seed'
  
  back-end:
    image: emartps/tools-discoverer-api
    restart: unless-stopped
    depends_on:
      - 'mongodb'

  front-end:
    image: emartps/tools-discoverer-nuxt
    restart: unless-stopped
    depends_on:
      - 'back-end' 
    ports:
      - '8080:80'
``` 

## Deployment 

The deployment is done through GitHub Actions. The file `github/worflows.main.yml` contains the definition of the workflow. The workflow is triggered when a new release is created. The workflow performs the following steps:
- Build of the docker image of the application.
- Push of the image to the Docker Hub.
- Deployment of the image to the server using webhooks.