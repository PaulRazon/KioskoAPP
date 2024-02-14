
import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"

function Categoria({categoria}) {
    const {nombre, icono ,id} = categoria
    const {categoriaActual,handleClickCategoria} = useQuiosco()
  return (
    <div className={`${categoriaActual?.id===id?'bg-amber-400':''} flex items-center gap-4 border w-full p-5 hover:bg-amber-400`}>
        <Image width={70} height={70} alt="Imagen Icono" src={`/assets/img/icono_${icono}.svg`}/>
        <button 
            type="button"
            className="text-2xl font-bold hover:cursor-pointer w-full"
            onClick={()=>{handleClickCategoria(id)}}
        >{nombre}</button>
    </div>
  )
}

export default Categoria