# Server Dockerfile

FROM node:10.16-alpine

RUN mkdir -p /user/src/app
WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","start"]