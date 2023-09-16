//import {connect} from "react-redux"
import Cards from "../../components/cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { orderFavorites, filterFavorites, resetFavorites } from "../../redux/actions";
import "./favorites.css"

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  function handleSort(e) {
    dispatch(orderFavorites(e.target.value));
  }

  function handlefilter(e) {
    dispatch(filterFavorites(e.target.value));
  }

  function handleReset(){
    dispatch (resetFavorites())
  }
  return (
    <div>
      
        <select className="custom-selector" onChange={handlefilter}>
          {["Male", "Female", "unknown", "Gendeless"].map((gender) => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))}
        </select>
    
      
        <select className="custom-selector" onChange={handleSort}>
          {["Ascendente", "Descendente"].map((order) => (
            <option value={order} key={order}>
              {order}
            </option>
          ))}
        </select>
      <button className="custom-selector2" onClick= {handleReset}> Reset filters</button>
      <Cards characters={favorites} />
    </div>
  );
}

//const mapStateToProps= (state)=>{
   // return {
       // favorites: state.myFavorites,
   // }
//}
//export default connect (mapStateToProps, null) (Favorites)