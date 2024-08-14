import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css"
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function ModalMenu({setShow , show}) {
  const [t] = useTranslation("global");
  const handleClose = () => setShow(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const raw = JSON.stringify({
      full_name: fullName,
      phone: phone
    });

    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: raw,
      redirect: 'follow'
    };
  
    fetch("https://onemed.uz/api/form", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        handleClose();
        setFullName("");
        setPhone("");
      })
      .catch(error => console.log('error', error));
  };
  

  


  return (
    <>
      <Modal className='modalMenu' show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{border:"none"}}>
        </Modal.Header>
        <div className="modalTitle">
          <h3>Batafsil ma'lumot olish uchun
          formani to'ldiring</h3>
          <p>Siz bilan menejerlarimiz tez orada bog'lanib,
          savollaringizga javob berishadi</p>
        </div>
        <Form className="modalBody" onSubmit={handleSubmit}>
          <label name="name">
            F.I.SH:
          </label>
            <input 
              type="text" 
              placeholder='FISH:' 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <label name="tel">
              Telefon Raqam
            </label>
            <input 
              type="tel" 
              placeholder='+998 --- -- --'
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Jo'natish</button>
        </Form>
      </Modal>
    </>
  );
}

export default ModalMenu;