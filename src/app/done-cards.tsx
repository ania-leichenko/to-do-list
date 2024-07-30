"use client";
import Card from "react-bootstrap/Card";
interface DoneCardsProps {
  doneTasks: { title: string; description: string }[];
}

export default function DoneCards({ doneTasks }: DoneCardsProps) {
  return (
    <div>
      Done Tasks
      {doneTasks.map((item, index) => (
        <Card style={{ width: "18rem" }} className="card" key={index}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
