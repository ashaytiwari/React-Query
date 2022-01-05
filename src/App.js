import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import UserProfile from "./components/UserProfile/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Header />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <UserProfile />}

      <Counter />
    </>
  );
}

export default App;
