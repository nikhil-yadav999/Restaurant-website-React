import MainFooter from "./components/Layouts/MainFooter";
import MainNavigation from "./components/Layouts/MainNavigation";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import TakeOut from "./pages/TakeOut";
import Login from "./pages/Login";
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
