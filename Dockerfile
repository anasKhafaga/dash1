# Base image
FROM node:6-alpine

# Install vim package
RUN apk update && apk add vim

# Install Nginx as reverse-proxy server for the app
RUN \
  apk add openssl curl ca-certificates &&\
  printf "%s%s%s\n" \
  "http://nginx.org/packages/alpine/v" \
  `egrep -o '^[0-9]+\.[0-9]+' /etc/alpine-release` \
  "/main" \
  | tee -a /etc/apk/repositories &&\
  curl -o /tmp/nginx_signing.rsa.pub https://nginx.org/keys/nginx_signing.rsa.pub &&\
  openssl rsa -pubin -in /tmp/nginx_signing.rsa.pub -text -noout &&\
  mv /tmp/nginx_signing.rsa.pub /etc/apk/keys/ &&\
  apk add nginx

# Create app directory
RUN mkdir -p /usr/src/app

# Switch to this directory as working one
WORKDIR /usr/src/app

# Passing the app packages to the image
COPY package.json .

# Install the app packages
RUN npm install

# Passing the whole project files to the image
COPY . .

# Passing the custom configuration file of nginx to the image
RUN rm -r /etc/nginx/conf.d/ && mv conf.d /etc/nginx/conf.d/

# Opening a port for listening
EXPOSE 80

# Setting the default command
CMD ["./start.sh"]