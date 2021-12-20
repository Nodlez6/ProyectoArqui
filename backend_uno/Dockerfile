FROM node:14-alpine3.14
RUN mkdir -p /proyectoArqui
#si no existe la carpeta, con -p la crea
WORKDIR /proyectoArqui
COPY . .
RUN npm install
EXPOSE 3002
CMD ["npm" , "start"]