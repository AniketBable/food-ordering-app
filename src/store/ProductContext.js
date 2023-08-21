import React, { useState } from "react";

const foodItems = [
  {
    id: 1,
    foodItemName: "Chicken Biryani",
    foodItemPrice: 250,
  },
  {
    id: 2,
    foodItemName: "Chicken Kabab",
    foodItemPrice: 350,
  },
  {
    id: 3,
    foodItemName: "Chicken Momos",
    foodItemPrice: 120,
  },
];

const ProductContext = React.createContext({
  addProduct: (product) => {},
  updateProduct: (id, foodItemName, foodItemPrice) => {},
  deleteProductById: (id) => {},
  findProductById: (id) => {},
  getAllProduct: () => {},
});

export const ProductContextProvider = (props) => {
  const [foodItemState, setFoodItemState] = useState(foodItems);

  const addProduct = (product) => {
    let newId = 1;
    if (foodItemState.length > 0) {
      newId = foodItemState[foodItemState.length - 1].id + 1;
    }
    const newProduct = {
      id: newId,
      ...product,
    };
    setFoodItemState((prev) => {
      return [...prev, newProduct];
    });
    console.log(foodItemState);
  };

  const deleteProductById = (id) => {
    const index = foodItemState.findIndex((x) => x.id === id);

    setFoodItemState((prevState) => {
      const newRecordList = [...prevState];
      newRecordList.splice(index, 1);
      return newRecordList;
    });
  };

  const getAllProduct = () => {
    if (foodItemState.length > -1) {
      return foodItemState;
    } else {
      return [{}];
    }
  };
  const findProductById = (id) => {
  //   const index = getProductIndexById(id);
  //   if (index > -1) {
  //     return foodItems[index];
  //   } else {
  //     return {};
  //   }
  };
  const updateProduct = (id, foodItemName) => {
  //   const index = getProductIndexById(id);
  //   if (index > -1) {
  //     foodItems[index].id = id;
  //     foodItems[index].foodItemName = foodItemName;
  //     foodItems[index].foodItemPrice = foodItemPrice;
  //     return true;
  //   } else {
  //     return false;
  //   }
  };

  return (
    <ProductContext.Provider
      value={{
        addProduct: addProduct,
        updateProduct: updateProduct,
        deleteProductById: deleteProductById,
        findProductById: findProductById,
        getAllProduct: getAllProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
