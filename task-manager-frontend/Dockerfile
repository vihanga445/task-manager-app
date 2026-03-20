
FROM node:23.4.0 AS build
WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build --configuration=production


FROM nginx:alpine


COPY --from=build /app/dist/task-manager-frontend/browser /usr/share/nginx/html


RUN echo "server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files \$uri \$uri/ /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]