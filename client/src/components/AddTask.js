import React, { useState } from "react";
import { Col, Modal, ModalBody, Row } from "reactstrap";
import { ModalHeader } from "reactstrap";
import StatusBar from "./StatusBar";

const AddTask = ({ color, onClick, addTask }) => {
  const [modal, setModal] = useState(false);
  const [taskId, setId] = useState("");
  const [priority, setPriority] = useState("");
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [status,setStatus] = useState('Pending');

  const onSubmitHandler = (event) => {
    console.log(description);
    event.preventDefault();
    if (!name) {
      alert("Please enter the task name");
      return;
    }
    
    addTask({ name, description });
    setName("");
    setDescription("");
  };
  return (
    <>
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Add Task</ModalHeader>
        <ModalBody>
          <form className="add-form" onSubmit={onSubmitHandler}>
            <Row>
              <Col lg={12}>
                <div className="form-control">
                  <label>Task Id</label>
                  <input
                    type="text"
                    placeholder="Enter Task id"
                    value={taskId}
                    onChange={(event) => setId(event.target.value)}
                  ></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label>Task Name</label>
                  <input
                    type="text"
                    placeholder="Enter Task name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  ></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label>Priority</label>
                  <input
                    type="text"
                    placeholder="Enter Priority"
                    value={priority}
                    onChange={(event) => setPriority(event.target.value)}
                  ></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label>Owner Name</label>
                  <input
                    type="text"
                    placeholder="Enter Owner Name"
                    value={owner}
                    onChange={(event) => setOwner(event.target.value)}
                  ></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label>Description</label>
                  <input
                    type="text"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  ></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label>Start Date</label>
                  <input
                    type="date"
                    placeholder="Enter Start Date"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                  ></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label>End Date</label>
                  <input
                    type="date"
                    placeholder="Enter End Date"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                  ></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label>Status</label>
                  <StatusBar status={status} setStatus={setStatus} />
                </div>
              </Col>
            </Row>
           
            <button style={{ backgroundColor: color }} className="btn">
              Create Task
            </button>
          </form>
        </ModalBody>
      </Modal>
      <button
        onClick={() => setModal(true)}
        style={{ backgroundColor: color }}
        className="btn"
      >
        Add
      </button>
    </>
  );
};

AddTask.defaultProps = {
  color: "steelblue",
};

export default AddTask;
