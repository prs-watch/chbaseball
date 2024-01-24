# node.js of stable version
FROM cypress/browsers:node-18.16.0-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1

WORKDIR /app

RUN apt-get update
# activate japanese for cypress
RUN apt-get install -y locales locales-all
RUN apt-get install -y fonts-vlgothic
RUN locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LC_CTYPE ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP.utf8