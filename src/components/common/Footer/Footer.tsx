import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from './Footer.module.css'
import { footerLinks, socialIcons } from './FooterData'

const Footer = () => {
  return (
    <>
      <div className={s.root}>
        <div className={`${s.clean} mx-auto max-w-8xl contain`}>
          <div className={s.nav}>
            <div className="flex items-center justify-between flex-wrap w-full gap-5 border-y border-white py-8">
              <Link href="/" className={s.logo} aria-label="Logo">
                <Image
                  src="/studio-x.svg"
                  alt="Studio X Logo"
                  width={100}
                  height={50}
                  priority
                />
              </Link>
              <nav className={`${s.flexDiv} gap-6 flex-wrap`}>
                {footerLinks.map((val, i) => (
                  <Link href={val.link} key={i} className={s.link}>
                    {val.content}
                  </Link>
                ))}
              </nav>
              <nav className={`${s.flexDiv} gap-4 flex-wrap`}>
                {socialIcons.map((val, i) => (
                  <Link key={i} href={val.link} target="_blank">
                    <Image
                      src={val.image}
                      alt="social"
                      width={20}
                      height={20}
                      className="img"
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${s.flexDiv} contain justify-between gap-6 flex-wrap text-white mb-7`}
      >
        <Image
          src="/images/footer/apps.svg"
          alt="app"
          width={200}
          height={50}
          className="img"
        />
        <p>@StudioX 2024</p>
      </div>
    </>
  )
}

export default Footer
