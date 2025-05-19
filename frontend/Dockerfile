FROM node:alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

RUN npm i -g serve

CMD ["serve", "-s", "dist"]