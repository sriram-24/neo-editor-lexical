FROM alpine:3.21.0 

RUN apk add nodejs npm

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run", "dev"]

