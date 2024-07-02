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
  mangobyte,
  ltlabs,
  wing,
  infinity,
  laravel,
  php,
  knex,
  vue,
  nikestore,
  a,
  b,
  c,
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
    name: "laravel",
    icon: laravel
  },
  {
    name: "php",
    icon: php
  },
  {
    name: "knex",
    icon: knex
  },
  {
    name: "vue",
    icon: vue
  }
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Infinity Information & Apps Dev",
    icon: infinity,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Spearhead the backend development using Node.js for the company's projects.",
      "Collaborate closely with the frontend team to seamlessly integrate the React.js components.",
      "Meticulously write comprehensive unit tests to ensure the reliability and stability of the codebase.",
      "Analyze data, processes, and codebases to proactively identify and troubleshoot complex technical issues.",
      "Propose and implement innovative ideas to drive continuous improvement and optimization of the application.",
      "Maintain a strong focus on code quality and participate in the delivery of efficient, high-performance solutions.",
      "Develop reusable, modular code components and libraries to enhance developer productivity and flexibility.",
      "Thoroughly document technical specifications and procedures to support the ongoing maintenance and evolution of the project.",
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
    title: "Junior Software Engineer",
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

const testimonials = [
  {
    testimonial:
      "Bunsal's impressive skills, dedication, and teamwork have been essential to our team's consistent success and achievements.",
    name: "CHEA Socheat",
    designation: "Software Engineering Manager",
    company: "TovTrip",
    icon: c,
  },
  {
    testimonial:
      "I highly recommend Bunsal for the full-stack development. He has shown adaptability to change, and is eager to learn new things.",
    name: "NOEURN Neang",
    designation: "Sr. Full-Stack Engineer | Tech Lead",
    company: "LTlabs",
    icon: b,
  },
  {
    testimonial:
      "Bunsal has shown his deep understanding of full-stack development. He is able to quickly learn new concepts and apply them to his work.",
    name: "HENG Henry",
    designation: "Technical Operation Manager",
    company: "Okoone",
    icon: a,
  },
];

const projects = [
  {
    name: "Nike Store",
    description:
      "The Nike Store Project is a React and Redux-based web application that uses Tailwind CSS to provide customers with a user-friendly interface for browsing and purchasing Nike products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nikestore,
    source_code_link: "https://github.com/bunsalcoder/nike-store",
  },
];

export { services, technologies, experiences, testimonials, projects };
