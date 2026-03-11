import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { StatsBar } from './components/sections/StatsBar'
import { PipelineSection } from './components/sections/PipelineSection'
import { PainSection } from './components/sections/PainSection'
import { StackSection } from './components/sections/StackSection'
import { HomySection } from './components/sections/HomySection'
import { Testimonials } from './components/sections/Testimonials'
import { AboutSection } from './components/sections/AboutSection'
import { FormSection } from './components/sections/FormSection'
import { UrgencyBar, Footer } from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent/30 selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="pt-[8rem] overflow-x-hidden">
        <Hero />
        <StatsBar />
        <PipelineSection />
        <PainSection />
        <StackSection />
        <HomySection />
        <Testimonials />
        <AboutSection />
        <FormSection />
      </main>

      <UrgencyBar />
      <Footer />
    </div>
  )
}

export default App
