import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MobileMenuButton = ({ isOpen, toggleSidebar }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-4 left-4 z-50 p-3 rounded-md bg5 dark:bg-dark-700 shadow-md"
      onClick={toggleSidebar}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </motion.button>
  )
}

export default MobileMenuButton