import React, { useState } from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async (pageNo) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${pageNo}`);
  return res.json();
};

const People = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data, status, isPreviousData } = useQuery(
    ["people", pageNo],
    () => fetchPeople(pageNo),
    { keepPreviousData: true }
  );
  console.log(data, status);

  return (
    <div>
      <h2>Peoples</h2>
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
          <div>
            {data.results.map((person) => (
              <Person person={person} key={person.name} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default People;
