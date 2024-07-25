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
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label name="title" value={titleValue} onChange={handleChange} />
        <Form.Control type="email" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label
          name="description"
          value={descriptionValue}
          onChange={handleChange}
        />
        <Form.Control type="email" placeholder="Description" />
      </Form.Group>
      <Button type="submit">Publish</Button>
    </Form>
  );
}
