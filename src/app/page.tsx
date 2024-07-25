"use client";
import { useState } from "react";
import Forms from "./forms";
import ActiveCards from "./active-cards";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>To do list:</h1>
      <Forms setTitle={setTitle} setDescription={setDescription}></Forms>
      <ActiveCards></ActiveCards>
    </main>
  );
}
