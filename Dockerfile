
# Start your image with a node base image
FROM node:22

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./dist ./dist
COPY ./backend ./backend

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install fastify && \
    apt-get update && \
    apt upgrade -y && \
    apt-get install net-tools -y && \
    apt install iputils-ping -y
    # apt install zsh -y && \
    # sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" -y


EXPOSE 80

# Start the app using serve command
CMD [ "npm", "run", "fastify:start"]
