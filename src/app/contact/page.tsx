import Connected from '@/components/contact/Connected'
import ContactForm from '@/components/contact/ContactForm'
import GetInTouch from '@/components/contact/GetInTouch'
import React from 'react'

const page = () => {
  return (
    <>
      <section className="contain text-white pt-28 pb-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="w-full md:w-1/2">
          We'd love to hear from you! Whether you have questions about our
          products, need support, or want to learn more about our services, our
          team at StudioX is here to help
        </p>
      </section>
      <GetInTouch />
      <Connected />
      <ContactForm />
    </>
  )
}

export default page
