import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

const Login = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex min-h-screen items-start justify-center bg-[#f7f6f2] px-5 pb-12 pt-28 text-slate-800 sm:px-8 sm:pt-32"
    >
      <section className="w-full max-w-xl rounded-2xl bg-white px-6 py-10 shadow-[0_24px_70px_rgba(44,58,48,0.12)] sm:px-12 sm:py-14">
          <div className="mx-auto w-full max-w-md">
            <p className="text-sm font-semibold text-[#a96b63]">WELCOME BACK</p>
            <h1 className="mt-3 text-3xl font-semibold text-[#29372e] sm:text-4xl">Log in to Sereniva</h1>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Enter your account details to continue.
            </p>

            <form className="mt-8 space-y-5" onSubmit={(event) => event.preventDefault()}>
              <div>
                <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                <input id="login-email" name="email" type="email" autoComplete="email" required className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#BF8079] focus:ring-2 focus:ring-[#BF8079]/20" />
              </div>

              <div>
                <label htmlFor="login-password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <input id="login-password" name="password" type="password" autoComplete="current-password" required className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#BF8079] focus:ring-2 focus:ring-[#BF8079]/20" />
              </div>

              <div className="flex items-center">
                <input id="remember-me" name="rememberMe" type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-[#BF8079] focus:ring-[#BF8079]" />
                <label htmlFor="remember-me" className="ml-2 text-sm text-slate-600">Remember me</label>
              </div>

              <button type="submit" className="w-full rounded-lg bg-[#BF8079] px-5 py-3 font-semibold text-white transition hover:bg-[#a96b63] focus:outline-none focus:ring-2 focus:ring-[#BF8079] focus:ring-offset-2">
                Log in
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              New to Sereniva?{' '}
              <Link to="/sign-up" className="font-semibold text-[#a96b63] hover:text-[#8f574f]">
                Create an account
              </Link>
            </p>
          </div>
      </section>
    </motion.main>
  )
}

export default Login
