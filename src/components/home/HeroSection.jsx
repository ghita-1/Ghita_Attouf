import { motion } from 'framer-motion'
import { FaCheckCircle, FaDownload } from 'react-icons/fa'
import ghita from "../../assets/ghita.jpeg"

const HeroSection = () => {
  return (
    <div className="min-h-screen relative mt-10  overflow-hidden bg-transparent px-4">
      <div className="container mx-auto min-h-screen flex items-center">
        <div className="w-full">
          {/* Download Resume Button */}
          <div className="flex justify-end mb-16">
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              href="/resume.pdf"
              download="Attouf_Ghita_Resume.pdf"
              className="inline-flex items-center px-4 py-2 rounded-lg
                bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                hover:from-blue-500/20 hover:to-purple-500/20
                border border-blue-500/30 hover:border-purple-500/50
                text-white transition-all duration-300 group"
            >
              <FaDownload className="mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Resume</span>
            </motion.a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-800 relative z-10 bg-gray-900">
                <img
                  src={ghita}
                  alt="Ghita Attouf"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold"
                >
                  Attouf Ghita
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <FaCheckCircle className="text-blue-500 text-2xl" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400 mb-4"
              >
                @attoufghita
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              >
                .NET & React/Angular Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-400 text-lg"
              >
                Crafting elegant web solutions with modern technologies.
                Designing modern web solutions with a touch of timeless quality.
                Creating smooth and powerful web apps with the latest tech stack.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection