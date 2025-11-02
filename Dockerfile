# Use official Node LTS base image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files first (leverage Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app source
COPY . .

# Expose port (documentation)
EXPOSE 3000

# Default command to run the app
CMD [ "node", "src/index.js" ]
