import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './popmodal.css'

const PopModal = ( props ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button href="" className='project_button' onClick={showModal}>
        <svg t="1687730915571" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2419" width="16" height="16"><path d="M313.6 170.666667h469.333333c27.733333 0 42.666667 14.933333 42.666667 42.666666v512c0 8.533333-4.266667 17.066667-10.666667 23.466667l-36.266666 36.266667c-2.133333 2.133333-6.4 4.266667-6.4 2.133333-2.133333 0-2.133333-4.266667-2.133334-6.4v-539.733333c0-4.266667-2.133333-6.4-4.266666-10.666667s-6.4-4.266667-10.666667-4.266667h-398.933333c-8.533333 0-17.066667 4.266667-23.466667 10.666667l-36.266667 36.266667c-2.133333 2.133333-4.266667 6.4-2.133333 6.4 0 2.133333 4.266667 2.133333 6.4 2.133333h398.933333c4.266667 0 6.4 2.133333 10.666667 4.266667s4.266667 6.4 4.266667 10.666666v539.733334c0 4.266667-2.133333 6.4-4.266667 10.666666s-6.4 4.266667-10.666667 4.266667H213.333333c-4.266667 0-6.4-2.133333-10.666666-4.266667s-4.266667-6.4-4.266667-10.666666v-554.666667c0-8.533333 4.266667-17.066667 10.666667-23.466667l78.933333-78.933333c6.4-4.266667 14.933333-8.533333 25.6-8.533333z" p-id="2420" fill="#ffffff"></path></svg>
            &nbsp;BibTex
      </button>
      <Modal 
        title="BibTex" 
        open={isModalOpen} 
        onCancel={handleCancel}
        width={1000}
        footer={
          [
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>
          ]
        }
        >
        <div className='popModalBG'>
          <p>{props.inproceeding}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.title}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.author}</p>
          {props.booktitle && (
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.booktitle}</p>
          )}
          {props.journal && (
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.journal}</p>
          )}
          {props.volume && (
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.volume}</p>
          )}
          {props.number && (
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.number}</p>
          )}
          {props.pages && (
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.pages}</p>
          )}
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.year}</p>
          {props.numpages && (
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.numpages}</p>
          )}
          {props.address && (
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.address}</p>
          )}
          {props.location && (
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.location}</p>
          )}
          <p>{'}'}</p>
        </div>
      </Modal>
    </>
  );
};
export default PopModal;