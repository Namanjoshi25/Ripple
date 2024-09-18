import Bottambar from "@/components/shared/Bottambar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css"
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";



export const metadata ={
  title : 'Ripple',
  description : 'A Next.js social post application'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme :dark
    }}
  
  >
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Topbar/>
        <main className="flex">
          <LeftSidebar />
          <section className=" main-container">
            <div className=" w-full max-w-4xl">
              {children} 
              </div>
          </section>
          <RightSidebar/>
        </main>
       
        <Bottambar/>
      </body>
    </html>
    </ClerkProvider>
  );
}
