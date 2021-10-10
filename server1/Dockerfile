FROM node:10.16-alpine

# Create App Directory

WORKDIR /usr/src/server

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 3001

CMD ["node","index.js"]