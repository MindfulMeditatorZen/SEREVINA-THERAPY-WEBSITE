import React from 'react'
import { motion } from "motion/react"

const Contact = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-screen bg-[#f7f6f2] px-5 pb-20 pt-28 sm:px-8 lg:px-10"
    >
      <section className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a96b63]">
            Contact us
          </p>
          <h1 className="mt-4 text-4xl font-bold text-[#29372e] sm:text-5xl">
            We’re here to help you feel supported
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            Tell us a little about what you need, and our team will get back to you with the right next steps.
          </p>
        </div>

        <div className="rounded-[30px] p-6 sm:p-8 lg:p-10">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-slate-700">
                  First name
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#BF8079] focus:ring-2 focus:ring-[#BF8079]/20"
                />
              </div>

              <div>
                <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-slate-700">
                  Last name
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#BF8079] focus:ring-2 focus:ring-[#BF8079]/20"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#BF8079] focus:ring-2 focus:ring-[#BF8079]/20"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#BF8079] focus:ring-2 focus:ring-[#BF8079]/20"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#BF8079] focus:ring-2 focus:ring-[#BF8079]/20"
              />
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#BF8079] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a96b63]"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </motion.main>
  )
}

export default Contact
