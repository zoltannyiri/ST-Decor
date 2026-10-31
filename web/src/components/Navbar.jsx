
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

const menuItems = [
  { id: "home", label: "Kezdőlap" },
  { id: "rolam", label: "Rólam" },
  { id: "galeria", label: "Galéria" },
  { id: "blog", label: "Blog" },
  { id: "kapcsolat", label: "Kapcsolat" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState("HU")
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll() 

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-[#c39d4a]/15 shadow-sm"
            : "bg-transparent border-b border-transparent backdrop-blur-none"
        }
      `}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Brand */}
        <img src="/logo.jpeg" alt="Logo" onClick={() => scrollTo("home")} className="h-20 w-50 rounded rounded-xl object-cover" />

        {/* Desktop navigáció */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(item.id)
              }}
              className=" group relative py-2 font-['Montserrat'] font-semibold text-[11px] uppercase tracking-[0.14em] text-[#6c82a8] transition-colors duration-300 hover:text-[#c39d4a]"
            >
              {item.label}

              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#c39d4a] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobil hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-px w-6 bg-[#c39d4a] transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-[#c39d4a] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-[#c39d4a] transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobil menü */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-[#c39d4a]/10 bg-[#080d16]/95 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 px-6 py-8">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(item.id)
                  }}
                  className="text-sm tracking-widest text-[#d0d1d3] transition-colors hover:text-[#c39d4a]"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-3 flex gap-5">
                {["HU", "EN"].map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={language === lang
                      ? "text-[#c39d4a]"
                      : "text-[#d0d1d3]/50"}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
