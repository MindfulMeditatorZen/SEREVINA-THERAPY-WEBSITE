import React, { useState } from 'react'
import { motion } from "motion/react"

const faqs = [
  {
    question: 'How does Sereniva match me with a therapist?',
    answer:
      'We start with a short intake and preferences such as your goals, communication style, and availability. Based on that information, we recommend therapists who are a strong fit and can support your care plan.',
  },
  {
    question: 'Is therapy with Sereniva confidential?',
    answer:
      'Yes. Your sessions and personal information are treated with strict confidentiality. We follow privacy practices designed to protect your care while keeping your experience secure and supportive.',
  },
  {
    question: 'Can I switch therapists if I do not feel a connection?',
    answer:
      'Absolutely. Finding the right fit matters. If you feel like a different therapist may be a better match, we can help you explore other options and make a switch when needed.',
  },
  {
    question: 'Do I need to schedule sessions in advance?',
    answer:
      'Most members book sessions in advance to secure a time that works for them. We also offer flexible scheduling depending on therapist availability and your preferred cadence.',
  },
  {
    question: 'Is Sereniva only for people in crisis?',
    answer:
      'No. Sereniva is designed for everyday support, emotional wellness, stress management, relationship challenges, and personal growth, not just crisis care. We support a wide range of needs.',
  },
  {
    question: 'How quickly can I get started?',
    answer:
      'You can typically get started within a few days, depending on your preferences and therapist availability. Once you complete your intake, we help guide you through the next steps.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-screen bg-[#f7f6f2] px-5 pb-20 pt-28 sm:px-8 lg:px-10"
    >
      <section className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a96b63]">
            Frequently asked questions
          </p>
          <h1 className="mt-4 text-4xl font-bold text-[#29372e] sm:text-5xl">
            Questions, answered with care
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Everything you need to know before starting your support journey with Sereniva.
          </p>
        </div>

        <div className="grid gap-5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-[#eadad7] bg-white shadow-[0_18px_40px_rgba(41,55,46,0.06)] transition-all duration-200 hover:shadow-[0_20px_45px_rgba(41,55,46,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-base font-semibold text-[#29372e] sm:text-lg">
                    {item.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg font-medium transition ${
                      isOpen
                        ? 'border-[#BF8079] bg-[#F3E5E5] text-[#BF8079]'
                        : 'border-slate-200 bg-slate-50 text-slate-600'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </motion.main>
  )
}

export default FAQ
