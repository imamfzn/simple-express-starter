FROM node:14.15-slim

COPY . ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
