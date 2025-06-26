FROM node:22.2.0-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --no-audit --no-fund --prefer-offline

COPY . .

RUN npm run build
