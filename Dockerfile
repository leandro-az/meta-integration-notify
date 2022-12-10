FROM public.ecr.aws/docker/library/node:16.18-alpine

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

EXPOSE 3306

CMD ["node", "dist/main"]


