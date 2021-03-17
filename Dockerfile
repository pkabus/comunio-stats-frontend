# pull official base image
FROM node:15.11.0-buster

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.2 -g --silent

# add app
COPY . .

# environment variables (with defaults)
ENV REACT_APP_BACKEND_HOST api-comuniohelper.ddns.net
ENV REACT_APP_BACKEND_PORT 8080

# start app
CMD ["npm", "start"]

# run with docker run -itd --rm -p 3001:3000 -e CHOKIDAR_USEPOLLING=true comunio-stats-frontend:1.0.0
#
# sources
# https://mherman.org/blog/dockerizing-a-react-app/
# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/