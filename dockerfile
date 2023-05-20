FROM node:18.16.0

WORKDIR /client

COPY client/package*.json ./

RUN npm install

COPY client/ .

EXPOSE 3000

CMD ["npm", "start"]