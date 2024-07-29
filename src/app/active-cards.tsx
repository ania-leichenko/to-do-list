"use client";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdEdit, MdDelete, MdOutlineDoneOutline } from "react-icons/md";

interface ActiveCardsProps {
  data: { title: string; description: string }[];
  setData: React.Dispatch<
    React.SetStateAction<{ title: string; description: string }[]>
  >;
}

export default function ActiveCards({ data, setData }: ActiveCardsProps) {
  function handleDelete(index: number) {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
  }

  return (
    <div>
      Active Tasks
      {data.map((item, index) => (
        <Card style={{ width: "18rem" }} key={index} className="card">
          <Card.Body>
            <Card.Title title="1">{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary" className="active-card-button">
              <MdEdit />
            </Button>
            <Button variant="primary" className="active-card-button">
              <MdOutlineDoneOutline />
            </Button>
            <Button
              variant="primary"
              className="active-card-button"
              onClick={() => handleDelete(index)}
            >
              <MdDelete />
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
