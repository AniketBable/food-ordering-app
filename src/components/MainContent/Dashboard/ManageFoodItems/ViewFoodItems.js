import { useContext } from "react";
import "./ViewFoodItems.css";
import ProductContext from "../../../../store/ProductContext";
import AddFoodItem from "./AddFoodItem";

const ManageFoodItems = (props) => {
    const productCtx = useContext(ProductContext);
    const foodItems = productCtx.getAllProduct();
     
  return (
    <div className="manage-foodItems-container">
        <div className="add-foodItem-form-container">
            <AddFoodItem />
        </div>
        <table className="manage-foodItems-table">
          <thead>
            <tr>
              <th>Item Id</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((item, key) => (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.foodItemName}</td>
                <td>${item.foodItemPrice}</td>
                <td>
                  <button onClick={() => productCtx.deleteProductById(item.id)} >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default ManageFoodItems;
