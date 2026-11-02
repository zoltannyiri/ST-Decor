import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const faqs = [
  {
    question: "Vizes helyiségben is alkalmazható?",
    answer:
      "Megfelelő előkészítés és védőbevonat alkalmazásával ideális nedves helyiségekben is.",
  },
  {
    question: "Mennyibe kerül?",
    answer:
      "A falfelület bonyolultságától és a felhasznált anyagoktól függően 8-30 000 Ft/m2. Ez tartalmazza a felhasznált anyagok árát és a munkadíjat is. Minden esetben egyedi árajánlat készül.",
  },
  {
    question: "Mennyi idő egy ilyen alkotás elkészítése?",
    answer:
      "A kivitelezés átlagosan 1-3 napot vesz igénybe a felület nagyságától és bonyolultságától függően.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="gyik"
      className="relative overflow-hidden bg-white px-6 py-24 lg:py-32"
    >
      {/* finom háttér */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#dcebff]/40 blur-[100px]" />
        <div className="absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-[#eee8df]/70 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* fejléc */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#c39d4a]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b39361]">
              Gyakori kérdések
            </span>
            <span className="h-px w-10 bg-[#c39d4a]" />
          </div>

          <h2 className="font-garamond text-5xl tracking-tight text-[#18263c] sm:text-6xl">
            GY.I.K.
          </h2>
        </motion.div>

        {/* accordion */}
        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="overflow-hidden rounded-[24px] border border-[#e8edf3] bg-white/90 shadow-[0_12px_35px_rgba(24,38,60,0.06)] backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className={`
                    flex w-full items-center justify-between gap-6
                    px-6 py-5 text-left transition-all duration-300 sm:px-8
                    ${isOpen ? "bg-[#18263c] text-white" : "bg-white text-[#18263c] hover:bg-[#f8fbff]"}
                  `}
                >
                  <span className="text-lg font-semibold leading-snug sm:text-xl">
                    {item.question}
                  </span>

                  <span
                    className={`
                      flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                      border transition-all duration-300
                      ${isOpen
                        ? "border-white/20 bg-white/10"
                        : "border-[#d9e3ef] bg-[#f8fbff]"}
                    `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#f8f5ef] px-6 py-6 sm:px-8">
                        <p className="text-base leading-[1.9] text-[#475569]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}