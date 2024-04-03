import React from "react";
import { useRef } from "react";
import { useState } from "react";
import PokemonDetailsPopup from "./PokeCardInfo";
import './index.css';

function PokemonCard({ pokeid, pokeimg, pokename, poketype, pokestats, pokeheight, pokeweight, pokeabilities }) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    const Type = 'fire';

    function getTypeColor(type) {
        switch (type) {
            case 'fire':
                return '#EB6C6C'; 
            case 'water':
                return '#009ACB';
            case 'bug':
                return '#91AC22';
            case 'poison':
                return '#7E00CB';
            case 'normal':
                return '#B6B6B6'
            default:
                return '#007bff'; 
        }
      }

    return (

        <div className="pokeCard">
            <div onClick={togglePopup} className="mainCard">
                <img src={pokeimg} alt="pokeimg" className="card-image" />
                {/* <div className="card-background"> */}
                    <div className="card-details" style={{ backgroundColor: getTypeColor(Type) }}>
                        <h1>{pokename && pokename.charAt(0).toUpperCase() + pokename.slice(1)}</h1>
                        <h2>#{pokeid && pokeid.toString().padStart(3, '0')}</h2>
                    </div>
                    {isPopupOpen && <PokemonDetailsPopup 
                                pokeid={pokeid}
                                pokeimg={pokeimg}
                                pokename={pokename}
                                poketype={poketype}
                                pokestats={pokestats}
                                pokeheight={pokeheight}
                                pokeweight={pokeweight}
                                pokeabilities={pokeabilities} 
                            />}    
            </div>
        </div>

    );
}

export default PokemonCard;