"use client";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
interface ActiveCardsComponentProps {
  title: string;
  description: string;
}

export default function ActiveCards({
  title,
  description,
}: ActiveCardsComponentProps) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">
          Edit
        </Button>
        <Button variant="primary">Done</Button>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>
  );
}
