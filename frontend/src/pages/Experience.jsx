import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Users, Shield, Code, Zap, ExternalLink, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: "Lead Student Technician",
      company: "Oregon State University",
      location: "Corvallis, OR",
      period: "Mar 2022 – Present",
      type: "Full-time",
      description: "Leading technical support operations for a diverse academic community of 30,000+ users.",
      achievements: [
        "Delivered Tier 1–2 technical support via phone, email, and in-person to over 30,000 students, faculty, and staff",
        "Imaged and configured Windows and Mac systems using MDT, JAMF, and ASM, optimizing deployment efficiency",
        "Managed enterprise-wide endpoint protection across 6,000+ Windows and 2,000+ Mac devices",
        "Conducted one-on-one consultations with users, diagnosing and resolving complex technical issues",
        "Provided mentorship and technical training to 85+ student technicians"
      ],
      technologies: ["MDT", "JAMF", "ASM", "Windows", "macOS", "Linux", "Endpoint Protection", "Active Directory"],
      impact: {
        users: "30,000+",
        devices: "8,000+",
        team: "85+"
      }
    },
    {
      title: "IT Strategy & Optimization Consultant",
      company: "Contractor / Multiple Clients",
      location: "Multiple locations",
      period: "Jan 2018 - Jun 2021",
      type: "Contract",
      description: "Providing comprehensive IT consulting services across diverse commercial environments.",
      achievements: [
        "Delivered hardware and software troubleshooting for PCs, laptops, and Mac devices",
        "Automated ticket monitoring processes with Java scripting, decreasing manual workload by 35%",
        "Conducted IT infrastructure evaluations and recommended modernization strategies",
        "Implemented cybersecurity best practices and network security solutions",
        "Strengthened system security with password standards and MFA authentication protocols"
      ],
      technologies: ["Java", "Python", "Windows 7/10/11", "iOS", "Linux", "Network Security", "MFA", "Infrastructure Assessment"],
      impact: {
        efficiency: "35%",
        clients: "Multiple",
        projects: "20+"
      }
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            6+ years of delivering exceptional IT solutions across academic and commercial environments
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-gradient-to-br from-background to-muted/30">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-4 lg:mt-0 w-fit">
                    {exp.type}
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  {exp.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Key Achievements */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies & Tools */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                    <Code className="h-5 w-5 mr-2 text-green-600" />
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-red-600" />
                    Impact & Results
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(exp.impact).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-blue-600/10 to-red-700/10 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Leadership & Training</h3>
                  <p className="text-muted-foreground">Mentoring teams, developing training programs, and fostering collaborative environments</p>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
                  <p className="text-muted-foreground">Implementing cybersecurity frameworks and ensuring regulatory compliance</p>
                </div>
                <div className="flex flex-col items-center">
                  <Code className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Automation & Optimization</h3>
                  <p className="text-muted-foreground">Streamlining processes through scripting and strategic IT solutions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;