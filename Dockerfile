# Stage 1: Install dependencies
FROM node:18-alpine AS deps
WORKDIR /app

ARG MAILCHIMP_API_KEY
ARG MAPBOX_KEY
ENV MAPBOX_KEY=${MAPBOX_KEY}
# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Stage 2: Build the application
FROM node:18-alpine AS builder
WORKDIR /app

ARG MAILCHIMP_API_KEY
ARG MAPBOX_KEY
ENV MAPBOX_KEY=${MAPBOX_KEY}
# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 3: Run the application
FROM node:18-alpine AS runner
WORKDIR /app

# Set the environment variable for production
ENV NODE_ENV=production
ARG MAPBOX_KEY
ENV MAPBOX_KEY=${MAPBOX_KEY}

# Copy the built application and node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the application port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
