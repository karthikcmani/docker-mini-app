# Stage 1: Build the React app
FROM node:18 AS build
WORKDIR /app

# Copy dependency files and install packages
COPY package*.json ./
RUN npm install

# Copy the rest of the app and build it
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
