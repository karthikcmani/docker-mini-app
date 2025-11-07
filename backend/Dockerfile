FROM node:18
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy all backend code
COPY . .

# Expose port 5000
EXPOSE 5000

# Run the backend server
CMD ["node", "server.js"]
