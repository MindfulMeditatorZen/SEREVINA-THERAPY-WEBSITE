import { Globe, Sparkles, MessageSquare, Mail } from 'lucide-react'


const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Roadmap', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
  Resources: ['Documentation', 'Help Center', 'Community', 'API Reference', 'Status'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses', 'Compliance'],
}

const Footer = () => {
  return (
    <footer className="mt-20 bg-black text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-white">SERENIVA</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Thoughtful, accessible therapy for people who want support that fits their life.
            </p>

            <div className="mt-5 flex gap-3">
              {[Globe, Sparkles, MessageSquare, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-200 transition hover:border-[#BF8079] hover:text-[#BF8079]"
                  aria-label="social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
                  {category}
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-[#BF8079]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-4 text-sm text-slate-400">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 Sereniva. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer