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
  mangobyte,
  ltlabs,
  wing,
  infinity,
  up,
  pnc,
  threejs,
  laravel,
  php,
  mariadb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "edu",
    title: "Edu",
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "laravel",
  //   icon: laravel
  // },
  // {
  //   name: "php",
  //   icon: php
  // },
  // {
  //   name: "mariadb",
  //   icon: mariadb
  // }
];

const experiences = [
  {
    title: "Full-Stack Engineer",
    company_name: "Infinity Information & Apps Dev",
    icon: infinity,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing backend systems and APIs using Medusa.js, Nest.js, and TypeORM.",
      "Integrating with databases using TypeORM, including defining models, entities, relationships, and performing database operations (e.g., querying, data manipulation).",
      "Implementing authentication and authorization mechanisms, such as JWT (JSON Web Tokens) or session-based authentication, to secure APIs and protect resources.",
      "Implementing proper error handling and logging mechanisms to ensure robustness and facilitate troubleshooting.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Wing Bank",
    icon: wing,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Developing backend systems and APIs using Medusa.js, Nest.js, and TypeORM.",
      "Integrating with databases using TypeORM, including defining models, entities, relationships, and performing database operations (e.g., querying, data manipulation).",
      "Implementing authentication and authorization mechanisms, such as JWT (JSON Web Tokens) or session-based authentication, to secure APIs and protect resources.",
      "Implementing proper error handling and logging mechanisms to ensure robustness and facilitate troubleshooting.",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "Wing Bank",
    icon: wing,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Developing mobile applications for B2C e-commerce using React Native framework.",
      "Integrating with backend APIs and services to fetch and manipulate data required for the e-commerce app.",
      "Implementing localization (react-i18next) for B2C e-commerce to support multi-languages.",
      "Collaborating with backend developers, product managers, and designers to understand requirements and deliver high-quality solutions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "LT Labs",
    icon: ltlabs,
    iconBg: "#E6DEDD",
    date: "May 2022 - Oct 2023",
    points: [
      "Develop and maintain server-side applications using Node.js, Express, ensuring they are efficient, scalable, and secure.",
      "Collaborating with frontend developers, designers, and other stakeholders to understand requirements and implement backend functionality.",
      "Databases and ORM: Knowledge of working with databases, such as MySQL, and using Object-Relational Mapping (ORM) like Knext.Js.",
      "Build and maintain user interfaces using React.js, ensuring a responsive and engaging user experience.",
      "Writing clean, modular, and maintainable code following best practices and coding standards.",
      "Optimizing web applications for performance and scalability.",
      "Integrating with backend APIs and services to fetch and manipulate data.",
      "Design and implement RESTful APIs, ensuring they are well-documented and interact seamlessly with the frontend.",
      "Manage and optimize MySQL databases, including schema design, indexing, and query performance tuning.",
      "Identify and resolve software defects and performance issues in both the backend and frontend.",
    ],
  },
  {
    title: "Full-Stack Development Intern",
    company_name: "Mango Byte Technology",
    icon: mangobyte,
    iconBg: "#383E56",
    date: "January 2022 - May 2022",
    points: [
      "Developing and maintaining web applications using Nest.js, Nuxt.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const education = [
  {
    title: "Associate Degree of Information Technology",
    university_name: "Passerelles Numeriques Cambodia",
    icon: pnc,
    iconBg: "#383E56",
    date: "Oct 2019 - May 2022",
    points: [
      "Solid Networking Knowledge",
      "Proficient Programming Skills",
      "Design Proficiency",
      "Practical Experience",
      "Collaboration and Communication Skills"
    ],
  },
  {
    title: "Bachelor Degree of Computer Science",
    university_name: "University of Puthisastra",
    icon: up,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Mobile Development Expertise",
      "Backend Development Skills",
      "Cloud Infrastructure Knowledge",
      "Advanced Linux Competence",
      "Web Development Proficiency",
      "IT Research Methodology",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "CHEA Socheat",
    designation: "Software Engineer Manager",
    company: "LTlabs",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "NOEURN Neang",
    designation: "Sr. Full-Stack Engineer | Team Lead",
    company: "LTlabs",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "HUL Sim",
    designation: "Education Coordinator",
    company: "PNC",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects, education };
