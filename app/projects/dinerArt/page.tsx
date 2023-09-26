import DinerSection from "@/components/projectsections/DinerSection"

export const metadata = {
  title: "Underwater Diner | Claire Lu"
}

export default function DinerPage() {
    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
          <DinerSection/>
        </main>
      )
}