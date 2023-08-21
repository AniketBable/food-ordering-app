import "./FoodItems.css";
import FoodItemCard from "./FoodItemCard";
import { useContext } from "react";
import ProductContext from "../../../../store/ProductContext";

const FoodItems = (props) => {
  const productCtx = useContext(ProductContext);
 const foodItems = productCtx.getAllProduct();
  return (
    <div className="foodItems-wrapper">
      {foodItems.map((item, key) => (
        <FoodItemCard
          key={item.id}
          itemName={item.foodItemName}
          itemPrice={item.foodItemPrice}
          itemImgAlt={item.foodItemName}
        />
      ))}
    </div>
  );
};

export default FoodItems;
