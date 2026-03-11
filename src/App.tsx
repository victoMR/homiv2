import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { StatsBar } from './components/sections/StatsBar'
import { PainSection } from './components/sections/PainSection'
import { StackSection } from './components/sections/StackSection'
import { HomySection } from './components/sections/HomySection'
import { Testimonials } from './components/sections/Testimonials'
import { AboutSection } from './components/sections/AboutSection'
import { FormSection } from './components/sections/FormSection'
import { UrgencyBar, Footer } from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent/30 selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <StatsBar />
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
