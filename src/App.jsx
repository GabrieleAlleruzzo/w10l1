import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Main from "react";

// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./assets/MyComponents/MyNav.jsx";
import Welcome from "./assets/MyComponents/Welcome.jsx";
import MyFooter from "./assets/MyComponents/MyFooter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100">
      {" "}
      {/* Contenitore flex verticale che occupa almeno tutta l'altezza */}
      <header>
        <MyNav />
      </header>
      <main className="flex-grow-1">
        {" "}
        {/* Main si espande per occupare lo spazio disponibile */}
        <Welcome />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
