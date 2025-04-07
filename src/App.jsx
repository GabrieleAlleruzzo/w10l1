import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Main from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./assets/MyComponents/MyNav.jsx";
import Welcome from "./assets/MyComponents/Welcome.jsx";
import MyFooter from "./assets/MyComponents/MyFooter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyNav />
      <main className=" d-flex align-items-center flex-grow-1">
        <Welcome />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
