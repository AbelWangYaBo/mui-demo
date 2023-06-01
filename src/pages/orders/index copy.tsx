import { Link, redirect } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";

const App = (props) => {
  console.log("Orders - Index - props", props);
  const navigate = useNavigate();
  const handleNavigate = (path?: string | undefined) => {
    console.log(111, "path", path);

    navigate(path ? path : `/orders/${Math.ceil(Math.random() * 10000)}`, {
      replace: true,
      state: {
        id: 1,
        title: 2,
        content: 3,
      },
    });
    // <Navigate to="/" replace={true}></Navigate>;
    return;
    return <Navigate to="/index"></Navigate>;
    return redirect("/index");
  };
  return (
    <div>
      <h1>Orders Index</h1>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
          <li key={d}>
            <Link to={`/orders/${d}`}>{d}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => handleNavigate("")}>按钮</button>
      <button onClick={() => handleNavigate("/")}>首页</button>
    </div>
  );
};



document.title = "Orders";
export default App;