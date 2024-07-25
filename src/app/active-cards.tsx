"use client";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdEdit, MdDelete, MdOutlineDoneOutline } from "react-icons/md";

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
      Active
      {formDataArray.map((item, index) => (
        <Card style={{ width: "18rem" }} key={index} className="card">  
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary" className="active-card-button">
              <MdEdit />
            </Button>
            <Button variant="primary" className="active-card-button">
              <MdOutlineDoneOutline />
            </Button>
            <Button variant="primary" className="active-card-button">
              <MdDelete />
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
