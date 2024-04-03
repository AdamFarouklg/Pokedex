import React from "react";

function FirstTab({ pokeid, pokeimg, pokename, poketype, pokestats, pokeheight, pokeweight, pokeabilities, onClose }){

    return (
        <div className="FirstTab">
            <hr className='solid'></hr>
            <h3>Types:</h3>
            <p>{poketype}</p>
            <h3>Height:</h3>
            <p>{pokeheight}</p>
            <h3>Weight:</h3>
            <p>{pokeweight}</p>
            <h3>Abilities:</h3>                  
        </div>
    );
};
export default FirstTab;