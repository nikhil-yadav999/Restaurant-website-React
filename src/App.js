import MainFooter from "./components/Layouts/MainFooter";
import MainNavigation from "./components/Layouts/MainNavigation";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import TakeOut from "./components/TakeOut/TakeOut";
import { useState } from "react";

function App() {
  const [isOnTakeout, setIsOnTakeout] = useState(false);

  const setNavBarHandler = () => {
    setIsOnTakeout(true);
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
          <h1>Member login feature - work in progress</h1>
        </Route>
      </Switch>
      <MainFooter />
    </>
  );
}

export default App;
