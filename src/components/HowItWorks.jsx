import React from 'react'
import { motion } from "motion/react"

const HowItWorks = () => {
  const how = [
    {
      title: 'Get matched to the best therapist for you',
      description:
        'Answer a few questions to find a qualified therapist who fits your needs and preferences. Tap into the largest online network of credentialed providers.',
    },
    {
      title: 'Communicate your way',
      description:
        'Talk to your therapist however you feel comfortable — text, chat, audio, or video. You can expect the same professionalism as an in-office therapist.',
    },
    {
      title: 'Therapy when you need it',
      description:
        'You can message your therapist at any time, from anywhere online. You also get to schedule live sessions when it is convenient for you, and can connect from any mobile device or computer.',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-6 py-20 bg-[#F2F2F2]"
    >
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900">How It Works</h1>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {how.map((item, index) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E5E5] text-lg font-bold text-[#BF8079]">
              {index + 1}
            </div>
            <h2 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h2>
            <p className="text-base leading-7 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default HowItWorks
