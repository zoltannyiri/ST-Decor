

export default function HeroHeader({ children }) {
  return (
    <section id="home" className=" relative isolate w-full overflow-hidden bg-linear-to-br from-white via-[#f3f8ff] to-[#dcebff] " >
      {/* Bal oldal - szöveges tartalom */}
      <div className=" relative z-10 mx-auto flex min-h-[420px] max-w-7xl  px-6 pt-[300px] pb-12 lg:min-h-[780px] lg:px-0 lg:pt-44 lg:pb-24">
        
        <div className="w-full max-w-xl lg:w-[48%]">
          {children ?? (
            <div className="flex flex-col items-start">

              {/* Kategória */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-[#c39d4a]" />
                <span className="hidden lg:block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#6c82a8]">
                  ST DECOR · DEKORFESTÉS
                </span>
              </div>

              {/* Főcím */}
              <h1 className="max-w-xl font-garamond text-[clamp(2.3rem,4vw,3.8rem)] leading-[1.08] tracking-[-0.035em] text-[#18263c]">
                Álmodd újra
                <span className="block italic text-[#b39361]">
                  otthonod falait!
                </span>
              </h1>

              <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-[#375074] sm:text-lg">
                Művészi dekorfestés egyedi stílusban.
              </p>

              <p className="mt-4 max-w-md text-sm leading-[1.9] text-[#64748b] sm:text-base">
                Legyen az otthonod a te személyes művészi galériád! Ha lakásfelújításon gondolkodsz, és különleges dekorfalakat szeretnél, jó helyen jársz. 
                Kiváló minőségű, egyedi dekorációs megoldások - teljesen az igényeidre szabva.
              </p>

              <button
                type="button"
                onClick={() =>
                  document.getElementById("kapcsolat")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="cursor-pointer group mt-9 inline-flex items-center justify-center gap-7 rounded-full bg-[#18263c] px-7 py-4 text-[11px] font-semibold uppercase 
                  tracking-[0.12em]
                  text-white shadow-[0_10px_30px_rgba(24,38,60,0.15)] transition-all duration-300
                  hover:-translate-y-1 hover:bg-[#375074] hover:shadow-[0_15px_35px_rgba(24,38,60,0.2)]">
                    Kérj visszahívást

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>

            </div>
          )}
        </div>

      </div>

      {/* Jobb oldal - képhely */}
      <div className="absolute top-20 right-0 h-[360px] w-[90%] lg:inset-y-0 lg:h-full lg:w-[42%]">
        <div className="hero-image-shape relative h-full w-full overflow-hidden bg-[#c8d7e8]">
          <img
            src="/profil1.png"
            alt="ST Decor bemutatkozó kép"
            className="h-full w-full object-cover object-[center_15%]"
          />
          <div className=" pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-[#f3f8ff] lg:hidden" />
        </div>
      </div>

      {/* Alsó hullámos elválasztó */}
      <svg
        className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-10 w-full lg:h-24"
        viewBox="0 0 1920 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 110 Q960 -20 1920 110 L1920 160 L0 160 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  )
}
