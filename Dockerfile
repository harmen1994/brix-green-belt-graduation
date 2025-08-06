# Use official Node.js runtime as base image
FROM node:22-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Update npm to the latest version
RUN npm install -g npm@11.5.1

# Install dependencies for production
RUN npm run ci.production

# Copy TypeScript source code
COPY src tsconfig.json ./

# Install TypeScript globally and compile
RUN npm install -g typescript
RUN npm run build

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Change ownership of app directory to nodejs user
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose the port your API runs on
EXPOSE 3000

# Health check (optional)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Command to run the application
CMD ["npm", "run", "start"]
