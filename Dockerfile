FROM node:20.9.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

#RUN npx sequelize-cli db:migrate
#
#RUN npx sequelize db:seed:all

EXPOSE 8000
CMD [ "npm", "run", "dev" ]