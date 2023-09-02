import SearchBar from "../Searchbar/SearchBar";
import style from "./nav.module.css"
import {Link} from "react-router-dom";

export default function NavBar({onSearch, random}) {
    return (
    <div className={style.navContainer}> 
    <div>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
    </div>
    <SearchBar onSearch={onSearch}/>
    <button className={style.random} onClick={random}>GENERAR RANDOM</button>
    </div>)
}