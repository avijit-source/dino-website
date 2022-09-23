import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ModalComp = ({dino}) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button className="btn btn-light text-dark" onClick={onOpenModal}>View Details</button>
      {open && (
        <Modal open={open} onClose={onCloseModal} center>
        <h5>Name: {dino.name}</h5>
        <p>timeline: {dino.timealive}</p>
        <p>Found In: {dino.foundin} <img className="img-fluid" src={`https://countryflagsapi.com/png/${dino.foundin}`} width="50px" height="20px" /></p>
        <p>Taxonomy: {dino.taxonomy}</p>
        <p>Named By: {dino.namedBy}</p>
        <p>Prounciation <i>{dino.pronunciation}</i></p>
        <p>Meaning of name: {dino.namemeaning}</p>
        <img className="img-fluid" src={dino.dinoimg} width="300px" height="250px" />
        <p>type of dinosaur: {dino.typeofdinosaur}</p>
        <p>length: {dino.dinolength}</p>
      </Modal>
      )}
    </div>
  );
}

export default ModalComp