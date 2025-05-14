import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowDown,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Layout,
  ChevronRight,
  Star,
  Briefcase,
} from "lucide-react"
import ContactForm from "@/components/contact-form"
import CVbutton from '@/components/CVbutton';
import { useState } from "react"
import Link from "next/link"
import GlobeVisualization from "@/components/globe-visualization"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1E2E] via-[#181825] to-[#11111B] text-[#D9E0EE] overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F28FAD]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#CBA6F7]/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#89DCEB]/5 rounded-full blur-[150px]"></div>
      </div>
 
      {/* Navigation */}
      <nav className="flex mx-[10px] top-0 left-0 right-0 z-50 bg-[#1E1E2E]/80 backdrop-blur-xl border-b border-[#6E6C7E]/20 shadow-lg shadow-black/5">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="#" className="text-2xl font-bold text-[#F5E0DC] flex items-center">
            <span className="text-3xl mr-2 text-[#F28FAD]">R</span>
            <span className="tracking-wider">RAFAY</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home" label="Home" />
            <NavLink href="#services" label="Services" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
          </div>
          <Link href={"#contact"} className="px-[6px] py-[5px] rounded-full bg-gradient-to-r from-[#F28FAD] to-[#CBA6F7] hover:from-[#CBA6F7] hover:to-[#F28FAD] text-[#1E1E2E] font-medium flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F28FAD]/20">
            <Mail className="mr-2 p-[4px] h-4 w-4" /> Let's Talk
          </Link> 
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 min-h-screen flex items-center z-10">
        <div className="container mx-[20px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center mt-[15px] px-4 py-2 rounded-full bg-[#1E1E2E]/80 border border-[#6E6C7E]/30 shadow-inner backdrop-blur-sm">
                <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-[#F28FAD]"></span>
                <span className="text-sm font-medium p-[4px] text-[#F5E0DC]">Full Stack & Graphic Designer</span>
              </div>

              <h1 className="text-5xl mt-[5px] md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-[#F5E0DC] block">Hi, I'm </span>
                <span className="bg-gradient-to-r from-[#F28FAD] to-[#CBA6F7] text-transparent bg-clip-text">
                  Rafay Qureshi
                </span>
              </h1>

              <p className="text-xl text-[#C3BAC6] leading-relaxed">
                A passionate full stack developer and graphic designer crafting intuitive, efficient, and visually
                stunning digital experiences that make an impact.
              </p>

              <div className="flex flex-wrap gap-[10px] pt-[15px]">
                <Link href="#projects" className="p-[4px] rounded-full bg-gradient-to-r from-[#F28FAD] to-[#CBA6F7] hover:from-[#CBA6F7] hover:to-[#F28FAD] text-[#1E1E2E] font-medium flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F28FAD]/20">
                   View Projects <ChevronRight className="ml-[2px] p-[4px] h-5 w-5" />
                </Link>
                <CVbutton />
              </div>

              <div className="flex space-x-5 mt-[10px] gap-[5px] p-[4px]">
                <SocialLink
                  href="https://linkedin.com/in/rafay-qureshi-a12925230/"
                  icon={<Linkedin className="h-5 w-5 p-[4px]" />}
                />
                <SocialLink href="https://github.com/RafayQureshi12" icon={<Github className="h-5 w-5 p-[4px]" />} />
                <SocialLink href="mailto:rafay.qureshi12@gmail.com" icon={<Mail className="h-5 w-5 p-[4px]" />} />
                <SocialLink href="tel:03150155088" icon={<Phone className="h-5 w-5 p-[4px]" />} />
              </div>
            </div>

            <div className="relative mx-auto lg:mx-0">
              <div className="relative z-10 h-[450px] w-[450px] mx-auto overflow-hidden rounded-full border-4 border-[#F28FAD] shadow-2xl shadow-[#F28FAD]/20 transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F28FAD]/20 to-[#CBA6F7]/20 mix-blend-overlay"></div>
                <GlobeVisualization />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-dashed border-[#F28FAD]/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-[#CBA6F7]/20 rounded-full"></div>

              {/* Stats */}
              <div className="absolute ml-[82%] -bottom-10 -left-10 px-6 py-4 ">
                <div className="flex items-center space-x-3">
                  <div className="p-[6px] rounded-full bg-[#F28FAD]/10">
                    <Star className="h-5 w-5 text-[#F28FAD]" />
                  </div>
                  <div className="px-[6px]">
                    <h3 className="text-lg font-bold text-[#F5E0DC]">4+ Years</h3>
                    <p className="text-sm text-[#C3BAC6]">Experience</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 px-[6px] py-4 rounded-2xl">
                <div className="flex items-center  space-x-3">
                  <div className="p-[6px] rounded-full bg-[#CBA6F7]/10">
                    <Briefcase className="h-5 w-5 text-[#CBA6F7]" />
                  </div>
                  <div className="px-[6px]">
                    <h3 className="text-lg font-bold text-[#F5E0DC]">10+</h3>
                    <p className="text-sm text-[#C3BAC6]">Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <Link
              href="#services"
              className="flex flex-col items-center justify-center text-[#C3BAC6] hover:text-[#F5E0DC] transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <div className="animate-bounce h-10 w-10 rounded-full bg-[#1E1E2E]/80 border border-[#6E6C7E]/30 flex items-center justify-center shadow-lg">
                <ArrowDown className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative mx-[25px] py-32 z-10">
        <div className="container  mt-[150px] px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-[6px] py-[4px] rounded-full bg-[#1E1E2E]/80 border border-[#6E6C7E]/30 shadow-inner backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-[#F28FAD]">What I Do</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5E0DC] mb-6">My Services</h2>
            <p className="text-xl text-[#C3BAC6] max-w-2xl mx-auto">
              I offer a range of services to help businesses and individuals create exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-[20px] md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Layout />}
              title="UX & UI"
              description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
              color="from-[#F28FAD] to-[#F5C2E7]"
            />
            <ServiceCard
              icon={<Smartphone />}
              title="Web & Mobile App"
              description="Transforming ideas into exceptional web and mobile app experiences."
              color="from-[#CBA6F7] to-[#F5C2E7]"
            />
            <ServiceCard
              icon={<Palette />}
              title="Design & Creative"
              description="Crafting visually stunning designs that connect with your audience."
              color="from-[#89DCEB] to-[#74C7EC]"
            />
            <ServiceCard
              icon={<Code />}
              title="Development"
              description="Bringing your vision to life with the latest technology and design trends."
              color="from-[#A6E3A1] to-[#94E2D5]"
            />
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#F28FAD]/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#CBA6F7]/5 rounded-full blur-[100px]"></div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative mx-[25px] py-32 z-10">
        <div className="container mt-[50px] px-6">
          <div className="text-center gap-[10px]">
            <div className="inline-flex items-center px-[6px] py-[4px] rounded-full bg-[#1E1E2E]/80 border border-[#6E6C7E]/30 shadow-inner backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-[#CBA6F7]">My Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5E0DC] mb-6">Featured Projects</h2>
            <p className="text-xl text-[#C3BAC6] max-w-2xl mx-auto">
              Here are some of the projects I've worked on throughout my career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] mt-[20px]">
            <ProjectCard
              title="Cashflow - Banking App"
              description="A comprehensive banking app with an interactive interface, offering all essential features. Introduced a unique savings lock feature that allows users to secure their savings and access them only in emergencies."
              tags={["Python", "Native", "ReactJs"]}
              gradient="from-[#F28FAD] to-[#F5C2E7]"
              projectLink={"https://github.com/RafayQureshi12/cashflow-python"}
            />

            <ProjectCard
              title="Image Description Gen AI"
              description="Developed an ML model for image description using a self-curated dataset of 20 million images, achieving a ROUGE score of 40% through iterative testing of 20 models."
              tags={["Python", "PyTorch", "Computer Vision", "NLP", "AI/ML"]}
              gradient="from-[#CBA6F7] to-[#F5C2E7]"
              projectLink={"https://github.com/RafayQureshi12/image-description"}
            />
            <ProjectCard
              title="Utopian Takeoffs Website"
              description="Designed and developed a responsive, visually appealing website using Next.js and Tailwind CSS, ensuring optimal performance and user experience."
              tags={["Next.js", "Tailwind CSS", "Frontend"]}
              gradient="from-[#89DCEB] to-[#74C7EC]"
              projectLink={"https://github.com/RafayQureshi12/utopiantakeoffs"}

            />
            <ProjectCard
              title="CROAI Property Listing"
              description="Designed, developed, and deployed a web application for listing properties for sale using Next.js, supported by Tailwind CSS for styling and JSON for data handling."
              tags={["Next.js", "Tailwind CSS", "JSON"]}
              gradient="from-[#A6E3A1] to-[#94E2D5]"
              projectLink={"https://github.com/RafayQureshi12/croai"}
            />
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#89DCEB]/5 rounded-full blur-[90px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#F28FAD]/5 rounded-full blur-[80px]"></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-[32px] ">
        <div className="mt-[50px] ">
          <div className="bg-[#1E1E2E]/80 backdrop-blur-xl border border-[#6E6C7E]/30 rounded-3xl shadow-2xl overflow-hidden">
            <div className=" grid grid-rows-3 px-[20px] lg:grid-cols-2">
              <div className="p-[12px] rounded-t-[30px] lg:p-16 bg-gradient-to-br from-[#F28FAD]/20 to-[#CBA6F7]/20">
                <div className="inline-flex items-center mt-[4px] p-[4px] rounded-full bg-[#1E1E2E]/80 border border-[#6E6C7E]/30 shadow-inner backdrop-blur-sm mb-6">
                  <span className="text-sm font-medium text-[#F28FAD]">Get In Touch</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#F5E0DC] mb-6">Let's Work Together</h2>
                <p className="text-lg text-[#C3BAC6] mb-10">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>

                <div className="grid grid-cols-3 gap-6">
  {/* Email */}
  <div className="flex flex-col mt-[60px] items-center text-center">
    <div className="p-[6px] rounded-full bg-[#1E1E2E] border border-[#6E6C7E]/30">
      <Mail className="h-8 w-8 text-[#F28FAD]" />
    </div>
    <h3 className="text-lg font-medium text-[#F5E0DC] mb-1">Email</h3>
    <a
      href="mailto:rafay.qureshi12@gmail.com"
      className="text-[#C3BAC6] hover:text-[#F28FAD] transition-colors"
    >
      rafay.qureshi12@gmail.com
    </a>
  </div>

  {/* Phone */}
  <div className="flex flex-col mt-[60px] items-center text-center">
    <div className="p-[6px] rounded-full bg-[#1E1E2E] border border-[#6E6C7E]/30">
      <Phone className="h-8 w-8 text-[#CBA6F7]" />
    </div>
    <h3 className="text-lg font-medium text-[#F5E0DC] mb-1">Phone</h3>
    <a 
      href="tel:03150155088" 
      className="text-[#C3BAC6] hover:text-[#CBA6F7] transition-colors"
    >
      +92 315 0155088
    </a>
  </div>

  {/* Location */}
  <div className="flex flex-col mt-[60px] items-center text-center">
    <div className="p-[6px] rounded-full bg-[#1E1E2E] border border-[#6E6C7E]/30">
      <ExternalLink className="h-8 w-8 text-[#89DCEB]" />
    </div>
    <h3 className="text-lg font-medium text-[#F5E0DC] mb-1">Location</h3>
    <p className="text-[#C3BAC6]">Rawalpindi, Pakistan</p>
  </div>
</div>
              </div>

          <div className="max-w-3xl bg-[#302D41] rounded-b-[22px]  shadow-[12px]">
            <ContactForm />
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-[30px] border-t border-[#6E6C7E]/20 z-10">
        <div className="container px-[6px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-[6px] md:mb-0">
              <Link href="#" className="text-2xl font-bold text-[#F5E0DC] flex items-center">
                <span className="text-3xl mr-2 text-[#F28FAD]">R</span>
                <span className="tracking-wider">RAFAY</span>
              </Link>
              <p className="text-[#C3BAC6] mt-2">Full Stack & Graphic Designer</p>
            </div>

            <div className="flex space-x-6 gap-[10px] p-[4px] mt-6 md:mt-0">
              <SocialLink
                href="https://linkedin.com/in/rafay-qureshi-a12925230/"
                icon={<Linkedin className="h-5   w-5 p-[4px]" />}
              />
              <SocialLink href="https://github.com/RafayQureshi12" icon={<Github className="h-5 w-5 p-[4px] " />} />
<SocialLink href="mailto:rafay.qureshi12@gmail.com" icon={<Mail className="h-5 w-5 p-[4px]" />} />              <SocialLink href="tel:03150155088" icon={<Phone className="h-5 w-5 p-[4px]" />} />
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-[#C3BAC6]">
            © {new Date().getFullYear()} Rafay Qureshi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

type NavLinkProps = {
  href: string;
  label: string;
};

function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link href={href} className="text-[#C3BAC6] hover:text-[#F5E0DC] font-medium transition-colors relative group">
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F28FAD] to-[#CBA6F7] group-hover:w-full transition-all duration-300"></span>
    </Link>
  )
}

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
};

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="h-10 w-10 rounded-full bg-[#1E1E2E]/80 border border-[#6E6C7E]/30 flex items-center justify-center text-[#C3BAC6] hover:text-[#F5E0DC] hover:border-[#F28FAD]/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#F28FAD]/10"
    >
      {icon}
    </Link>
  )
}

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

