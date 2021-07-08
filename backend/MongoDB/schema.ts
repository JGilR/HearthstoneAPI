import {Db, ObjectId} from "mongodb"

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

export interface HeroSchema{
    _id?:        ObjectId
    name:        string
    description: string
    class:       string
    heroPower:   string
}

export interface CardSchema{
    _id?:      ObjectId
    name:      string
    class:     string
    cost:      number
    attack:    number
    health:    number
    text:      string
    elite:     boolean
    type:      TypeCard
    rarity:    RarityCard
    expansion: ExpansionCard
    mechanics: {name?: string}[]
    img:       string
}

export interface IContext{
    db: Db
}
