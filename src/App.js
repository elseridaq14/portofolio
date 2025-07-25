import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Tools from './components/Tools_skill/Tools'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import AiForRecruitment from './components/Projects/AiForRecruitment'
import DigitalizationForAgribusiness from './components/Projects/DigitalizationForAgribusiness'
import ScrollToSection from './components/ScrollToSection/ScrollToSection'
import Cybersecurity from './components/Projects/Cybersecurity'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <ScrollToSection>
              <About />
              <Projects />
              <Skills />
              <Tools/>
              <Contact />
            </ScrollToSection>
          } />
          <Route path="/ai-for-recruitment" element={<AiForRecruitment />} />
          <Route path="/digitalization-for-agribusiness" element={<DigitalizationForAgribusiness />} />
          <Route path="/cybersecurity-product-development" element={<Cybersecurity />} />
        </Routes>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
