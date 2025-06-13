const projects = [
  {
    id: 1,
    title: "Translate App ",
    description: "A simple web app that turns typed words into sign language emojis. Built to make learning sign language accessible, and aesthetic.",
    image: new URL('../assets/translate.png', import.meta.url).href,
    techStack: ["ReactJs","Vite", "JSON", "CSS"],
    github: "",
    demo: null
  },
  {
    id: 2,
    title: "school management system - EPIM",
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
    github: null,
    demo: "https://fitness-app-ivory-two.vercel.app/"
  },
  {
    id: 6,
    title: "Shop App",
    description: "Just a glimpse from the full UI clean, cozy, and user-focused. More pages, more features behind the scenes.",
    image: new URL('../assets/shop.png', import.meta.url).href,
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: null,
    demo: null
  },
]

export default projects