import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css"
function ModalMenu({setShow , show}) {

  
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal className='modalMenu' show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        <Modal.Header closeButton style={{border:"none"}}>
        </Modal.Header>
        <div className="modalTitle">
          <h3>Batafsil ma’lumot olish uchun
          formani to’ldiring</h3>
          <p>Siz bilan menejerlarimiz tez orada bog’lanib,
          savollaringizga javob berishadi</p>
        </div>
        <Form className="modalBody">
          <label name="name">
            F.I.SH:
          </label>
            <input type="text" placeholder='FISH:' />
            <label name="tel">
              Telefon Raqam
            </label>
            <input type="text" placeholder='+998 --- -- --'/>
            <button>Jo'natish</button>
        </Form>
      </Modal>
    </>
  );
}

export default ModalMenu;