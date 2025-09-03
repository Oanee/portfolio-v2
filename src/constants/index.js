export const navigationWords = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const heroTitle = "Hi I'm Alin";
export const heroDescription = "A developer Dedicated to Crafting";
export const flipWords = ["Secure", "Modern", "Scalable"];
export const flipWordsDescription = "Web Applications";

export const heroTextMotionVariants = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { delay },
});

export const aboutMeTitle = "Hi, I'm Oancea Alin!";
export const aboutMeDescription =
  "Over 3 years of experience solving problems, learning new skills, and completing projects both collaboratively, through effective communication, and independently. I enjoy staying up-to-date with new technologies, and improving my skills.";

export const techPrinciplesTitle = "CODE IS CRAFT";
export const techPrinciplesCards = [
  { style: { rotate: "75deg", top: "30%", left: "20%" }, text: "MVC" },
  {
    style: { rotate: "-30deg", top: "60%", left: "45%" },
    text: "Coding Workflow",
  },
  {
    style: { rotate: "90deg", bottom: "30%", left: "70%" },
    text: "Design Patterns",
  },
  {
    style: { rotate: "-45deg", top: "55%", left: "0%" },
    text: "Design Principles",
  },
  {
    style: { rotate: "20deg", top: "10%", left: "38%" },
    text: "Responsive Design",
  },
  {
    style: { rotate: "30deg", top: "70%", left: "70%" },
    image: "assets/logos/npm.svg",
  },
  {
    style: { rotate: "-20deg", top: "70%", left: "25%" },
    image: "assets/logos/git.svg",
  },
  {
    style: { rotate: "-45deg", top: "5%", left: "10%" },
    image: "assets/logos/visualstudiocode.svg",
  },
  {
    style: { rotate: "25deg", top: "5%", left: "70%" },
    image: "assets/logos/jetbrains.svg",
  },
];

export const locationTitle = "Time zone";
export const locationDescription =
  "I'm based in Romania/Sibiu, and open to remote work worldwide or relocate!";

export const collaborationTitle = "Do you want to start a project together ?";
export const personalEmail = "oanceaalin9595@gmail.com";

export const skillsTitle = "Tech stack";
export const skillsDescription =
  " I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications";
export const skills = [
  "css3",
  "git",
  "html5",
  "javascript",
  "react",
  "sqlite",
  "stripe",
  "tailwindcss",
  "mysql",
  "mariadb",
  "nextjs",
  "threejs",
  "php",
  "vitejs",
  "wordpress",
  "bash",
  "bootstrap",
  "sass",
  "nodejs",
  "typescript",
];

