import React from 'react'
import Image from 'next/image'

const Connected = () => {
  return (
    <section className="py-20 contain text-white flex items-center justify-between gap-6 flex-wrap">
      <Image
        src="/images/contact/connected.png"
        alt="contact"
        width={500}
        height={500}
      />
      <div className="">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="font-medium mb-6">
          Follow us on our social media platforms to stay updated <br /> on the
          latest trends, exclusive offers, and expert tips.
        </p>
        <p className="font-medium mb-6">Facebook: StudioX Facebook Page</p>
        <p className="font-medium mb-6">Instagram: StudioXbyd Instagram</p>
        <p className="font-medium mb-6">
          Profile Twitter: StudioXbyd Twitter Handle
        </p>
        <p className="font-medium mb-6">LinkedIn: StudioXbyd LinkedIn Page</p>
        <p className="font-medium">Youtube: StudioXbyd</p>
      </div>
    </section>
  )
}

export default Connected
