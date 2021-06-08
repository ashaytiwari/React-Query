import React, { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async (id) => {
  console.log(id);
  const res = await fetch(`https://swapi.dev/api/planets/?page=${id}`);
  return res.json();
};

const Planets = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data, status, isPreviousData } = useQuery(
    ["planets", pageNo],
    () => fetchPlanets(pageNo),
    {
      keepPreviousData: true
    }
  );
  console.log(data, status, isPreviousData);

  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>Loading data....</div>}
      {status === "error" && <div>Error in fetching data</div>}
      {status === "success" && (
        <>
          <button
            onClick={() => setPageNo((old) => Math.max(old - 1, 0))}
            disabled={pageNo === 1}
          >
            prev
          </button>{" "}
          <span>{pageNo}</span>
          <button
            onClick={() => {
              if (!isPreviousData && data.next) {
                console.log("alert");
                setPageNo((old) => old + 1);
              }
            }}
            // Disable the Next Page button until we know a next page is available
            disabled={!data.next}
          >
            next
          </button>
          {console.log(pageNo)}
          <div>
            {data.results.map((planet) => (
              <Planet planet={planet} key={planet.name} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
