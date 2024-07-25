"use client";
import { useState, useEffect } from "react";


export default function ActiveCards() {
  const [formDataArray, setFormDataArray] = useState<
    { title: string; description: string }[]
  >([]);

  useEffect(() => {
    const formData: string | null = localStorage.getItem("formData");
    if (formData) {
      setFormDataArray(JSON.parse(formData));
    }
  }, []);

  console.log("formDataArray", formDataArray);
  return (
    <div>
      {formDataArray.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
