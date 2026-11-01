import AboutSection from "../components/Home/AboutSection"
import HeroHeader from "../components/Home/HeroHeader"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[white] via-[#f3f8ff] to-[#dcebff]">
      <HeroHeader />
      <AboutSection />
    </div>
  )
}