import PageTransition from '../components/shared/PageTransition'
import SectionTitle from '../components/shared/SectionTitle'
import ProjectCard from '../components/projects/ProjectCard'
import projects from '../data/projects'

const Projects = () => {
  return (
    <PageTransition>
      <section className="section">
        <div className="container mx-auto">
          <SectionTitle 
            title="My Projects" 
            subtitle="Showcasing my most significant work and contributions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Projects