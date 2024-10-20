
FROM node:18.19.1-alpine as build
WORKDIR /app
COPY /package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod


FROM nginx:alpine
COPY --from=build /app/dist/search-hits-frontend/browser /usr/share/nginx/html
EXPOSE 80