export const projectsTitle = "Projects";
export const projects = [
  {
    id: 1,
    title: "Converso",
    description:
      "AI-powered, voice-driven educational SaaS platform delivering real-time lessons with interactive components and scalable architecture.",
    subDescription: [
      "Built secure user authentication and subscription management, demonstrating SaaS workflow implementation.",
      "Integrated OpenAI API for intelligent, contextual responses in real-time lessons.",
      "Developed interactive UI components and session tracking features for dynamic lesson experiences.",
      "Designed a modern, responsive interface with Tailwind CSS, ensuring seamless user experience across devices.",
    ],
    href: "https://ai-saas-chat-app.vercel.app/",
    code: "https://github.com/Oanee/ai-saas-chat-app",
    image: "/assets/projects/converso.webp",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 5, name: "Supabase", path: "/assets/logos/supabase.svg" },
      { id: 6, name: "Clerk", path: "/assets/logos/clerk.svg" },
      { id: 7, name: "Vapi", path: "/assets/logos/vapi.svg" },
      { id: 8, name: "shadcn/ui", path: "/assets/logos/shadcn-ui.svg" },
      { id: 9, name: "Vercel", path: "/assets/logos/vercel.svg" },
    ],
  },
  {
    id: 2,
    title: "StoreIt",
    description:
      "Cloud-inspired SaaS file storage platform allowing users to securely manage, organize, and share files in real time.",
    subDescription: [
      "Implemented secure passwordless OTP authentication for enhanced account security.",
      "Developed a dashboard to track storage, recent uploads, and file management.",
      "Added multi-file upload, rename, preview, download, and delete functionality.",
      "Enabled file sharing via link and integrated global instant search for efficient file retrieval.",
    ],
    href: "https://storage-app-nine.vercel.app/",
    code: "https://github.com/Oanee/storage-app",
    image: "/assets/projects/storeit.webp",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 5, name: "Appwrite", path: "/assets/logos/appwrite.svg" },
      { id: 6, name: "Vercel", path: "/assets/logos/vercel.svg" },
    ],
  },
  {
    id: 3,
    title: "TV Time",
    description:
      "A modern movie discovery web app featuring real-time data, responsive interface, and dynamic trending content.",
    subDescription: [
      "Implemented search and filtering for movies by title, genre, and release year.",
      "Integrated external movie database API to display up-to-date film details, posters, and ratings.",
      "Built a database to store user searches and dynamically generate trending lists based on popularity.",
      "Designed a responsive, interactive UI to enhance user experience across devices.",
    ],
    href: "https://movie-app-omega-ten-10.vercel.app/",
    code: "https://github.com/Oanee/movie-app",
    image: "/assets/projects/tvtime.webp",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Vite", path: "/assets/logos/vite.svg" },
      { id: 4, name: "Appwrite", path: "/assets/logos/appwrite.svg" },
      { id: 5, name: "ESLint", path: "/assets/logos/eslint.svg" },
      { id: 6, name: "TMDB API", path: "/assets/logos/tmdb.svg" },
    ],
  },
  {
    id: 4,
    title: "Old Personal Portfolio",
    description:
      "A responsive personal portfolio website developed to showcase projects and skills.",
    subDescription: [
      "Designed and implemented a clean layout to highlight project work and technical skills.",
      "Practiced responsive design principles for optimal viewing across devices.",
    ],
    href: "https://oancea-alin.netlify.app/",
    code: "https://github.com/Oanee/my-portofolio",
    image: "/assets/projects/portfolio-old.webp",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 3, name: "Sass", path: "/assets/logos/sass.svg" },
    ],
  },
  {
    id: 5,
    title: "Monochrome",
    description:
      "A simple e-commerce web app for watches, focused on responsive layout and UI design practice.",
    subDescription: [
      "Practiced building responsive layouts and product listings.",
      "Applied fundamental UI/UX design principles for a clean and user-friendly interface.",
    ],
    href: "https://relaxed-pixie-565e99.netlify.app/",
    code: "https://github.com/Oanee/monochrome",
    image: "/assets/projects/monochrome.webp",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 3, name: "Sass", path: "/assets/logos/sass.svg" },
    ],
  },
  {
    id: 6,
    title: "Thread Affair",
    description:
      "A beginner e-commerce web app for shirts, showcasing front-end development skills and responsive design.",
    subDescription: [
      "Built product pages with responsive design.",
      "Practiced layout, styling, and basic interactivity.",
    ],
    href: "https://eloquent-scone-6c5bb4.netlify.app/",
    code: "https://github.com/Oanee/ta-boston",
    image: "/assets/projects/thread-affair.webp",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 3, name: "Sass", path: "/assets/logos/sass.svg" },
    ],
  },
  {
    id: 7,
    title: "Rock Paper Scissors",
    description:
      "A fully functional Rock Paper Scissors game with real-time score tracking and personalized messages.",
    subDescription: [
      "Implemented game logic and interactive UI updates.",
      "Added personalized messages displaying player’s name and current score.",
    ],
    href: "https://elegant-twilight-cb4e55.netlify.app/",
    code: "https://github.com/Oanee/rock-paper-scissors",
    image: "/assets/projects/rock-paper-scissors.webp",
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 8,
    title: "Tic Tac Toe",
    description:
      "A fully functional Tic Tac Toe game built from scratch with interactive gameplay.",
    subDescription: [
      "Implemented game logic with win/draw detection.",
      "Created an interactive and responsive UI for user engagement.",
    ],
    href: "https://frolicking-souffle-e33725.netlify.app/",
    code: "https://github.com/Oanee/tic-tac-toe",
    image: "/assets/projects/tic-tac-toe.webp",
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 9,
    title: "Number Guessing",
    description:
      "A progressive number guessing game with dynamically increasing difficulty and real-time feedback.",
    subDescription: [
      "Implemented dynamic difficulty levels and range increases.",
      "Provided real-time feedback for guesses and tracked player progress with level and attempts.",
    ],
    href: "https://dazzling-sprinkles-efd334.netlify.app/",
    code: "https://github.com/Oanee/number-guessing",
    image: "/assets/projects/number-guessing.webp",
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 10,
    title: "Clock",
    description:
      "A simple clock web application displaying current day, date, and live time updates.",
    subDescription: [
      "Displayed current day, date, and live time with seconds.",
      "Practiced real-time UI updates and responsive design.",
    ],
    href: "https://startling-rugelach-b2ddf9.netlify.app/",
    code: "https://github.com/Oanee/clock",
    image: "/assets/projects/clock.webp",
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
];

