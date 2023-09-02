import style from "./Search.module.css"
import {useState} from "react";

export default function SearchBar(props) {
   const {onSearch} =props

   const [id, setId]= useState ("");
   function changeHandler (e){
      e.preventDefault ();
      let input= e.target.value;
      setId (input)
   }
   return (
      <div className={style.searchContainer}>
         <input className={style.searchInput} type='search' value={id} onChange={changeHandler}/>
         <div className={style.searchIconContainer}>
         <button className={style.searchIcon} onClick={() => onSearch(id)}/></div>
      </div>
   );
}
