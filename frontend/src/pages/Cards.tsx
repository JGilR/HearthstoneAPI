import React, { useState, useEffect } from 'react'
import './pages.css'
import {useQuery, useMutation, gql} from "@apollo/client"
import INITIALCARDS from '../Other/addInitialCards';


interface ICard {
    name: string
    class: string
    cost: number
    attack: number
    health: number
    text: string
    elite: boolean
    type: string
    rarity: string
    expansion: string
    mechanics: Array<{
        name?: string
    }>
    img: string
}

interface ICards{
    search: Array<ICard>
}

let trap: boolean = false;

const Cards = () => {
    const [search, setSearch] = useState<string>("");
    const [cost, setCost] = useState<number>(-1);
    const [addInitalCard] = useMutation(INITIALCARDS);

    const CARDS = gql`
        query {
            search(by: {name: "${search}" cost: ${cost}}){
                name
                class
                cost
                attack
                health
                text
                elite
                type
                rarity
                expansion
                mechanics {
                    name
                }
                img
            }
        }
    `;
    const {loading, error, data, refetch} = useQuery<ICards>(CARDS);
    console.log(search);
    console.log(" ")

    useEffect(() => {
        if(data){
            if(data.search.length === 0 && !trap){
                trap = true;
                addInitalCard();
                refetch();
            }
        }
    }, [data?.search.length])
    
    useEffect(() => {
        refetch()
    }, [search, cost]) 

    return (
        <div className='cards-container'>
            <div className="header-cards">
                <h1 className="card-h1">Galería de Cartas</h1>
                <p className="tittle-p">Aquí podrás encontrar todas las cartas. Podrás también realizar búsqueda de cartas
                    en concreto ya sea por mana, clase, conjunto o nombre.
                </p>
            </div>
            <div className="cards-bar">
                <div className="card-filter">
                    <div className="card-search">
                        <div className="search-w">
                            <div className="search-inside">
                                <div className="search-insidetext">
                                    <div className="search-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <path d="M58.22,11.86a30.74,30.74,0,0,0-24.54,49.3L12.44,81.92a4.79,
                                            4.79,0,0,0,3.35,8.22,4.74,4.74,0,0,0,3.35-1.37L40.57,67.83a30.77,30.77,0,1,0,
                                            17.65-56Zm0,52a21.2,21.2,0,1,1,21.19-21.2A21.22,21.22,0,0,1,58.22,63.84Z"></path>
                                        </svg>
                                    </div>
                                    <form>
                                        <input type="search" id="searchInput" placeholder="Buscar" className="search-input" value={search} onChange={(e) => setSearch(e.target.value)}/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-mana">
                        <div className="mana-inside">
                            <div className="mana-insideblock">
                                <div className="mana-items">
                                    <button className="mana-button" onClick={(e) => setCost(0)}>
                                        <h4 className="mana-number">0</h4>
                                    </button>
                                    <button className="mana-button" onClick={(e) => setCost(1)}>
                                        <h4 className="mana-number">1</h4>
                                    </button>
                                    <button className="mana-button" onClick={(e) => setCost(2)}>
                                        <h4 className="mana-number">2</h4>
                                    </button>
                                    <button className="mana-button" onClick={(e) => setCost(3)}>
                                        <h4 className="mana-number">3</h4>
                                    </button>
                                    <button className="mana-button" onClick={(e) => setCost(4)}>
                                        <h4 className="mana-number">4</h4>
                                    </button>
                                    <button className="mana-button" onClick={(e) => setCost(5)}>
                                        <h4 className="mana-number">5</h4>
                                    </button>
                                    <button className="mana-button" onClick={(e) => setCost(6)}>
                                        <h4 className="mana-number">6</h4>
                                    </button>
                                    <button className="mana-button" onClick={(e) => setCost(7)}>
                                        <h4 className="mana-number">7</h4>
                                    </button>
                                    <button className="mana-button" onClick={(e) => setCost(8)}>
                                        <h4 className="mana-number">8</h4>
                                    </button>
                                    <button className="mana-button" onClick={(e) => setCost(9)}>
                                        <h4 className="mana-number">9</h4>
                                    </button>
                                    <button className="mana-button last" onClick={(e) => setCost(10)}>
                                        <h4 className="mana-number">10 +</h4>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-cardsgrid">
                <div className="card-gridlayout">
                    <div className="card-item">
                        {loading && <div>Loading...</div>}
                        {error && <div>Error!!</div>}
                        {data && data.search.map((elem) => {
                            return (
                                <div className="card">
                                    <img src={elem.img} alt={elem.name}/>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
        </div>
    )

}

export default Cards;