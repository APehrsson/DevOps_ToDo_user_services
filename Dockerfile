FROM node:slim

WORKDIR /usr/src/user_service

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4001

CMD ["sh", "-c", "npm run build && npm start"]