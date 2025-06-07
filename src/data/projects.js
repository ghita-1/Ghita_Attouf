const projects = [
  {
    id: 1,
    title: "Skill Tracking ",
    description: "Implemented a skill-tracking system allowing users to add, view, update, and delete skills categorized by type (e.g., Frontend, Backend, Database),also add what prejects they're working for.",
    image: new URL('../assets/skill.png', import.meta.url).href,
    techStack: ["Angular", "ASP.NET Core", "Entity Framework", "PostgreSQL", "Web API"],
    github: "",
    demo: null
  },
  {
    id: 2,
    title: "chool management system - EPIM",
    description: "work in a team in a back-office department,  where everyone has their own tasks.",
    image: new URL('../assets/OIP.jpg', import.meta.url).href,
    techStack: ["React", "TailwindCSS", "ASP.NET Core",  "SQL Server"],
    github: null,
    demo: null
  },
  {
    id: 3,
    title: "Survey Management ",
    description: "Create an interactive platform: The main objective is to develop a web application where users can interact with surveys in a dynamic way.",
    image: new URL('../assets/survey.png', import.meta.url).href,
    techStack: [ "React", "Vite", "TailwindCSS", "JSON"],
    github: "https://github.com/ghita-1/Survey_App",
    demo: null
  },
  {
    id: 4,
    title: "Islamic Guide",
    description: "Qur'an • Prayer Times • Duas • Stay connected to your deen, wherever you are.",
    image: new URL('../assets/islamic.png', import.meta.url).href,
    techStack: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/ghita-1/Islamic-Guide",
    demo: "https://islamic-guide.vercel.app/"
  },
  {
    id: 5,
    title: "Fitness Planner",
    description: " Tell us your height and weight,we’ll give you the right meals & workouts —built for your body, built for your goals.",
    image: new URL('../assets/fitness.png', import.meta.url).href,
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "",
    demo: "https://fitness-app-ivory-two.vercel.app/"
  }
]

export default projects