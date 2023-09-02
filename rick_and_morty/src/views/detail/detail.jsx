//AUN ME FALTA TERMINAR, ESTOY UN POCO ATRASADO CON LA INTEGRACION AL ESTUDIAR PARA EL 
//SEGUNDO CP, ESTE FINDE SEMANA ME PONGO AL DIA
import {useParams } from "react-router-dom";
import {useEffect, useState } from "react";
import "./detail.css"

function Detail(){
    const {id}=useParams ()
    const [character, setCharacter]= useState({})
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name){
                setCharacter (char);
            }else{
                window.alert ("no hay personajes con ese id")
            }
        })
        .catch ((err) => {
            window.alert ("no hay personajes con ese id");
        })
        return setCharacter ({});
    }, [id]);
    return (
        <div className="detail-container">
             <div className="img-container">
                <h2> {character.name}</h2>
                <img src= {character.image} alt={character.name} />
                </div>
                <div className="details">
                    <div> 
                        <h3>Species:</h3>
                        <p>{character.species}</p>
                        </div>
                        <div> 
                        <h3>Gender:</h3>
                        <p>{character.gender}</p>
                        </div>
                        <div> 
                        <h3>Origin:</h3>
                        <p>{character.origin?.name}</p>
                        </div>
                        <div> 
                        <h3>Location:</h3>
                        <p>{character.location?.name}</p>
                        </div>
                        </div>
                        </div>
    )
}
export default Detail;