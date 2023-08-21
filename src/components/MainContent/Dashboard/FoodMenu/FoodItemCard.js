import { useState } from "react";
import "./FoodItemCard.css";
import Card from "../../../UI/Card";
import biryani from '../../../../images/FoodItems/biryani.png'


const FoodItemCard = (props) => {
  const [qty, setQty] = useState(0);

  const addQty = (event) => {
    setQty((prev) => {
      if (prev === 5) {
        alert("You MAX 5 Quantity Only!!!");
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const removeQty = (event) => {
    setQty((prev) => {
      if (prev === 0) return prev;
      else return prev - 1;
    });
  };

  return (
    <div className="food-item-card-container">
      <Card>
        <div className="card-item-img">
          <img src={biryani} alt={props.itemImgAlt} />
        </div>
        <div className="card-item-desc">
          <h3>{props.itemName}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>
        <div className="card-item-operation-container">
          <div className="card-item-price">
            <p>${props.itemPrice}</p>
          </div>
          <div className="card-item-qty-wrapper">
            <button className="item-qty-btn" onClick={removeQty}>
              -
            </button>
            <input
              type="number"
              readOnly
              value={qty}
              className="item-qty-input"
            ></input>
            <button className="item-qty-btn" onClick={addQty}>
              +
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FoodItemCard;
