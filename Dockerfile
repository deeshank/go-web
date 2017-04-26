
FROM node:7.9.0-slim

RUN mkdir /opt/webapp
WORKDIR /opt/webapp

ADD . .

RUN npm install

EXPOSE 3000

CMD npm start
