import React from 'react'
import therapy2 from '../assets/therapy2.jpg'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${therapy2})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-[#BF8079]/20 shadow-[0_30px_60px_rgba(0,0,0,0.35)]" />

      <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{opacity: 1, y:0}}
      viewport={{once: true}}
      className="text-white text-bold text-2xl sm:text-3xl md:text-4xl lg:6xl">
       <h1 className='ml-10 lg:text-center'>You Don’t Have to Figure It Out Alone.</h1>
       <p className='ml-10'>Find the right therapist and start a conversation that can make a difference.</p>
      </motion.div>
    </section>
  )
}

export default Hero
