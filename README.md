# HearthstoneFanAPI

## Backend

Este es el Backend para el trabajo final de Programación de Interfaces Web.

### Como hemos realizado el backend

Hemos decidido crear nuestra API con `GraphQl` ya que nos permite buscar y añadir información de forma más sencilla. Para la base de datos donde se guarda toda la información hemos elegido `MongoDB`. Además hemos utilizado `Apollo Server` como servidor, ya que en el frontend ibamos a utilizar Apollo Client y nos parecía la forma más apropiada de implementarlo. Finalmente hemos utiliado `Express` como middleware ya que es compatible con Apollo Server y además de ser la más usada junto con `Node.js`.

### Como lanzar el backend

Para lanzar el backend primero deberás crear un fichero .env tal y como se muestra en el fichero .env.sample, añadiendo los datos necesarios.

Es **muy importante** que el puerto que elijas sea **distinto** al elegido en el frontend (En React.js por defecto es el puerto `3000`).

Tras eso debes ejecutar el fichero _server.ts_ de la siguiente manera:

`npx ts-node server.ts`

La aplicación lanzada estará alojada en el endpoint `/graphql` del localhost definido por el puerto elejido en el fichero .env

## Frontend

Para ejecutar el frontend escribimos en la terminal `$ npm start`


### Información relevante

Código por: Luis Díaz del Río, Jorge Gil y Óscar González.

