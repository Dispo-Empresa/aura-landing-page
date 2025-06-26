FROM node:22.2.0-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN npm run build