function ServiceCard({ icon, title, description, color }: ServiceCardProps) {
  return (
    <div className="group relative bg-[#1E1E2E]/80 backdrop-blur-xl border border-[#6E6C7E]/30 rounded-2xl p-8 hover:border-[#F28FAD]/50 transition-all duration-500 transform hover:scale-[1.03] hover:shadow-xl overflow-hidden">
      <div
        className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${color} group-hover:w-full transition-all duration-500`}
      ></div>

      <div className="relative z-10">
        <div
          className={`h-14 w-14 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center text-[#1E1E2E] mb-6 shadow-lg transform group-hover:rotate-6 transition-all duration-500`}
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold text-[#F5E0DC] px-[6px] mb-4 group-hover:translate-x-1 transition-all duration-300">
          {title}
        </h3>

        <p className="text-[#C3BAC6] px-[6px]  leading-relaxed">{description}</p>
      </div>

      <div
        className={`absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r ${color} opacity-5 group-hover:opacity-10 transition-all duration-500`}
      ></div>
    </div>
  )
}

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  projectLink: string;
};

function ProjectCard({ title, description, tags, gradient, projectLink }: ProjectCardProps) {
  return (
    <div className="group relative bg-[#1E1E2E]/80 backdrop-blur-xl border border-[#6E6C7E]/30 rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl">
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}></div>

      <div className="p-[8px]">
        <h3 className="text-2xl font-bold text-[#F5E0DC] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F28FAD] group-hover:to-[#CBA6F7] transition-all duration-300">
          {title}
        </h3>

        <p className="text-[#C3BAC6] mb-6 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-[4px] mt-[6px] mb-[4px]">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-[4px] py-1 text-xs font-medium rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 text-[#1e1e2e] border border-[#6E6C7E]/30`}
            >
              {tag}
            </span>
          ))}
        </div>

          <div className="flex gap-[4px] mt-[4px] justify-between items-center">
            
            <a href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-[4px] rounded-[20px] bg-gradient-to-r ${gradient} text-[#1E1E2E] font-medium text-sm flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
            >
              View Project <ExternalLink className="ml-[4px] p-[4px] h-4 w-4" />
            </a>

            <div className="w-10 h-10 p-[4px] rounded-full bg-[#1E1E2E] border border-[#6E6C7E]/30 flex items-center justify-center text-[#F5E0DC] group-hover:border-[#F28FAD]/50 transition-all duration-300">
              <ChevronRight className="h-5 w-5" />
            </div>
          </div>
      </div>

    </div>
  )
}
