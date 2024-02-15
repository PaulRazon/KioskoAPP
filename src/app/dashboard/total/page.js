'use client'
import {useCallback, useEffect} from 'react'
import useQuiosco from '../../../../hooks/useQuiosco';
import { formatearDinero } from '../../../../helpers';
import axios from 'axios';
export default function Total() {
  const{ pedido,nombre,setNombre,total,colocarOrden }= useQuiosco()

  const comprobarPedido=useCallback(()=>{
    return (pedido.length===0 || nombre==='' || nombre.length<3)
  },[pedido,nombre]);
 

  useEffect(()=>{
    comprobarPedido()
  },[pedido,comprobarPedido])

  
  return (
    <>
     <h1 className='text-4xl font-black'>Total</h1>
     <p className='text-2xl my-10'>Confirma tu Pedido a continuacion</p>   

     <form onSubmit={colocarOrden}>
      <div>
        <label htmlFor="nombre" className='block uppercase text-slate-800 font-bold text-xl'>Nombre</label>
        <input id="nombre" type="text" className='bg-gray-200 w-full lg:w-1/3 p-2 rounded-md mt-3' 
          value={nombre}
          onChange={e=>{setNombre(e.target.value)}}
        />
      </div>
      <div className='mt-10'>
        <p className='text-2xl'>Total a pagar {''} <span className='font-bold'>{formatearDinero(total)}</span></p>
      </div>

      <div className='mt-5'>
        <input disabled={comprobarPedido()} type='submit' className={`${comprobarPedido()?'bg-indigo-100 ':'bg-indigo-600 hover:bg-indigo-800'} text-center p-3 font-bold text-white w-full lg:w-auto my-2 uppercase rounded-md`} value='Confirmar Pedido'/>
      </div>
     </form>
    </>
  )
}
