"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Calendar,
  Award,
  BookOpen,
  Briefcase,
  Download,
} from "lucide-react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineProduct,
} from "react-icons/ai";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "./_components/theme-toggle";
import Link from "next/link";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      title: "Skynest",
      description:
        "Skynest is a cloud-based platform that allows users to seamlessly upload, organize, and manage their digital content.",
      tech: [
        "Next.js",
        "TypeScript",
        "Zod",
        "Drizzle",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],
      link: "https://github.com/Ramanbaral/Skynest",
      demo: "https://skynest.ramanbaral.live",
    },
    {
      title: "TrueFeedback",
      description:
        "An anonymous feedback platform to help you grow through honest, unfiltered insights.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Docker",
        "AWS",
      ],
      link: "https://github.com/Ramanbaral/TrueFeedback",
      demo: "https://truefeedback.ramanbaral.live",
    },
    {
      title: "FinTrack",
      description:
        "FinTrack is a smart and intuitive expense tracker designed to help you manage your finances effortlessly.",
      tech: [
        "Nextjs",
        "Typescript",
        "TailwindCss",
        "Recharts",
        "PostgreSQL",
        "Prisma ORM",
      ],
      link: "https://github.com/Ramanbaral/FinTrack",
      demo: "",
    },
  ];

  const blogs = [
    {
      title: "Building Scalable React Applications",
      description:
        "Best practices for structuring large React applications with proper state management",
      date: "2024-01-15",
      readTime: "8 min read",
      link: "https://blog.example.com/scalable-react",
    },
    {
      title: "Understanding TypeScript Generics",
      description:
        "A comprehensive guide to TypeScript generics with practical examples",
      date: "2024-01-08",
      readTime: "12 min read",
      link: "https://blog.example.com/typescript-generics",
    },
    {
      title: "Optimizing Next.js Performance",
      description:
        "Techniques for improving Core Web Vitals and overall performance in Next.js apps",
      date: "2023-12-20",
      readTime: "10 min read",
      link: "https://blog.example.com/nextjs-performance",
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect (SAA-C03)",
      issuer: "AWS",
      date: "2025-12-30",
      credentialId: "15751c0b3aa1461fa09bb9c8705d8b93",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/15751c0b3aa1461fa09bb9c8705d8b93",
      description:
        "Certified in architecting secure and scalable cloud infrastructure using AWS best practices. Skilled in designing decoupled architectures with microservices, optimizing data storage and compute resources, and implementing robust security protocols and disaster recovery strategies.",
      skills: [
        "AWS Cloud",
        "Networking",
        "Storage Solutions",
        "Compute Services",
        "Serverless Computing",
        "DevOps Fundamentals",
        "Security Best Practices",
      ],
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta",
      date: "2023-07",
      credentialId: "JKZCTGA2HYW3",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/JKZCTGA2HYW3",
      description:
        "Comprehensive certification covering React fundamentals, advanced patterns, and modern frontend development practices.",
      skills: [
        "React",
        "TypeScript",
        "Frontend Development",
        "Component Design",
      ],
    },
    {
      title: "Blockchain Specialization",
      issuer: "Coursera",
      date: "2022-03",
      credentialId: "KZTTX6HQJSQ9",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/KZTTX6HQJSQ9",
      description:
        "Covering the fundamentals of blockchain technology, decentralized applications (dApps), smart contracts, and consensus mechanisms, with hands-on experience in Ethereum and Solidity.",
      skills: ["Blockchain", "Smart Contracts", "Dapps"],
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Google",
      date: "2022-03",
      credentialId: "8XP8SJN6RMVG",
      link: "https://www.coursera.org/account/accomplishments/certificate/8XP8SJN6RMVG",
      description:
        "Completed Google 'Introduction to Git and GitHub' course, gaining practical knowledge of version control, branching, collaboration workflows, and open-source contributions using Git and GitHub.",
      skills: ["Version Control", "Branching", "Git", "Github"],
    },
  ];

  const experience = [
    {
      title: "Full Stack Developer",
      company: "ISTEM LAB",
      period: "2025",
      description:
        "Developed end-to-end applications with a focus on clean, component-based architecture. Proficient in Next.js/React for frontend delivery and NestJS for scalable backend API development, styled with TailwindCSS and validated with TypeScript.",
      tech: ["TypeScript", "Next.js", "Nest", "Docker"],
    },
    {
      title: "Web3 Developer",
      company: "Velvet.Capital",
      period: "2022 - 2023",
      description:
        "Worked as a Web3 React Developer, building responsive frontend applications that interact with Ethereum-based smart contracts. Integrated Web3 libraries like Ethers.js and Metamask to enable seamless blockchain interactions.",
      tech: ["JavaScript", "React", "Ether.js", "Smart Contracts"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Fixed Left Sidebar */}
        <div className="fixed left-0 top-0 h-screen w-80 bg-muted/30 border-r border-border p-8 overflow-y-auto">
          <div className="flex flex-col items-center space-y-6">
            {/* Profile Image */}
            <div className="relative w-[200px] h-[200px]">
              <Image
                src="/profile.png"
                alt="Profile Picture"
                fill
                className="object-cover object-top rounded-full border-4 border-primary/20"
              />
            </div>

            {/* Name and Title */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-primary">Raman Baral</h1>
              <p className="text-lg  dark:text-white">
                FullStack Software Engineer
              </p>
            </div>

            {/* Introduction */}
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Computer Science undergraduate with 3+ years of hands-on
                experience developing scalable web applications using
                TypeScript, Next.js, Node.js and modern frontend architectures.
                Passionate about building performant, maintainable code and
                delivering robust user experiences.
              </p>
            </div>

            {/* Resume CTA */}
            <Link className="w-full" href="/resume.pdf" target="_blank">
              <Button
                className="w-full cursor-pointer dark:text-white"
                size="lg"
              >
                View Resume
                <ExternalLink className="w-4 h-4 mr-2" />
              </Button>
            </Link>

            {/* Social Links */}
            <div className="flex flex-col space-y-3 w-full">
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent flex items-center"
                asChild
              >
                <a
                  href="https://github.com/Ramanbaral"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub
                    className="text-primary mr-2 !size-6"
                    size={128}
                  />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/ramanbaral/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineLinkedin
                    className="text-primary text-2xl mr-2 !size-6"
                    size={128}
                  />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                asChild
              >
                <a href="mailto:ramanbaral.dev@gmail.com">
                  <Mail className="text-primary w-4 h-4 mr-2 !size-6" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="ml-80 flex-1 p-10">
          {/* Top Right Theme Toggle */}
          <div className="absolute top-10 right-6 z-50">
            <ThemeToggle />
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full h-auto grid-cols-3">
                <TabsTrigger
                  value="projects"
                  className="flex items-center gap-2 data-[state=active]:text-primary"
                >
                  {/* <Briefcase className="!size-6 mr-2" /> */}
                  <span className="text-xl font-semibold">Projects</span>
                </TabsTrigger>
                {/* <TabsTrigger
                  value="blogs"
                  className="flex items-center gap-2 data-[state=active]:text-primary"
                >
                  <span className="text-xl font-semibold">Blogs</span>
                </TabsTrigger>  */}
                <TabsTrigger
                  value="certifications"
                  className="flex items-center gap-2 data-[state=active]:text-primary"
                >
                  {/* <Award className="!size-6 mr-2" /> */}
                  <span className="text-xl font-semibold">Certifications</span>
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="flex items-center gap-2 data-[state=active]:text-primary"
                >
                  {/* <Calendar className="!size-6 mr-2" /> */}
                  <span className="text-xl font-semibold">Experience</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="projects" className="space-y-6 mt-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Featured Projects</h2>
                  <p className="text-muted-foreground">
                    Here are some of my recent projects that showcase my
                    technical skills and problem-solving abilities.
                  </p>
                </div>
                <div className="grid gap-8">
                  {projects.map((project, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                                {project.title}
                              </CardTitle>
                              <div className="flex gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 opacity-70 hover:opacity-100"
                                >
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <AiOutlineGithub
                                      className="text-primary !size-6"
                                      size={64}
                                    />
                                  </a>
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 opacity-70 hover:opacity-100"
                                  asChild
                                >
                                  <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ExternalLink className="w-4 h-4 !size-5" />
                                  </a>
                                </Button>
                              </div>
                            </div>
                            <CardDescription className="text-base leading-relaxed">
                              {project.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-2">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className="px-3 py-1 text-xs font-medium"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-3 pt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 bg-transparent"
                              asChild
                            >
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <AiOutlineGithub
                                  className="!size-6 mr-3"
                                  size={64}
                                />
                                View Code
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              className={`flex-1 dark:text-white ${
                                project.demo === ""
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                              disabled={project.demo === ""}
                              asChild
                            >
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="blogs" className="space-y-6 mt-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Technical Blog Posts</h2>
                  <p className="text-muted-foreground">
                    I enjoy sharing my knowledge and experiences through
                    technical writing.
                  </p>
                </div>
                <div className="grid gap-6">
                  {blogs.map((blog, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 space-y-3">
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                                  {blog.title}
                                </CardTitle>
                              </div>
                              <CardDescription className="text-base leading-relaxed line-clamp-3">
                                {blog.description}
                              </CardDescription>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>
                                    {new Date(blog.date).toLocaleDateString(
                                      "en-US",
                                      {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      }
                                    )}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <BookOpen className="w-4 h-4" />
                                  <span>{blog.readTime}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <ExternalLink className="w-5 h-5 text-primary" />
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                      </a>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certifications" className="space-y-6 mt-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">
                    Professional Certifications
                  </h2>
                  <p className="text-muted-foreground">
                    Professional certifications that validate my expertise in
                    various technologies and platforms.
                  </p>
                </div>
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                  {certifications.map((cert, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer border-2 hover:border-primary/20"
                    >
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent"></div>
                        <div className="absolute top-4 right-4 opacity-60 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-5 h-5 text-primary" />
                        </div>
                        <CardHeader className="pb-6">
                          <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors group-hover:scale-105 transform duration-300">
                              <Award className="w-8 h-8 text-primary" />
                            </div>
                            <div className="flex-1 space-y-3">
                              <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                                {cert.title}
                              </CardTitle>
                              <div className="space-y-2">
                                <p className="text-base font-semibold text-foreground">
                                  {cert.issuer}
                                </p>
                                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>
                                      Issued:{" "}
                                      {new Date(cert.date).toLocaleDateString(
                                        "en-US",
                                        {
                                          year: "numeric",
                                          month: "long",
                                          day: "numeric",
                                        }
                                      )}
                                    </span>
                                  </div>
                                  {cert.credentialId !== "" && (
                                    <div className="flex items-center gap-2">
                                      <span className="w-4 h-4 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                                      </span>
                                      <span>
                                        Credential ID: {cert.credentialId}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-4">
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {cert.description}
                          </p>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-3">
                              Key Skills Validated
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="secondary"
                                  className="px-3 py-1 text-xs font-medium"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="pt-2">
                            <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                              <span>View Certificate</span>
                              <ExternalLink className="w-4 h-4" />
                            </div>
                          </div>
                        </CardContent>
                      </a>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6 mt-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">
                    Professional Experience
                  </h2>
                  <p className="text-muted-foreground">
                    My professional journey and the impact I've made at various
                    organizations.
                  </p>
                </div>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-border"></div>

                  <div className="space-y-8">
                    {experience.map((exp, index) => (
                      <div key={index} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute left-4 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm"></div>

                        <Card className="ml-12 group hover:shadow-md transition-all duration-300">
                          <CardHeader className="pb-4">
                            <div className="space-y-3">
                              <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                    {exp.title}
                                  </CardTitle>
                                  <div className="flex items-center gap-2">
                                    <p className="text-lg font-semibold text-foreground">
                                      {exp.company}
                                    </p>
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {exp.period}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Briefcase className="w-5 h-5 text-primary" />
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0 space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {exp.description}
                            </p>
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-3">
                                Key Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, techIndex) => (
                                  <Badge
                                    key={techIndex}
                                    variant="secondary"
                                    className="px-3 py-1 text-xs"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
