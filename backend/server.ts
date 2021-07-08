import { Db, MongoClient } from "mongodb";
import {ApolloServer} from "apollo-server-express";
require('dotenv').config()

import express from "express"
import Mutation from "./GraphQl/Resolvers/Mutation"
import Query from "./GraphQl/Resolvers/Query"
import Schema from "./GraphQl/Schema/shema"
import { error } from "console";


const resolvers = {
    Query,
    Mutation,
}

let db: Db;
try {
    const url = process.env.MONGO_URL;
    const dbName = process.env.MONGO_DB;
    const port = process.env.PORT;
    if(!url || !dbName || !port){
        throw error("Yo need to add all variables to .env file")
    }
    MongoClient.connect(url, {useUnifiedTopology: true} ,(err, client) => {
        if(err){
            throw err
        }
        db = client.db(dbName);
    });

    const app: any = express();

    const gqlServer = new ApolloServer({
        typeDefs: Schema,
        resolvers: resolvers,
        context: (ctx) => {
            return {
                ctx,
                db
            }
        }
    })

    gqlServer.start()

    gqlServer.applyMiddleware({
        app: app,
        path: "/graphql",
        cors: true,
    })

    app.listen({port: parseInt(port) | 4000})
    console.log(`🚀 Server ready at http://localhost:${port}${gqlServer.graphqlPath}`)

}catch(e){
    console.log(e)
}