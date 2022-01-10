import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import NotFound from "./pages/NotFound";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to={"/quote"} />
          </Route>
          <Route path="/quote" exact>
            <AllQuotes />
          </Route>
          <Route path="/quote/:quoteId">
            <QuoteDetails />
          </Route>
          <Route path="/new-quote">
            <NewQuotes />
          </Route>
          <Route path={"*"}>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
