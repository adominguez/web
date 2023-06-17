import './globals.css'
import Navigation from './components/Navigation'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sitio web de Alberto Domínguez Martín',
  description: 'Estás en el sitio web de Alberto Domínguez Martín, aquí vas a encontrar desarrollo de aplicaciones web, diseño corporativo, diseño 3D e impresión 3D',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-thin-rounded/css/uicons-thin-rounded.css' />
      </head>
      <body className={`${inter.className} flex`}>
        <Navigation />
        <main className="z-0 flex flex-col h-screen ml-12 overflow-auto bg-white dark:bg-gray-900 md:ml-0 md:flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
