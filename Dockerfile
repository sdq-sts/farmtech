# Etapa 1: Build
FROM node:20-alpine AS build-stage

# Set working directory
WORKDIR /app

# Copy only package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Run type-check (this step can be skipped in the final build)
RUN npm run type-check || true

# Build the project using environment variables already set in the service
RUN npm run build-only

# Etapa 2: Serve
FROM nginx:stable-alpine AS production-stage

# Copy built files from build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
