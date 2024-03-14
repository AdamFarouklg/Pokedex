import React from "react";
import { useRef } from "react";
import './index.css';

function PokemonCard({ pokeid, pokeimg, pokename, poketype, pokestats, pokeheight, pokeweight, pokeabilities }) {

    const refcard = useRef();
    const pokeinfo = () => {
        refcard.current.classList.toggle('card-toggle')
    }

    // console.log(poketype)
    const [type1, type2] = poketype;
    // console.log(type1.type.name);

    // console.log(pokestats);
    const [s1, s2, s3, s4, s5, s6] = pokestats;
    // console.log(s1);

    return (


        <div className="pokeCard">

            <div onClick={() => pokeinfo()} className="mainCard">
                <h2>#{pokeid}</h2>
                <img src={pokeimg} alt="pokeimg" />
                <h1>{pokename}</h1>
            </div>

            

        </div>

    );
}

export default PokemonCard;