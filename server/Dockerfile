FROM node:14

WORKDIR /app

COPY package.json ./

COPY package-lok.json ./

RUN npm install

COPY . . 

CMD ["npm","start"] 