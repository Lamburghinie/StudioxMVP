import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <section className="contain bg-white -mt-[2px]">
      <div className="flex flex-col lg:flex-row items-center gap-8 py-24 border-y border-[#121212]">
        <div className="basis-full">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <p className="leading-10">
            Whether you are a homeowner looking to transform your space, a
            designer seeking inspiration, or an aspiring innovator ready to
            learn, StudioX welcomes you. Join us on our journey to create homes
            that are not just places to live but spaces to love
          </p>
        </div>
        <Image
          src="/images/about/team.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-8">Join Us</h2>
        <p className="leading-10 font-medium mb-12 max-w-[800px] mx-auto">
          Whether you are a homeowner looking to transform your space, a
          designer seeking inspiration, or an aspiring innovator ready to learn,
          StudioX welcomes you. Join us on our journey to create homes that are
          not just places to live but spaces to love
        </p>
        <button className="bg-[#121212] text-white px-12 py-3 rounded-3xl">
          Join Us
        </button>
      </div>
    </section>
  )
}

export default Team
