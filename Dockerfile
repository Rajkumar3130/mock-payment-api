# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose the app port
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]
