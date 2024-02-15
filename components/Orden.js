import Image from 'next/image'
import React from 'react'
import { formatearDinero } from '../helpers'
import axios from 'axios'
import { toast } from 'react-toastify'
import useQuiosco from '../hooks/useQuiosco'
export default function Orden({orden}) {
  const{obtenerOrdenes}=useQuiosco()
  const {id,nombre,total,pedido} = orden
  const completarOrden =async ()=>{
    try {
      await axios.put(`/api/ordenes`,{id})
      toast.success('Orden Lista')
      obtenerOrdenes()
    } catch (error) {
      toast.error('Hubo un Error')
    }
  }

  return (
    <div className='border p-10 space-y-5'>
        <h1 className='text-2xl font-bold'>Orden {id}</h1>
        <p className='text-2xl font-bold'>Cliente: {nombre}</p>
        <div className=''>
          {pedido.map(p=>
            (<div key={p.id} className='py-3 flex border-b last-of-type:border-0 items-center'>
              <div className='w-32'>
                <Image width={400} height={500} src={`/assets/img/${p.imagen}.jpg`} alt={`platillo ${p.nombre}`}/>
               
              </div>
              <div className='p-5 space-y-2'>
                <h4 className='text-xl font-bold text-amber-500'>{p.nombre}</h4>
                <p className='text-lg font-bold'>Cantidad: {p.cantidad}</p>
              </div>
            </div>
            
            
            )
          )}
        </div> 
        <div className='md:flex md:items-center md:justify-between my-10'>
          <p className='mt-5 font-black text-3xl text-amber-500'>
            Total a pagar: ${total}
          </p>
          <button className='bg-indigo-600 hover:bg-indigo-800 mt-5 md:p-1 md:mt-0 py-3 px-10 uppercase font-bold rounded-md text-white'
            type='button'
            onClick={()=>{completarOrden()}}
          > Completar Orden</button>
        </div>
    </div>
  )
}
