// Loader.jsx
import React from "react";
import "./Loader.css"; // un styling file

export default function Loader() {
  return (
    <section className="dots-container">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </section>
  );
}
