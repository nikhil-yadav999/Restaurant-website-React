import MainFooter from "./components/Layouts/MainFooter";
import MainNavigation from "./components/Layouts/MainNavigation";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/takeout-order">
          <h1>Online order page</h1>
        </Route>
        <Route path="/login">
          <h1>Member login</h1>
        </Route>
      </Switch>
      <MainFooter />
    </>
  );
}

export default App;
