import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const ProjectCard = ({ project }) => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.1
      }
    )

    const currentElement = document.querySelector(`[data-project-id="${project.id}"]`)
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [project.id])

  return (
    <motion.div 
      data-project-id={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="project-card card overflow-hidden bg-zinc-900 h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="aspect-video bg-gray-100 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Project Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 dark:text-gray-300 mb-3 line-clamp-2">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="mb-3 mt-auto">
          <h4 className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Links */}
        <div className="flex justify-between pt-3 mt-auto border-t border-gray-800">
         
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-xs text-gray-400 hover:text-white transition-colors"
            >
              <span>Demo</span>
              <FaExternalLinkAlt className="ml-1 text-[10px]" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard