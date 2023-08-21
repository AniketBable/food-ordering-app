import "./MainContainer.css";
import LoginForm from "./LoginForm/LoginForm";
import { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import Dashboard from "./Dashboard/Dashboard";

const MainContainer = (props) => {
  const authCtx = useContext(AuthContext);    
  return (
    <section className='main-container'>
      {!authCtx.isLoggedIn && <LoginForm />}
      {authCtx.isLoggedIn && <Dashboard viewName = {props.viewName}/>}
    </section>
    
  );
};

export default MainContainer;
