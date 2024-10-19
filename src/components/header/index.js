import Link from 'next/link'
import Image from 'next/image'
import Cart from '@/icons/Cart'
import logo from '@/icons/logo.png'
import List from '@/icons/List'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Header () {
  const [toggle, setToggle] = useState(false)
  const router = useRouter()
  const links = [
    {
      title: 'home',
      path: '/'
    },
    {
      title: 'products',
      path: '/products'
    },
    {
      title: 'contact',
      path: '/contact'
    },
    {
      title: 'add item',
      path: '/add-item'
    }
  ]

  return (
    <header className={'grid md:grid-cols-3 content-around place-items-center bg-secondary text-white px-5 h-14 w-full relative'}>

        <Image onClick={() => router.push('/')} src={logo} width={150} height={100} alt='logo'/>

        <div onClick={() => setToggle(!toggle)} className='md:hidden border border-body rounded-lg hover:border-primary hover:text-primary grid place-content-center p-3 w-8 h-8 cursor-pointer absolute top-3 right-4'>
            <List />
        </div>
        {
            toggle &&
              (
                <nav onClick={() => setToggle(false)} className=' flex flex-col justify-center items-center gap-1 uppercase font-medium absolute md:hidden top-16 right-4 py-3 rounded-lg bg-secondary z-10'>
                    {links.map((link, index) => {
                      return (
                        <Link
                        key={index}
                        className={`transition-all w-full text-center  hover:bg-neutral-700 px-12 py-2 ${router.pathname === link.path && 'text-primary hover:bg-transparent pointer-events-none'}`} href={link.path}>
                            {link.title}
                        </Link>
                      )
                    })}
                    <div onClick={() => router.push('/cart')} title='Cart' className='cursor-pointer w-full flex justify-center hover:bg-neutral-700 px-12 py-2 transition-all'>
                        <Cart/>
                    </div>
                </nav>
              )
        }
        <nav className='hidden md:flex flex-row justify-evenly gap-4 uppercase font-medium'>
        {links.map((link, index) => {
          return (
            <Link
            key={index}
            className={`transition-all bg-transparent ${router.pathname === link.path
              ? 'text-primary border-b-2 border-spacing-y-1 border-primary pointer-events-none'
              : 'hover:text-primary'}`} href={link.path}>
                {link.title}
            </Link>
          )
        })}
        </nav>
        <div onClick={() => router.push('/cart')} title='Cart' className={`${router.pathname === '/cart' && 'text:white bg-primary pointer-events-none'} font-medium transition-all cursor-pointer hover:bg-primary hover:text-white rounded-xl justify-center items-center p-2 hidden md:flex`}>
          <Cart />
        </div>
        {/* <div onClick={() => router.push('/cart')} title='Cart' className={`${router.pathname === '/cart' ? 'text-primary border-primary pointer-events-none' : 'hover:text-primary hover:border-primary'} cursor-pointer border border-transparent p-1 rounded-lg ml-2 hidden md:block transition-all`}>
            <Cart/>
        </div> */}

    </header>
  )
}
