import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jonathan Chen | Aspiring Software Developer',
  lang: '', // e.g: en, es, fr, jp
  description: "Jonathan Chen's personal porfolio website",
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Jonathan Chen',
  subtitle: 'An aspiring software developer studying at UPenn.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I’m a third-year student at UPenn majoring in CS and Cognitive Science and minoring in Data Science and Math. I’m an aspiring software engineer / full stack developer who’s fascinated by AI and Machine Learning.',
  paragraphTwo:
    'I’m originally from New Jersey, and when I’m lucky enough to have free time, you can find me learning how to code with new tech, writing about my experiences, or lifting weights. ',
  paragraphThree:
    'My goal? To make applications—web and mobile—that draw visitors in and have an impact in the real world.',
  resume: 'https://drive.google.com/file/d/16R2-MkAofrDT-8-SZjbduyP5fjse7zr9/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'graph.png',
    title: 'Graph Visualizer 🖥️',
    info:
      'Implemented React app that allows users to add nodes and edges to a graph, then run various graph algorithms (e.g. BFS, DFS, Dijkstra, finding global bridges, etc.) on the created graph and view live results',
    info2: 'Tech Stack: React, HTML, CSS, Material UI',
    url: 'https://jgchen716.github.io/graph-visualizer/',
    repo: 'https://github.com/jgchen716/graph-visualizer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'spotify_project.jpg',
    title: 'Spotify Playlist Generator 🎧',
    info:
      "Created a playlist generator that applies k-means clustering to a given user's liked songs, grouping tracks together based on audio features collected from Spotify API",
    info2: 'Tech Stack: Spotify Web API, Python (Pandas, Spotipy, Seaborn, Plotly)',
    url: 'https://colab.research.google.com/drive/1NCwPhwlZyNEkJsooMAS94tFPu-bXi7sx?usp=sharing',
    repo: 'https://github.com/jgchen716/spotify-ml', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cart.png',
    title: 'Penn Course Cart 🛒',
    info:
      'Developed shopping cart app that allows users to view information about CS courses at Penn, add them to shopping cart, and checkout selected courses with receipt',
    info2: 'Tech Stack: React, HTML, CSS, React-Bootstrap',
    url: 'https://github.com/jgchen716/penn-course-cart',
    repo: 'https://github.com/jgchen716/penn-course-cart', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'habittrack.jpg',
    title: 'Habit Track 📆',
    info:
      'Created a habit tracker app that allows users to create, delete, and actively record a number of habits with a game-like interface',
    info2: 'Tech Stack: Swift, UIKit',
    url: '',
    repo: 'https://github.com/jgchen716/habit-tracker', // if no repo, the button will not show up
  },
];

//  EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    img: 'bhw.png',
    title: 'Web and Mobile Development Intern @ The BHW Group',
    info:
      'Worked on full stack development for real estate web application, implementing front end with NextJS and back end API in Go.',
    info2: 'May 2021 - August 2021',
    info3: 'Austin, TX',
    url: 'https://thebhwgroup.com/',
  },
  {
    id: nanoid(),
    img: 'cis120.png',
    title: 'Teaching Assistant for CIS 120 @ UPenn',
    info:
      'Teach coding fundamentals in Java and OCaml to over 400 students per semester; Lead weekly recitation of up to 25 students to review concepts; Create and update programming assignments ',
    info2: 'August 2020 - Present',
    info3: 'Philadelphia, PA',
    url: 'https://www.seas.upenn.edu/~cis120/current/',
  },
];

//  PUBLICATIONS DATA
export const publicationsData = [
  {
    id: nanoid(),
    img: 'why_i_switched_to_cs.jpeg',
    title: 'Why I Switched from "Pre-Med" to Computer Science',
    info: 'The story and reasoning behind how I started studying CS.',
    date: 'May 11, 2020',
    url:
      'https://medium.com/@jonathanchen716/why-i-switched-from-pre-med-to-computer-science-676bb4ea2f4f',
  },
  {
    id: nanoid(),
    img: 'on_the_working_life.jpeg',
    title: 'On the Working Life',
    info:
      'An essay on what the concepts of "work" and a "dream job" mean and have meant to me, submitted to The Medium Writers Challenge (2021).',
    date: 'August 23, 2021',
    url: 'https://medium.com/@jonathanchen716/on-the-working-life-bad8027a77af',
  },
  {
    id: nanoid(),
    img: 'embracing_challenge.jpeg',
    title: 'Embracing the Challenge: My Road to Lifting Weights, Coding, and So Much More',
    info: 'An essay on how my mindset toward challenges has evolved over time, with some examples.',
    date: 'August 16, 2021',
    url:
      'https://medium.com/@jonathanchen716/embracing-the-challenge-my-road-to-lifting-weights-coding-and-so-much-more-457f1a2ffe27',
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
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@jonathanchen716',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
