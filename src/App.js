import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Header from "./pages/Header/Header";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/Products/Products";
import Welcome from "./pages/Welcome/Welcome";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Switch>
            <Route path={"/"} exact>
              <Redirect to={"/welcome"} />
            </Route>
            <Route path={"/welcome"}>
              <Welcome />
            </Route>
            <Route path={"/products"} exact>
              <Products />
            </Route>
            <Route path={"/products/:id"}>
              <ProductDetails />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
