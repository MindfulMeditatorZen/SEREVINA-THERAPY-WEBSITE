import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

const roles = [
  {
    title: 'Licensed Therapist',
    type: 'Full-time · Remote',
    description:
      'Provide compassionate, evidence-based care to members seeking support for anxiety, relationships, and life transitions.',
    requirements: [
      'Active clinical license in your state',
      '2+ years of therapy experience',
      'Strong communication and care coordination skills',
    ],
  },
  {
    title: 'Clinical Supervisor',
    type: 'Part-time · Flexible',
    description:
      'Guide therapists, review care plans, and support quality standards while maintaining a warm, member-centered approach.',
    requirements: [
      'Licensed clinician with supervision experience',
      'Knowledge of care quality and documentation standards',
      'Ability to mentor and support a growing team',
    ],
  },
  {
    title: 'Care Experience Specialist',
    type: 'Hybrid · Support Team',
    description:
      'Help members navigate onboarding, scheduling, and ongoing care journeys with empathy and clarity.',
    requirements: [
      'Customer support or healthcare experience preferred',
      'Excellent problem-solving and communication skills',
      'Comfort working in a digital-first care environment',
    ],
  },
]

const Jobs = () => {
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
            Therapist jobs
          </p>
          <h1 className="mt-4 text-4xl font-bold text-[#29372e] sm:text-5xl">
            Join a team that makes care feel personal
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We are building a supportive, high-impact care experience for people who want thoughtful therapy and real progress.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <Link
            to="/sign-up"
            className="inline-flex items-center justify-center rounded-full bg-[#BF8079] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a96b63]"
          >
            Start application
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {roles.map((role) => (
            <article
              key={role.title}
              className="rounded-2xl border border-[#eadad7] bg-white p-6 shadow-[0_18px_40px_rgba(41,55,46,0.06)]"
            >
              <div className="mb-5">
                <h3 className="text-2xl font-bold text-[#29372e]">{role.title}</h3>
              </div>

              <p className="text-sm leading-7 text-slate-600">{role.description}</p>

              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#29372e]">
                  Requirements
                </p>
                <ul className="space-y-3 text-sm text-slate-600">
                  {role.requirements.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#BF8079]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/sign-up"
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#BF8079] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a96b63]"
              >
                Apply now
              </Link>
            </article>
          ))}
        </div>
      </section>
    </motion.main>
  )
}

export default Jobs
