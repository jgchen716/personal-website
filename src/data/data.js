import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jonathan Chen | Aspiring Developer',
  lang: '', // e.g: en, es, fr, jp
  description: "Jonathan Chen's personal porfolio website",
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Jonathan Chen',
  subtitle: 'An aspiring developer studying at UPenn.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I’m a second-year student at UPenn majoring in CS and Cognitive Science and minoring in Data Science. I’m an aspiring software engineer / full stack developer who’s fascinated by AI and Machine Learning.',
  paragraphTwo:
    'I’m originally from New Jersey, and when I’m lucky enough to have free time, you can find me learning how to code with new tech, writing about my experiences, or lifting weights. ',
  paragraphThree:
    'My goal? To make applications—web and mobile—that draw visitors in and have an impact in the real world.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Graph Visualizer',
    info:
      'Created React app that allows users to add nodes and edges to a graph, then run various graph algorithms on the created graph and view live results',
    info2: 'Tech Stack: React, HTML, CSS, Material UI',
    url: 'https://jgchen716.github.io/graph-visualizer/',
    repo: 'https://github.com/jgchen716/graph-visualizer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Penn Course Cart',
    info:
      'Developed shopping cart app that allows users to view information about CS courses at Penn, add them to shopping cart, and checkout selected courses with receipt',
    info2: 'Tech Stack: React, HTML, CSS, React-Bootstrap',
    url: 'https://github.com/jgchen716/penn-course-cart',
    repo: 'https://github.com/jgchen716/penn-course-cart', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '[CIS 195 FINAL PROJECT]',
    info:
      'Created a habit tracker app that allows users to create, delete, and actively record different habits stored in a Firestore database',
    info2: 'Tech Stack: Swift, UIKit, Firestore, EventKit',
    url: 'https://github.com/jgchen716/habit-tracker-app',
    repo: 'https://github.com/jgchen716/habit-tracker-app', // if no repo, the button will not show up
  },
];

//  EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Software Engineering Intern @ The BHW Group',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    info2: 'May 2021 - August 2021',
    info3: 'Austin, TX',
    url: 'https://thebhwgroup.com/',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Teaching Assistant for CIS 120 @ UPenn',
    info:
      'Teach coding fundamentals in Java and OCaml to over 400 students per semester; Lead weekly recitation of up to 25 students to review concepts; Create and update programming assignments ',
    info2: 'August 2020 - Present',
    info3: 'Philadelphia, PA',
    url: 'https://www.seas.upenn.edu/~cis120/current/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'jgchen@sas.upenn.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:jgchen@sas.upenn.edu',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jgchen/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jgchen716',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
