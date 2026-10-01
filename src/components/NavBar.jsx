import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between sm:h-16 md:h-20">
            <div>
              <h1 className="text-3xl font-bold text-[#BF8079]">SERENIVA</h1>
            </div>

            <div className="hidden items-center space-x-4 md:flex lg:space-x-8">
              <Link to="/" className="font-bold text-gray-700 hover:text-[#BF8079]">Home</Link>
              <Link to="/business" className="font-bold text-gray-700 hover:text-[#BF8079]">Business</Link>
              <Link to="/faq" className="font-bold text-gray-700 hover:text-[#BF8079]">FAQ</Link>
              <Link to="/about" className="font-bold text-gray-700 hover:text-[#BF8079]">About</Link>
              <Link to="/jobs" className="font-bold text-gray-700 hover:text-[#BF8079]">Jobs</Link>
              <Link to="/contact" className="font-bold text-gray-700 hover:text-[#BF8079]">Contact</Link>
              
              <Link to="/sign-up" className="cursor-pointer rounded-full bg-[#BF8079] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#a86863]">Sign Up</Link>
            </div>

            <button
              className="cursor-pointer rounded-md border border-[#BF8079] p-2 text-[#BF8079] sm:h-10 sm:w-10 md:hidden"
              onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            >
              {mobileMenuIsOpen ? <X /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuIsOpen && (
          <div className="border-t border-[#BF8079] bg-white shadow-sm md:hidden">
            <div className="flex flex-col items-center gap-4 px-4 py-5 text-center">
              <Link className="block w-full font-bold text-gray-700 hover:text-[#BF8079]" to="/" onClick={() => setMobileMenuIsOpen(false)}>Home</Link>
              <Link className="block w-full font-bold text-gray-700 hover:text-[#BF8079]" to="/business" onClick={() => setMobileMenuIsOpen(false)}>Business</Link>
              <Link className="block w-full font-bold text-gray-700 hover:text-[#BF8079]" to="/faq" onClick={() => setMobileMenuIsOpen(false)}>FAQ</Link>
              <Link className="block w-full font-bold text-gray-700 hover:text-[#BF8079]" to="/about" onClick={() => setMobileMenuIsOpen(false)}>About</Link>
              <Link className="block w-full font-bold text-gray-700 hover:text-[#BF8079]" to="/jobs" onClick={() => setMobileMenuIsOpen(false)}>Jobs</Link>
              <Link className="block w-full font-bold text-gray-700 hover:text-[#BF8079]" to="/contact" onClick={() => setMobileMenuIsOpen(false)}>Contact</Link>
              <Link className="block w-full font-bold text-gray-700 hover:text-[#BF8079]" to="/sign-up" onClick={() => setMobileMenuIsOpen(false)}>Sign Up</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default NavBar
