import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Main from "react";

// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./assets/MyComponents/MyNav.jsx";
import Welcome from "./assets/MyComponents/Welcome.jsx";
import MyFooter from "./assets/MyComponents/MyFooter.jsx";
import AllTheBooks from "./assets/MyComponents/AllTheBooks.jsx";
import BookList from "./assets/MyComponents/BookList.jsx";
// per funzionare l'import di fantasy deve stare cosi, non so perché
import fantasy from "../src/assets/Data/fantasy.json";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {" "}
      <header>
        <MyNav />
      </header>
      <main className="flex-grow-1 m-5">
        {/*  <AllTheBooks />*/}
        <Welcome />
        <BookList books={fantasy} />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
