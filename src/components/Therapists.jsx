import React from 'react'
import therapy1 from '../assets/therapy1.jpg'
import { motion } from "motion/react"

const Therapists = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20 px-8 mb-20 bg-{#F2F2F2]"
    >
      <section className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 max-w-xl">
            <p className="text-lg leading-8 text-slate-700">
              Tap into the world&apos;s largest network of qualified and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. With our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate when and how you want.
            </p>
            <button className="mt-6 rounded-full bg-[#BF8079] px-6 py-3 font-semibold text-white shadow-md transition cursor-pointer active:opacity-50 hover:bg-[#a96b63]">
              Get matched to a therapist
            </button>
          </div>

          <div className="flex-1">
            <img
              src={therapy1}
              alt="Therapist consultation"
              className="h-auto w-full max-w-lg object-cover shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Therapists
