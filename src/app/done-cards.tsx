"use client";
import Card from "react-bootstrap/Card";

export default function DoneCards() {
  return (
    <div>
      Done Tasks
     
        <Card style={{ width: "18rem" }}  className="card">
          <Card.Body>
            <Card.Title>1</Card.Title>
            <Card.Text>2</Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
}
