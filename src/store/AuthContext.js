import React, { useEffect, useState } from "react";
import { ProductContextProvider } from "./ProductContext";

const usersData = [
  {
    userId: 1,
    userName: "Shaktiman",
    userEmail: "shakti@damato.com",
    userPassword: "admin@123",
    userRole: "ADMIN",
  },
  {
    userId: 2,
    userName: "Kautya Mahakal",
    userEmail: "kautya@damato.com",
    userPassword: "kautya@123",
    userRole: "CUST",
  },
  {
    userId: 3,
    userName: "Shakal",
    userEmail: "shakal@damato.com",
    userPassword: "taklu@123",
    userRole: "CUST",
  },
];

const AuthContext = React.createContext({
  userName: "",
  isLoggedIn: false,
  loggenInUserRole: "",
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loggedInUserRole, setLoggedInUserRole] = useState("");

  useEffect(() => {
    const userLoggedInFlag = localStorage.getItem("isLoggedIn");

    if (userLoggedInFlag === "1") {
      const loggedInUser = localStorage.getItem("loggedInUseName");
      const userRole = usersData
        .filter((x) => x.userName === loggedInUser)
        .map((x) => {
          return x.userRole;
        });
      setLoggedInUser(loggedInUser);
      setLoggedInUserRole(userRole);
      setIsLoggedIn(true);
      console.log(userRole)
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUseName");
    setIsLoggedIn(false);
    setLoggedInUser("");
    setLoggedInUserRole("");
  };

  const loginHandler = (email, password) => {
    console.log("Login Handler");
    const userRecord = usersData.filter(
      (x) =>
        x.userEmail.toString() === email.toString() &&
        x.userPassword.toString() === password.toString()
    );

    if (userRecord.length === 1) {
      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("loggedInUseName", userRecord[0].userName);
      setIsLoggedIn(true);
      setLoggedInUser(userRecord[0].userName);
      setLoggedInUserRole(userRecord[0].userRole);
      return true;
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userName: loggedInUser,
        isLoggedIn: isLoggedIn,
        loggenInUserRole: loggedInUserRole,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
    <ProductContextProvider>
      {props.children}
    </ProductContextProvider>
    </AuthContext.Provider>
  );
};

export default AuthContext;
