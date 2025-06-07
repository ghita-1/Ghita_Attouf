import { motion } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNode, 
  FaDatabase, FaGitAlt, FaDocker, FaServer, FaCode, FaTools,
  FaBootstrap, FaNpm, FaPhp, FaLaravel, FaCube, FaGithub,
  FaBrain, FaUsers, FaComments, FaClock, FaRocket, 
  FaChartLine, FaTasks
} from 'react-icons/fa'
import { 
  SiTypescript, SiTailwindcss, SiDotnet, SiCsharp, 
  SiPostgresql, SiMysql, SiMicrosoftazure, SiVisualstudio,
  SiVite, SiRedux, SiPostman, SiCanva, SiMicrosoftsqlserver,
  SiJira, SiFigma
} from 'react-icons/si'
import { useEffect, useState } from 'react'

// Color themes for different categories
const categoryThemes = {
  'Frontend Development': {
    primary: '#61DAFB',
    secondary: '#2563eb',
    gradient: 'from-blue-500 to-cyan-500'
  },
  'Backend Development': {
    primary: '#68A063',
    secondary: '#3B7F3B',
    gradient: 'from-green-500 to-emerald-500'
  },
  'Database & ORM': {
    primary: '#FF6B6B',
    secondary: '#EE5253',
    gradient: 'from-red-500 to-pink-500'
  },
  'Tools & Platforms': {
    primary: '#9B59B6',
    secondary: '#8E44AD',
    gradient: 'from-purple-500 to-violet-500'
  },
  'Soft Skills': {
    primary: '#F1C40F',
    secondary: '#F39C12',
    gradient: 'from-yellow-500 to-amber-500'
  }
}

const iconMap = {
  // Frontend
  'HTML5': FaHtml5,
  'CSS3': FaCss3Alt,
  'JavaScript (ES6+)': FaJs,
  'TypeScript': SiTypescript,
  'React': FaReact,
  'Redux': SiRedux,
  'Angular': FaAngular,
  'TailwindCSS': SiTailwindcss,
  'Bootstrap': FaBootstrap,
  'Vite': SiVite,

  // Backend
  'ASP.NET Core Web API': SiDotnet,
  'C#': SiCsharp,
  'Laravel': FaLaravel,
  'PHP': FaPhp,
  'Node.js': FaNode,

  // Database
  'SQL Server': SiMicrosoftsqlserver,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,

  // Tools
  'Git': FaGitAlt,
  'GitHub': FaGithub,
  'Azure DevOps': SiMicrosoftazure,
  'Docker': FaDocker,
  'Jira': SiJira,
  'Figma': SiFigma,
  'Postman': SiPostman,
  'Visual Studio': SiVisualstudio,
  'VS Code': FaCode,
  'Canva': SiCanva,

  // Soft Skills
  'Problem Solving': FaBrain,
  'Team Collaboration': FaUsers,
  'Communication': FaComments,
  'Time Management': FaClock,
  'Adaptability': FaRocket,
  'Critical Thinking': FaChartLine,
  'Project Management': FaTasks
}

// Brand colors for each skill
const skillColors = {
  'HTML5': '#E34F26',
  'CSS3': '#1572B6',
  'JavaScript (ES6+)': '#F7DF1E',
  'TypeScript': '#3178C6',
  'React': '#61DAFB',
  'Redux': '#764ABC',
  'Angular': '#DD0031',
  'TailwindCSS': '#06B6D4',
  'Bootstrap': '#7952B3',
  'Vite': '#646CFF',
  'ASP.NET Core Web API': '#512BD4',
  'C#': '#239120',
  'Laravel': '#FF2D20',
  'PHP': '#777BB4',
  'Node.js': '#339933',
  'SQL Server': '#CC2927',
  'PostgreSQL': '#336791',
  'MySQL': '#4479A1',
  'Git': '#F05032',
  'GitHub': '#E0E0E0',
  'Azure DevOps': '#0078D7',
  'Docker': '#2496ED',
  'Visual Studio': '#5C2D91',
  'VS Code': '#007ACC',
  'Jira': '#0052CC',
  'Figma': '#F24E1E',
  'Postman': '#FF6C37',
  'Canva': '#00C4CC'
}

const softSkillIcons = {
  'Problem Solving': FaBrain,
  'Team Collaboration': FaUsers,
  'Communication': FaComments,
  'Time Management': FaClock,
  'Adaptability': FaRocket,
  'Critical Thinking': FaChartLine,
  'Project Management': FaTasks
}

const SkillCategory = ({ title, skills }) => {
  const isSoftSkills = title === "Soft Skills"

  if (isSoftSkills) {
    return (
      <div className="mb-16 flex justify-center">
        <div className="max-w-5xl w-full">
          <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">
            {title}
          </h3>
          <div className="grid gap-8">
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => {
                  const Icon = softSkillIcons[skill] || FaTools
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`
                        relative group flex items-center gap-4 p-3 rounded-xl
                        border bg-gradient-to-br from-yellow-500/20 to-amber-500/20 
                        border-yellow-500/30 hover:border-yellow-500/50
                        backdrop-blur-sm transition-all duration-300 hover:scale-105
                      `}
                    >
                      <Icon className="text-xl text-yellow-500" />
                      <span className="text-sm text-gray-300">{skill}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Group skills by category
  const skillGroups = {
    frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Redux', 'Angular', 'TailwindCSS', 'Bootstrap', 'Vite'],
    backend: ['ASP.NET Core Web API', 'C#', 'Laravel', 'PHP', 'Node.js'],
    database: ['SQL Server', 'PostgreSQL', 'MySQL'],
    tools: ['Git', 'GitHub', 'Azure DevOps', 'Docker', 'Jira', 'Figma', 'Postman', 'Visual Studio', 'VS Code', 'Canva']
  }

  const groupColors = {
    frontend: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-500/50',
    backend: 'from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-500/50',
    database: 'from-red-500/20 to-pink-500/20 border-red-500/30 hover:border-red-500/50',
    tools: 'from-purple-500/20 to-violet-500/20 border-purple-500/30 hover:border-purple-500/50'
  }

  const groupTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    database: 'Database',
    tools: 'Tools & Platforms'
  }

  return (
    <div className="mb-16 flex justify-center">
      <div className="max-w-5xl w-full">
        <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">
          Technical Skills
        </h3>
        <div className="grid gap-8">
          {Object.entries(skillGroups).map(([group, groupSkills]) => (
            <div key={group} className="space-y-4">
              <h4 className="text-md font-semibold text-gray-300 ml-2">
                {groupTitles[group]}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {groupSkills.map((skill, index) => {
                  const Icon = iconMap[skill] || FaTools
                  const color = skillColors[skill] || '#666'
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`
                        relative group flex items-center gap-3 p-3 rounded-xl
                        border bg-gradient-to-br backdrop-blur-sm
                        transition-all duration-300 hover:scale-105
                        ${groupColors[group]}
                      `}
                    >
                      <Icon style={{ color }} className="text-xl" />
                      <span className="text-sm text-gray-300">{skill}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillCategory