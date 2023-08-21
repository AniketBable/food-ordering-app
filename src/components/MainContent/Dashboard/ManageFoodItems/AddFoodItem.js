import { useContext, useEffect, useReducer, useState } from "react";
import "./AddFoodItem.css";
import ProductContext from "../../../../store/ProductContext";

const itemNameReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.val, isValid: action.val.length > 4 };
  return { value: "", isValid: false };
};
const itemPriceReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.val, isValid: /^\d+$/.test(action.val) };
  return { val: "", isValid: false };
};

const AddFoodItem = (props) => {
  const productCtx = useContext(ProductContext);
  const [isFormValid, setFormIsValid] = useState(false);

  const [itemNameState, dispatchItemName] = useReducer(itemNameReducer, {
    value: "",
    isValid: false,
  });

  const [itemPriceState, dispatchItemPrice] = useReducer(itemPriceReducer, {
    value: "",
    isValid: false,
  });

  const { value: itemNameValue, isValid: isItemNameValid } = itemNameState;
  const { value: itemPriceValue, isValid: isItemPriceValid } = itemPriceState;

  useEffect(() => {
    if (isItemNameValid && isItemPriceValid) setFormIsValid(true);
    else setFormIsValid(false);
  }, [isItemNameValid, isItemPriceValid]);

  const onChangeItemNameHandler = (event) => {
    dispatchItemName({ type: "USER_INPUT", val: event.target.value });
  };

  const onChangeItemPriceHandler = (event) => {
    dispatchItemPrice({ type: "USER_INPUT", val: event.target.value });
  };

  const onSubmitAddHandler = (event) => {
    event.preventDefault();
    if (isFormValid) {
      const newProduct = {
        foodItemName: itemNameValue,
        foodItemPrice: itemPriceValue,
      };
      productCtx.addProduct(newProduct);
      dispatchItemName({ type: "USER_INPUT", val: "" });
      dispatchItemPrice({ type: "USER_INPUT", val: "" });
      alert("Item Added!!");
    } else {
      alert("Invalid Data!!!");
    }
  };

  return (
    <div className="add-foodItem-form-container">
      <form onSubmit={onSubmitAddHandler}>
        <div className="form-controls">
          <input
            type="text"
            placeholder="Enter Item Name"
            value={itemNameValue}
            onChange={onChangeItemNameHandler}
          />
        </div>
        <div className="form-controls">
          <input
            type="text"
            placeholder="Enter Item Price"
            value={itemPriceValue}
            onChange={onChangeItemPriceHandler}
          />
        </div>
        <div className="form-controls">
          <button className="add-foodItem-btn">ADD ITEM</button>
        </div>
      </form>
    </div>
  );
};

export default AddFoodItem;
