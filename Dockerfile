# Build stage
FROM node:16-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

# Production stage
FROM nginx:alpine

# Copy build files to Nginx
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
