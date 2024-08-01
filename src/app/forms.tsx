"use client";
import { FormEvent, ChangeEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
interface FormsProps {
  data: { title: string; description: string }[];
  setData: React.Dispatch<
    React.SetStateAction<{ title: string; description: string }[]>
  >;
}

export default function Forms({ data, setData }: FormsProps) {
  let taskField = React.createRef();
  const [titleValue, setTitleValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");

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

    const newData = { title: titleValue, description: descriptionValue };
    const updatedData = [...data, newData];

    setData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));

    setTitleValue("");
    setDescriptionValue("");
  }
  const onKeyDown = () => {
  };

  return (
    <Form onSubmit={buttonClick} className="forms" onKeyDown={onKeyDown}>
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
      <Button className="form-btn" type="submit">Publish</Button>
    </Form>
  );
}
