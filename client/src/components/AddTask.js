import React, { useState } from "react";
import { Col, Modal, ModalBody, Row } from "reactstrap";
import { ModalHeader } from "reactstrap";

const AddTask = ({ color, onClick ,addTask}) => {
  const [modal, setModal] = useState(false);
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');

  const onSubmit = (e)=>{
    e.preventDefault()

    if(!name){
      alert('Please enter the name')
      return

    }
    addTask({name,description})
    setName('');
    setDescription('');
}
  return (
    <>
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Add Task</ModalHeader>
        <ModalBody>
          <form className="add-form" onSubmit={onSubmit}>
            <Row>
              <Col lg={12}>
                <div className="form-control">
                  <label>Task Name</label>
                  <input type="text" placeholder="Enter task name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-control">
                  <label>Description</label>
                  <input type="text" placeholder="Enter description" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
                </div>
              </Col>
            </Row>
          </form>
          <button style={{ backgroundColor: color }} className="btn">
            Submit
          </button>
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
