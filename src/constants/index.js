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
    title: "Software Engineer",
    company_name: "McKesson",
    icon: motorola,
    iconBg: "#E6DEDD",
    date: "Sep 2024 – Present",
    points: [
      "Spearheaded the migration of legacy dashboards to React and Node.js, integrating RESTful APIs with Redis caching to decrease latency by approximately 20 – 25% and enhance efficiency for over 1,000 daily users.",
      "Architected a scalable microservices backend utilizing Node.js and AWS EC2 deployment, reducing manual data reconciliation time by approximately 25 – 30% while facilitating seamless synchronization across enterprise healthcare workflows and secure data exchange systems.",
      "Corrected and maintained over 1000 automation test cases using TypeScript and Selenium, ensuring high test coverage, reliability, and application robustness in a CI/CD environment.",
      "Engineered automated cloud deployment pipelines incorporating GitHub Actions and Amazon S3, minimizing deployment failures by approximately 15 – 20% and ensuring reliable delivery of continuous feature enhancements to the core enterprise platform.",
      "Formulated robust backend APIs with Node.js connecting client portals with ServiceNow workflows and PostgreSQL databases, implementing JWT and OAuth authorization to secure data retrieval and increase overall enterprise system security.",
      "Implemented comprehensive Jest and React Testing Library unit testing frameworks across the frontend architecture, achieving approximately 80 – 85% code coverage and improving deployment reliability by eliminating critical post-release software regressions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Green Touch Technology",
    icon: prepMaestro,
    iconBg: "#E6DEDD",
    date: "Feb 2021 – Jul 2023",
    points: [
      "Developed responsive user interfaces for industrial touch monitors utilizing React and Redux, augmenting user interaction metrics by approximately 30 – 35% and securing an optimized customer experience across 4 distinct hardware configurations.",
      "Optimized complex PostgreSQL database queries and advanced indexing strategies, directly improving backend API response times by approximately 25 – 30% during peak high-traffic production usage for the primary enterprise software platform.",
      "Integrated RESTful third-party payment gateway APIs into the primary client software platform using Express.js, decreasing transaction failure rates by approximately 10 – 15% and driving a substantial increase in monthly digital revenue.",
      "Restructured the monolithic legacy codebase into scalable microservices utilizing Node.js and Docker on AWS EC2, trimming average server hosting expenses by approximately 15 – 20% and improving systemic scalability for future enterprise expansions.",
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
