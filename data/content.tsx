export const title = "";
export const description = "";

// Words to flip
export const words = [
    "Computer",
    "Software",
    "Embedded",
]

export const navItems = [
    {
        name: "Home",
        link: "#home",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
    },
    {
        name: "About",
        link: "#about",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
    },
    {
        name: "Projects",
        link: "#projects",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-presentation"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 4l18 0" /><path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" /><path d="M12 16l0 4" /><path d="M9 20l6 0" /><path d="M8 12l3 -3l2 2l3 -3" /></svg>
    },
    {
        name: "Experience",
        link: "#experience",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>
    },
    {
        name: "Contact",
        link: "#contact",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-address-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" /><path d="M10 16h6" /><path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 8h3" /><path d="M4 12h3" /><path d="M4 16h3" /></svg>
    }
]

export const experience = [
    {
        title:"2022 - 2023",
        content: (
            <div>
                <h3 className="text-lg font-bold mb-8">
                    Oasis Innova - <span className="text-primary">Intern</span>
                </h3>
                <p className="text-sm mb-8">
                    Carolina, Puerto Rico
                </p>
                <ul className="list-none pt-5 flex gap-2 flex-col line-space-2">
                    <li><span className="text-primary">• </span>Worked on the design and implementation of circuits and firmware for smart farming applications.</li>
                    <li><span className="text-primary">• </span>Designed and developed a mobile responsive web dashboard for monitoring and managing agricultural operations.</li>
                    <li><span className="text-primary">• </span>Collaborated with a team of researchers to develop physical prototypes of smart farming systems.</li>
                </ul>
            </div>
        )
    },
    {
        title: "2023 - 2024",
        content: (
            <div>
                <h3 className="text-lg font-bold mb-8">
                    Oasis Innova - <span className="text-primary">IoT Engineer</span> (Part-time)
                </h3>
                <p className="text-sm mb-8">
                    Carolina, Puerto Rico
                </p>
                <ul className="list-none pt-5 flex gap-2 flex-col line-space-2">
                    <li><span className="text-primary">• </span>Soldered four hardware prototypes on veroboards, identifying and
                    resolving performance issues to enhance system reliability</li>
                    <li><span className="text-primary">• </span>Designed and implemented a responsive web portal using ReactJS and
                    TailwindCSS to enhance product user experience</li>
                    <li><span className="text-primary">• </span>Engineered C++ firmware for microcontrollers, enabling real-time sensor
interaction and optimizing data transmission to the dashboard, improving
system efficiency</li>
                    <li><span className="text-primary">• </span>Collaborated with cross-functional teams on IoT systems integration,
optimizing product functionality, enhancing overall system performance,
and accelerating project timelines</li>
                    <li><span className="text-primary">• </span>Conducted testing of IoT systems, identifying bottlenecks and
implementing solutions that improved system stability and reduced error
rates</li>
                    <li><span className="text-primary">• </span>Led troubleshooting and debugging efforts for both hardware and
                    software, resolving critical issues</li>
                </ul>
            </div>
        )
    },
    {
        title: "Present",
        content: (
            <div>
                <h3 className="text-lg">Actively looking for opportunities!</h3>
            </div>
        )
    }
]

export const skills = [
    {
        name: "Embedded Systems",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-cpu"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path d="M14 3v2" /><path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path d="M10 21v-2" /></svg>
    },
    {
        name: "IoT",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-sitemap"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M15 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" /><path d="M12 9l0 3" /></svg>
    },
    {
        name: "Debugging",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-bug"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v-1a3 3 0 0 1 6 0v1" /><path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" /><path d="M3 13l4 0" /><path d="M17 13l4 0" /><path d="M12 20l0 -6" /><path d="M4 19l3.35 -2" /><path d="M20 19l-3.35 -2" /><path d="M4 7l3.75 2.4" /><path d="M20 7l-3.75 2.4" /></svg>
    },
    {
        name: "Firmware",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-access-point"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12l0 .01" /><path d="M14.828 9.172a4 4 0 0 1 0 5.656" /><path d="M17.657 6.343a8 8 0 0 1 0 11.314" /><path d="M9.168 14.828a4 4 0 0 1 0 -5.656" /><path d="M6.337 17.657a8 8 0 0 1 0 -11.314" /></svg>
    },
    {
        name: "React",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
    },
    {
        name: "NextJS",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nextjs"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" /><path d="M15 12v-3" /></svg>
    },
    {
        name: "TailwindCSS",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" /></svg>
    },
    {
        name: "Problem Solving",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-bulb"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg>
    },
    {
        name: "Collaboration",
        icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-filters"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><path d="M8 11a5 5 0 1 0 3.998 1.997" /><path d="M12.002 19.003a5 5 0 1 0 3.998 -8.003" /></svg>
    }
]

export const projects = [
    {
      category: "University Project",
      title: "Social Media using Java",
      src: "",
      content: <>info and images coming soon, repository - <a href="https://github.com/luiselmuller/mobileweb-mini-facebook" 
      target="_blank" rel="noreferrer noopener" className="font-bold text-secondary">
        here
        </a></>,
    },
    {
        category: "Smart Farming",
        title: "Smart Hydroponic Monitoring System",
        src: "",
        content: <>info and images coming soon
        </>,
        },
        {
        category: "Capstone",
        title: "Agricultural Management and Monitoring System",
        src: "",
        content: <>info and images coming soon</>,
        },
    {
      category: "Challenges",
      title: "Frontend Development Challenges",
      src: "",
      content: <>info and images coming soon, repository - <a href="https://github.com/luiselmuller/front-end-mentor-challenges" 
      target="_blank" rel="noreferrer noopener" className="font-bold text-secondary">
        here
        </a></>,
    },
    {
      category: "University Project",
      title: "Dashboard for Microcontroller and Sensors",
      src: "",
      content: <>info and images coming soon, repository - <a href="https://github.com/luiselmuller/uni-project-microcontroller-dashboard" 
      target="_blank" rel="noreferrer noopener" className="font-bold text-secondary">
        here
        </a></>,
    },
  ];