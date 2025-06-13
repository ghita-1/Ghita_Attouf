import { motion } from 'framer-motion'
import { FaDownload, FaUserTie, FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa'
import PageTransition from '../components/shared/PageTransition'
import SectionTitle from '../components/shared/SectionTitle'

const Resume = () => {
  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="My Resume" 
            subtitle="A detailed overview of my professional journey"
          />
          
          <div className="flex justify-center mb-8">
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              href="/resume.pdf" 
              download="Attouf_Ghita_Resume.pdf"
              className="relative inline-flex items-center px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                hover:from-blue-500/20 hover:to-purple-500/20
                border border-blue-500/30 hover:border-purple-500/50
                text-white transition-all duration-300 group"
            >
              <FaDownload className="mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Download Resume</span>
            </motion.a>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm border border-zinc-700/50"
          >
            <div className="p-6 md:p-8 space-y-8">
              {/* Personal Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-700/50">
                  <FaUserTie className="text-blue-500" />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Personal Information
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-1"
                  >
                    <p className="text-gray-400">Name:</p>
                    <p className="font-medium text-white">Attouf Ghita</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-1"
                  >
                    <p className="text-gray-400">Email:</p>
                    <p className="font-medium text-white">attoufghita92@gmail.com</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="space-y-1"
                  >
                    <p className="text-gray-400">Phone:</p>
                    <p className="font-medium text-white">0669035296</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="space-y-1"
                  >
                    <p className="text-gray-400">Location:</p>
                    <p className="font-medium text-white">Morocco, Sale Aljadida</p>
                  </motion.div>
                </div>
              </div>
              
              {/* Education */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-700/50">
                  <FaGraduationCap className="text-green-500" />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
                    Education
                  </h3>
                </div>
                
                <div className="space-y-6 pl-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/10"
                  >
                    <h4 className="font-semibold text-lg text-white">Software Engineering and Information Systems</h4>
                    <p className="text-gray-400">Professional Bachelor's Degree - ENSA</p>
                    <p className="text-sm text-gray-500">2025</p>
                    <p className="mt-2 text-gray-300">Specialized in Software Engineering and Information Systems. Building responsive full-stack web applications, using different technologies.</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/10"
                  >
                    <h4 className="font-semibold text-lg text-white">Diploma in Full Stack Digital Development</h4>
                    <p className="text-gray-400">Specialized institute of applied technology</p>
                    <p className="text-sm text-gray-500">2021 - 2023</p>
                    <p className="mt-2 text-gray-300">Focused on Modern Web Development, creating responsive full-stack applications using JavaScript ecosystems and cloud platforms.</p>
                  </motion.div>
                </div>
              </div>
              
              {/* Experience */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-700/50">
                  <FaBriefcase className="text-purple-500" />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Professional Experience
                  </h3>
                </div>
  
                <div className="space-y-6 pl-4">
                  
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg text-white">ASP.NET Core/Angular Internship</h4>
                      <span className="text-sm text-purple-400">April 2025 - Present</span>
                    </div>
                    <p className="text-purple-300 mb-3">DXC.CDG</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Developed skill-tracking system with CRUD operations
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Implemented technical skills categorization system
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Integrated project tracking features
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Built using Angular with .NET Web API
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Implemented RESTful API endpoints
                      </li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg text-white">Intensive Internship - .NET/React JS</h4>
                      <span className="text-sm text-purple-400">March - September 2024</span>
                    </div>
                    <p className="text-purple-300 mb-3">JobInTech - International University of Rabat</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Problem-Solving Techniques and Agile Development
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Applied SOLID Principles and Design Patterns
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Implemented Scrum Methodology in team projects
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Version Control workflow with Git and GitHub
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Full-stack development with React and .NET
                      </li>
                    </ul>
                  </motion.div>

                </div>
              </div>
              
              {/* Certifications */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-700/50">
                  <FaCertificate className="text-amber-500" />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 text-transparent bg-clip-text">
                    Certifications
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-amber-500/5 to-yellow-500/5 border border-amber-500/10"
                  >
                    <h4 className="font-semibold text-white">Microsoft Certified: .NET Developer</h4>
                    <p className="text-sm text-amber-400">Issued: March 2024</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-amber-500/5 to-yellow-500/5 border border-amber-500/10"
                  >
                    <h4 className="font-semibold text-white">React Certification</h4>
                    <p className="text-sm text-amber-400">Issued: June 2025</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-amber-500/5 to-yellow-500/5 border border-amber-500/10"
                  >
                    <h4 className="font-semibold text-white">JobinTech Full Stack Developer Certification</h4>
                    <p className="text-sm text-amber-400">Issued: September 2024</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Resume