import React, { useContext } from "react";
import "./Nav.css";
import AuthContext from "../../store/AuthContext";

const Nav = (props) => {
  const authCtx = useContext(AuthContext);

  const changeView = (event) => {
    if (event.target.id === "viewProducts") {
      props.setView("products");
    } else if (event.target.id === "manageProducts")
      props.setView("manageProducts");
  };
  return (
    <nav>
      <div className="nav">
        <div className="nav-logo-wrapper">
          <h2 className="logo">Damato</h2>
        </div>
        {authCtx.isLoggedIn && (
          <div className="nav-items-wrapper">
            <div className="nav-item">
              <button id="viewProducts" onClick={changeView}>
                Products
              </button>
            </div>
            {authCtx.loggenInUserRole[0] === 'ADMIN' &&
            <div className="nav-item">
              <button id="manageProducts" onClick={changeView}>
                Manage Product
              </button>
            </div>}
            <div className="nav-item">
              <button onClick={authCtx.onLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
