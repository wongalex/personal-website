// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Alex",
  middleName: "",
  lastName: "Wong",
  message: "Software Engineer | Tech Enthusiast ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/wongalex",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/alexswong/",
    },
  ],
};

// About Me SECTION
// If you want the About Me Section to show a profile picture you can fill the image Link either with:
//a) image in "editable-stuff" directory and use require("") to import here,
//      i.e: imageLink: require("../editable-stuff/alexwong.png")
//b) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: imageLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://drive.google.com/file/d/1QiDab2mkxMiECVyO4t9Y-pszE1H32ZZe/view?usp=sharing"
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profilepicscaled.jpg"),
  imageSize: 375,
  message:
      "Hi! My name is Alex Wong and I graduated from Harvard University in May 2022 with a Masters in Digital Media Design. I am passionate about software engineering and how we can make the world better through technology.",
  resume: "https://drive.google.com/file/d/1QiDab2mkxMiECVyO4t9Y-pszE1H32ZZe/view?usp=sharing",
};

// Experience SECTION
const experience = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Teaching Assistant',
      company: 'Columbia University',
      companyLogo: require('../assets/images/columbia.png'),
      date: 'September 2017 - June 2018',
    },
    {
      role: 'Lead Maintenance Technician',
      company: 'Boeing',
      companyLogo: require('../assets/images/boeing.png'),
      date: 'January 2013 – Present',
    },
  ]
}

// Education SECTION
const education = {
  show: true,
  heading: "Education",
  data: [
    {
      school: 'Harvard University',
      degree: 'Master of Liberal Arts in Digital Media Design',
      schoolLogo: require('../assets/images/harvard.png'),
      graduationDate: 'May 2022',
    },
    {
      school: 'Columbia University',
      degree: 'Master of Science in Computer Science',
      schoolLogo: require('../assets/images/columbia.png'),
      graduationDate: 'May 2019',
    },
    {
      school: 'University of Washington',
      degree: 'Bachelor of Science in Computer Science and Software Engineering',
      schoolLogo: require('../assets/images/uwashington.png'),
      graduationDate: 'August 2015',
    },
  ]
}

// Projects SECTION
// Setting up reposLength will automatically fetch that number of most recently updated projects.
// Set this field to 0 to show no repos or if you plan to show specific repos.
//      i.e: reposLength: 0,
// If you want to display specific projects, add the repository names:
//      i.e specificRepos: ["repository-1", "repo-2"],
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "wongalex", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["personal-website", "ib-algorithm-grade-bias", "JDAK"],
};

// Skills SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Python", value: 85 },
    { name: "C#", value: 80 },
    { name: "JavaScript", value: 85 },
    { name: "HTML/CSS", value: 85 },
    { name: "SQL", value: 75 },
    { name: "LaTeX", value: 75 },
    { name: "Git", value: 90 },
    { name: "Unix/Linux", value: 80 },
    { name: "AWS", value: 85 },
    { name: "React", value: 75 },
    { name: "Bootstrap", value: 80 },
    { name: "D3.js", value: 75 },
    { name: "Django", value: 75 },
  ],
  softSkills: [
    { name: "Customer Focused", value: 100 },
    { name: "Goal Oriented", value: 95 },
    { name: "Collaboration", value: 95 },
    { name: "Positivity", value: 100 },
    { name: "Project Management", value: 95 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 100 },
    { name: "Empathy", value: 95 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// Get In Touch SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
      "If you want to say hi, I am always up for a chat! Please feel free to email me at:",
  email: "alexwong@g.harvard.edu",
};

export { navBar, mainBody, about, experience, education, repos, skills, getInTouch };