# Client Dockerfile
FROM node:16.3.0-alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

RUN npm run build

COPY . .

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm","start"]