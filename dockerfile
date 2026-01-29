FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
# UWAGA: Zakładam, że w angular.json nazwa projektu to 'harcerstwo-frontend'
# Jeśli build się wywali, sprawdź folder /dist po ręcznym zbudowaniu.
COPY --from=build /app/dist/harcerstwo-frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
