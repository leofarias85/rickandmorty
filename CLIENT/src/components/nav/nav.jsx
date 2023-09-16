import SearchBar from "../Searchbar/SearchBar";
import style from "./nav.module.css"
import {Link} from "react-router-dom";

 function NavBar({onSearch, random}) {
    return (
    <div className={style.navContainer}> 
    
    <SearchBar onSearch={onSearch}/>
    <button className={style.random} onClick={random}>GENERAR RANDOM</button>
    </div>)
}
export default NavBar;