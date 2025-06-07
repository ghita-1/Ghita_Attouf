import { motion } from 'framer-motion'
import { useEffect } from 'react'
import PageTransition from '../components/shared/PageTransition'
import SectionTitle from '../components/shared/SectionTitle'
import me from "../assets/Me.jpeg"

const About = () => {
  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="About Me" 
            subtitle="Learn more about my background and experience"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Image Container with Enhanced Styling */}
            <motion.div 
              className="md:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative group">
                {/* Enhanced gradient background */}
                <motion.div
                  className="absolute -inset-2 rounded-xl opacity-50 group-hover:opacity-70 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(45deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2))',
                    filter: 'blur(20px)'
                  }}
                />
                
                {/* Main image container */}
                <div className="relative rounded-xl overflow-hidden border border-gray-800">
                  <img 
                    src={me} 
                    alt="Developer profile" 
                    className="w-full h-full object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24">
                  <div className="w-full h-full rounded-full bg-blue-500/10 blur-xl" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20">
                  <div className="w-full h-full rounded-full bg-purple-500/10 blur-xl" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-7 space-y-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Junior .NET & React/Angular Developer
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  I'm a passionate full-stack developer with over 2 years of experience building web applications using .NET with React and Angular. 
                  I started with a love for intuitive user interfaces and grew into mastering both frontend and backend development.
                </p>
                
                <p className="text-gray-300">
                  I focus on writing clean, maintainable code and delivering smooth user experiences. Outside of coding, 
                  I enjoy exploring new technologies and contributing to open-source projects.
                </p>
              </div>

              {/* Education and Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">Education</h4>
                  <ul className="space-y-4">
                    <li className="p-3 rounded-lg bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/10">
                      <div className="font-medium text-white">Software Engineering and Information Systems</div>
                      <div className="text-sm text-gray-400">Professional Bachelor's Degree - ENSA</div>
                      <div className="text-xs text-green-500">2025</div>
                    </li>
                    <li className="p-3 rounded-lg bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/10">
                      <div className="font-medium text-white">Full Stack Digital Development</div>
                      <div className="text-sm text-gray-400">Specialized institute of applied technology</div>
                      <div className="text-xs text-green-500">2021 - 2023</div>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Experience</h4>
                  <ul className="space-y-4">
                    <li className="p-3 rounded-lg bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10">
                      <div className="font-medium text-white">.NET/React Developer</div>
                      <div className="text-sm text-gray-400">Intensive Internship - JobInTech(UIR)</div>
                      <div className="text-xs text-purple-400">2024</div>
                    </li>
                    <li className="p-3 rounded-lg bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10">
                      <div className="font-medium text-white">.NET/Angular Developer</div>
                      <div className="text-sm text-gray-400">Internship - DXC.CDG</div>
                      <div className="text-xs text-purple-400">2025</div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default About