'use client'
import Head from "next/head";
import SideBar from "../../components/SideBar";
import "./globals.css";
import { QuioscoProvider } from "../../context/QuioscoProvider";
import { ToastContainer } from "react-toastify";
import Pasos from "../../components/Pasos";
import 'react-toastify/dist/ReactToastify.css'
import ShowModal from "../../components/ShowModal";




export default function RootLayout({ children}) {
  

  return (
    <QuioscoProvider>
      
        <html lang="en">
        
        <Head>
            <title>Café Quiosco</title>
            <meta name="description" content="Quiosco Cafeteria"/>
            <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
        </Head>
        <body className="md:flex" id="body">
              <ToastContainer/>
              <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                  <SideBar/>
              </aside>

              <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5  overflow-y-scroll">
                <div className="p-10 mt-10 h-screen">
                  <Pasos/>
                  {children}
                  <ShowModal/>
                </div>
                
              </main>
            
        </body>
      
      </html>
    </QuioscoProvider>
    
  );
}
