import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Planets from "./components/Planets";
import Peoples from "./components/People";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("planets");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <Peoples />}
        </div>
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
