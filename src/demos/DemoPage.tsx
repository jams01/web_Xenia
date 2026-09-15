import { Navbar } from '../components/Navbar'
import { ScientificHero } from '../components/ScientificExtras'
import { ScienceToSolutions } from '../components/ScienceToSolutions'
import { TechnologySection } from '../components/TechnologySection'
import { IndustrySection } from '../components/IndustrySection'
import { SolutionsSection, Footer } from '../components/AboutFooter'
import { XeniaMapSection } from '../components/XeniaMapSection'
import { TeamSection } from '../components/TeamSection'

/** Sitio XenIA — única versión: Futuro científico. */
export function DemoPage() {
  return (
    <div className="demo-shell min-h-screen bg-ink text-mist" data-theme="scientific">
      <Navbar />
      <main>
        <ScientificHero />
        <ScienceToSolutions />
        <IndustrySection />
        <TechnologySection />
        <SolutionsSection />
        <XeniaMapSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
