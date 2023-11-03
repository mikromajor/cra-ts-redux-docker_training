#For bilding img and ran conteiner use:
# docker-compose -f docker-compose.dev.yml up
FROM node:16-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
RUN yarn install
COPY ./src ./src
COPY ./public ./public
COPY . .
EXPOSE 3000
CMD [ "yarn", "start" ]
