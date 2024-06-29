# node.js of stable version
FROM cypress/browsers:node-20.14.0-chrome-126.0.6478.114-1-ff-127.0.1-edge-126.0.2592.61-1

RUN apt-get update
# activate japanese for cypress
RUN apt-get install -y locales locales-all
RUN apt-get install -y fonts-vlgothic
RUN locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LC_CTYPE ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP.utf8