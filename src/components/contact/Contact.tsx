import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:abhiyankhanal7@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "abhiyankhanal7@gmail.com",
      link: "mailto:abhiyankhanal7@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Abhiyan Khanal",
      link: "https://www.linkedin.com/in/abhiyan-khanal-4406b2248/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "Abhiyan31415",
      link: "https://github.com/Abhiyan31415",
      color: "from-gray-500 to-slate-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Lalitpur, Nepal",
      link: "#",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 px-3 md:px-6 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Ready to collaborate on your next project or discuss innovative solutions? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            <Card className="bg-gray-800/50 backdrop-blur-lg border border-gray-700">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Get In Touch</h3>
                <div className="space-y-3 md:space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${info.color} flex-shrink-0`}>
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-400 text-xs md:text-sm">{info.label}</p>
                        <p className="text-white font-medium text-sm md:text-base truncate">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 backdrop-blur-lg border border-gray-700">
              <CardContent className="p-4 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm md:text-base"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 flex items-center justify-center space-x-2 py-2 md:py-3"
                  >
                    <Send className="w-4 h-4" />
                    <span className="text-sm md:text-base">Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
