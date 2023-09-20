"use client"
import '../styles/globals.css'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from 'next-themes'
//import {Outlet} from "react-router-dom";

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Home from '@/app/page'
// import { BrowserRouter } from 'react-router-dom'
// import Router from '@/app/router'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Home />
//     </BrowserRouter>
//   </React.StrictMode>,
// )


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
            <div className='mt-36'>
              {children}
            </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
