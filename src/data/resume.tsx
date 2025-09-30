import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tushar Jagtap",
  initials: "DV",
  url: "https://dillion.io",
  location: "Bangalore, KA",
  locationLink: "https://www.google.com/maps/place/bangalore",
  description:
    "Full-stack Developer with 2+ years of experience. I love building things and helping people.",
  summary:
    "Experience of building scalable, responsive web applications using React, Node.js, and MongoDB. Proven ability to take ownership of products end-to-end, from conception to production. Strong focus on clean code, UI/UX best practices, and performance optimization. Passionate about solving real-world problems and contributing to impactful teams.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Typescript",
    "Node.js",
    "Express.js",
    "Socket.io",
    "MongoDB",
    "Redux-toolkit",
    "PostgreSQL",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "tusharj8788@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tush8788",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tushar-jagtap-a8bba7317/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Gmail: {
        name: "Gmail",
        url: "#tusharj8788@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#tusharj8788@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tablesprint Technologies",
      href: "https://www.tablesprint.com/",
      badges: [],
      location: "Bangalore",
      title: "Full-Stack Developer",
      logoUrl: "/tablesprint_logo.jpeg",
      start: "Jan 2024",
      end:'Present',
      description:
        "Developed a full-stack CRM system using React , Node.js , and PostgreSQL , implementing key features such as Kanban boards , filters , workflows , and user authentication. Built JWT-based authentication for secure login, registration, and session management, improving security. Integrated real-time Socket.io chat functionality to enhance team communication. Optimized form performance by 30% using React hooks and eﬃcient state management. Ensured responsive, scalable UI/UX design and improvedoverall system performance by 20%.",
    },
    {
      company: "Digitalflake",
      badges: [],
      href: "https://digitalflake.com/",
      location: "Pune",
      title: "Software Engineer",
      logoUrl: "/digitalflake_logo.jpg",
      start: "Jun 2023",
      end: "Dec 2023",
      description:
        "Contributed to building the CRM from the ground up using React, Node.js, and PostgreSQL. Gained deep understanding of project architecture to improve features and system scalability. Collaborated closely with Tablesprint’s internal team, resulting in a smooth transition to a full-time role.",
    },
    {
      company: "Coding Ninjas",
      href: "https://nvidia.com/",
      badges: [],
      location: "Pune, MH",
      title: "Teaching Assistant",
      logoUrl: "/cn_logo.jpeg",
      start: "Nov 2022",
      end: "May 2023",
      description:
        "Supported over 650+ students, resolving 1300+ queries related to Node.js, JavaScript, and backend logic. Reviewed student codebases and provided improvement suggestions to boost coding quality and understanding.",
    },
  ],
  education: [
    {
      school: "Sinhgad Institute",
      href: "https://siom.sinhgad.edu/",
      degree: "Master's in Computer Applications (MCA)",
      logoUrl: "/sinhgad_logo.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "University of Pune",
      href: "https://www.unipune.ac.in/",
      degree: "Bachelor's Degree of Commerce (BCOM)",
      logoUrl: "/sppu_logo.png",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "RAG Chatbot - News Chatbot",
      href: "https://rag-chatbot-ui-seven.vercel.app/",
      dates: "Sep 2025 - Sep 2025",
      active: true,
      description:
        "A React-based chatbot application built using Retrieval-Augmented Generation (RAG) technology to provide intelligent, context-aware responses about news content. The project leverages Vite for fast development and modern build tooling.",
      technologies: [
        "React",
        "Gemini.ai",
        "Socket.io",
        "Pinecone",
        "Typescript",
        "PostgreSQL",
        "MongoDB",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "Mongoose",
        "Vite"
      ],
      links: [
        {
          type: "Website",
          href: "https://rag-chatbot-ui-seven.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/tush8788/RAG-CHATBOT-BACKEND",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Frontend",
          href: "https://github.com/tush8788/RAG-CHATBOT-UI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Sales Dashboard",
      href: "https://sales-dashboard-woad-eta.vercel.app/",
      dates: "Sep 2025 - Sep 2025",
      active: true,
      description:
        "A comprehensive sales analytics dashboard built with React and TypeScript to visualize and track key sales metrics and performance data. The dashboard provides real-time insights into sales operations with interactive charts and data visualization.",
      technologies: [
        "AntD",
        "Typescript",
        "MongoDB",
        "Node.js",
        "Express.js",
        "React",
        "TailwindCSS",
        "Mongoose",
        "Apexcharts",
        "AntD",
        "d3-geo",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://sales-dashboard-woad-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tush8788/sales-dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Online-Bank",
      href: "https://online-bank.onrender.com/",
      dates: "Dec 2022 - Dec 2022",
      active: true,
      description:
        "Developed a full-stack banking app with login, account creation, loan application, and admin loan approval features. Implemented secure Passport.js authentication and integrated MongoDB for data management.",
      technologies: [
        "Exprees.js",
        "Node.js",
        "Ejs",
        "MongoDB",
        "Passport",
        "Crypto",
        "Passport-Local",
      ],
      links: [
        {
          type: "Website",
          href: "https://online-bank.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tush8788/Online-Bank",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Placement Cell Web Application",
      href: "https://github.com/tush8788/placement-cell-webApp",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Built a web-based application using Node.js, Express.js, MongoDB Atlas, and other technologies that allow employees to manage students, assign interviews, and download reports in CSV format.",
      technologies: [
        "Express.js",
        "Node.js",
        "Ejs",
        "Passport",
        "Passport-Local",
        "MongoDD"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tush8788/placement-cell-webApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // }
  ],
} as const;
