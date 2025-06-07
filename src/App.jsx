import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Layout Components
import Sidebar from './components/layout/Sidebar'
import MobileMenuButton from './components/layout/MobileMenuButton'
import AnimatedBackground from './components/shared/AnimatedBackground'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    // Auto close sidebar after 1 second
    const timer = setTimeout(() => {
      setSidebarOpen(false)
    }, 1000)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
    }
  }, [])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="relative bg-black min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      
      {/* Mobile Menu Button */}
      {isMobile && (
        <div className="fixed top-4 right-4 z-50">
          <MobileMenuButton isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
      )}

      {/* Layout Container */}
      <div className="relative flex min-h-screen">
        {/* Sidebar */}
        <AnimatePresence>
          {(!isMobile || sidebarOpen) && (
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          )}
        </AnimatePresence>
        
        {/* Main Content */}
        <main 
          className={`flex-1 transition-all duration-300 ease-in-out relative z-10
            ${!isMobile && (sidebarOpen ? 'pl-[240px]' : 'pl-[60px]')}
          `}
        >
          <div className="container mx-auto">
            <section id="home" className="min-h-screen">
              <Home />
            </section>
            
            <section id="about" className="min-h-screen -mt-10">
              <About />
            </section>
            
            <section id="skills" className="min-h-screen">
              <Skills />
            </section>
            
            <section id="projects" className="min-h-screen">
              <Projects />
            </section>
            
            <section id="resume" className="min-h-screen">
              <Resume />
            </section>
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={toggleSidebar}
        />
      )}
    </div>
  )
}

export default App