FROM node:14.15.4-alpine3.12

ARG folder=/app
ARG PORT=9000

ENV NODE_ENV production
ENV PORT ${PORT}

WORKDIR ${folder}

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY --chown=node:node . .

EXPOSE ${PORT}
USER node

CMD [ "node", "src/server.js" ]

# RUN npm install -g nodemon
# CMD ["nodemon", "src/server.js"]