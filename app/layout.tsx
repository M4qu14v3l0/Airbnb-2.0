import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './globals.css'

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
      
      {/* header */}
      <body>
      <Header />
        {children}
      <Footer />
      </body>
      {/* footer */}
    </html>
  )
}
