FROM node

COPY . /app

WORKDIR /app

RUN npm install

CMD node index.js