export const experiencesTitle = "Experiences";

export const experiences = [
  {
    title: "Front End Developer",
    job: "Keepcalling",
    date: "Mar 2023 - Present",
    contents: [
      "Modernized legacy jQuery code to vanilla JavaScript, improving maintainability and aligning with modern frontend standards.",
      "Developed and updated key web sections (homepage, checkout, user account) with dynamic behavior tailored to user-specific products.",
      "Implemented responsive, mobile-first UI using PHP/HTML, SCSS/CSS, and JavaScript, compatible across desktop, mobile, and WebView apps.",
      "Handled bug fixes, redesigns, and optimizations for forms, emails, promotional sections, and complex UI components.",
      "Optimized backend processes by improving SQL queries, updating API responses, and creating reusable PHP classes for efficiency.",
      "Collaborated with product and development teams to achieve a 3x increase in active users, contributing to product growth and performance improvements.",
      "Utilized Git, debugging tools, and deployment workflows to maintain code quality and streamline production updates.",
    ],
  },
  {
    title: "Front End Developer",
    job: "Pixellab",
    date: "Jun 2022 - Feb 2023",
    contents: [
      "Completed 6-month intensive front-end development training.",
      "Gained practical experience by building multiple projects and creating responsive, maintainable web layouts.",
      "Practiced HTML, CSS, JavaScript, and modern UI/UX principles for real-world web applications.",
    ],
  },
  {
    title: "Relational Database",
    job: "freeCodeCamp",
    date: "Completed Jul 2024",
    contents: [
      "Completed a project-based course covering relational database concepts and design principles.",
      "Built practical databases for games, bike rentals, and data management applications.",
      "Learned SQL queries, relationships, normalization, and database best practices.",
    ],
  },
  {
    title: "PHP for Beginners Become a PHP Master",
    job: "Udemy",
    date: "Completed Oct 2023",
    contents: [
      "Learned both procedural and object-oriented PHP programming.",
      "Built a CMS project implementing database-driven functionality and user management.",
      "Practiced backend logic, form handling, and dynamic content generation.",
    ],
  },
  {
    title: "The Complete JavaScript Course From Zero to Expert",
    job: "Udemy",
    date: "Completed Aug 2023",
    contents: [
      "Mastered modern JavaScript from fundamentals to advanced topics, including ES6+, DOM manipulation, and async programming.",
      "Built multiple real-world projects to demonstrate practical coding skills and problem-solving.",
    ],
  },
  {
    title: "Advanced CSS and Sass Flexbox, Grid, Animations and More",
    job: "Udemy",
    date: "Completed Jul 2023",
    contents: [
      "Studied advanced CSS concepts including Flexbox, Grid, animations, and responsive design.",
      "Applied knowledge to develop modern, maintainable, and visually appealing web designs.",
    ],
  },
  {
    title: "DevOps Beginners to Advanced",
    job: "Udemy",
    date: "In progress",
    contents: [
      "Studying DevOps foundational concepts and workflows.",
      "Gaining hands-on exposure to automation, cloud services, CI/CD pipelines, and infrastructure management.",
    ],
  },
];

export const reviews = [
  // {
  //   name: "Jack",
  //   username: "@jack",
  //   body: "I've never seen anything like this before. It's amazing. I love it.",
  //   img: "https://robohash.org/jack",
  // },
];

export const socials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/alin-oancea/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/Oanee",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/oanealin/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/oanealin/",
    icon: "/assets/socials/facebook.svg",
  },
  {
    name: "X",
    href: "https://x.com/Oanealin",
    icon: "/assets/socials/x.svg",
  },
];

export const footerTerms = "Terms & Conditions | Privacy";

export const footerRights = "© 2025 Oancea Alin. All rights reserved";
