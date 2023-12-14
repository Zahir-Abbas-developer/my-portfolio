/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zahir Abbas",
  title: "Hi all, I'm Zahir Abbas",
  subTitle: emoji(
    "A passionate Front End Software Developer 🚀 having an experience of building different Type Website  with JavaScript / Reactjs / Nextjs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1O0v0w-HevmQjySi-wQmriaC8UElZbsuQ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mliaqat",
  linkedin: "https://www.linkedin.com/in/liaqatshehzad/",
  gmail: "liaqattops@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/muhammadl.liaqat/",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web  applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React js",
      fontAwesomeClassname: "fab fa-react"
    },
 
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Nextjs",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "React Toolkit query",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Redux toolkit",
      fontAwesomeClassname: "fas fa-fire"
    },
 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Apcoms University (Affiliated With UET Taxila)",
      logo: require("./assets/images/numl.png"),
      subHeader: "Bachelor in Software Engineering",
      duration: "August 2018 - April 2022",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Enthusiastic  Software Engineer",
        "Passionate about Coding and Innovation in Front End Technology",
        "Problem-solving",
        "Eager to contribute to cutting-edge tech projects and make a positive impact."
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "React js / Redux /React Toolkit Query",
      progressPercentage: "85%"
    },
    {
      Stack: "Next js",
      progressPercentage: "75%"
    },
   
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "React JS Developer",
      company: "I Gen Solution",
      companylogo: require("./assets/images/igen.png"),
      date: "Jul 2021 - Apr 2022",
      bgColor: "#4E357B",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Used React, JavaScript, and related tech to create dynamic web pages for a better user experience.",
        "Made reusable components, optimized for faster load times, improving user experience.",
        "Collaborated with the backend team to integrate APIs for smooth data flow and consistency across the platform."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Orcalo Holding",
      companylogo: require("./assets/images/orcalo.png"),
      date: "Apr 2022 - Jun 2023",
      bgColor: "#2778A6",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developing web apps using HTML, CSS, Material UI, JavaScript, React, and Next.js.",
        "Created user-friendly interfaces, increasing  customer engagement and satisfaction.",
        "Collaborated with the backend team to integrate APIs for smooth data flow and consistency."
      ]
    },
    {
      role: "React / Next js Developer",
      company: "Super Tech",
      companylogo: require("./assets/images/ngn.png"),
      date: "Jun 2023 - Present",
      bgColor: "#2B945E",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Led a team in developing web apps using HTML, CSS, Tailwind, JavaScript, React, and Next.js.",
        "Consistently delivered high-quality, well-structured code.",
        "Created user-friendly interfaces, increasing  customer engagement and satisfaction.",
        "Collaborated with the backend team to integrate APIs for smooth data flow and consistency."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/mortgage.png"),
      projectName: "MortgageBasket",
      class: "one",
      projectDesc:
        "Mortgage Basket is a platform that helps the client to take a loan to purchase some real estate property or home. The borrower sets a rate and chooses the best  option. Also, several different roles are involved mainly System Admin, Mortgage Broker and Estate agent.",
      url: "https://app-dev.mortgagebasket.co.uk/home",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app-dev.mortgagebasket.co.uk/home"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shareMyDine.png"),
      projectName: "Share My Dine",
      class: "two",
      projectDesc:
        "The Vision of the product is to have the concept of sharing your meal at the kitchen owner's location/house and create a hospitable community by having the customers as your guest and inviting them for a meal as we develop an Acquaintanceship",
      url: "https://www.sharemydine.co.uk/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app-dev.sharemydine.co.uk/authentication/signin"
        }
      ]
    },
    {
      image: require("./assets/images/foster.png"),
      projectName: "Foster App",
      class: "three",
      projectDesc:
        "Foster care constitutes a system wherein a minor is placed under the care of a state-certified caregiver, often referred to as a foster parent, residing in a ward, group home, treatment facility, or a private residence.Alternatively, a recognized family member can assume this role.",
      url: "https://fosterapp.co.uk/home",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fosterapp.co.uk/home"
        }
      ]
    },
    {
      image: require("./assets/images/foster.png"),
      projectName: "Foster App",
      class: "four",
      projectDesc:
        "Foster care constitutes a system wherein a minor is placed under the care of a state-certified caregiver, often referred to as a foster parent, residing in a ward, group home, treatment facility, or a private residence.Alternatively, a recognized family member can assume this role.",
      url: "https://fosterapp.co.uk/home",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fosterapp.co.uk/home"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3499461014",
  email_address: "zahirr060@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  isHireable
};
