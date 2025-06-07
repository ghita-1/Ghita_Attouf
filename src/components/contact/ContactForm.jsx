import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // This would typically send the form data to a server
    // For demo purposes, we'll just show a success message
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent successfully! I will get back to you soon.'
    })
    
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6 md:p-8"
    >
      {formStatus.submitted ? (
        <div className={`text-center p-6 rounded-lg ${formStatus.success ? 'bg-success-50 text-success-700 dark:bg-success-900/30 dark:text-success-300' : 'bg-error-50 text-error-700 dark:bg-error-900/30 dark:text-error-300'}`}>
          <h3 className="text-xl font-bold mb-2">
            {formStatus.success ? 'Message Sent!' : 'Error'}
          </h3>
          <p>{formStatus.message}</p>
          <button
            onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
            className="mt-4 btn btn-primary"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white"
                placeholder="Your email"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white"
              placeholder="Subject of your message"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-md focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-800 dark:text-white"
              placeholder="Your message"
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full md:w-auto btn btn-primary"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </motion.div>
  )
}

export default ContactForm