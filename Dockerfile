FROM node:11-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install --global gulp-cli
RUN npm install

# Bundle app source
COPY . .

# RUN apk add --no-cache --virtual .gyp python make g++ \
#     && npm install \
#     && apk del .gyp

# If you are building your code for production
# RUN npm ci --only=production

CMD ["sh", "-c", "gulp serve"]