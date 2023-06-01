import { useEffect } from "react";
import { useRoutes } from "react-router";

import { routes } from "./router";

function App(props) {
  useEffect(() => {
    console.log("props", props.location);
  }, [props.location]);

  const element = useRoutes(routes);
  return element;
}

export default App;
