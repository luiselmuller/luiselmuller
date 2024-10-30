"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FlipWords } from "@/components/ui/flip-words";
import { Vortex } from "@/components/ui/vortex";
import { Timeline } from "@/components/ui/timeline";
import { experience, words, skills, projects } from "@/data/content";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";

export default function Home() {
  const cards = projects.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  
  return (
    <main className="flex flex-col h-screen w-screen">
      {/* Hero section */}
      <section className="h-full w-full" id="home">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-52 bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl"
          >
            Hi, I&apos;m Luisel. 
            <br />
            <FlipWords words={words}/> Engineer
          </motion.h1>
        </LampContainer>

        <div className="bottom-6 left-0 right-0 absolute flex justify-center group">
          <div className="group-hover:cursor-pointer glow h-12 w-5 rounded-full border-primary border-2 flex items-end opacity-50 ">
            <div className="h-4 w-4 relative rounded-full animate-bounce bg-indigo-500 ">
            </div>
          </div>
        </div>
        <ShootingStars />
        <StarsBackground />
      </section>

      {/* About section */}
      <section id="about" className="lg:px-96 md:px-32 px-5 pt-28">
        <span className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-5xl flex gap-5">
          About Me 
        </span>
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/luiselmuller/" className="py-4 text-white hover:cursor-pointer hover:text-accent transition-all duration-200 ease-in-out">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
        </a>
        <p className="pt-1">
        I&apos;m a recent Computer Engineering graduate with hands-on experience in embedded systems, IoT, front-end web development, 
        and some firmware work. I&apos;m meticulous when it comes to designing and implementing solutions—whether for hardware or software—and 
        I&apos;m passionate about creating experiences that keep the user front and center.
          
        </p>
      </section>

      {/* Skills section */}
      <section id="skills" className="lg:px-96 md:px-32 px-5 pt-8">
        <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-xl font-medium tracking-tight text-transparent md:text-2xl">
          My Skills
        </h2>

        <div className="flex flex-wrap gap-4 ">
          {skills.map((skill, index) => (
            <div key={index} className="w-full sm:w-fit sm:min-w-56 h-12 bg-accent rounded-xl flex p-3 items-center justify-start gap-2 bg-indigo-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-60 backdrop-saturate-100 backdrop-contrast-100 bg-[url('data:image/svg+xml;base64,CiAgICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmRldi9zdmdqcyIgdmlld0JveD0iMCAwIDcwMCA3MDAiIHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBvcGFjaXR5PSIwLjI2Ij4KICAgICAgICA8ZGVmcz4KICAgICAgICAgIDxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgogICAgICAgICAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4xMTYiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjE1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlc3VsdD0idHVyYnVsZW5jZSI+PC9mZVR1cmJ1bGVuY2U+CiAgICAgICAgICAgIDxmZVNwZWN1bGFyTGlnaHRpbmcgc3VyZmFjZVNjYWxlPSIyMiIgc3BlY3VsYXJDb25zdGFudD0iMC43IiBzcGVjdWxhckV4cG9uZW50PSIyMCIgbGlnaHRpbmctY29sb3I9IiM3OTU3QTgiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49InR1cmJ1bGVuY2UiIHJlc3VsdD0ic3BlY3VsYXJMaWdodGluZyI+CiAgICAgICAgICAgICAgPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iMTAwIj48L2ZlRGlzdGFudExpZ2h0PgogICAgICAgICAgICA8L2ZlU3BlY3VsYXJMaWdodGluZz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0ic3BlY3VsYXJMaWdodGluZyIgcmVzdWx0PSJjb2xvcm1hdHJpeCI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgPC9kZWZzPgogICAgICAgIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0PgogICAgICAgIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjNzk1N2E4IiBmaWx0ZXI9InVybCgjbm5ub2lzZS1maWx0ZXIpIj48L3JlY3Q+CiAgICAgIDwvc3ZnPgogICAg')] bg-blend-overlay">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="lg:px-96 md:px-32 px-5 pt-24">
        <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-5xl">
          Projects
        </h2>
        <a href="https://github.com/luiselmuller" target="_blank noreferrer noopener" className="py-5 flex gap-2 hover:cursor-pointer hover:text-accent transition-all duration-200 ease-in-out">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
          see more on my github
        </a>
        <Carousel items={cards} />
      </section>

      {/* Experience section */}
      <section  id="experience" className="lg:px-96 md:px-32 px-5 pt-8">
        <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-5xl">
          Experience
        </h2>
        <Timeline data={experience} />
      </section>

      {/* Contact section */}
      <section id="contact" className="w-screen">
        <div className="w-[calc(100%-4rem)] h-[30rem] overflow-hidden w-full">
          <Vortex
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full bg-indigo-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-0 backdrop-saturate-100 backdrop-contrast-100 bg-[url('data:image/svg+xml;base64,CiAgICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmRldi9zdmdqcyIgdmlld0JveD0iMCAwIDcwMCA3MDAiIHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBvcGFjaXR5PSIwLjI2Ij4KICAgICAgICA8ZGVmcz4KICAgICAgICAgIDxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgogICAgICAgICAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4xMTYiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjE1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlc3VsdD0idHVyYnVsZW5jZSI+PC9mZVR1cmJ1bGVuY2U+CiAgICAgICAgICAgIDxmZVNwZWN1bGFyTGlnaHRpbmcgc3VyZmFjZVNjYWxlPSIyMiIgc3BlY3VsYXJDb25zdGFudD0iMC43IiBzcGVjdWxhckV4cG9uZW50PSIyMCIgbGlnaHRpbmctY29sb3I9IiM3OTU3QTgiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49InR1cmJ1bGVuY2UiIHJlc3VsdD0ic3BlY3VsYXJMaWdodGluZyI+CiAgICAgICAgICAgICAgPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iMTAwIj48L2ZlRGlzdGFudExpZ2h0PgogICAgICAgICAgICA8L2ZlU3BlY3VsYXJMaWdodGluZz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0ic3BlY3VsYXJMaWdodGluZyIgcmVzdWx0PSJjb2xvcm1hdHJpeCI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgPC9kZWZzPgogICAgICAgIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0PgogICAgICAgIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjNzk1N2E4IiBmaWx0ZXI9InVybCgjbm5ub2lzZS1maWx0ZXIpIj48L3JlY3Q+CiAgICAgIDwvc3ZnPgogICAg')] bg-blend-overlay"
          >
            <h2 className="bg-gradient-to-br from-slate-100 to-slate-300 py-2 bg-clip-text text-5xl font-medium tracking-tight text-transparent md:text-7xl text-center">
              Get in touch with me!
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <Modal>
                <ModalTrigger className="flex justify-center group/modal-btn group">
                  <span className="group-hover:text-opacity-0 px-4 py-2 bg-accent hover:bg-indigo-600 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                    Contact now
                  </span>
                  <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    ✉️
                  </div>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <h4 className="text-lg md:text-2xl font-bold text-center mb-8">
                      Contact Form Coming Soon... 🚧
                    </h4>
                    <a rel="noopener noreferrer" target="_blank" href="/Luisel_Muller_Resume_edit.pdf" className="py-4 text-white hover:cursor-pointer hover:text-primary underline transition-all duration-200 ease-in-out">
                      In the meantime, you can view my resume.
                    </a>
                  </ModalContent>
                </ModalBody>
              </Modal>

              <a rel="noopener noreferrer" target="_blank" href="/Luisel_Muller_Resume_edit.pdf" className="py-4 text-white hover:cursor-pointer hover:text-accent transition-all duration-200 ease-in-out">
                View Resume
              </a>
            </div>
          </Vortex>
        </div>
      </section>
    </main>
  );
}
