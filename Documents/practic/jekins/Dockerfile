FROM node

RUN /app

WORKDIR /app 
# 向外提供3000端口
EXPOSE 3000
# 容器创建完成后执行的命令
CMD npm install --registry=https://registry.npm.taobao.org && node ./start.js
