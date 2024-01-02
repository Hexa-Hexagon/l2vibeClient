FROM node:20-alpine3.19

RUN mkdir /l2vibeClient

WORKDIR /l2vibeClient

COPY ./ ./

RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "start"]