FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Optional: debug what's in /etc/secrets
RUN echo "Secrets:" && ls -la /etc/secrets

# Copy .env from Render secret files
RUN cp /etc/secrets/.env .env

# Build with env vars
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
