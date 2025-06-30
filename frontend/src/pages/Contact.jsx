import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, MapPin, Phone, Send, MessageCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Email",
      value: "gmalachias@oregonstate.edu",
      href: "mailto:gmalachias@oregonstate.edu",
      description: "Best for detailed inquiries and professional discussions"
    },
    {
      icon: <Linkedin className="h-8 w-8 text-blue-600" />,
      title: "LinkedIn",
      value: "Gwendolyn Malachias",
      href: "https://www.linkedin.com/in/g-seabra-malachias-2bb609199/",
      description: "Connect for professional networking and opportunities"
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "Location",
      value: "Corvallis, OR",
      href: null,
      description: "Available for local and remote opportunities"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to real backend API
      const response = await axios.post(`${API}/contact`, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      if (response.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      
      let errorMessage = "Please try again or contact me directly via email.";
      if (error.response?.data?.detail) {
        errorMessage = error.response.data.detail;
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast({
        title: "Error Sending Message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next IT strategy or cybersecurity initiative? Let's connect and discuss how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Let's Start a Conversation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for IT strategy consulting, cybersecurity expertise, or team leadership, 
                I'm here to help. Reach out using any of the methods below, and I'll respond promptly.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {method.title}
                        </h3>
                        {method.href ? (
                          <a 
                            href={method.href}
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-blue-600 hover:text-blue-700 font-medium flex items-center group/link"
                          >
                            {method.value}
                            {method.href.startsWith('http') && (
                              <ExternalLink className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                            )}
                          </a>
                        ) : (
                          <p className="text-muted-foreground font-medium">{method.value}</p>
                        )}
                        <p className="text-muted-foreground text-sm mt-1">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Availability Notice */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Current Availability</h3>
                    <p className="text-muted-foreground text-sm">
                      Available for consulting projects and full-time opportunities. 
                      Typical response time: within 24 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl bg-gradient-to-br from-background to-muted/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Send className="h-6 w-6 mr-2 text-blue-600" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="What's this about?"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell me about your project, questions, or how I can help..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-red-700 hover:from-blue-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Professional Contact Form:</strong> Messages are securely stored and I'll respond within 24 hours. 
                    For urgent matters, please use the email or LinkedIn links above.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Professional Services */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-blue-600/10 to-red-700/10 border-blue-200 dark:border-blue-800">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Professional Services Available</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">IT Strategy Consulting</h3>
                  <p className="text-muted-foreground">Infrastructure assessments, modernization planning, and digital transformation guidance</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Cybersecurity Analysis</h3>
                  <p className="text-muted-foreground">Security assessments, compliance audits, and incident response planning</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Team Leadership</h3>
                  <p className="text-muted-foreground">Technical team mentoring, training program development, and process optimization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;