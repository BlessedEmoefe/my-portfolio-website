/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Blessed Emoefe Onoriode",
  title: "Hello, I'm Blessed",
  subTitle: emoji(
    `A passionate and creative Web and Mobile Developer 🚀 having over half a decade of experience in designing and building industry-standard applications according to specifications using many cool libraries and frameworks. 

    Blessed is an avid learner and teacher with a huge desire for personal development, collaboration and team building.`
  ),
  resumeLink:
    "https://docs.google.com/document/d/1NXoget5YXAe39rHa_aJ6hOJW7Fp3nEjYKPRVEgZBX6Q/edit?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BlessedEmoefe",
  youtube: "https://www.youtube.com/channel/UCpn-fJ3vOWvaZlG6OkY6z2w",
  linkedin: "https://www.linkedin.com/in/blessed-emoefe-onoriode/",
  gmail: "blessedemoefe1122334455@gmail.com",
  gitlab: "https://gitlab.com/blemo",
  medium: "https://medium.com/@blessedemoefe",
  instagram: "https://www.instagram.com/blessed_onoriode/",
  twitter: "https://twitter.com/BlessedOnoriode",
  facebook: false,
  stackoverflow: false,
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Lead teams and manage industry-standard project development from Design phase through production deployment"
    ),
    emoji(
      "⚡ Mentor and train individuals with minute knowledge of software development to become professional software developers"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ Source for solutions to problems/challenges already being faced presently and possibly in the future inorder to impact lives positively"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },

    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "TailwindCSS ",
      fontAwesomeClassname: "fa-paintbrush-fine",
    },
    {
      skillName: " ",
      fontAwesomeClassname: " ",
    },
    {
      skillName: "& Many Other Tecnhnologies",
      fontAwesomeClassname: "fas fa-ellipsis-h",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Open University of Nigeria",
      logo: require("./assets/images/Noun.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "May 2018 - 2022",
      desc:
        "Ranked top 10% in the program. Took courses on Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Became firmly accustomed to learning school topics by myself due to the nature of NOUN being an open and distant learning institute. This has solidified my ability to lead myself and others, stay self motivated and built the remote working culture I now enjoy",
      ],
    },
    {
      schoolName: "LearnFactory Bootcamp",
      logo: require("./assets/images/LEARNFACTORY.png"),
      subHeader: "Fullstack Web and Mobile Development",
      duration: "Apr 2019 - Oct 2019",
      desc:
        "6 months Web and Mobile Development bootcamp...",
      // descBullets: [
      //   " Designed and implemented a productivity tracking system to boost human efficiency using Reactjs and other technologies",
      //   "Wrote and published tech-based articles on different programming technologies",
      // ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%",
    },
    {
      Stack: "Algorithmic Programming",
      progressPercentage: "60%",
    },
    {
      Stack: "Leadership",
      progressPercentage: "85%",
    },
    {
      Stack: "Collaboration",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Product Owner (PSD2)",
    //   company: "Erste Bank",
    //   companylogo: require("./assets/images/ersteLogo.jpg"),
    //   date: "July 2019 – September 2020",
    //   desc:
    //     "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements.",
    // },

    {
      role: "Fullstack Frontend Engineer",
      company: "LearnFactory",
      companylogo: require("./assets/images/LEARN FACTORY.png"),
      date: "April 2019 – October 2021",
      descBullets: [
        "Led the development of a financial trivia software using React Native, Redux, Apollo Client and GraphQl",
        "Developed project design documents, architecture breakdown and other resources for better project understanding",
        "Implemented tests, development and deployment of various websites",
      ],
    },
    {
      role: "Software Engineer",
      company: "Nevada Bridge Tv",
      companylogo: require("./assets/images/nevad_bridge_logo.png"),
      date: "October 2021 – August 2021",
      descBullets: [
        "Implemented tests, authentication and contestant features in the Nevada Bridge Tv software products for over 60,000 users ",
        "Built UI components in React.js and React Native for new optimization features",
        "Designed and implemented core features into native modules in React Native to optimise mobile app performance. etc",
      ],
    },
    {
      role: "Web and Mobile Developer",
      company: "Itechnology Terrain",
      companylogo: require("./assets/images/ItechnologyWhite.jpg"),
      date: "Jan 2021 – Present",
      descBullets: [
        "Led the development of a local financial banking software and all its features using Reactjs and other technologies.",
        "Designed and implemented the company website application using Reactjs",
      ],
    },
    {
      role: "Software Engineering Youtuber",
      company: "Blessed Onoriode",
      companylogo: require("./assets/images/me.jpeg"),
      date: "September 2020 – Present",
      desc: "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "BlessedEmoefe", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED IN CREATING THEIR TECH",
  projects: [
    // Tackfundx
    {
      image: require("./assets/images/track2.jpeg"),
      projectName: "Trackfundx",
      projectDesc:
        "Your personal financial tracking app. Trackfundx helps you keep your finances on track by giving you full control over earnings and expenditure.",
      footerLink: [
        {
          name: "Download IOS App",
          url: "https://apps.apple.com/ng/app/trackfundx/id1625734570",
        },
        {
          name: "Download Android App",
          url:
            "https://play.google.com/store/apps/details?id=com.trackfinance.trackfundx",
        },

        {
          name: "Visit Website",
          url: "https://www.trackfundx.com/",
        },

        //  you can add extra buttons here.
      ],
    },

    // CardVest
    {
      image: require("./assets/images/cardVest.png"),
      projectName: "CardVest",
      projectDesc:
        "A platform for BUYING & SELLING GIFT CARDS at the best rates. Most profitable and customer-focused gift card trading app in Nigeria and Ghana.",
      footerLink: [
        {
          name: "Download IOS App",
          url: "https://apps.apple.com/lv/app/cardvest/id1598288580",
        },
        {
          name: "Download Android App",
          url:
            "https://play.google.com/store/apps/details?id=com.flipdigitals.cardvest&hl=en&gl=US&pli=1",
        },

        {
          name: "Use WebApp",
          url: "https://app.cardvest.ng/",
        },
        {
          name: "Visit Website",
          url: "https://cardvest.ng/",
        },
        //  you can add extra buttons here.
      ],
    },

    // Edufox
    {
      image: require("./assets/images/edufox.jpeg"),
      projectName: "Edufox",
      projectDesc:
        "Edufox is an innovative edutech platform dedicated to transforming the way we learn and teach in the digital age. Our mission is to while bridging the gap between education and technology.",
      footerLink: [
        {
          name: "Download Android App",
          url: "https://play.google.com/store/apps/details?id=com.edufox",
        },

        {
          name: "Visit Website",
          url: "https://edufox-web-5wasy3cpxq-uc.a.run.app/",
        },
        {
          name: "Download IOS App",
          url: "#",
        },
        //  you can add extra buttons here.
      ],
    },

    // Nevada bridge Tv

    {
      image: require("./assets/images/nevad_bridge_logo.png"),
      projectName: "Nevada Bridge Tv",
      projectDesc:
        "Nevada Bridge TV provides premium content for its subscribers in the most affordable and comfortable fashion. The company is a part of the tech community enhancing entertainment with technology.",
      footerLink: [
        {
          name: "Download IOS App",
          url: "https://apps.apple.com/us/app/nevada-bridge-tv/id1337580110",
        },
        {
          name: "Download Android App",
          url:
            "https://play.google.com/store/apps/details?id=com.enprohsoft.app.nevadabridgetv&hl=en&gl=US",
        },

        {
          name: "Visit Website",
          url: "https://nevadabridgetv.com/",
        },
        //  you can add extra buttons here.
      ],
    },

    // Nappr
    {
      image: require("./assets/images/nappr.png"),
      projectName: "Nappr",
      projectDesc:
        "Nappr is a marketplace that offers flexible 4 to 10-hour day rates at nearby hotels to help people rest and recharge to meet the demands of their unique schedules.",
      footerLink: [
        {
          name: "Download IOS App",
          url: "https://apps.apple.com/us/app/nappr/id1661113382",
        },
        {
          name: "Download Android App",
          url:
            "https://play.google.com/store/apps/details?id=com.napprmobile&utm_source=website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
        },

        {
          name: "Visit Website",
          url: "https://www.nappr.io/",
        },
        //  you can add extra buttons here.
      ],
    },

    //Deep Technology
    {
      image: require("./assets/images/logo.png"),
      projectName: "Deep Technology",
      projectDesc:
        "Deep Technology is a software development consultancy and engineering company that delivers cutting edge solutions for global organisations and technology startups. They have been helping companies and established brands reimagine their business through digitalisation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.verydeeptech.com/",
        },
      ],
    },

    // Tricklez
    {
      image: require("./assets/images/trickles.png"),
      projectName: "Tricklez",
      projectDesc:
        "Tricklez is the ultimate Social Network for professionals, business owners, recruiters, investors, and mentors to connect, share ideas and build products.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tricklez-waitlist.netlify.app/",
        },
        //  you can add extra buttons here.
      ],
    },

  
    // {
    //   image: require("./assets/images/iHub Logo/iHub Logo@2x.png"),
    //   projectName: "InventHub",
    //   projectDesc:
    //     "InventHub is a real-time social inventory which allows its users make use of available logistics functions in transfering products from manufacturer to customers.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "",
    //     },
    //   ],
    // },

    // {
    //   image: require("./assets/images/EMBED1.png"),
    //   projectName: "EmBED",
    //   projectDesc:
    //     "EmBED is a social learning platform for kids that uses gamification and cartoons to make learning more fun. It also provides access to quality education for all children.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "fa",
    //     },
    //     //  you can add extra buttons here.
    //   ],
    // },

  // {
    //   image: require("./assets/images/chike-trivia.png"),
    //   projectName: "Chike Trivia",
    //   projectDesc:
    //     "A credit building trivia game and digital banking platform that rewards users with cash, digital currency and a simplified banking experience",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "",
    //     },
    //   ],
    // },
    // {
    //   image: require("./assets/images/Ewitness.png"),
    //   projectName: "EWitnex",
    //   projectDesc:
    //     "Ewitnex is an Event Paperless Management Software Technology that allows event hosts or planners to create,follow up on and  witness events",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "",
    //     },
    //   ],
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Nigerian to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://medium.com/learnfactory-nigeria/reacts-javascript-extension-jsx-78f059492c54?sk=a70515842f4ef6fc93c506ef0304f037",
      title: "React’s Javascript Extension(JSX)",
      description:
        "Looking into Javascript XML, the Reactjs Javascript extension and why its so important in reactjs project development process",
    },
    {
      url:
        "https://medium.com/learnfactory-nigeria/the-golden-goals-app-bc5761d9a922",
      title: "How I Built My First React App",
      description:
        "How I built and deployed my first ReactJS app. The Golden Goals app is a todo app with the primary functionalities of a standard task tracker.",
    },
    {
      url:
        "https://blessedemoefe.medium.com/the-pomodoro-technique-4456de0d3426",
      title: "The Pomodoro Technique",
      description:
        "Exploring the Pomodoro technique, a time management method that helps to improve work habits by breaking down large tasks into small manageable chunks",
    },

    {
      url:
        "https://medium.com/learnfactory-nigeria/learn-git-and-github-as-a-beginner-a1e9e400a8e1?sk=fd3e8c5766aa322aa49b84ae16852514",
      title: "Learn Git and Github as a Beginner",
      description:
        "Git is a version control system created by Linus Torvalds in April 2005. A version-control is a system that records changes to a file or set of files over time so that you can recall specific versions later. Learn more by clicking on this card 🤓",
    },
    {
      url:
        "https://medium.com/learnfactory-nigeria/the-horizon-f97bc8fb65aa?sk=267873763cbf36b2248e459b8ec22880",
      title: "The Horizon",
      description:
        "A short story about how I graduated from the LearnFactory internship/Bootcamp after 6months of intense hard-core programming and Development",
    },
    {
      url:
        "https://medium.com/learnfactory-nigeria/an-introduction-to-reactjs-1f18b5a50385?sk=6d0a0f1f9ddc3df1837d7ac602268270",
      title: "An Introduction To Reactjs",
      description:
        " React, also known as ReactJS or React.js is an open-source JavaScript library for building responsive User Interfaces(UIs) for Web Applications. This powerful tool was created in 2011 when Jordan Walke, a software engineer at Facebook created the Javascript library called React.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "First Talk at Reactor, the first Reactjs Developer Community in Abia State, Nigeria"
  ),

  talks: [
    {
      title: "JSX: The Javascript Extension",
      image: require("./assets/images/Blessed.png"),
      subtitle: "A Guide to Understanding JSX",
      slides_url:
        "https://docs.google.com/presentation/d/1wDsLb0Qcqb5kjWwQx3eDlcyoPM5h_yaRrfAoI5KkO2Q/edit?usp=sharing",
      event_url: "https://photos.app.goo.gl/B8YsSqwroCwR3co96",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+2348124978076",
  email_address: "blessedemoefe1122334455@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "blemo_onoriode", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
