'use client'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={'/dashboard'}>Iniciar</Link>
      <Link href={'/admin'}>admin</Link>
    </>
      
  );
}
