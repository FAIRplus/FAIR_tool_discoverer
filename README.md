# FAIR Tool Discoverer 
![Hex.pm](https://img.shields.io/hexpm/l/plug?color=red&style=for-the-badge) 

The FAIR Tool Discoverer is a web application that assists data managers and stewards in finding software for implementing their specific FAIRification task. The system builds on use cases from both industry and academia, and leverages curated tool collections from publicly available software registries and source-code repositories. The resulting tools are presented according to their alignment with the user’s objectives and ranked based on relevance and popularity. The FAIR Tool Discoverer reduces the technical barriers to FAIRifying data and completes the ever-evolving FAIR data ecosystem in Life Sciences.


## Development 

The FAIR Tool Discover uses [Vue 2](https://v2.vuejs.org/v2/guide/) framework. To install it follow the instruction [here](https://v2.vuejs.org/v2/guide/installation.html).

To run the application locally use: 
```
npm run serve
``` 
### Using docker 

If you prefer to use a docker container, a recipe like the following one can be used: 

```Dockerfile
#Base image
FROM node:lts-alpine

# Set the working directory
WORKDIR /front-end

#Install serve package
RUN npm i -g serve

# Copy the package.json and package-lock.json
COPY package*.json ./

# install project dependencies
RUN npm install
RUN npm install axios --save

# Copy the project files
COPY . .

# Expose a port
EXPOSE 8080

# Executables
CMD [ "npm", "run", "serve" ]
``` 

Build the image: 

```
docker build -t tools_discoverer_fe_dev .
``` 
Then run the container to see the application at port 8080 (http://localhost:8080).
```
docker run -d -p 8080:80 tools_discoverer_fe_dev
``` 

### Storybook
The [storybook](https://storybook.js.org/) is a front-end workshop to render components in isolation. This tool can be used for development and collaborative review of components. 

To run the storybook locally use: 

```bash
npm run storybook
``` 

## Deployment 
Docker is used for deployment. The Dockerfile is: 

```Dockerfile
FROM node:lts-alpine as build-stage
RUN export NODE_OPTIONS=--max_old_space_size=1536
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
``` 

The previous recipe first builds the Vue application and then sets up the Nginx server that will serve it. The Nginx configuration file is `nginx.conf`. 
Nginx is listening at port 80 inside the container, which will need to be mapped to a host port when it is running. 

 


