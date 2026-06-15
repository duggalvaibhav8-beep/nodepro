# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY . .

# Install dependencies
RUN npm install



# Expose application port (change if your server uses another port)
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
