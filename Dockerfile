FROM node

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

## EXPOSE
EXPOSE 5173

CMD ["npm", "run", "dev"]