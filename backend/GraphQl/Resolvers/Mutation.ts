import {Db} from "mongodb"
import {ApolloError} from "apollo-server"
import {CardSchema, HeroSchema, IContext} from "../../MongoDB/schema"

interface InHeroes{
    name: string,
    description: string,
    class: string,
    heroPower: string
}

enum TypeCard{
    Spell,
    Weapon,
    Minion,
    Hero,
    Power
}

enum RarityCard{
    Common,
    Rare,
    Epic,
    Legendary
}

enum ExpansionCard{
    Classic,
    LordOfTheRings
}

interface InCards{
    name: string,
    class: string,
    cost: number,
    attack: number,
    health: number,
    text: string,
    elite: boolean,
    type: TypeCard,
    rarity: RarityCard,
    expansion: ExpansionCard,
    mechanics: {name?: string}[]
    img: string
}

const Mutation = {
    addCard: async(parent: any, args: {input: InCards}, ctx: IContext): Promise<boolean> => {
        try{
            const toFindAndToAdd: InCards = {
                name: args.input.name,
                class: args.input.class, 
                cost: args.input.cost, 
                attack: args.input.attack, 
                health: args.input.health, 
                text: args.input.text,
                elite: args.input.elite,
                type: args.input.type,
                rarity: args.input.rarity,
                expansion: args.input.expansion, 
                mechanics: args.input.mechanics,
                img: args.input.img
            }
            const db: Db = ctx.db;
            const CardCollection = db.collection<CardSchema>("AllCards");
            const cardExist = await CardCollection.findOne(toFindAndToAdd)
            if(!cardExist){
                CardCollection.insertOne(toFindAndToAdd)
                return true
            }else{
                throw new ApolloError("The card already exists")
            }
        }catch(e){
            throw new ApolloError(e);
        }
    },

    addHero: async (parent: any, args: {input: InHeroes}, ctx: IContext): Promise<boolean> => {
        try{
            const toFindAndToAdd: HeroSchema = {
                name:args.input.name,
                description: args.input.description,
                class: args.input.class,
                heroPower: args.input.heroPower  
            }
            const db: Db = ctx.db;
            const HeroCollection = db.collection<HeroSchema>("AllHeroes");
            const heroExist = await HeroCollection.findOne(toFindAndToAdd)
            if(!heroExist){
                HeroCollection.insertOne(toFindAndToAdd)
                return true
            }else{
                return false
            }
        }catch(e){
            throw new ApolloError(e)
        }
    },

    deleteAll: async (parents: any, args: {}, ctx: IContext): Promise<boolean> => {
        try{
            const db: Db = ctx.db;
            const CardCollection = db.collection<CardSchema>("AllCards")
            await CardCollection.deleteMany({})
            const isEmpty = await CardCollection.find({}).count()
            if(isEmpty === 0){
                return true
            }else{
                return false
            }
        }catch(e){
            throw new ApolloError(e)
        }
    },

    deleteOne: async (parents: any, args: {name: string}, ctx: IContext): Promise<boolean> => {
        try{
            const db: Db = ctx.db;
            const CardCollection = db.collection<CardSchema>("AllCards")
            await CardCollection.deleteOne({name: args.name})
            return true;
        }catch(e){
            throw new ApolloError(e)
        }
    },

    addManyOrInit: async (parents: any, args: {input: InCards[]}, ctx: IContext): Promise<boolean> => {
        try{
            const db: Db = ctx.db;
            const CardCollection = db.collection<CardSchema>("AllCards")
            await CardCollection.insertMany(args.input)
            return true;
        }catch(e){
            throw new ApolloError(e);
        }
    }
}

export default Mutation;