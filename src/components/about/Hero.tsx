import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="contain text-white">
      <div className="py-14 border-b border-white">
        <Image
          src="/images/about/hero.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full mb-10"
        />
        <div className="flex flex-col lg:flex-row gap-5">
          <h1 className="text-3xl font-bold w-full">Welcome to StudioX</h1>
          <p className="w-full leading-7">
            Welcome to StudioX, where innovation meets inspiration in the realm
            of home improvement. We are a dynamic team of visionaries,
            designers, engineers, and creators dedicated to revolutionizing the
            way you experience and enhance your living spaces.
          </p>
        </div>
      </div>
      <div className="py-24 flex flex-col lg:flex-row items-center gap-8">
        <Image
          src="/images/about/about1.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full"
        />
        <div className="basis-full">
          <h2 className="text-3xl font-bold mb-8">Who We Are</h2>
          <p className="leading-10">
            StudioX is a pioneering force in the home improvement industry,
            leveraging cutting-edge technology to transform homes into havens of
            style, comfort, and sustainability. Our journey began as a
            seed-stage startup fueled by a passion for design and a commitment
            to environmental stewardship. Today, we stand as a beacon of
            innovation, proudly recognized by the World Bank for our exceptional
            contributions to environmental safety.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
