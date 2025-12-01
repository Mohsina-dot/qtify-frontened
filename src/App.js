import React from "react";
import Navbar from "./components/Navbar.jsx";
import Navbar from "./components/Navbar.module.css";
import Hero from "./components/Hero.jsx";
import Hero from "./components/Hero.module.css";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to QTify</h1>
      <SongCard
        image="https://via.placeholder.com/180"
        title="Sample Song"
        subtitle="Artist Name"
      />
    </div>
  );
}

export default App;
