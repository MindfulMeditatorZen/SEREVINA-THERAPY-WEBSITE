import React from 'react'
import { motion } from "motion/react"

const About = () => {
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
            About Sereniva
          </p>
          <h1 className="mt-4 text-4xl font-bold text-[#29372e] sm:text-5xl">
            Therapy that feels personal, supportive, and accessible
          </h1>
        </div>

        <div className="rounded-[30px] bg-white p-8 shadow-[0_20px_50px_rgba(41,55,46,0.08)] sm:p-10">
          <h2 className="text-2xl font-bold text-[#29372e] sm:text-3xl">
            Find yourself in therapy
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Sereniva was created to remove the traditional barriers to therapy and make mental health care more accessible to everyone. We believe meaningful support should feel warm, practical, and within reach. Our mission is to connect people with compassionate care that fits their lives and helps them move forward with confidence.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Our network of experienced professionals supports clients through life changes, stress, relationship challenges, and personal growth. We focus on building a care experience that is both high-quality and genuinely human.
          </p>
        </div>

        <div className="mt-10 rounded-[30px] border border-[#eadad7] bg-[#fffdfb] p-8 shadow-[0_18px_40px_rgba(41,55,46,0.04)] sm:p-10">
          <h2 className="text-2xl font-bold text-[#29372e] sm:text-3xl">Our therapists</h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">
            Every therapist providing services through Sereniva is a qualified and experienced professional. They hold the relevant academic credentials, clinical training, and professional standards required to support clients with care and competence. We focus on thoughtful matching so each person can work with someone who understands their goals, preferences, and lived experience.
          </p>
        </div>
      </section>
    </motion.main>
  )
}

export default About
