'use client'
import React from 'react'
import useQuiosco from '../../../hooks/useQuiosco'
import ResumenProducto from '../../../components/ResumenProducto'
import Modal from "react-modal";
import ModalProducto from '../../../components/ModalProducto';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('body');
export default function Resumen() {
    const {pedido,modal}= useQuiosco()

  return (
    <>
    {modal && 
            
            <Modal
              isOpen={modal}
              style={customStyles}
            >
                <ModalProducto/>
              </Modal>
          }
     <h1 className='text-4xl font-black'>Resumen</h1>
     <p className='text-2xl my-10'>Revisa tu Pedido:</p>   
        {pedido.length===0?(
            <p>No se encuentran pedidos registrados</p>
        ):(pedido.map(producto=>(
            <ResumenProducto key={producto.id} producto={producto}/>
        )))}
    </>
  )
}
