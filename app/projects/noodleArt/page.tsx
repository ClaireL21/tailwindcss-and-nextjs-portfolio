import NoodleSection from "@/components/projectsections/NoodleSection"

export const metadata = {
  title: "Noodle | Claire Lu"
}

export default function NoodlePage() {
    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
          <NoodleSection/>
        </main>
      )
}