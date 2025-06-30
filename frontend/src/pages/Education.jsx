import React, { useEffect, useState } from 'react';
import { GraduationCap, Award, BookOpen, Target, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const education = {
    degree: "Bachelor of Science in Cybersecurity",
    institution: "Oregon State University",
    location: "Corvallis, OR",
    period: "2018 - 2022",
    status: "Graduated",
    description: "Comprehensive cybersecurity program focusing on digital forensics, network security, risk assessment, and ethical hacking.",
    coursework: [
      "Network Security & Cryptography",
      "Digital Forensics & Incident Response",
      "Ethical Hacking & Penetration Testing",
      "Risk Assessment & Management",
      "Cybersecurity Law & Policy",
      "Secure Software Development",
      "Information Systems Security",
      "Database Security & Privacy"
    ]
  };

  const certifications = [
    {
      name: "Coursera Cybersecurity Specialization",
      provider: "Coursera",
      year: "2023",
      status: "Completed",
      description: "Advanced cybersecurity specialization covering threat detection, incident response, and security frameworks.",
      skills: ["Threat Detection", "Incident Response", "Security Frameworks", "Risk Management"]
    },
    {
      name: "OverTheWire (OTW) Challenges",
      provider: "OverTheWire",
      year: "2022 - Present",
      status: "Ongoing",
      description: "Hands-on cybersecurity challenges and war games for practical security skills development.",
      skills: ["Linux Security", "Web Exploitation", "Cryptography", "Network Analysis"]
    },
    {
      name: "Hack The Box (HTB) Academy",
      provider: "Hack The Box",
      year: "2022 - Present",
      status: "Active",
      description: "Practical cybersecurity training platform with real-world penetration testing scenarios.",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Active Directory", "Web Application Security"]
    }
  ];

  const achievements = [
    {
      title: "Dean's List Recognition",
      description: "Achieved Dean's List honors for academic excellence in cybersecurity studies",
      year: "2021-2022"
    },
    {
      title: "Cybersecurity Capstone Project",
      description: "Led a team project on enterprise network security assessment and remediation",
      year: "2022"
    },
    {
      title: "Student Technology Leadership",
      description: "Selected as Lead Student Technician based on academic and technical performance",
      year: "2022"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
            Education & Certifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development in cybersecurity and IT strategy
          </p>
        </div>

        {/* Academic Education */}
        <div className="mb-20">
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-gradient-to-br from-background to-blue-50/50 dark:to-blue-900/10 border-blue-200 dark:border-blue-800">
            <CardHeader className="pb-6">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-red-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {education.degree}
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span className="font-medium">{education.institution}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{education.period}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                    {education.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {education.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Key Coursework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {education.coursework.map((course, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Award className="h-8 w-8 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
                    <Badge variant={cert.status === 'Completed' ? 'default' : cert.status === 'Ongoing' ? 'secondary' : 'outline'}>
                      {cert.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {cert.name}
                  </CardTitle>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="font-medium">{cert.provider}</span>
                    <span className="text-sm">{cert.year}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {cert.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
            Academic Achievements
          </h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                          {achievement.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">{achievement.year}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600/10 to-red-700/10 border-blue-200 dark:border-blue-800">
            <CardContent className="p-12">
              <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-foreground">Commitment to Continuous Learning</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                In the rapidly evolving field of cybersecurity, I maintain a commitment to continuous professional development 
                through ongoing certifications, hands-on practice, and staying current with emerging threats and technologies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-muted-foreground">Hours of Hands-on Practice</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-muted-foreground">Cybersecurity Challenges Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-2">3</div>
                  <div className="text-muted-foreground">Active Certification Programs</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;