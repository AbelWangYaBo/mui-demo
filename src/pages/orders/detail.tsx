import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router";
import { useState } from "react";
const App = () => {
  const location = useLocation();
  const params = useParams();
  // useState
  console.log("Orders - props", params, location);
  return (
    <div>
      <h1>Orders Detail: {params.id}</h1>
      <ul>
        <Link to="/orders">Index</Link>
      </ul>
    </div>
  );
};

export default App;
