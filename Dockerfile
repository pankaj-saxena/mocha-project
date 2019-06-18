FROM node:latest
 
# Create app directory
WORKDIR /usr/src/app

#print message while building the image
RUN echo 'Image is being created...'
 
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
 
#THIS ENTRY ENTRY TO INSTALL MODULE DEPENDENCIES IS COMMENTED AND IT IS NOT WORKING IN SIT ENVIRONMENT
#RUN npm install
# If you are building your code for production
#RUN npm install --production
 
# Bundle app source
COPY . .

CMD [ "npm", "start" ]
#print message while running the app
CMD ["echo", "App is coming up..."]