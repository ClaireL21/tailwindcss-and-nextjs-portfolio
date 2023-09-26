import PinboardSection from "@/components/projectsections/PinboardSection"

export const metadata = {
  title: "Pinboard | Claire Lu"
}

export default function PinboardPage() {
    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
          <PinboardSection/>
        </main>
      )
}