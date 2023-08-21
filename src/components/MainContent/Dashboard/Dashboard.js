import React from 'react';
import './Dashboard.css';
import FoodItems from './FoodMenu/FoodItems';
import ManageFoodItems from './ManageFoodItems/ViewFoodItems';
const Dashboard = props => {
 
  return (
      <React.Fragment>
        {props.viewName === '' && <h1>Welcome</h1>}
        {props.viewName === 'products' && <FoodItems />}
        {props.viewName === 'manageProducts' && <ManageFoodItems />}
      </React.Fragment>
    );
}

export default Dashboard;