//AUN ME FALTA TERMINAR, ESTOY UN POCO ATRASADO CON LA INTEGRACION AL ESTUDIAR PARA EL 
//SEGUNDO CP, ESTE FINDE SEMANA ME PONGO AL DIA

import "./index.css";
import './App.css';
import axios from "axios";
import Cards from './components/cards/Cards.jsx';
import LogoRM from "./assets/logoRM.jpg"
import NavBar from "./components/nav/nav";
import {useState,useEffect} from "react";
import Detail from "./views/about/about"
import About from "./views/detail/detail"
import {Route, Routes, useLocation,useNavigate} from "react-router-dom"
import ErrorPage from "./views/error/error";
import LandingPage from "./views/landigpage/landingPage";


function App() {
   const [characters,setCharacters]= useState([]);
   const [access, setAccess] = useState(false);
 const location=useLocation()
 const navigate = useNavigate();


const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'unaPassword';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
   !access && navigate('/');
}, [access]);
   function searchHandler(id){
 
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('No hay personajes con este ID');
      }
   })}
   
   
   
   function closeHandler (id){
      let deleted= characters.filter ((character) =>character.id !==Number(id) )
      setCharacters(deleted)}
     
   function ramdomHandler (){
      let haveIt= []
      let random = (Math.random () * 826).toFixed();
      random= Number (random);
      if (!haveIt.includes (random)) {
         haveIt.push (random);
         fetch (`https://rickandmortyapi.com/api/character/${random}`)
         .then ((response) => response.json ())
         .then ((data) => {if (data.name){
            setCharacters ((oldChars) => [...oldChars, data])
         }else {
            window.alert ("No hay personajes con ese ID")
         }
         
      })
      }else {
         console.log ("ya agregaste todos los personajes");
         return false;
      }
   }
   
   return (
     
      <div classname="App">
         <img className="title" src= {LogoRM} alt="logo"/>

        {location.pathname !== "/" && (<NavBar onSearch={searchHandler} random={ramdomHandler}/>)}
         

         <Routes> 
         <Route path="/" element ={<LandingPage login={login}/>}/>
         <Route path="/home" 
         element= {<Cards characters= {characters} onClose= {closeHandler}/>}
         />
         <Route path="/detail/:id" element={<Detail />} />
         <Route path="/about" element= {<About />} />
         <Route path="*" element= {<ErrorPage />}/>
         </Routes>
         
         
      </div>
   )
}
   export default App