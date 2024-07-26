"use client";
import { FormEvent, ChangeEvent, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface FormComponentProps {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
}

export default function Forms({
  setTitle,
  setDescription,
}: FormComponentProps) {
  const [titleValue, setTitleValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");
  const [data, setData] = useState<{ title: string; description: string }[]>(
    []
  );

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name === "title") {
      setTitleValue(value);
    } else if (name === "description") {
      setDescriptionValue(value);
    }
  }

  function buttonClick(event: FormEvent) {
    event.preventDefault();
    setTitle(titleValue);
    setDescription(descriptionValue);

    const newData = { title: titleValue, description: descriptionValue };
    const updatedData = [...data, newData];

    setData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));

    setTitleValue("");
    setDescriptionValue("");
  }

  return (
    <Form onSubmit={buttonClick} className="forms">
      <Form.Group className="mb-3" controlId="formGroupTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={titleValue}
          onChange={handleChange}
          placeholder="Title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={descriptionValue}
          onChange={handleChange}
          placeholder="Description"
        />
      </Form.Group>
      <Button type="submit">Publish</Button>
    </Form>
  );
}
