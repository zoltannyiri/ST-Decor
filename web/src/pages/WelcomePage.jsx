import { motion } from "motion/react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function WelcomePage() {

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true })
    }, 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-[#080d16] flex flex-col justify-center items-center">

      <motion.h1
        className="text-xl font-bold text-[#d0d1d3] font-garamond"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Stipkovits Tímea
      </motion.h1>

      <motion.hr
        className="mt-3 h-px border-0 bg-[#c39d4a]"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 70, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

    </div>
  )
}