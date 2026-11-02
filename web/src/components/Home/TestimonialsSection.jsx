
import { motion } from "motion/react"

const reviews = [
  {
    id: 1,
    name: "Kovács Kata",
    rating: 5,
    text: "Nagyon elégedett voltam Tímea munkájával! Minőségi anyagokkal dolgozik, és minden a megbeszéltek szerint zajlott! Ajánlom mindenkinek!",
    image: "/kovacs_kata.webp",
  },
  {
    id: 2,
    name: "Imre Ivett",
    rating: 5,
    text: "Ide kerül a második ügyfél véleménye. A dekorfestéssel kapcsolatos tapasztalatait itt tudod megjeleníteni.",
    image: "/imre_ivett.webp",
  },
]

export default function TestimonialsSection() {
  return (
    <section
      id="velemenyek"
      className="
        relative overflow-hidden
        bg-linear-to-b
        from-[#f3f8ff] via-[#f5f3ef] to-[#e8eff7]
        px-6 py-24 lg:py-32
      "
    >
      <svg
        className="pointer-events-none absolute top-[-1px] left-0 z-10 h-10 w-full lg:h-24"
        viewBox="0 0 1920 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 0 H1920 V45 Q960 255 0 45 Z"
          fill="#eee8df"
        />
      </svg>
      <div className="relative mx-auto max-w-7xl">

        {/* Szekció fejléce */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          {/* <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b39361]">
            Visszajelzések
          </p> */}

          <h2 className="font-garamond text-5xl text-[#18263c] sm:text-6xl">
            Rólunk <span className="italic text-[#b39361]">mondták</span>
          </h2>
        </motion.div>

        {/* Véleménykártyák */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="
                group relative flex h-full min-h-[320px]
                flex-col rounded-[28px]
                border border-white/70
                bg-white px-8 pt-10 pb-12
                shadow-[0_15px_50px_rgba(24,38,60,0.07)]
                transition-shadow duration-300
                hover:shadow-[0_25px_60px_rgba(24,38,60,0.12)]
                sm:px-10
              "
            >
              {/* Idézőjel */}
              <span
                aria-hidden="true"
                className="
                  absolute right-8 top-3
                  font-garamond text-8xl
                  leading-none text-[#c39d4a]/15
                "
              >
                “
              </span>

              {/* Vélemény */}
              <p className="relative z-10 flex-1 text-[15px] leading-[1.9] text-[#475569] sm:text-base">
                {review.text}
              </p>

              {/* Csillagok, név és dátum */}
              <div className="mt-8 pr-16">

                <div
                  role="img"
                  aria-label={`${review.rating} csillagos értékelés`}
                  className="mb-4 flex gap-1 text-2xl text-[#e5a900]"
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} aria-hidden="true">
                      {i < review.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-[#18263c]">
                  {review.name}
                </h3>

              </div>

              {/* Kilógó kör alakú profilikon */}
              <div
                className=" absolute -bottom-8 right-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#18263c] shadow-[0_12px_30px_rgba(24,38,60,0.20)]
                  transition-transform duration-300 group-hover:scale-105">
                <img
                  src={review.image}
                  alt={`${review.name} profilképe`}
                  loading="lazy"
                  decoding="async"
                  className="rounded-full object-cover"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
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
