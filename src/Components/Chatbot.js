import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized, messages, scrollToBottom]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
    if (!isOpen) {
      setMessages([
        {
          type: 'bot',
          content: "Hello! I'm RohanBot, your virtual real estate assistant. How can I help you today?",
          options: [
            'Plot Information',
            'Construction Services',
            'Custom Home Design',
            'Investment Advice',
          ],
        },
      ]);
    }
  };

  const minimizeChat = () => setIsMinimized(!isMinimized);

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { type: 'user', content: input }]);
      handleUserInput(input);
      setInput('');
    }
  };

  const simulateTyping = (callback) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
      scrollToBottom();
    }, Math.random() * 1000 + 500);
  };

  const handleUserInput = (input) => {
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    simulateTyping(() => {
      let botResponse = '';
      const lowercaseInput = input.toLowerCase();

      if (lowercaseInput.includes('plot')) {
        botResponse = "We offer a variety of plots to suit your needs:\n1. Residential Plots: Perfect for building your dream home.\n2. Commercial Plots: Ideal for business ventures.\n3. Agricultural Plots: For those interested in farming or rural properties.\n\nWould you like more information on any specific type of plot?";
      } else if (lowercaseInput.includes('construction')) {
        botResponse = "Our construction services include:\n1. Full-service home building\n2. Commercial construction\n3. Renovation and remodeling\n4. Project management\n\nWe use high-quality materials and work with experienced professionals. What kind of construction project are you considering?";
      } else if (lowercaseInput.includes('custom home')) {
        botResponse = "Our custom home design process involves:\n1. Initial consultation to understand your vision\n2. Conceptual design and 3D modeling\n3. Detailed architectural plans\n4. Interior design services\n5. Green building options\n\nWould you like to schedule a consultation with one of our design experts?";
      } else if (lowercaseInput.includes('investment')) {
        botResponse = "We offer comprehensive real estate investment advice:\n1. Market analysis and trends\n2. ROI projections for different property types\n3. Portfolio diversification strategies\n4. Tax implications of real estate investments\n\nWhat specific aspect of real estate investment are you most interested in?";
      } else {
        botResponse = "I apologize, but I didn't quite understand your question. Could you please rephrase or choose one of the options below?";
      }

      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: botResponse,
        options: [
          'Plot Information',
          'Construction Services',
          'Custom Home Design',
          'Investment Advice',
        ],
      }]);
    });
  };

  const handleAppointmentInputChange = (e) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: 'Rohan Infra',
      from_name: appointmentData.name,
      from_email: appointmentData.email,
      from_phone: appointmentData.phone,
      appoint_date: `Appointment requested for ${appointmentData.date}`,
    };

    emailjs.send('service_6i9br0x', 'template_po4448h', templateParams, 'V6XQV5b3ZjIxTPWFc')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Appointment booked successfully!');
        setShowAppointmentModal(false);
        setAppointmentData({ name: '', email: '', phone: '', date: '' });
        handleUserInput('Appointment booked successfully');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to book appointment. Please try again later.');
      });
  };

  const AppointmentModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100000000000]">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
        <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
        <p className="mb-4">Please fill out the form below to schedule an appointment with one of our real estate experts.</p>
        <form onSubmit={handleAppointmentSubmit} className="space-y-4">
          <input
            className="w-full p-2 border rounded"
            placeholder="Your Name"
            required
            name="name"
            value={appointmentData.name}
            onChange={handleAppointmentInputChange}
          />
          <input
            className="w-full p-2 border rounded"
            type="email"
            placeholder="Your Email"
            required
            name="email"
            value={appointmentData.email}
            onChange={handleAppointmentInputChange}
          />
          <input
            className="w-full p-2 border rounded"
            type="tel"
            placeholder="Your Phone Number"
            required
            name="phone"
            value={appointmentData.phone}
            onChange={handleAppointmentInputChange}
          />
          <input
            className="w-full p-2 border rounded"
            type="date"
            required
            name="date"
            value={appointmentData.date}
            onChange={handleAppointmentInputChange}
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300">Book Appointment</button>
        </form>
        <button onClick={() => setShowAppointmentModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleChat}
            className="chatbot fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          >
            <MessageSquare size={32} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
              1
            </span>
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed ${
              isMinimized ? 'bottom-4 right-4 w-auto h-auto' : 'bottom-4 right-4 w-96 h-[32rem]'
            } bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out z-50`}
          >
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 flex justify-between items-center">
              <h3 className="text-lg font-bold">RohanBot</h3>
              <div className="flex items-center space-x-2">
                <button onClick={minimizeChat} className="text-white hover:text-gray-200 transition-colors duration-300">
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button onClick={toggleChat} className="text-white hover:text-gray-200 transition-colors duration-300">
                  <X size={18} />
                </button>
              </div>
            </div>
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${
                          message.type === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.type === 'user'
                              ? 'bg-blue-100 text-blue-900'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          {message.options && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {message.options.map((option, i) => (
                                <button
                                  key={i}
                                  onClick={() => {
                                    handleUserInput(option);
                                    setTimeout(scrollToBottom, 0);
                                  }}
                                  className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 transition-colors duration-300"
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
                        <div className="typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div className="p-2 border-t flex items-center space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-2 border rounded"
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    ref={inputRef}
                  />
                  <button onClick={handleSend} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-300">
                    <Send size={16} />
                  </button>
                  
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {showAppointmentModal && <AppointmentModal />}
      <style jsx>{`
        .typing-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .typing-indicator span {
          height: 8px;
          width: 8px;
          background-color: #3B82F6;
          border-radius: 50%;
          display: inline-block;
          margin: 0 2px;
          opacity: 0.4;
          animation: typing 1s infinite ease-in-out;
        }
        .typing-indicator span:nth-child(1) {
          animation-delay: 0.1s;
        }
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.3s;
        }
        @keyframes typing {
          0% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-5px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
        }
        @media (max-width: 600px) {
          .chatbot {
            display: none;
          }
        
      `}</style>
    </>
  );
};

export default Chatbot;