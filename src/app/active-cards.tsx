"use client";
import { ChangeEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdEdit, MdDelete, MdOutlineDoneOutline } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

interface ActiveCardsProps {
  data: { title: string; description: string }[];
  setData: React.Dispatch<
    React.SetStateAction<{ title: string; description: string }[]>
  >;
  doneTasks: { title: string; description: string }[];
  setDoneTasks: React.Dispatch<
    React.SetStateAction<{ title: string; description: string }[]>
  >;
}

export default function ActiveCards({
  data,
  setData,
  doneTasks,
  setDoneTasks,
}: ActiveCardsProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");
  const [editDescription, setEditDescription] = useState<string>("");

  function handleEdit(index: number) {
    setShowModal(true);
    setCurrentIndex(index);
    setEditTitle(data[index].title);
    setEditDescription(data[index].description);
  }
  function handleClose() {
    setShowModal(false);
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name === "title") {
      setEditTitle(value);
    } else if (name === "description") {
      setEditDescription(value);
    }
  }
  function handleSave() {
    if (currentIndex !== null) {
      const updatedData = data.map((item, index) =>
        index === currentIndex
          ? { title: editTitle, description: editDescription }
          : item
      );

      setData(updatedData);
      localStorage.setItem("formData", JSON.stringify(updatedData));
      setShowModal(false);
    }
  }
  function handleDone(index: number) {
    const updatedData = data.filter((_, i) => i !== index);
    const doneTask = data[index];
    if (doneTask) {
      const updateDoneTask = [...doneTasks, doneTask];
      setDoneTasks(updateDoneTask);
      localStorage.setItem("doneTasks", JSON.stringify(updateDoneTask));
      setData(updatedData);
      localStorage.setItem("formData", JSON.stringify(updatedData));
    }
  }

  function handleDelete(index: number) {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
  }

  return (
    <div>
      <div>Active Tasks</div>
      {data.map((item, index) => (
        <Card style={{ width: "18rem" }} key={index} className="card">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button
              className="active-card-button"
              onClick={() => handleEdit(index)}
            >
              <MdEdit />
            </Button>
            <Button
              className="active-card-button"
              onClick={() => handleDone(index)}
            >
              <MdOutlineDoneOutline />
            </Button>
            <Button
              className="active-card-button"
              onClick={() => handleDelete(index)}
            >
              <MdDelete />
            </Button>
          </Card.Body>
        </Card>
      ))}

      <Modal show={showModal} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={editTitle}
                onChange={handleChange}
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={editDescription}
                onChange={handleChange}
                placeholder="Description"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
