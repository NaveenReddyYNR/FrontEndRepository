import React from "react";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <React.Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      {isAuthenticated && <Counter />}
    </React.Fragment>
  );
}

export default App;
