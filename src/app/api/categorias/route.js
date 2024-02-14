import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";




//LAS FUNCIONES DEBEN SER LLAMADAS DEPENDIENDO SU FUNCION HTTP
export async function GET(){
    const prisma = new PrismaClient()
    const categorias = await prisma.categoria.findMany({
        include:{
            productos:true
        }
    })
    return NextResponse.json(
        categorias
    )
}

// PUT // PATCH
//DELETE