import React from 'react'
import style from '@/components/contact/contact.module.css'

const ContactForm = () => {
  return (
    <section className="py-20 contain bg-white">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl m-auto">
        <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
        <p className="font-medium mb-6 text-center">
          Have a specific inquiry? Fill out the form below, and we'll get back
          to <br /> you within minutes
        </p>
        <form action="" className="w-full">
          <div className="flex flex-col mb-6">
            <label htmlFor="" className={style.label}>
              Name
            </label>
            <input type="text" name="name" id="name" className={style.input} />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="" className={style.label}>
              Email Address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className={style.input}
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="" className={style.label}>
              Phone Number
            </label>
            <input type="text" name="name" id="name" className={style.input} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className={style.label}>
              Message
            </label>
            <textarea
              rows={4}
              cols={4}
              name="name"
              id="name"
              className={style.input}
            />
          </div>

          <button className="bg-[#121212] text-white p-3 w-full font-bold mt-12 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
