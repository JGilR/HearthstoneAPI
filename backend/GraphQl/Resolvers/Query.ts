import {Db} from "mongodb"
import {ApolloError} from "apollo-server"
import {CardSchema, HeroSchema, IContext} from "../../MongoDB/schema"

interface OutHeroes{
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

interface OutCards{
    name: string
    class: string,
    cost: number,
    attack: number,
    health: number,
    text: string,
    elite: boolean,
    type: TypeCard,
    rarity: RarityCard,
    expansion: ExpansionCard,
    mechanics: Array<{
        name?: string
    }>
    img: string
}

const searchall = async (ctx: IContext): Promise<OutCards[]> => {
    try{
        const db: Db = ctx.db;
        const CardsCollection = db.collection<CardSchema>("AllCards");
        const cards = CardsCollection.find({});
        const cardsArray = cards.toArray()
        return cardsArray;
    }catch(e){
        throw new ApolloError(e)
    }
}

const Query = {
    seeAllCards: async (parent: any, args: {}, ctx: IContext): Promise<OutCards[]> => {
        try{
            const db: Db = ctx.db;
            const CardsCollection = db.collection<CardSchema>("AllCards");
            const cards = CardsCollection.find({});
            const cardsArray = cards.toArray()
            return cardsArray;
        }catch(e){
            throw new ApolloError(e)
        }
    },

    seeAllHeroes: async(parents: any, args: {}, ctx: IContext): Promise<OutHeroes[]> => {
        try{
            const db: Db = ctx.db;
            const HeroesCollection = db.collection<HeroSchema>("AllHeroes")
            const heroes = HeroesCollection.find({});
            const heroesArray = heroes.toArray()
            return heroesArray;
        }catch(e){
            throw new ApolloError(e)
        }
    },

    search: async(parents: any, args: {by: {name: string, class: string, cost: number, expansion: ExpansionCard}}, ctx: IContext): Promise<OutCards[]> => {
        try{
            const db: Db = ctx.db;
            let cardArray = searchall(ctx);
            if(args.by){
                const onlyOne: (string | number | undefined)[] = [args.by.name, args.by.class, args.by.cost, args.by.expansion]
                let counter = 0;
                onlyOne.forEach((elem) => {
                    if(elem){
                        counter++;
                    }
                })

                if(counter > 0){
                    const CardCollection = db.collection<CardSchema>("AllCards")
                    if(args.by.name){
                        if(args.by.cost){
                            if(args.by.cost > -1){
                                const findCard = CardCollection.find({name: {$regex: args.by.name}, cost: args.by.cost})
                                cardArray = findCard.toArray()
                            }
                        }else{
                            const findCard = CardCollection.find({name: {$regex: args.by.name}})
                            cardArray = findCard.toArray()
                        }
                    }else if(args.by.cost){
                        if(args.by.cost > -1){
                            const findCard = CardCollection.find({cost: args.by.cost})
                            cardArray = findCard.toArray()
                        }
                    }else{
                        throw new ApolloError("Something when wrong... Or maybe we have not implemented that query search values... Search values supported: name, cost")
                    }
                }
            }
            return cardArray;
        }catch(e){
            throw new ApolloError(e)
        }
    }
}

export default Query