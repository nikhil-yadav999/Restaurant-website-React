import MainFooter from "./components/Layouts/MainFooter";
import MainNavigation from "./components/Layouts/MainNavigation";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import TakeOut from "./components/TakeOut/TakeOut";
import Login from "./components/TakeOut/Components/Login/Login";
import { useState } from "react";

function App() {
  const [isOnTakeout, setIsOnTakeout] = useState(false);

  const setNavBarHandler = (input) => {
    if (input === "onPage") {
      setIsOnTakeout(true);
    } else {
      setIsOnTakeout(false);
    }
  };

  return (
    <>
      {!isOnTakeout && <MainNavigation />}
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/takeout-order">
          <TakeOut onTakeOut={setNavBarHandler} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <MainFooter />
    </>
  );
}

export default App;
