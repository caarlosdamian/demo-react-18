import React from "react";

export const Home = ({ data }) => {
  return (
    <div>
      <h1>HomePage</h1>
      <hr />
      {JSON.stringify(data)}
    </div>
  );
};
