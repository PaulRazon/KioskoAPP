import Image from 'next/image'
import React from 'react'
import { formatearDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

function Producto({producto}) {
    const {nombre,imagen,precio}=producto
    const {handleSetProducto,handleSetModal} = useQuiosco()
  return (
    <div className='border p-3'>
        <Image 
            src={`/assets/img/${imagen}.jpg`} 
            alt={`Imagen platillo ${nombre}`}
            width={300}
            height={400}
            />
        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{nombre}</h3>
            <p className='mt-5 font-black text-4xl text-amber-500'>{formatearDinero(precio)}</p>
            <button type='button'
                className='bg-indigo-600 hover:bg-indigo-800 p-3 uppercase font-bold text-white w-full mt-5'
                onClick={()=>{
                    handleSetModal()
                    handleSetProducto(producto); 
                    
                }}
            >Agregar</button>
        </div>
    </div>
  )
}

export default Producto