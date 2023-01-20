#stage 1
# Dockerfile
FROM node:11.13.0-alpine as node

# create destination directory
WORKDIR /app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . .
RUN npm install
RUN npm run build
RUN npm run generate

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
