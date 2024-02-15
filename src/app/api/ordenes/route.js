import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET(){
    const prisma = new PrismaClient()
    const ordenes = await prisma.orden.findMany({
        where:{
            estado:false
        }
    })
    return NextResponse.json(
        ordenes
    )
}
//POST

export async function POST(req,res) {
    if(req.method==='POST'){
        const body = await req.json()
        const prisma = new PrismaClient();
        
        const ordenes = await prisma.orden.create({
            data:{
                nombre:body.nombre,
                total:body.total,
                pedido:body.pedido,
                fecha:body.fecha
            }
        })
        
        return NextResponse.json(ordenes)
    }else{
        return NextResponse.json({metodo:"GET!!"})
    }
  }

  export async function PUT(req,res) {
    if(req.method==='PUT'){
        const body = await req.json()
        const prisma = new PrismaClient();
        
        const ordenActualizada = await prisma.orden.update({
            where:{
                id:parseInt(body.id)
            },
            data:{
                estado:true
            }
        })
        
        return NextResponse.json(ordenActualizada)
    }else{
        return NextResponse.json({metodo:"GET!!"})
    }
  }
