import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAllRestaurantsQuery } from "../store/apiSlice";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const { data, isLoading } = useGetAllRestaurantsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>Data not loaded</div>;
  }
  console.log(data);
  return (
    <div className="home-page">
      <h1>Restaurante in Cluj-Napoca</h1>
      <div className="restaurants-container">
        <ul>
          {data.map((restaurant) => (
            <li key={restaurant.id}>
              <Link to={`/restaurants/${restaurant.id}`}>
                <h3>{restaurant.name}</h3>
                <div key={restaurant.id}>
                  <img src={restaurant.image} alt={restaurant.name} />
                  <span>{restaurant.schedule}</span>
                  <span>{restaurant.minimum_order}</span>
                  <span>{restaurant.maximum_distance}</span>
                  <div className="delivery">
                    <div>
                      <FontAwesomeIcon icon={faMotorcycle} />
                      <span>{restaurant.delivery_fee}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faMotorcycle} />
                      <span>{restaurant.extra_delivery_fee}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
