# Stage1: UI Build
FROM node:18-slim AS front-end-build
WORKDIR /usr/src
COPY front-end/ ./front-end/
RUN cd front-end && npm install && npm run build 

# Stage2: API Build
FROM node:18-slim AS back-end-build
WORKDIR /usr/src
COPY back-end/ ./back-end/
RUN cd back-end && npm install
RUN ls

# Stage3: Packagign the app
FROM node:18-slim
WORKDIR /root/
COPY --from=front-end-build /usr/src/front-end/dist ./front-end/dist
COPY --from=back-end-build /usr/src/back-end/ ./back-end/

WORKDIR /root/back-end/

EXPOSE 3000

CMD ["npm", "run", "start"]
