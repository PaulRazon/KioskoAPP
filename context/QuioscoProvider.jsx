'use client'
import axios from "axios";
import { useState,useEffect,createContext } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const QuioscoContext = createContext()

const QuioscoProvider =({children})=>{
    const [categorias,setCategorias]=useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto,setProducto] = useState({})
    const [modal,setModal] = useState(false)
    const [pedido,setPedido]=useState([])
    const [nombre,setNombre]=useState('')
    const [total,setTotal]=useState(0)    

    const router=useRouter()


    const obtenerCategorias =async()=>{
        const {data} = await axios("/api/categorias")
        setCategorias(data)
    }
    useEffect(()=>{
        obtenerCategorias()
    },[])

    useEffect(()=>{
       setCategoriaActual(categorias[0]) 
    },[categorias])
    useEffect(()=>{
        const nuevoTotal = pedido.reduce((total,producto)=>(producto.precio*producto.cantidad)+total,0)
        setTotal(nuevoTotal) 
     },[pedido])

    const handleClickCategoria= id=>{
        const categoria = categorias.filter(c=> c.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
    }

    const handleSetProducto = producto=>{
        setProducto(producto)
    }

    const handleSetModal =()=>{
        setModal(!modal)
    }

    const handleAgregarPedido=({categoriaId,...producto})=>{
        if(pedido.some(productoState=>productoState.id===producto.id)){
            //Actualizar la cantidad
            const pedidoActualizado= pedido.map(productoState=> productoState.id===producto.id?producto:productoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado Correctamente')
            
        }else{
            setPedido([...pedido,producto])
            toast.success('Agregado al pedido')
            
        }
        setModal(!modal)
        
    }

   const handleEditarCantidades = id =>{
        const productoActualizar = pedido.find(producto=>producto.id===id)
        setProducto(productoActualizar)
        setModal(!modal)

   }
   const handleEliminarProducto = id =>{
        const productoActualizar = pedido.filter(producto=>producto.id!==id)
        setPedido(productoActualizar)
        
   }
   
    return(
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                handleSetProducto,
                producto,
                handleSetModal,
                modal,
                setProducto,
                handleAgregarPedido,
                pedido,
                handleEditarCantidades,
                handleEliminarProducto,
                nombre,
                setNombre,
                total
            }}
        >
            {children}      
        </QuioscoContext.Provider>
    )
}

export { QuioscoProvider}

export default QuioscoContext