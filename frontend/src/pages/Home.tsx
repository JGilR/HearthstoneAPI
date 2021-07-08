import React from 'react'
import './pages.css'


const Home = () => {
    return (
        <div className='home-container'>
            <div className="header-container">
                <div className="header-header">
                    <h1>Hearthstone Fan API. La API perfecta para los amantes de Hearthstone.</h1>
                    <p className="tittle-p">Te damos la bienvenida a Hearthstone Fan API, aquí podrás encontrar tanto como cartas clásicas de Hearthstone como 
                        cartas hechas por los propios fans! 
                    </p>
                </div>
            </div>
            <div className="video-container">
                <div className="video-video">
                    <div className="video-border">
                        <video loop controls>
                            <source src="https://assets.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt5f2da92f3229e1dd/5f198eb94afc510797a4f325/homepage_header_video.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

