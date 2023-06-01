import { useParams, useLocation } from "react-router";
import { Route, Router } from "react-router-dom";

const App = (props) => {
  const params = useParams();
  console.log("sus", props.location, params);
  return <h1>Loading...</h1>;
};

export default App;
