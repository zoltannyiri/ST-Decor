
import { motion } from "motion/react"

const images = [
  {
    src: "/home1.jpg",
    alt: "Egyedi, kézzel készített dekorfal",
  },
  {
    src: "/home2.jpg",
    alt: "Dekorfestés részletgazdag mintázattal",
  },
  {
    src: "/home3.jpg",
    alt: "Különleges textúrájú dekorfestés",
  },
]

export default function AboutSection() {
  return (
    <section id="rolam" className="relative scroll-mt-20 overflow-hidden bg-linear-to-b from-white via-[#f8f5ef] to-[#eee8df] py-20 lg:py-28">
      {/* Finom háttérdíszítés */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#dcebff]/20 blur-[120px]" />

      <div className=" relative mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-14 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:px-10">

        {/* BAL OLDAL - BEMUTATKOZÁS */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="min-w-0"
        >
          {/* Szekciófelirat */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#c39d4a]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b39361]">
              Az ST Decor világa
            </span>
          </div>

          {/* Főcím */}
          <h2 className="font-garamond text-5xl leading-[1.1] tracking-tight text-[#18263c] sm:text-6xl">
            Sziasztok<span className="text-[#c39d4a]">!</span>
          </h2>

          {/* Bevezető */}
          <p className="mt-7 text-lg font-medium leading-[1.8] text-[#375074]">
            Megosztanék veletek néhány gondolatot a sokak által kedvelt dekorfalakról
          </p>

          {/* Bemutatkozó szöveg */}
          <div className="mt-6 space-y-5 text-[15px] leading-[1.9] text-[#64748b] sm:text-base">
            <p>
              Ezek a típusú falak nálunk is egyre népszerűbbek, aminek én személy szerint nagyon örülök!
              Különleges atmoszférát teremtenek bármilyen térben kézzel festett, egyedi mintázatukkal
              ,különlegesen fénylő, fal síkjából előbukkanó részleteikkel.
            </p>
          </div>

          {/* Kiemelt gondolat */}
          <div className="relative my-9 border-l-2 border-[#c39d4a] bg-[#f5f8fc] px-6 py-7 sm:px-8">
            <p className="font-garamond text-[26px] leading-[1.3] italic text-[#18263c] sm:text-3xl">
              Egyforma tapétája bárkinek lehet, de az adott térhez és személyhez megtervezett
              és kivitelezett EGYEDI dekorfalból CSAK EGY VAN!
            </p>
          </div>

          {/* További bemutatkozás */}
          <div className="space-y-5 text-[15px] leading-[1.9] text-[#64748b] sm:text-base">
            <p>
              Aki egyszer közelről megcsodálja , azt biztosan magával ragadja különleges világuk
            </p>

            <p>
              Otthonunkat, környezetünket teljesen egyedivé, személyessé tehetjük egy-egy ilyen alkotással.
            </p>

            <p>
              Legyen szó kül-és beltérről, vizes helyiségről. Konyhában csempe helyett is nagyon jól mutat.
            </p>

            <p>
              A mai modern trendekhez éppúgy igazítható mint egy klasszikus, visszafogott stílushoz.
            </p>

            <p>
              Üzlethelyiségben kialakított dekorfal trendi selfi falként is működhet
              A vevők/vendégek szívesen töltenek fel ilyen tartalmakat a közösségi médiában
            </p>

            <p>
              Fotó stúdió háttereként is remekül használható, akár cserélhető falpanelként is
            </p>
          </div>

          {/* Kérdés kiemelése */}
          <div className="my-9 rounded-2xl border border-[#e8edf3] bg-linear-to-br from-[#f8fbff] to-[#eef5fd] p-6 sm:p-8">
            <h3 className="font-garamond text-2xl leading-snug text-[#18263c] sm:text-3xl">
              Mi kell ahhoz, hogy neked is legyen egy szuper dekorfalad??
            </h3>

            <div className="mt-5 flex items-start gap-3">
              <span className="mt-3 h-px w-5 shrink-0 bg-[#c39d4a]" />
              <p className="text-base leading-[1.8] text-[#64748b]">
                Elhatározás, nyitottság, pár nm2 szabad felület / naaa kinek van??
              </p>
            </div>
          </div>

          {/* Lezárás */}
          <div className="space-y-5 text-[15px] leading-[1.9] text-[#64748b] sm:text-base">
            <p>
              Ha mindez megvan, pár nap alatt kosz-és különösebb felfordulás nélkül
              megváltoztathatod otthonod, irodád, üzlethelyiséged hangulatát.
            </p>
          </div>

          {/* Záró gondolat */}
          <p className="mt-9 font-garamond text-3xl italic leading-snug text-[#b39361] sm:text-4xl">
            Légy egyedi, tűnj ki a tömegből!
          </p>

          {/* Aláírás */}
          <div className="mt-10 border-t border-[#e8edf3] pt-7">
            <p className="font-garamond text-3xl italic text-[#18263c]">
              Stipkovits Tímea
            </p>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#94a3b8]">
              ST Design Decor
            </p>
          </div>
        </motion.article>


        
      {/* JOBB OLDAL – MODERN KÉPGALÉRIA */}
      <motion.aside
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative min-w-0 lg:pt-8"
      >
        {/* Galéria fejléc */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-[#c39d4a]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b39361]">
            Részletek a munkáimból
          </span>
        </div>

        {/* Képek */}
        <div className="flex flex-col gap-10 lg:gap-14">

          {images.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
              className={`
                group relative
                ${index === 0 ? "w-full" : ""}
                ${index === 1 ? "ml-auto w-[90%]" : ""}
                ${index === 2 ? "w-[95%]" : ""}
              `}
            >
              {/* Képkeret */}
              <div
                className="
                  relative rounded-[20px]
                  border border-[#e8edf3]
                  bg-white p-2.5 sm:p-3
                  shadow-[0_12px_40px_rgba(24,38,60,0.08)]
                  transition-all duration-500
                  group-hover:-translate-y-1
                  group-hover:shadow-[0_22px_55px_rgba(24,38,60,0.13)]
                "
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="
                    block h-auto w-full
                    rounded-[12px]
                    object-contain
                  "
                />

                {/* Kép sorszáma */}
                <span
                  className="
                    absolute -top-3 -left-3
                    flex h-10 w-10 items-center justify-center
                    rounded-full bg-[#18263c]
                    font-['Montserrat']
                    text-[11px] font-semibold text-white
                    shadow-lg
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.figure>
          ))}

        </div>

        {/* Galéria alatti rész */}
        <div className="mt-12 flex items-center gap-5">
          <span className="h-px flex-1 bg-[#dce5f0]" />

          <span className="font-garamond text-xl italic text-[#b39361]">
            Minden részlet számít.
          </span>
        </div>

        {/* Galéria link */}
        <button
          type="button"
          onClick={() =>
            document.getElementById("galeria")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="cursor-pointer group mt-7 inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#18263c] 
          transition-colors duration-300 hover:text-[#b39361]"
        >
          További munkáim
          <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </motion.aside>

      </div>
    </section>
  )
}
