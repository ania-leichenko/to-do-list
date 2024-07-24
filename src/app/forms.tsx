"use client";
import { FormEvent, ChangeEvent, useState } from "react";

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
    setTitleValue("");
    setDescriptionValue("") 
  }

  return (
    <form onSubmit={buttonClick}>
      <p>Title</p>
      <input name="title" value={titleValue} onChange={handleChange} />
      <p>Description</p>
      <input name="description" value={descriptionValue} onChange={handleChange} />
      <p></p>
      <button type="submit">Publish</button>
    </form>
  );
}
