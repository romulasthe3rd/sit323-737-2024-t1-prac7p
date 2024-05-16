FROM node:15
WORKDIR /use/src/app
COPY index.html /app
COPY app.js /app
COPY package*.json app.js index.html ./
RUN npm install
CMD ["node", "app.js"]