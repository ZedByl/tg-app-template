FROM node:alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

ENTRYPOINT ["npm", "run", "dev"]
