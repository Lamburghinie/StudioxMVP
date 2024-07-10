import React from 'react'
import Image from 'next/image'

const GetInTouch = () => {
  return (
    <section className="py-20 contain bg-white flex items-center justify-between gap-6 flex-wrap">
      <div className="">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="font-medium mb-6">
          Phone: +234 707 7415 677 <br /> Email: cls@studioxbyd.com
        </p>
        <p className="font-medium mb-6">
          Visit Us <br /> Explore our state-of-the-art showroom and meet our{' '}
          <br />
          team of experts in person. <br />
          Address: Akin Adesola, Victoria Island, Lagos
        </p>
        <p className="font-medium">
          Business Hours: <br /> Monday -Sunday: 24 Hours At Work!
        </p>
      </div>
      <Image
        src="/images/contact/Rectangle.png"
        alt="contact"
        width={500}
        height={500}
      />
    </section>
  )
}

export default GetInTouch
