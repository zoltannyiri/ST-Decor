import AboutSection from "../components/Home/AboutSection"
import HeroHeader from "../components/Home/HeroHeader"
import TestimonalsSection from "../components/Home/TestimonialsSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[white] via-[#f3f8ff] to-[#dcebff]">
      <HeroHeader />
      <AboutSection />
      <TestimonalsSection />
    </div>
  )
}