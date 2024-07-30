"use client";
import { useState, useEffect } from "react";
import Forms from "./forms";
import ActiveCards from "./active-cards";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.css";
import DoneCards from "./done-cards";

export default function Home() {
  const [data, setData] = useState<{ title: string; description: string }[]>(
    []
  );
  const [doneTasks, setDoneTasks] = useState<
    { title: string; description: string }[]
  >([]); ;

  useEffect(() => {
    const storedData = localStorage.getItem("doneTasks");
    if (storedData) {
      setDoneTasks(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <main className="main">
      <h1>To do list:</h1>
      <Forms data={data} setData={setData} />
      <div className="cards-container">
        <ActiveCards
          data={data}
          setData={setData}
          doneTasks={doneTasks}
          setDoneTasks={setDoneTasks}
        />
        <DoneCards doneTasks={doneTasks} />
      </div>
    </main>
  );
}
