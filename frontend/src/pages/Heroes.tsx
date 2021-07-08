import React from 'react'
import styled from '@emotion/styled'


const Heroes = () => {
    return (
        <div className="wrapper">
            <div className="body">
                <div className="header-heroes">
                    <div className="header-gradient"></div>
                    <div className="header-text">
                        <h1>Héroes de Hearthstone</h1>
                        <p className="tittle-p">Cada héroeo de Hearthstone cuenta con un poder de héroe único,
                            así como con una serie de cartas propias. Los héroes jugables 
                            se desbloquean al derrotarlos en el modo Práctica.
                        </p>
                    </div>
                </div>
                <div className="divider" ></div>
                <div className="hero-list">
                    <div className="hero-cards-container">
                        <a href="https://playhearthstone.com/es-es/heroes/demonhunter">
                            <div className="hero-card">
                                <div className="card-demonhunter"></div>
                            </div>
                        </a>
                        <a href="https://playhearthstone.com/es-es/heroes/druid">
                            <div className="hero-card">
                                <div className="card-druid"></div>
                            </div>
                        </a>
                        <a href="https://playhearthstone.com/es-es/heroes/hunter">
                            <div className="hero-card">
                                <div className="card-hunter"></div>
                            </div>
                        </a>
                        <a href="https://playhearthstone.com/es-es/heroes/mage">
                            <div className="hero-card">
                                <div className="card-mage"></div>
                            </div>
                        </a>
                        <a href="https://playhearthstone.com/es-es/heroes/warlock">
                            <div className="hero-card">
                                <div className="card-warlock"></div>
                            </div>
                        </a>
                        
                        <a href="https://playhearthstone.com/es-es/heroes/paladin">
                            <div className="hero-card">
                                <div className="card-paladin"></div>
                            </div>
                        </a>
                        <a href="https://playhearthstone.com/es-es/heroes/priest">
                            <div className="hero-card">
                                <div className="card-priest"></div>
                            </div>
                        </a>
                        <a href="https://playhearthstone.com/es-es/heroes/rogue">
                            <div className="hero-card">
                                <div className="card-rogue"></div>
                            </div>
                        </a>
                        <a href="https://playhearthstone.com/es-es/heroes/shaman">
                            <div className="hero-card">
                                <div className="card-shaman"></div>
                            </div>
                        </a>
                        <a href="https://playhearthstone.com/es-es/heroes/warrior">
                            <div className="hero-card">
                                <div className="card-warrior"></div>
                            </div>
                        </a>
                        
                    </div>
                </div>
            </div>          
            

        </div>
    )
}

export default Heroes;

