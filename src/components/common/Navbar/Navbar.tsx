import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import Image from 'next/image'
import { LuHeart, LuSearch, LuShoppingCart } from 'react-icons/lu'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  return (
    <div className={s.root}>
      <div className={`${s.clean} mx-auto max-w-8xl contain`}>
        <div className={s.nav}>
          <div className="flex items-center justify-between flex-1">
            <Link href="/" className={s.logo} aria-label="Logo">
              <Image
                src="/studio-x.svg"
                alt="Studio X Logo"
                width={100}
                height={50}
                priority
              />
            </Link>
            <div className={`${s.flexDiv} gap-10`}>
              <nav className={s.navMenu}>
                <Link href="#" className={s.link}>
                  All
                </Link>
                {links?.map((l) => (
                  <Link href={l.href} key={l.href} className={s.link}>
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div
                className={`${s.flexDiv} justify-between divide-x-2 text-secondary`}
              >
                <LuSearch size={20} className="mr-7 cursor-pointer" />
                <Link href="#" className="pl-7">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className={`${s.flexDiv} justify-center gap-4 text-secondary`}>
              <LuShoppingCart size={20} />
              <LuHeart size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
