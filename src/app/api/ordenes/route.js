import { PrismaClient } from "@prisma/client"
import { requestToBodyStream } from "next/dist/server/body-streams"
import { NextRequest, NextResponse } from "next/server"

export async function GET(){
    const prisma = new PrismaClient()
    const ordenes = await prisma.orden.findMany()
    return NextResponse.json(
        ordenes
    )
}
//POST

export async function POST(req,res) {
    if(req.method==='POST'){
        const body = await req.json()
        const prisma = new PrismaClient();
        const ordenes = prisma.orden.create({
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