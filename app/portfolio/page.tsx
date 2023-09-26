import PortfolioSection from "@/components/PortfolioSection"

export const metadata = {
  title: "Portfolio | Claire Lu"
}

export default function PortfolioPage() {
    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
          <PortfolioSection/>
        </main>
      )
}