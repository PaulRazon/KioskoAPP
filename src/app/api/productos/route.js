import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//LAS FUNCIONES DEBEN SER LLAMADAS DEPENDIENDO SU FUNCION HTTP
export async function GET(){
    const prisma = new PrismaClient()
    const productos = await prisma.producto.findMany()
    return NextResponse.json({
        productos
    })
}
