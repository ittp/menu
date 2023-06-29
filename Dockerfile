FROM ubuntu
VOLUME [ "/data" ]

RUN yarn global add express-generator pm2 