import { Link } from "react-router-dom";
import "./index.css";
import './App.css';
import { useDispatch } from "react-redux";
import { removeFavorite } from "./redux/actions";
import axios from "axios";
import Cards from './components/cards/Cards.jsx';
import LogoRM from "./assets/logoRM.jpg"
import NavBar from "./components/nav/nav";
import { useState, useEffect } from "react";
import About from "./views/about/about"
import Detail from "./views/detail/detail"
import Favorites from "./views/favorites/favorites"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import ErrorPage from "./views/error/error";
import LandingPage from "./views/landigpage/landingPage";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const{data}= await axios(URL + `?email=${email}&password=${password}`);
      const {access}= data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
      console.log (error)
    }
   
 }

  function logoutHandler() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function searchHandler(id) {

    try {
      const response= await axios(`https://rickandmortyapi.com/api/character/${id}`)
      const data=response.data
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('No hay personajes con este ID');
      }
    } catch (error) {
      console.log (error)
    }
    
    }
  

  function closeHandler(id) {
    let deleted = characters.filter((character) => character.id !== Number(id));
    dispatch(removeFavorite(id));
    setCharacters(deleted);
  }

  function randomHandler() {
    let haveIt = []
    let random = (Math.random() * 826).toFixed();
    random = Number(random);
    if (!haveIt.includes(random)) {
      haveIt.push(random);
      searchHandler(random);
    } else {
      console.log("ya agregaste todos los personajes");
      return;
    }
  }

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <div className="navButtons">
          <Link to="/about" className="navLink">
            <button className="navButton">About</button>
          </Link>
          <Link to="/home" className="navLink">
            <button className="navButton">Home</button>
          </Link>
          <Link to="/favorites" className="navLink">
            <button className="navButton">Favs</button>
          </Link>
        </div>
      )}

      {location.pathname === "/home" && (
        <img className="title" src={LogoRM} alt="logo" />
      )}

      {location.pathname === "/home" && (
        <NavBar
          onSearch={searchHandler}
          random={randomHandler}
          logout={logoutHandler}
        />
      )}

      <Routes>
        <Route path="/" element={<LandingPage login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={closeHandler} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;
