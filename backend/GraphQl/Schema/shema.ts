import {gql} from "apollo-server"

const Schema = gql`
    type Heroe{
        name: String!
        description: String!
        class: String!
        heroePower: String!
    }

    input InputHeroe{
        name: String!
        description: String!
        class: String!
        heroePower: String!
    }

    type Mechanics{
        name: String
    }

    enum TypeCard{
        Spell
        Weapon
        Minion
        Hero
        Power
    }

    enum RarityCard{
        Common
        Rare
        Epic
        Legendary
    }

    enum ExpansionCard{
        Classic
        LordOfTheRings
    }

    type Card{
        name : String!
        class: String!
        cost : Int!
        attack: Int!
        health: Int!
        text: String!
        elite: Boolean!
        type: TypeCard!
        rarity: RarityCard!
        expansion: ExpansionCard!
        mechanics: [Mechanics]!
        img: String
    }

    input InputMechanics{
        name: String
    }

    input InputCard{
        name: String!
        class: String!
        cost: Int!
        attack: Int!
        health: Int!
        text: String!
        elite: Boolean!
        type: TypeCard!
        rarity: RarityCard!
        expansion: ExpansionCard!
        mechanics: [InputMechanics]!
        img: String
    }

    input SBInput{
        name: String
        class: String
        cost: Int
        expansion: String
    }

    type Query{
        seeAllCards: [Card]!
        seeAllHeroes: [Heroe]!
        search(by: SBInput): [Card]!
    }

    type Mutation{
        deleteAll : Boolean!
        deleteOne(name: String!): Boolean!
        addManyOrInit(input: [InputCard!]!): Boolean!
        addCard(input: InputCard!): Boolean!
        addHero(input: InputHeroe): Boolean!
    }

`
export default Schema