"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FlipWords } from "@/components/ui/flip-words";
import { words } from "@/data/content";
import { Vortex } from "@/components/ui/vortex";
import { Timeline } from "@/components/ui/timeline";
import { experience } from "@/data/content";

export default function Home() {
  
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
      <section id="about" className="lg:px-96 md:px-32 px-5">
        <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-5xl">
          About Me
        </h2>
      </section>

      {/* Skills section */}
      <section id="skills" className="lg:px-96 md:px-32 px-5">
        <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-5xl">
          Skills
        </h2>
      </section>

      {/* Projects section */}
      <section id="projects" className="lg:px-96 md:px-32 px-5">
        <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-5xl">
          Projects
        </h2>
      </section>

      {/* Experience section */}
      <section  id="experience" className="lg:px-96 md:px-32 px-5">
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
            <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
              This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
              burned and you&apos;ll have a scar.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <button className="px-4 py-2 bg-accent hover:bg-indigo-600 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                Order now
              </button>
              <button className="px-4 py-2  text-white ">Watch trailer</button>
            </div>
          </Vortex>
        </div>
      </section>


    </main>
  );
}
