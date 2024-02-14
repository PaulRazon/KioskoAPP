import { usePathname, useRouter, useSearchParams } from "next/navigation"
import useQuiosco from "../hooks/useQuiosco"

const pasos=[
    {paso:1,nombre:'Menú', url:'/'},
    {paso:2,nombre:'Resumen', url:'/resumen'},
    {paso:3,nombre:'Datos y Total', url:'/total'}
]

function Pasos() {
    

    const router = useRouter()
    const path =usePathname()
    
    const calcularProgreso =()=>{
        let valor
        if(path==="/"){
            valor=2
        }else if(path==="/resumen"){
            valor=50
        }else{
            valor=100
        }
        return valor
    }
  return (
    <>
        <div className="flex justify-between mb-5">
            {pasos.map(paso=>(
                <button
                    onClick={()=>{
                        router.push(paso.url)
                        
                    }}
                    className="text-2xl font-bold"
                    key={paso.paso}
                >{paso.nombre}</button>
            ))}
        </div>
        <div className="bg-gray-100 mb-10"> 
            <div className="rounded-full bg-amber-500 text-xs leading-none text-center text-white h-2" style={{width:`${calcularProgreso()}%`, transitionProperty:'width', transitionDuration:'200ms'}}>

            </div>
        </div>
    </>
  )
}

export default Pasos