# Backend

Este es el Backend para el trabajo final de Programación de Interfaces Web.

## Como hemos realizado el backend

Hemos decidido crear nuestra API con `GraphQl` ya que nos permite buscar y añadir información de forma más sencilla. Para la base de datos donde se guarda toda la información hemos elegido `MongoDB`. Además hemos utilizado `Apollo Server` como servidor, ya que en el frontend ibamos a utilizar Apollo Client y nos parecía la forma más apropiada de implementarlo. Finalmente hemos utiliado `Express` como middleware ya que es compatible con Apollo Server y además de ser la más usada junto con `Node.js`.

## Como lanzar el backend

Para lanzar el backend primero deberás crear un fichero .env tal y como se muestra en el fichero .env.sample, añadiendo los datos necesarios.

Es **muy importante** que el puerto que elijas sea **distinto** al elegido en el frontend (En React.js por defecto es el puerto `3000`).

Tras eso debes ejecutar el fichero _server.ts_ de la siguiente manera:

> `npx ts-node server.ts`

La aplicación lanzada estará alojada en el endpoint `/graphql` del localhost definido por el puerto elejido en el fichero .env

## Query

### Search

Esta query devuelve las cartas que cumplan el criterio de busqueda o todas las cartas.

#### Todas las cartas

```
search{
    //keys de lo que quieras que devuelva
}   
```

#### Cartas especificas

Puedes buscar por:

* **name**: Buscar por un nombre
* **class**: Buscar por conjuntos de cartas de clase
* **cost**: Por el coste de la carta
* **expansion**: Por la expansión a la que pertenece

Como utilizarla:

```
search(by: {name || class || cost || expansion}){
    //keys de lo que quieras que devuelva
}
```


## Información relevante

Código por: Luis Díaz del Río.
Con ayuda de: Jorge Gil y Óscar González.

