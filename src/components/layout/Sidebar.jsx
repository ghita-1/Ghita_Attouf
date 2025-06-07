import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaLaptopCode, 
  FaFileAlt,
  FaChevronLeft,
  FaChevronRight,
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import logo from '../../assets/ga.png'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navLinks = [
    { path: '#home', icon: <FaHome size={20} />, text: 'Home' },
    { path: '#about', icon: <FaUser size={20} />, text: 'About' },
    { path: '#skills', icon: <FaCode size={20} />, text: 'Skills' },
    { path: '#projects', icon: <FaLaptopCode size={20} />, text: 'Projects' },
    { path: '#resume', icon: <FaFileAlt size={20} />, text: 'Resume' }
  ]

  const socialLinks = [
    { href: "https://linkedin.com/in/ghita-attouf-b28a86240", icon: <FaLinkedin size={20} />, text: "LinkedIn", color: "hover:text-blue-500" },
    { href: "https://github.com/ghita-1", icon: <FaGithub size={20} />, text: "GitHub", color: "hover:text-gray-200" },
    { href: "https://mail.google.com/mail/?view=cm&fs=1&to=attoufghita92@gmail.com", icon: <FaEnvelope size={20} />, text: "Email", color: "hover:text-red-500" }
  ]

  const handleNavClick = (e, path) => {
    e.preventDefault()
    const element = document.querySelector(path)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const isMobile = window.innerWidth < 768
  
  return (
    <motion.aside 
      initial={{ x: isMobile ? -240 : 0 }}
      animate={{ x: 0 }}
      exit={{ x: isMobile ? -240 : 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      className={`fixed m-4 rounded-2xl h-[calc(100vh-2rem)] z-40 
        bg-zinc-950/25 backdrop-blur-3xl
        shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]
        ${isOpen ? 'w-[200px]' : 'w-[60px]'} 
        flex flex-col border border-white/20`}
    >
      {/* Logo and Toggle Button */}
      <div className="flex items-center justify-between p-3 border-b border-gray-800/50 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="GA Logo" 
            className="w-10 h-10 rounded-full cursor-pointer hover:scale-105 transition-transform"
            onClick={toggleSidebar}
          />
          {isOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-semibold text-white"
            >
              Ghita
            </motion.span>
          )}
        </div>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-1 px-2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <a 
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="flex items-center p-3 rounded-xl transition-colors hover:bg-white/10 text-white/75 hover:text-white/90"
              >
                <span className="flex-shrink-0">{link.icon}</span>
                {isOpen && (
                  <motion.span 
                    className="ml-3 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.text}
                  </motion.span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="border-t border-white/10 bg-black/20 rounded-b-2xl ">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm font-medium text-white/70 px-4 pt-4"
          >
            Connect with me
          </motion.div>
        )}
        <ul className="px-3 py-4 space-y-1">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-2 rounded-xl transition-colors hover:bg-white/10 text-white/75 ${link.color}`}
              >
                <span className="flex-shrink-0">{link.icon}</span>
                {isOpen && (
                  <motion.span
                    className="ml-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.text}
                  </motion.span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  )
}

export default Sidebar