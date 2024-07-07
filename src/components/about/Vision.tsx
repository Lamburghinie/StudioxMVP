import React from 'react'
import Image from 'next/image'

const Vision = () => {
  return (
    <section className="contain py-24 bg-white">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-[#101828] mb-5">Our Vision</h2>
        <p className="text-[#667085] leading-7 md:w-1/2">
          At StudioX, we believe that every home should be a sanctuary that
          reflects the unique essence of its inhabitants. Our mission is to
          empower individuals and families to create their dream homes through a
          blend of advanced technology, sustainable practices, and human
          ingenuity.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div>
          <div className="mb-20">
            <p className="text-lg font-medium text-[#101828] mb-3">
              Pioneering Technology
            </p>
            <p className="text-[#747474]">
              Our state-of-the-art 3D Design Studio allows customers to
              visualize and customize their spaces with unparalleled precision.
              From minimalist furniture pieces that marry form and function to
              smart home gadgets that simplify everyday tasks, our products are
              designed to elevate your living experience.
            </p>
          </div>
          <div>
            <p className="text-lg font-medium text-[#101828] mb-3">
              Commitment to Sustainability
            </p>
            <p className="text-[#747474]">
              StudioX is deeply committed to the United Nations Sustainable
              Development Goals (SDGs). Our STDX Zero Emission Program is a
              testament to our dedication to reducing our carbon footprint and
              promoting eco-friendly practices. From sourcing sustainable
              materials to implementing energy-efficient technologies, we strive
              to make a positive impact on the environment.
            </p>
          </div>
        </div>
        <Image
          src="/images/about/about2.png"
          alt="Hero Image"
          width={500}
          height={500}
        />
        <div>
          <div className="mb-20">
            <p className="text-lg font-medium text-[#101828] mb-3">
              Training School
            </p>
            <p className="text-[#747474]">
              We are not just a company; we are a learning hub. Our Training
              School is a cradle for budding designers, technologists, and
              innovators. Through comprehensive virtual and field training
              programs, we equip the next generation of talent with the skills
              and knowledge needed to lead in the home improvement industry.
            </p>
          </div>
          <div>
            <p className="text-lg font-medium text-[#101828] mb-3">
              Recognition and Awards
            </p>
            <p className="text-[#747474]">
              Our unwavering commitment to environmental safety and innovation
              has earned us prestigious accolades, including the World Bank
              Award for Environmental Safety. This recognition underscores our
              efforts to create a safer, greener world for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
