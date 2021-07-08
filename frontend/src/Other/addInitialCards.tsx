import React from "react";
import {gql} from "@apollo/client"

const INITIALCARDS = gql`
    mutation {
        addManyOrInit(input: [
            {
            name: "Anillo Único"
            class: "Neutral"
            cost: 2
            attack: 0
            health:8
            text: "Tu héroe no puede ser objetico de hechizos, podered de héroe o Gritos de batalla. Al final del turno puerde uno de durabilidad"
            elite: true
            type: Weapon
            rarity: Legendary
            expansion: LordOfTheRings
            mechanics: [{}]
            img: "https://raw.githubusercontent.com/JGilR/HearthstoneAPI/master/CardSets/LordOfTheRings/AnilloUnico.png"
        },
        {
            name: "Ojo de Sauron"
            class: "Neutral"
            cost: 4
            attack: 0
            health:0
            text: "Durante los próximos tres turnos podrás ver la mano del oponente"
            elite: false
            type: Spell
            rarity: Epic
            expansion: LordOfTheRings
            mechanics: [{}]
            img: "https://raw.githubusercontent.com/JGilR/HearthstoneAPI/master/CardSets/LordOfTheRings/EyeofSauron.png"
        },
        {
            name: "Frodo Bolsón"
            class: "Neutral"
            cost: 5
            attack: 3
            health:6
            text: "Sigilo, Si han pasado 4 turnos y este esbirro sigue con sigilo, destrúyelo, añade El Anillo Elegido a tu mano."
            elite: true
            type: Minion
            rarity: Legendary
            expansion: LordOfTheRings
            mechanics: [{name: "Sigilo"}]
            img: "https://raw.githubusercontent.com/JGilR/HearthstoneAPI/master/CardSets/LordOfTheRings/FrodoBolson.png"
        },
        {
            name: "Gandalf"
            class: "Neutral"
            cost: 9
            attack: 8
            health: 10
            text: "Al final del turno termina su pipa y otorga sigilo a tu héroe"
            elite: true
            type: Minion
            rarity: Legendary
            expansion: LordOfTheRings
            mechanics: [{name: "Sigilo"}]
            img: "https://raw.githubusercontent.com/JGilR/HearthstoneAPI/master/CardSets/LordOfTheRings/GandalfBlanco.png"
        },
        {
            name: "Golum"
            class: "Neutral"
            cost: 3
            attack: 1
            health: 3
            text: "Sigilo. Al principio de tu turno roba una carta del mazo del enemigo."
            elite: false
            type: Minion
            rarity: Epic
            expansion: LordOfTheRings
            mechanics: [{name: "Sigilo"}]
            img: "https://raw.githubusercontent.com/JGilR/HearthstoneAPI/master/CardSets/LordOfTheRings/Golum.png"
        },
        {
            name: "Nazgul"
            class: "Neutral"
            cost: 5
            attack: 2
            health: 9
            text: "Veneno, Cargar 50% de probabilidad de atacar al enemigo incorrecto."
            elite: true
            type: Minion
            rarity: Legendary
            expansion: LordOfTheRings
            mechanics: [{name: "Veneno"}, {name: "Cargar"}]
            img: "https://raw.githubusercontent.com/JGilR/HearthstoneAPI/master/CardSets/LordOfTheRings/Nazgul.png"
        },
        {
            name: "Sam Sagaz"
            class: "Neutral"
            cost: 8
            attack: 4
            health: 12
            text: "Grito de batalla: restaura 20 puntos de vida a tu héroe con pan élfico."
            elite: true
            type: Minion
            rarity: Legendary
            expansion: LordOfTheRings
            mechanics: [{name: "Grito de batalla"}]
            img: "https://raw.githubusercontent.com/JGilR/HearthstoneAPI/master/CardSets/LordOfTheRings/SamSagaz.png"
        },
        {
            name: "Saruman"
            class: "Neutral"
            cost: 6
            attack: 5
            health: 5
            text: "Grito de batalla: Inflinge 1 punto de daño a todas las criaturas. Invoca un 1/1 Uruk-Hai por cada criatura dañada."
            elite: false
            type: Minion
            rarity: Epic
            expansion: LordOfTheRings
            mechanics: [{name: "Grito de batalla"}]
            img: "https://raw.githubusercontent.com/JGilR/HearthstoneAPI/master/CardSets/LordOfTheRings/Saruman.png"
        },
        {
            name: "Sauron"
            class: "Neutral"
            cost: 8
            attack: 7
            health: 7
            text: "Al inicio del turno invoca un Nazgul."
            elite: true
            type: Minion
            rarity: Legendary
            expansion: LordOfTheRings
            mechanics: [{}]
            img: "https://raw.githubusercontent.com/JGilR/HearthstoneAPI/master/CardSets/LordOfTheRings/Sauron.png"
        },
        {
            name: "Uruk-Hai"
            class: "Neutral"
            cost: 1
            attack: 1
            health: 1
            text: "Embestir"
            elite: false
            type: Minion
            rarity: Rare
            expansion: LordOfTheRings
            mechanics: [{name: "Embestir"}]
            img: "https://raw.githubusercontent.com/JGilR/HearthstoneAPI/master/CardSets/LordOfTheRings/Uruk-Hai.png"
        }
      ])
    }
`
export default INITIALCARDS;
