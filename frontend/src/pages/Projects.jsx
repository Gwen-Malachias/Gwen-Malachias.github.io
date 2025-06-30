import React, { useEffect, useState } from 'react';
import { FolderOpen, Code, Shield, Users, ExternalLink, Calendar, Github, Globe, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock data for future projects structure
  const projectCategories = [
    {
      title: "Cybersecurity Analysis",
      description: "In-depth security assessments and vulnerability research",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      count: 0,
      comingSoon: true
    },
    {
      title: "Infrastructure Modernization",
      description: "IT infrastructure upgrades and optimization projects",
      icon: <Code className="h-8 w-8 text-red-600" />,
      count: 0,
      comingSoon: true
    },
    {
      title: "Team Leadership",
      description: "Training programs and team development initiatives",
      icon: <Users className="h-8 w-8 text-green-600" />,
      count: 0,
      comingSoon: true
    }
  ];

  const upcomingProjects = [
    {
      title: "Enterprise Security Assessment Framework",
      description: "Development of a comprehensive security assessment methodology for large-scale enterprise environments",
      category: "Cybersecurity",
      timeline: "Q2 2025",
      technologies: ["Python", "Nmap", "Metasploit", "Burp Suite"],
      status: "Planning"
    },
    {
      title: "Automated Endpoint Management System",
      description: "Custom solution for streamlined endpoint deployment and management across diverse operating systems",
      category: "Infrastructure",
      timeline: "Q3 2025",
      technologies: ["PowerShell", "Python", "JAMF API", "MDT"],
      status: "Research"
    },
    {
      title: "IT Training & Certification Portal",
      description: "Comprehensive training platform for IT teams with progress tracking and certification management",
      category: "Training",
      timeline: "Q4 2025",
      technologies: ["React", "Node.js", "MongoDB", "Learning Management"],
      status: "Concept"
    }
  ];

  const pastHighlights = [
    {
      title: "University IT Infrastructure Overhaul",
      description: "Led the modernization of Oregon State University's student technology support infrastructure",
      impact: "Improved support efficiency by 40% and reduced resolution times",
      year: "2023",
      technologies: ["JAMF", "MDT", "Active Directory", "Endpoint Protection"]
    },
    {
      title: "Automated Ticketing System",
      description: "Developed Java-based automation tools to streamline IT support ticket processing",
      impact: "Reduced manual workload by 35% across multiple client environments",
      year: "2020-2021",
      technologies: ["Java", "API Integration", "Process Automation"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
            Projects & Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing technical projects, research, and contributions to IT strategy and cybersecurity
          </p>
        </div>

        {/* Project Categories Overview */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
            Project Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                {category.comingSoon && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="outline" className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700">
                      Coming Soon
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-blue-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {category.count}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {category.count === 1 ? 'Project' : 'Projects'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
            Upcoming Projects
          </h2>
          <div className="space-y-8">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 bg-gradient-to-r from-blue-50/50 to-red-50/50 dark:from-blue-900/10 dark:to-red-900/10">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <FolderOpen className="h-6 w-6 text-blue-600" />
                        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{project.timeline}</span>
                        </div>
                        <Badge variant="outline" className={
                          project.status === 'Planning' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700' :
                          project.status === 'Research' ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700' :
                          'bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700'
                        }>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-background/60">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                      {project.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Project Highlights */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
            Past Project Highlights
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastHighlights.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                      {project.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Impact</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">{project.impact}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600/10 to-red-700/10 border-blue-200 dark:border-blue-800">
            <CardContent className="p-12">
              <FolderOpen className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-foreground">More Projects Coming Soon</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                This portfolio will be regularly updated with new projects, technical writeups, and case studies 
                from ongoing work in cybersecurity, infrastructure modernization, and team leadership.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-red-700 hover:from-blue-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105">
                <a href="mailto:contact@gwendolynmalachias.com" className="flex items-center">
                  Discuss a Project <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;