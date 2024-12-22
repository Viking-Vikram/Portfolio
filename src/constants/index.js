import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  angular,
  bootstrap,
  cplusplus,
  java,
  jquery,
  python,
  sass,
  sql,
  meta,
  starbucks,
  motorola,
  prepMaestro,
  tesla,
  shopify,
  dummyPortfolio,
  vikramRecipes,
  guessGame,
  backRoads,
  dicegame,
  dogtinder,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Motorola Solutions",
    icon: motorola,
    iconBg: "#E6DEDD",
    date: "March 2022 - June 2023",
    points: [
      "Collaborated with a 13-member front-end team to develop a Dispatcher web application using Angular, creating 10 components with ES6 for clean, efficient, and maintainable code.",
      "Identified the root cause and resolved 20 critical bugs, assisted in resolving major and minor issues, significantly improving application stability and performance.",
      "Corrected and maintained over 1000 automation test cases using TypeScript and Selenium, ensuring high test coverage, reliability, and application robustness in a CI/CD environment.",
      "Conducted manual testing, uncovering and documenting over 500 bugs after code changes, streamlining debugging efforts for the development team.",
      "Recognized with cash awards for completing a record number of pull requests in a single sprint, demonstrating efficiency and commitment to project goals.",
      "Documented all procedures and solutions comprehensively to facilitate seamless knowledge transfer and future maintenance.",
    ],
  },
  {
    title: "UI Web Developer",
    company_name: "prepMaestro",
    icon: prepMaestro,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Led the design, web development, and maintenance of a responsive mock test-taking web application within a 3-member team, ensuring optimal functionality and usability.",
      "Orchestrated planning, tracking, and management of deliverables across 10 weekly sprints in an Agile environment, actively engaging in comprehensive code reviews to uphold quality standards and familiarity with Scrum methodologies.",
    ],
  },
];

const projects = [
  {
    name: "Template Portfolio",
    description:
      "A portfolio website featuring grid and flexbox layouts, serving as a template for over 50 job-seeking students, enabling customization and utilization for individual purposes.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: dummyPortfolio,
    source_code_link: "https://portfolio-grid-website.netlify.app",
  },
  {
    name: "Vikram's Recipes",
    description:
      "A web app showcasing million+ RESTful API-fetched cooking recipes. Resulting in a solution catering to 50+ dormitory students by providing a user-friendly platform for accessing and personalizing recipes.",
    tags: [
      {
        name: "ES6 javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: vikramRecipes,
    source_code_link: "https://vikramsrecipes.netlify.app",
  },
  {
    name: "Guess Game",
    description:
      "A retro web game offering friends a fun and nostalgic way to unwind and connect. Featuring classic arcade-style gameplay and pixel-art graphics. Perfect for leisure, friendly challenges, and reliving the charm of old-school gaming!",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: guessGame,
    source_code_link: "https://guess-number-javascript.netlify.app",
  },
  {
    name: "BackRoads travellers",
    description:
      "A responsive web application showcasing tours and destinations, optimized for all screen sizes. Features include trip details and newsletter sign-ups for an engaging user experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: backRoads,
    source_code_link: "https://backroads-travellers-flexbox.netlify.app/",
  },
  {
    name: "Dice Game",
    description:
      "An engaging two-player dice game where players race to reach a target score by rolling dice and strategically holding points. Built using modern JavaScript (ES6) and featuring a responsive design, it ensures smooth gameplay across all devices.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: dicegame,
    source_code_link: "https://pigs-game-js.netlify.app",
  },
  {
    name: "Dog Tinder",
    description:
      "Dog Tinder is a sleek and playful platform built with Bootstrap, designed to connect dog lovers with nearby canines and their owners. With an intuitive design, elite clientele, and guaranteed matchmaking, TinDog ensures your furry friend finds their perfect match.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: dogtinder,
    source_code_link: "https://tindog-bootstrap-website.netlify.app",
  },
];

export { services, technologies, experiences, projects };
