import React from "react";
//Common filter section
const AllFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Search:{" "}
      <input value={filter | ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};

export default AllFilter;
