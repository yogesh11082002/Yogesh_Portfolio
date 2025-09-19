// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/mango.jpeg';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/abes.jpeg';
import vpsLogo from './assets/education_logo/sbs.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/quick.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/echoblog.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/yogeshh.png';
import cmLogo from './assets/work_logo/nexa.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/gocart.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Compass', logo: mcLogo },
        { name: 'Postman', logo: postmanLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "MangosOrange",
      date: " OCtober 2024 - April 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2024 - September 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Timmerman Construction",
      date: "September 2022 - February 2023",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "ABESIT Ghaziabad, Uttar Pradesh",
      date: "Oct 2021 - June 2025",
      grade: "7.51 CGPA",
      desc: "I am pursuing my Bachelor's degree (B.Tech) in Computer Science from ABESIT, Ghaziabad, Uttar Pradesh. Throughout my academic journey, I have built a strong foundation in programming, software development, and core computer science principles. My coursework includes subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I have actively participated in workshops, hackathons, and technical events that helped me enhance my practical knowledge and problem-solving skills. My experience at ABESIT has been pivotal in shaping my technical expertise and preparing me for professional growth.",
      degree: "Bachelor Of Technology - B.Tech (CSE)",
    },
    {
      id: 1,
      img: vpsLogo,
      school: "S.B.S. Public School, Salempur (Hathras)",
      date: "Apr 2019 - March 2020",
      grade: "78%",
      desc: "I completed my Class 12 education from S.B.S. Public School, Salempur, under the CBSE board, with a focus on Physics, Chemistry, and Mathematics (PCM) along with Computer Science. This academic foundation strengthened my analytical, logical, and problem-solving abilities, while also nurturing my interest in technology and programming.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "S.B.S. Public School, Salempur (Hathras)",
      date: "Apr 2017 - March 2018",
      grade: "90%",
      desc: "I completed my Class 10 education from S.B.S. Public School, Salempur, under the CBSE board, with a strong emphasis on Science and Computer. This stage of my academic journey built my curiosity for technology, strengthened my fundamentals, and laid the foundation for pursuing advanced studies in computer science.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    
  
    {
      id: 0,
      title: "Nexa AI - AI Powered  Website",
      description:
       "An efficient and customizable AI-powered content generation platform. Built using the PERN stack with advanced AI models, it provides robust features for image editing, background removal, object detection, and article generation, helping users create high-quality content with ease and precision.",
       image: cmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      webapp: "https://nexa-ai-neon-yogesh.vercel.app/",
    },
    {
      id: 1,
      title: "Quickcart - Website",
      description:
        "A fast and user-friendly e-commerce website designed to provide a seamless shopping experience. Built using the MERN stack, it offers features like product browsing, secure payments, cart management, and order tracking, making online shopping efficient and convenient for users.",
        image: csprepLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "https://quickcart-yogesh.vercel.app/",
    },
    {
      id: 2,
      title: "EchoBlog - Full Stack Blog Website",
      description:" A comprehensive full-stack blog platform that allows users to create, manage, and share blog posts. Built with the MERN stack, it features user authentication, a rich text editor, and a responsive design, providing an engaging and interactive blogging experience.",
      image: taskremLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://echoblog-yogesh.vercel.app/",
    }
    ,
    {
      id: 3,
      title: " Gocart. - The Ultimate  E-Commerce Website",
      description:"A fast and user-friendly e-commerce website designed to provide a seamless shopping experience. Built using the MERN stack, it offers features like product browsing, secure payments, cart management, and order tracking, making online shopping efficient and convenient for users.",
         image: removebgLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://gocart-yogesh.vercel.app/",
    },
   
   
    {
      id: 4,
      title: "Portfolio-Website  ",
      description:
       "A modern and responsive portfolio website designed to showcase projects, skills, and achievements. Built using React.js and Tailwind CSS, it features smooth navigation, interactive UI elements, and a clean design to provide visitors with an engaging and professional experience.",
       image: webverLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://yogesh-sengar.vercel.app/",
    },
    {
      id: 5,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
     {
      id: 6,
      title: " Movie Website ",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://mymovieapp-yogesh.vercel.app/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
  ];  