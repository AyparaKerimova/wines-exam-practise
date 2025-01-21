import React from "react";
import styles from "../assets/css/WineCard.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WishlistContext } from "../App";

const WineCard = ({
  imageUrl,
  oldPrice,
  newPrice,
  name,
  wineId,
  deleteCard,
  addToCard,
  addWish,
}) => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className={`${styles.wineCard} `}>
          <img src={imageUrl} alt={name} />
          <div className={styles.cardDesc}>
            <h3>{name}</h3>
            <h6>${newPrice}</h6>
          </div>
          <div className={styles.hoverBox}>
            <h5>{name}</h5>
            <div className={styles.prices}>
              <h6>${oldPrice}</h6>
              <h4>${newPrice}</h4>
            </div>
            <div className={styles.ratings}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <div className={styles.actions}>
              <button onClick={deleteCard}>
                <i className="fa-solid fa-trash"></i>
              </button>
              <button onClick={addToCard}>
                <i className="fa-solid fa-bag-shopping"></i>
              </button>
              <button onClick={addWish}>
                {wishlist.some((wish) => wish.id === wineId) ? (
                  <i className="fa-solid fa-heart"></i>
                ) : (
                  <i className="fa-regular fa-heart"></i>
                )}
              </button>
              <Link to={`details/${wineId}`}>
                <i className="fa-solid fa-info"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WineCard;
