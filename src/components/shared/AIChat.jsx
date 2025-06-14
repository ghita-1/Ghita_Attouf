import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'bot',
      content: "Hi! I'm your AI assistant. I can help you learn more about Ghita's portfolio. What would you like to know?"
    }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto scroll when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setChatHistory(prev => [...prev, { type: 'user', content: message }]);

    // Simulate AI response based on portfolio data
    setTimeout(() => {
      const response = generateResponse(message);
      setChatHistory(prev => [...prev, { type: 'bot', content: response }]);
    }, 1000);

    setMessage('');
  };

  const generateResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
  
    // General Info
    if (lowerMessage.includes('who is') || lowerMessage.includes('tell me about the developer')) {
      return "Ghita is a passionate software developer from Morocco, specializing in full-stack development with .NET, React, and Angular.";
    }
    if (lowerMessage.includes('where is') || lowerMessage.includes('from')) {
      return "Ghita is from Morocco, where she has built her career in software development.";
    }
    if (lowerMessage.includes('how old is') || lowerMessage.includes('age')) {
      return "Ghita is 32 years old, bringing a wealth of experience and maturity to her professional endeavors.";
    }
    if (lowerMessage.includes('background')) {
      return "Ghita has a background in software engineering, with a focus on full-stack development. She has worked on various projects and has a strong foundation in both front-end and back-end technologies, especially with .NET, React, and Angular.";
    }
  
    // Professional Vibes
    if (lowerMessage.includes('tech stack')) {
      return "Ghita's main tech stack includes .NET, React, Angular, Node.js, and SQL.";
    }
    if (lowerMessage.includes('specialty')) {
      return "Ghita's specialty is full-stack development, building robust web applications using .NET, React, and Angular.";
    }
    if (lowerMessage.includes('projects') || lowerMessage.includes('worked on')) {
      return "Ghita has worked on several notable projects, including a Car Rental System and an Islamic App. Each project showcases her skills in full-stack development and her ability to tackle complex challenges.";
    }
    if (lowerMessage.includes('experience with') || lowerMessage.includes('react') || lowerMessage.includes('.net') || lowerMessage.includes('laravel')) {
      return "Ghita has extensive experience with .NET, React, and Angular. She is proficient in these technologies and has used them in various projects to deliver high-quality software solutions.";
    }
    if (lowerMessage.includes('most impressive project')) {
      return "Her Car Rental System project stands out for its complexity and seamless user experience.";
    }
  
    // Skills & Strengths
    if (lowerMessage.includes('skills')) {
      return "Ghita's skills include .NET, React, Angular, Node.js, SQL, teamwork, problem-solving, and delivering high-quality software.";
    }
    if (lowerMessage.includes('stand out')) {
      return "Ghita stands out for her ability to quickly learn new technologies, her attention to detail, and her collaborative spirit.";
    }
    if (lowerMessage.includes('team')) {
      return "Yes, Ghita is great at working in a team and values collaboration to achieve the best results.";
    }
    if (lowerMessage.includes('git')) {
      return "Yes, Ghita is proficient with Git and uses it daily for version control and collaboration.";
    }
    if (lowerMessage.includes('agile') || lowerMessage.includes('scrum')) {
      return "Yes, Ghita is familiar with Agile and Scrum methodologies and has worked in Agile teams.";
    }
  
    // Education & Experience
    if (lowerMessage.includes('study')) {
      return "Ghita is pursuing a Professional Bachelor's Degree in Software Engineering at ENSA and has completed a Diploma in Full Stack Digital Development.";
    }
    if (lowerMessage.includes('courses')) {
      return "Ghita has completed courses in software engineering, full-stack development, and modern web technologies.";
    }
    if (lowerMessage.includes('years of experience')) {
      return "Ghita has several years of experience in software development, working on various projects and roles that have honed her skills and expertise.";
    }
  
    // Portfolio Projects
    if (lowerMessage.includes('tell me about the') && lowerMessage.includes('project')) {
      if (lowerMessage.includes('car rental')) {
        return "The Car Rental System is a full-stack web application developed by Ghita, featuring user authentication, booking management, and an admin dashboard. She handled both the front-end (React) and back-end (.NET) development.";
      }
      if (lowerMessage.includes('islamic')) {
        return "The Islamic App is a mobile-friendly application that provides prayer times, Quran readings, and Islamic resources. Ghita developed the UI with React and managed the backend services.";
      }
      return "Ghita has worked on several projects, each with unique challenges and solutions. Let me know which project you want to know more about!";
    }
    if (lowerMessage.includes('what did') && lowerMessage.includes('do in this project')) {
      return "Ghita was responsible for the full-stack development, from designing the UI to implementing backend logic and deploying the application.";
    }
    if (lowerMessage.includes('only person') && lowerMessage.includes('worked on it')) {
      return "Some projects were solo, while others involved collaboration with other developers and designers.";
    }
    if (lowerMessage.includes('challenges')) {
      return "Challenges included integrating complex features, optimizing performance, and ensuring a seamless user experience. Ghita overcame these with research, teamwork, and persistence.";
    }
  
    // Personal Touch
    if (lowerMessage.includes('fun')) {
      return "Ghita enjoys learning new technologies, reading, and exploring creative coding projects in her free time.";
    }
    if (lowerMessage.includes('values')) {
      return "Ghita values continuous learning, collaboration, and delivering quality work with integrity.";
    }
    if (lowerMessage.includes('freelance')) {
      return "Yes, Ghita is open to freelance opportunities. Feel free to reach out!";
    }
    if (lowerMessage.includes('contact')) {
      return "You can reach Ghita at attoufghita92@gmail.com, or connect via LinkedIn and GitHub.";
    }
  
    // Default response
    return "I can help you learn more about Ghita's skills, projects, experience, or education. What would you like to know?";
  };

  return (
    <>
      {/* Chat Icon Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full 
          bg-gradient-to-r from-blue-500 to-purple-500 
          shadow-[0_0_20px_rgba(59,130,246,0.5)]
          hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]
          transition-all duration-300 flex items-center justify-center text-white"
      >
        <FaRobot className="text-2xl" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 
              bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 
              backdrop-blur-xl rounded-2xl 
              shadow-[0_0_30px_rgba(0,0,0,0.5)]
              border border-white/10
              overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
              border-b border-white/10 backdrop-blur-sm
              flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                  flex items-center justify-center text-white">
                  <FaRobot className="text-lg" />
                </div>
                <span className="text-white font-medium">AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 
                  text-gray-400 hover:text-white transition-all duration-300
                  flex items-center justify-center"
              >
                <FaTimes />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {chatHistory.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-white/5 backdrop-blur-sm text-gray-200 border border-white/10'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-zinc-900/50 backdrop-blur-sm">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 
                    text-white placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50
                    transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 
                    text-white hover:opacity-90 transition-all duration-300
                    flex items-center justify-center
                    shadow-[0_0_15px_rgba(59,130,246,0.3)]
                    hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
};

export default AIChat; 