import Cards from "../../components/cards/Cards";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import style from "./Card.module.css";
import { useState, useEffect } from "react";

function Card(props) {
  const navigate = useNavigate();
  const { character, onClose, addFavorite, removeFavorite, favorites } = props;
  const { image, name, species, status, gender, id } = character;
  const [closeBtn, setCloseBtn] = useState(true);
  const [isFav, setFav] = useState(false);

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === character.id) {
        setFav(true);
      }
    });
  }, [favorites]);

  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  function handleFavorite(character) {
    if (!isFav) {
      addFavorite(character);
      setFav(true);
    } else {
      removeFavorite(character.id);
      setFav(false);
    }
  }

  return (
    <div className={style.cardContainer}>
      <div className={style.favoriteButtonContainer}>
        {isFav ? (
          <button
            className={style.favoriteButton}
            onClick={() => {
              handleFavorite(character);
            }}
          >
            ❤️
          </button>
        ) : (
          <button
            className={style.favoriteButton}
            onClick={() => {
              handleFavorite(character);
            }}
          >
            🤍
          </button>
        )}
      </div>
      <div className={style.imageContainer}>
        <img
          className={style.characterImage}
          src={image}
          alt={name}
          onClick={navigateHandler}
        />
        <h2 className={style.name}>{name}</h2>
        <h2 className={style.names}>{status}</h2>
        {closeBtn && (
          <button
            className={style.closeButton}
            onClick={() => {
              onClose(id);
            }}
          >
            X
          </button>
        )}
      </div>
      <div className={style.atributes}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
      <h2 className={style.atributesm}>{character.origin.name}</h2>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
