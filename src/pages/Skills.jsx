import { useState } from 'react'
import PageTransition from '../components/shared/PageTransition'
import SectionTitle from '../components/shared/SectionTitle'
import SkillCategory from '../components/skills/SkillCategory'
import skills from '../data/skills'
import { motion } from 'framer-motion'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical')

  return (
    <PageTransition>
      <section className="section">
        <div className="container mx-auto flex flex-col items-center">
          <SectionTitle 
            title="Skills & Expertise" 
            subtitle="A comprehensive overview of my technical and soft skills"
          />
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50">
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'technical'
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg border border-blue-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Technical Skills
              </button>
              <button
                onClick={() => setActiveTab('soft')}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'soft'
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg border border-blue-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Soft Skills
              </button>
            </div>
          </div>
          
          {/* Content */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center"
          >
            {activeTab === 'technical' ? (
              <SkillCategory title="Technical Skills" skills={[...skills.frontend, ...skills.backend, ...skills.database, ...skills.tools]} />
            ) : (
              <SkillCategory title="Soft Skills" skills={skills.softSkills} />
            )}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Skills