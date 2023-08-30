# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Build the project
RUN npm run build

# Expose port 3000 (the default port for React applications)
EXPOSE 3000

# Define the command to start the application
CMD ["npm", "start"]
