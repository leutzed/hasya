FROM node:12-alpine as base

WORKDIR /usr/app/backend

FROM base as prod

COPY package.json tsconfig.json ./
# COPY package-lock.json ./

RUN yarn

EXPOSE 3333
