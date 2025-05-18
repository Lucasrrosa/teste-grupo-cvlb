FROM node:22-alpine AS build

# Working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY yarn.lock ./
COPY .yarnrc.yml ./

# Install dependencies
RUN yarn install

# Copy the application code
COPY . .

# Build the application
RUN yarn build


# Production Stage
FROM node:22-alpine AS production

# Working directory inside the container
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./

# Start the application
CMD ["yarn", "start:prod"]