import React from 'react'
import therapy4 from '../assets/therapy4.jpg'
import { motion } from "motion/react"

const Membership = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20 mt-20 px-8"
    >
      <section className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl flex-1">
            <h1 className='text-3xl text-slate-700 mb-5 text-center'>Give the gift of a BetterHelp membership</h1>
            <p className="text-lg leading-8 text-slate-700">
              Therapy is one of the most meaningful gifts you can give to your friends and loved ones.
            </p>
            <button className="mt-6 cursor-pointer rounded-full bg-[#BF8079] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#a96b63] active:opacity-50">
              Gift a membership
            </button>
          </div>

          <div className="flex-1">
            <img
              src={therapy4}
              alt="Therapist consultation"
              className="h-auto w-full max-w-lg object-cover shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Membership
