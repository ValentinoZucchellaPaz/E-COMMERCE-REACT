import '@/styles/globals.css'
import Header from '@/components/header'
import { Inter } from 'next/font/google'
import CartContextProvider from '@/context/CartContext'
const inter = Inter({ subsets: ['latin'] })

export default function App ({ Component, pageProps }) {
  return <>
    <Header />
    <main className={`flex min-h-screen flex-col items-center py-16 px-6 ${inter.className} bg-body`}>
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
    </main>
  </>
}
