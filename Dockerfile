# Base image
FROM node:latest as build

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source
COPY . .

# Build app
RUN npm run build --prod

# Production stage
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/openai-demo /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]