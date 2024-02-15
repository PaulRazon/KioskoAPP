'use client'
import Orden from '../../../components/Orden'
import useQuiosco from '../../../hooks/useQuiosco'

export default function RootLayout(){
    const {ordenes} = useQuiosco()
   
    return(
        <>
            <h1 className='text-4xl font-black'>Panel de Administracion</h1>
            <p className='text-2xl my-10'>Administra las ordenes:</p> 
            {ordenes&&ordenes.map(orden=>(
                <Orden
                    key={orden.id}
                    orden={orden}
                />
            ))}
        </>
    )
}