'use client'
import "./globals.css";
import { QuioscoProvider } from "../../context/QuioscoProvider";
import 'react-toastify/dist/ReactToastify.css'
import Head from "next/head";




export default function RootLayout({ children}) {
  

  return (
    <QuioscoProvider>
    <html lang="en">
      <Head>
            <title>Café Quiosco</title>
            <meta name="description" content="Quiosco Cafeteria"/>
            <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
        </Head>
      <body>
      {children}  
      </body>
      
    </html>
    </QuioscoProvider>
  );
}
