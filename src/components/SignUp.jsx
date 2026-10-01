import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

const SignUp = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-screen bg-[#f7f6f2] px-5 pb-12 pt-28 text-slate-800 sm:px-8 sm:pt-32"
    >
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white p-6 shadow-[0_24px_70px_rgba(44,58,48,0.12)] sm:p-8 lg:p-10">
        <section className="flex items-center">
          <div className="mx-auto w-full max-w-md">
            <p className="text-sm font-semibold text-[#a96b63]">CREATE YOUR ACCOUNT</p>
            <h1 className="mt-3 text-3xl font-semibold text-[#29372e] sm:text-4xl">Start your journey</h1>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Sign up to explore care that fits your needs.
            </p>

            <form className="mt-8 space-y-5" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-slate-700">First name</label>
                  <input id="first-name" name="firstName" autoComplete="given-name" required className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#BF8079] focus:ring-2 focus:ring-[#BF8079]/20" />
                </div>
                <div>
                  <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
                  <input id="last-name" name="lastName" autoComplete="family-name" required className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#BF8079] focus:ring-2 focus:ring-[#BF8079]/20" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#BF8079] focus:ring-2 focus:ring-[#BF8079]/20" />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <input id="password" name="password" type="password" autoComplete="new-password" minLength="8" required className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#BF8079] focus:ring-2 focus:ring-[#BF8079]/20" />
                <p className="mt-2 text-xs text-slate-500">Use at least 8 characters.</p>
              </div>

              <button type="submit" className="w-full rounded-lg bg-[#BF8079] px-5 py-3 font-semibold text-white transition hover:bg-[#a96b63] focus:outline-none focus:ring-2 focus:ring-[#BF8079] focus:ring-offset-2">
                Create account
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-[#a96b63] hover:text-[#8f574f]">
                Log in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </motion.main>
  )
}

export default SignUp
