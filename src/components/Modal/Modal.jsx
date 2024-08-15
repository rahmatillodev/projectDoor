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
          <h3>{t('modal.form')}</h3>
          <p>{t('modal.contact')}</p>
        </div>
        <Form className="modalBody" onSubmit={handleSubmit}>
          <label name="name">
            {t('modal.name')}
          </label>
            <input 
              type="text" 
              placeholder={t('modal.namePlaceholder')} 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <label name="tel">
              {t('modal.number')}
            </label>
            <input 
              type="tel" 
              placeholder={t('modal.numberPlaceholder')+" --- -- --"}
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">{t('modal.detail')}</button>
        </Form>
      </Modal>
    </>
  );
}

export default ModalMenu;