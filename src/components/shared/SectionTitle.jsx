import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-3 relative inline-block"
      >
        {title}
        <motion.span 
          initial={{ width: 0 }}
          animate={{ width: '60%' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-primary-500 dark:bg-primary-400"
        />
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle