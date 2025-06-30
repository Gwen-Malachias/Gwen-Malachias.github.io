import React, { useEffect, useState } from 'react';
import { Shield, Code, Users, Zap, Target, Award, Brain, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreValues = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Security First",
      description: "Prioritizing cybersecurity and data protection in every solution"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to solve complex problems"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Collaboration",
      description: "Building strong teams and fostering knowledge sharing"
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Results-Driven",
      description: "Delivering measurable outcomes and continuous improvement"
    }
  ];

  const skills = [
    "IT Modernization & Strategy",
    "Cloud Solutions & Migration", 
    "Cybersecurity Compliance",
    "Endpoint Protection & System Security",
    "Process Automation (Java, Python)",
    "IT Training & Enablement",
    "DevOps, JAMF, MDT Imaging",
    "Multi-OS Support (Windows, macOS, Linux)",
    "Digital Transformation",
    "Network Security",
    "Enterprise Architecture",
    "Risk Assessment"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about leveraging technology to create secure, efficient, and scalable IT solutions
          </p>
        </div>

        {/* Professional Summary */}
        <div className="mb-20">
          <Card className="bg-gradient-to-br from-blue-50 to-red-50 dark:from-blue-900/10 dark:to-red-900/10 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-red-700 rounded-2xl flex items-center justify-center">
                    <Brain className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Professional Summary</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Detail-oriented IT professional with <span className="font-semibold text-blue-600">6+ years of experience</span> supporting 
                    end-users, modernizing infrastructure, and automating processes across academic and commercial environments. 
                    Proven ability to secure systems, enhance performance, and streamline workflows through strategic IT solutions and scripting.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">30,000+</div>
                      <div className="text-sm text-muted-foreground">Users Supported</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">8,000+</div>
                      <div className="text-sm text-muted-foreground">Devices Managed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">85+</div>
                      <div className="text-sm text-muted-foreground">Team Members Trained</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">35%</div>
                      <div className="text-sm text-muted-foreground">Efficiency Gained</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
            Core Values & Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
            Skills & Technical Expertise
          </h2>
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="p-3 text-sm font-medium bg-background/60 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Mission */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600/10 to-red-700/10 border-blue-200 dark:border-blue-800">
            <CardContent className="p-12">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-foreground">Personal Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                To drive digital transformation through innovative IT solutions that prioritize security, efficiency, and user experience. 
                I believe in empowering organizations with robust technology infrastructure while fostering a culture of continuous learning and improvement.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
