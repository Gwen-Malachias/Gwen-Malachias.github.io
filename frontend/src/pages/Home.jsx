import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Code, Users, Zap, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "30,000+ Users Supported",
      description: "Providing tier 1-2 technical support across academic environments"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "8,000+ Devices Secured",
      description: "Managing enterprise endpoint protection and cybersecurity"
    },
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      title: "35% Efficiency Gained",
      description: "Through process automation and strategic IT solutions"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "85+ Team Members Mentored",
      description: "Leading and training technical support teams"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/50 to-muted/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-red-700 to-blue-800 bg-clip-text text-transparent leading-tight">
              Gwendolyn Micahella
              <br />
              <span className="text-4xl md:text-6xl">Malachias</span>
            </h1>
            
            <div className="mb-8 space-y-2">
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Lead Student Technician
              </p>
              <p className="text-lg md:text-xl text-muted-foreground">
                IT Strategy & Optimization Consultant • RF Exploitation Engineer
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Detail-oriented IT professional with <span className="font-semibold text-blue-600">6+ years of experience</span> supporting end-users, 
              modernizing infrastructure, and automating processes across academic and commercial environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-red-700 hover:from-blue-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105">
                <Link to="/experience">
                  View My Experience <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-accent transition-all duration-300">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
              Impact & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering measurable results through strategic IT solutions and cybersecurity expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-background/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-red-700/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how my expertise in IT strategy, cybersecurity, and infrastructure modernization can help drive your organization forward.
          </p>
          <Button asChild size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-red-700 hover:from-blue-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105">
            <Link to="/contact">
              Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;