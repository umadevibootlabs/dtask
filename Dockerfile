FROM node:16.3.0-alpine as space
WORKDIR /app
COPY . .
COPY package.json /app
RUN npm install -g npm@8.13.1
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /app
COPY --from=space /app/build /usr/share/nginx/html
EXPOSE 80
