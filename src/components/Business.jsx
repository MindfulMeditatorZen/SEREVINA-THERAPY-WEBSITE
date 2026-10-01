import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

const businessFeatures = [
  {
    title: 'Support for teams',
    text: 'Create a thoughtful mental wellness offering for employees, managers, and leadership teams.',
  },
  {
    title: 'Flexible care model',
    text: 'Offer therapy and digital support that fits busy schedules and diverse employee needs.',
  },
  {
    title: 'Measurable impact',
    text: 'Track engagement, outcomes, and wellbeing trends with a care experience designed to scale.',
  },
]

const Business = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-screen bg-[#f7f6f2] px-5 pb-20 pt-28 sm:px-8 lg:px-10"
    >
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[30px] bg-white p-8 shadow-[0_24px_70px_rgba(44,58,48,0.08)] lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a96b63]">
              For businesses
            </p>
            <h1 className="mt-4 text-4xl font-bold text-[#29372e] sm:text-5xl">
              Better support for your people, without the friction.
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Sereniva partners with organizations that want meaningful, modern mental wellness support for their teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/sign-up"
                className="inline-flex items-center justify-center rounded-full bg-[#BF8079] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a96b63]"
              >
                Book a demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#BF8079] bg-white px-6 py-3 text-sm font-semibold text-[#a96b63] transition hover:border-[#a96b63] hover:text-[#8f574f]"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Business
