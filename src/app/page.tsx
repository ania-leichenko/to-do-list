"use client";
import { useState } from "react";
import Forms from "./forms";
import ActiveCards from "./active-cards";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.css"

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  return (
    <main className="main">
      <h1>To do list:</h1>
      <Forms setTitle={setTitle} setDescription={setDescription}></Forms>
      <div className="cards-container">
        <ActiveCards></ActiveCards>
        <div className="card">done cards</div>
      </div>
    </main>
  );
}
