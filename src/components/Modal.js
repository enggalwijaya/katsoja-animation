import React, { useState, } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='Modal' >
       <Button variant="dark" onClick={handleShow} className="text-white d-flex text-center justify-content-center align-item-center " >
        Lihat Semua List
       </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Genre</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Modal-body" >
          <Stack direction="horizontal" gap={1}>
            <a href=""><Badge bg="primary"  >Action</Badge></a>
            <Badge bg="secondary">Game</Badge>
            <Badge bg="success" > Isekai</Badge>
            <Badge bg="danger">SuperPower</Badge>
            <Badge bg="warning" text="dark" > Fantasy </Badge>
            <Badge bg="info" >Adventure</Badge>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onclick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Example;