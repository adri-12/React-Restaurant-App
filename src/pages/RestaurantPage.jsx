import { useState } from "react";
import { useGetRestaurantQuery } from "../store/apiSlice";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const { data: restaurant, isLoading } = useGetRestaurantQuery(restaurantId);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [getItem, getSelcetedItem] = useState(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const openMenuItemPopup = (menu) => {
    setSelectedMenuItem(menu);
  };

  const closeMenuItemPopup = () => {
    setSelectedMenuItem(null);
  };
  return (
    <div className="restaurant-page">
      <div className="restaurant-header">
        <div
          className="restaurant-image"
          style={{ backgroundImage: `url(${restaurant.image})` }}
        >
          <h1>{restaurant.name}</h1>
          <h2>{restaurant.address}</h2>
        </div>
      </div>

      <div className="meniu-container">
        {restaurant.menu.map((meniuItem, id) => (
          <div key={id} onClick={() => openMenuItemPopup(meniuItem)}>
            <div className="meniu-items">
              <div className="meniu-description">
                <h3>{meniuItem.name}</h3>
                <p>{meniuItem.description}</p>
                <span>{meniuItem.price}</span>
              </div>
              <div className="meniu-image">
                <img src={meniuItem.image} alt={meniuItem.name} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMenuItem && (
        <div className="meniu-item-popup">
          <div className="item-container">
            <div className="close-icon-container">
              <img src={selectedMenuItem.image} alt={selectedMenuItem.name} />
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={closeMenuItemPopup}
              />
            </div>
            <div className="item-selection">
              <h3>{selectedMenuItem.name}</h3>
              <span>{selectedMenuItem.price}</span>
              <p>{selectedMenuItem.description}</p>
            </div>
            <button className="buy-btn">
              Adauga in cos {selectedMenuItem.price}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;
