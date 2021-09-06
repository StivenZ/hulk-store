import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AdminPage from "./Pages/AdminPage";
import VendorPage from "./Pages/VendorPage";
import { AuthRoute } from "./components/AuthRoute";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <AuthRoute exact path="/store" component={VendorPage} />
        <AuthRoute exact path="/admin" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
