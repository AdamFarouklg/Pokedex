import React from 'react';
import Tabs from './Components/Tabs/PopupTabs';

function PokemonDetailsPopup({ pokeid, pokeimg, pokename, poketype, pokestats, pokeheight, pokeweight, pokeabilities, onClose }) {

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <span className="close-btn" onClick={onClose}>X</span>
                <div className='popup-content-top'>
                    <img src={pokeimg} alt="pokeimg" className="popup-image" />
                    <div className='popup-content-info'>
                        <h1>{pokename && pokename.charAt(0).toUpperCase() + pokename.slice(1)}</h1>
                        <h2>#{pokeid && pokeid.toString().padStart(3, '0')}</h2>
                    </div>
                </div>
                <div className='popup-info'>
                <Tabs />
                
                </div>
                
                
            </div>
        </div>
    );
}

export default PokemonDetailsPopup;