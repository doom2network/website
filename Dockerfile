FROM node:alpine

ENV NODE_ENV production

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["./node_modules/.bin/serve", "./build"]