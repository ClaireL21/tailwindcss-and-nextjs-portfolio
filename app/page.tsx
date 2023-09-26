import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import Link from 'next/link'

export const metadata = {
  title: "About | Claire Lu"
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection/>
      <AboutSection/>
      {/* <ProjectsSection/> */}
    </main>
  )
}
