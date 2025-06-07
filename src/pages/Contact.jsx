import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import PageTransition from '../components/shared/PageTransition'
import SectionTitle from '../components/shared/SectionTitle'
import ContactForm from '../components/contact/ContactForm'
import { motion } from 'framer-motion'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'john.doe@example.com',
      link: 'mailto:john.doe@example.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'New York, NY',
      link: null
    }
  ]
  
  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      username: 'johndoe',
      link: 'https://github.com/johndoe'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      username: 'johndoe',
      link: 'https://linkedin.com/in/johndoe'
    },
    {
      icon: <FaTwitter />,
      label: 'Twitter',
      username: '@johndoe',
      link: 'https://twitter.com/johndoe'
    }
  ]
  
  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Get In Touch" 
            subtitle="I'm always open to discussing new projects, opportunities, and partnerships"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6 md:p-8 h-full"
              >
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-primary-500 dark:text-primary-400 mt-1 mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{info.label}</h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-dark-600"
                    >
                      <div className="text-primary-500 dark:text-primary-400 mr-3">
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{social.label}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact