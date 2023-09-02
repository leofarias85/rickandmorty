//AUN ME FALTA TERMINAR, ESTOY UN POCO ATRASADO CON LA INTEGRACION AL ESTUDIAR PARA EL 
//SEGUNDO CP, ESTE FINDE SEMANA ME PONGO AL DIA
import { useNavigate } from "react-router-dom"
import style from "./Card.module.css"

export default function Card (props) {
    const navigate= useNavigate();
    const {character, onClose} = props
    const {image, name, species,status, gender, id}= character
    function navigateHandler(){
        navigate (`/detail/${character.id}`)
    }

    return (
        <div className={style.cardContainer}>
            <div className={style.imageContainer}>
            <img 
             className={style.characterImage}
             src= {image} 
             alt ={name}
             onClick={navigateHandler}
             />
            <h2 className={style.name} >{name}</h2>
            <h2 className={style.names}> {status}</h2>
            <button className={style.closeButton} onClick={()=>{onClose(id)}}>X</button>
            </div>
           
            <div className={style.atributes}>
            <h2>  {species}</h2>
            <h2> {gender}</h2> </div>
            <h2 className={style.atributesm}>  {character.origin.name}</h2>
        </div>
    )
}