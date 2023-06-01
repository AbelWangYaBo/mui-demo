import { useParams } from "react-router";

const App = () => {
  const params = useParams();
  // const location = useLocation();
  console.log("sus", location, params);
  return <h1>Loading...</h1>;
};

export default App;
