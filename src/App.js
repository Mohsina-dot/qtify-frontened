import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import SongCard from "./components/SongCard";

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
