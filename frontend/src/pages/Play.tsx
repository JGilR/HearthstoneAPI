import React from 'react'

const Play = () => {
    return (
        <div className="text-layout"> 
            <div className="text-container">
                <div className="text-header">
                    <p className="text-p">Como jugar</p>
                    <h2 className="text-h2">Lecciones para principiantes</h2>
                    <div className="header-text2">
                        <p className="texto-p">
                            Arrima una silla y vamos a charlar sobre algunos conceptos básicos (y otros no tanto)
                            que te vendrá bien en tu andadura para codearte con la élite de Hearthstone.
                        </p>
                        <img src="https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt1ddf4399dfd64a14/5f2c51514eebe153cbb08f81/innkeeper-lesson_innkeeper.png" 
                        alt="Innkeeper" className="ink-img" />
                    </div>
                </div>
                <div className="text-comojugar">
                    <div className="textmodule">
                        <div className="knowyourcards">
                            <div className="tittle">
                                <h5 className="tittle-h5"> 
                                    Conoce tus cartas
                                </h5>
                            </div>
                            <img src="https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltc50037c6b69346bc/5f246c648ea4aa55f232985a/overview_cards_english-us.png"
                            className="img-textmodule" />
                            <div>
                                <p></p>
                                <p className="p-guide">
                                    Para empezar debes saber que las cartas de Hearthstone se dividen en esbirros, hechizos y armas. La gran mayoria 
                                    cuenta con efectos y condiciones. Vamos a echar un vistazo a las palabras clave y los efectos que estas provocan 
                                    y como puedes combinarlos para arrasar el tablero de tu oponente.
                                </p>
                                <p></p>
                            </div>
                            <div className="subsection-wordkey">
                                <div className="subsection-tittle">
                                    <img src="https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blteab16cf48b5a5c30/5f203f998775a353ccc4783f/health_icon.png" height="32" width="32" className="img-subsection"/>
                                    <h5 className="subsection-tittle-tittle">
                                        Efectos constantes
                                    </h5>
                                </div>
                                <div>
                                    <p className="p-guide">
                                        Algunas cartas cuentan con habilidades constantes que duran mientrás esten en juego. Por ejemplo, 
                                        <a className="cardpopup" target="_blank" href="https://playhearthstone.com/es-es/cards/1401-raid-leader">
                                            <svg className="cardpopup-svg">
                                                <svg viewBox="0 0 100 100">
                                                    <path d="M 92.85 48.88 C 90.58 47.55 79.39 41 76.26 38.69 a 0.23 0.23 0 0 1 -0.08 -0.11 a 29 29 0 0 0
                                                     -3.61 -6.13 a 0.29 0.29 0 0 1 0 -0.24 l 2.78 -9.87 A 0.28 0.28 0 0 0 75 22 L 64.61 25.21 a 0.24 0.24 
                                                     0 0 1 -0.22 0 a 28.82 28.82 0 0 0 -5.06 -2.37 a 0.26 0.26 0 0 1 -0.14 -0.11 L 49.93 7.37 a 0.28 0.28 
                                                     0 0 0 -0.47 0 L 39.45 23 a 0.28 0.28 0 0 1 -0.13 0.11 a 28 28 0 0 0 -4.9 2.45 a 0.33 0.33 0 0 1 -0.24
                                                     0 L 24.17 22 a 0.28 0.28 0 0 0 -0.36 0.34 l 2.83 10.14 a 0.27 0.27 0 0 1 0 0.23 A 28.7 28.7 0 0 0 23 
                                                     39.18 a 0.23 0.23 0 0 1 -0.1 0.12 C 18.93 42 9.25 47.65 7.15 48.88 a 0.27 0.27 0 0 0 0 0.47 L 22 58.14 
                                                     a 0.23 0.23 0 0 1 0.12 0.15 a 28.58 28.58 0 0 0 3.17 7 a 0.29 0.29 0 0 1 0 0.22 L 22 77.14 a 0.28 0.28 
                                                     0 0 0 0.36 0.34 L 33.08 73.7 a 0.26 0.26 0 0 1 0.24 0 a 28.41 28.41 0 0 0 6 3.17 a 0.28 0.28 0 0 1 0.13 
                                                     0.11 l 10 15.62 a 0.28 0.28 0 0 0 0.47 0 l 9.26 -15.34 a 0.26 0.26 0 0 1 0.14 -0.11 a 28.49 28.49 0 0 0 
                                                     6.58 -3.34 a 0.26 0.26 0 0 1 0.24 0 L 76.48 77 a 0.28 0.28 0 0 0 0.35 -0.34 l -3 -10.7 a 0.24 0.24 0 0 
                                                     1 0 -0.22 a 28.93 28.93 0 0 0 3.34 -7 a 0.29 0.29 0 0 1 0.12 -0.15 l 15.54 -9.22 A 0.27 0.27 0 0 0 92.85
                                                     48.88 Z M 66.19 47.83 c -0.15 1.41 -1 4.88 -1 5.47 a 17.53 17.53 0 0 1 -0.3 2.51 c -0.22 1.47 -1 1.62 
                                                     -1.18 2.87 a 4.92 4.92 0 0 1 -2.21 3.18 a 10.09 10.09 0 0 0 -2.73 2.66 c -0.08 0.37 -5.69 3.32 -7.38 3.39
                                                      s -8.71 0.74 -11.89 -1.11 s -4.43 -3.1 -4.06 -5.31 c 0 0 0.52 -1.92 2.59 -0.74 a 17.21 17.21 0 0 0 4.5 
                                                      2.07 c 0.74 0.07 4.57 0.07 5.61 -0.74 s 0.44 -1.18 1.92 -1.25 s 2 -0.59 3.39 -1.55 a 9.11 9.11 0 0 0 3.1
                                                      -3.4 a 5.18 5.18 0 0 1 1.11 -2.07 c 0.59 -0.73 0.59 -5.68 0.15 -7.16 s -1 -1 -1.55 -2.06 a 26.92 26.92 
                                                      0 0 0 -1.11 -2.51 c -0.52 -0.89 -1.85 -1.26 -3.25 -2.36 s -5.31 -1.7 -6.57 -0.52 s -3.17 1.7 -4.2 2.43 
                                                      a 3.75 3.75 0 0 0 -1.55 3.62 c 0.22 1.55 1.47 4.36 2.87 5.09 s 2.07 0.54 3.47 -1 s 1.11 -2.3 -0.14 -2.74
                                                      a 1.6 1.6 0 0 1 1.84 -2.14 c 2.22 0.22 4.87 2.36 5.39 3.91 s -1.18 7.46 -5.76 8.19 s -6.57 0 -8.93 -1.55
                                                      s -5.68 -6.42 -5.68 -7.3 s -0.15 -5.32 0.66 -7.16 s 4.95 -8.05 10.26 -9.23 a 2.86 2.86 0 0 1 1.55 -0.74
                                                      c 0.89 -0.07 1 0.67 2.22 0.81 s 2.28 -0.89 2.73 -0.81 s 1 0.67 2.06 1 s 4.06 0.73 5.76 2.14 s 2.81 2.14
                                                      3.84 3.76 s 0.66 2.14 1.7 2.88 a 8.19 8.19 0 0 1 2.36 3.31 A 16.13 16.13 0 0 1 66.19 47.83 Z"></path>
                                                </svg>
                                            </svg>
                                            Lider de banda
                                        </a>
                                         tiene una habilidad que otorga +1 p. de ataque al resto de tus esbirros, mientras que 
                                         <a className="cardpopup" target="_blank" href="https://playhearthstone.com/es-es/cards/69653-argent-squire">
                                            <svg className="cardpopup-svg">
                                                <svg viewBox="0 0 100 100">
                                                    <path d="M 92.85 48.88 C 90.58 47.55 79.39 41 76.26 38.69 a 0.23 0.23 0 0 1 -0.08 -0.11 a 29 29 0 0 0
                                                     -3.61 -6.13 a 0.29 0.29 0 0 1 0 -0.24 l 2.78 -9.87 A 0.28 0.28 0 0 0 75 22 L 64.61 25.21 a 0.24 0.24 
                                                     0 0 1 -0.22 0 a 28.82 28.82 0 0 0 -5.06 -2.37 a 0.26 0.26 0 0 1 -0.14 -0.11 L 49.93 7.37 a 0.28 0.28 
                                                     0 0 0 -0.47 0 L 39.45 23 a 0.28 0.28 0 0 1 -0.13 0.11 a 28 28 0 0 0 -4.9 2.45 a 0.33 0.33 0 0 1 -0.24
                                                     0 L 24.17 22 a 0.28 0.28 0 0 0 -0.36 0.34 l 2.83 10.14 a 0.27 0.27 0 0 1 0 0.23 A 28.7 28.7 0 0 0 23 
                                                     39.18 a 0.23 0.23 0 0 1 -0.1 0.12 C 18.93 42 9.25 47.65 7.15 48.88 a 0.27 0.27 0 0 0 0 0.47 L 22 58.14 
                                                     a 0.23 0.23 0 0 1 0.12 0.15 a 28.58 28.58 0 0 0 3.17 7 a 0.29 0.29 0 0 1 0 0.22 L 22 77.14 a 0.28 0.28 
                                                     0 0 0 0.36 0.34 L 33.08 73.7 a 0.26 0.26 0 0 1 0.24 0 a 28.41 28.41 0 0 0 6 3.17 a 0.28 0.28 0 0 1 0.13 
                                                     0.11 l 10 15.62 a 0.28 0.28 0 0 0 0.47 0 l 9.26 -15.34 a 0.26 0.26 0 0 1 0.14 -0.11 a 28.49 28.49 0 0 0 
                                                     6.58 -3.34 a 0.26 0.26 0 0 1 0.24 0 L 76.48 77 a 0.28 0.28 0 0 0 0.35 -0.34 l -3 -10.7 a 0.24 0.24 0 0 
                                                     1 0 -0.22 a 28.93 28.93 0 0 0 3.34 -7 a 0.29 0.29 0 0 1 0.12 -0.15 l 15.54 -9.22 A 0.27 0.27 0 0 0 92.85
                                                     48.88 Z M 66.19 47.83 c -0.15 1.41 -1 4.88 -1 5.47 a 17.53 17.53 0 0 1 -0.3 2.51 c -0.22 1.47 -1 1.62 
                                                     -1.18 2.87 a 4.92 4.92 0 0 1 -2.21 3.18 a 10.09 10.09 0 0 0 -2.73 2.66 c -0.08 0.37 -5.69 3.32 -7.38 3.39
                                                      s -8.71 0.74 -11.89 -1.11 s -4.43 -3.1 -4.06 -5.31 c 0 0 0.52 -1.92 2.59 -0.74 a 17.21 17.21 0 0 0 4.5 
                                                      2.07 c 0.74 0.07 4.57 0.07 5.61 -0.74 s 0.44 -1.18 1.92 -1.25 s 2 -0.59 3.39 -1.55 a 9.11 9.11 0 0 0 3.1
                                                      -3.4 a 5.18 5.18 0 0 1 1.11 -2.07 c 0.59 -0.73 0.59 -5.68 0.15 -7.16 s -1 -1 -1.55 -2.06 a 26.92 26.92 
                                                      0 0 0 -1.11 -2.51 c -0.52 -0.89 -1.85 -1.26 -3.25 -2.36 s -5.31 -1.7 -6.57 -0.52 s -3.17 1.7 -4.2 2.43 
                                                      a 3.75 3.75 0 0 0 -1.55 3.62 c 0.22 1.55 1.47 4.36 2.87 5.09 s 2.07 0.54 3.47 -1 s 1.11 -2.3 -0.14 -2.74
                                                      a 1.6 1.6 0 0 1 1.84 -2.14 c 2.22 0.22 4.87 2.36 5.39 3.91 s -1.18 7.46 -5.76 8.19 s -6.57 0 -8.93 -1.55
                                                      s -5.68 -6.42 -5.68 -7.3 s -0.15 -5.32 0.66 -7.16 s 4.95 -8.05 10.26 -9.23 a 2.86 2.86 0 0 1 1.55 -0.74
                                                      c 0.89 -0.07 1 0.67 2.22 0.81 s 2.28 -0.89 2.73 -0.81 s 1 0.67 2.06 1 s 4.06 0.73 5.76 2.14 s 2.81 2.14
                                                      3.84 3.76 s 0.66 2.14 1.7 2.88 a 8.19 8.19 0 0 1 2.36 3.31 A 16.13 16.13 0 0 1 66.19 47.83 Z"></path>
                                                </svg>
                                            </svg>
                                            Escudera argenta 
                                        </a>
                                         posee la palabra clave Escudo divino, que veremos a continuación.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="usefultips">

                        </div>
                        <div className="cardadvantage">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Play;