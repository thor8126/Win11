import {
  JavascriptOriginal,
  PythonOriginal,
  Html5Original,
  Css3Original,
  ExpressOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  BootstrapPlain,
  NodejsOriginal,
  MongodbPlain,
  PostmanPlain,
  CPlain,
  DjangoPlain,
  MysqlOriginalWordmark,
  PostgresqlOriginal,
  PhotoshopOriginal,
  FigmaOriginal,
  BlenderOriginal,
} from "devicons-react";

// Constants
const githubLink = "https://github.com/thor8126";

// Profile Description
export const profileDescription = [
  "Hello, I'm Lakhvinder Singh, an experienced front-end web developer specializing in crafting seamless and dynamic user experiences. With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, I bring innovative designs to life and ensure they perform flawlessly across all devices. Let's create exceptional web experiences together!",
];

// Work Experience Template
export const workExperienceTemplate = [
  {
    key: 1,
    company: "Coding Ninjas",
    description: [
      "Teaching Assistant", // Add description points here
    ],
    duration: "12 months", // Add duration here
    designation: "", // Add designation here
    type: "work",
  },
];

// GitHub Repositories
export const githubRepos = [
  {
    name: "Windows 11",
    techUsed: ["React.js", "TailwindCSS"],
    description: "Uncover deeper insights into my journey and capabilities.",
    githubLink: `${githubLink}/Win11`,
  },
  {
    name: "Shopsee - Ecommerce Store",
    techUsed: ["ReactJS", "Tailwind CSS"],
    description:
      "A cutting-edge web application that increased user engagement by 40% and decreased bounce rate by 25%. Features include responsive design, reliable API integration, instant product updates, and quick cart additions, offering a seamless user experience with fluent Web UI and scalable design.",
    githubLink: `${githubLink}/Shopsee`,
    completionDate: "March 2024",
  },
  {
    name: "Placement Cell",
    techUsed: ["Node.js", "Bootstrap", "Java", "CSS"],
    description:
      "A web application designed to maintain a database of all student interviews. It includes security features for employee sign-in and sign-up, helping streamline the placement process.",
    githubLink: `${githubLink}/Placement-Cell`,
  },
  {
    name: "Spotify-Clone",
    techUsed: ["JavaScript", "MongoDB", "Node.js", "Handlebars"],
    description:
      "An advanced music streaming platform that enhances user experience and interaction. Users can search and play any song with ease, log in, and add songs to their favorites for personalized music collections.",
    githubLink: `${githubLink}/Spotify-Clone`,
    completionDate: "February 2023 - January 2024",
  },
  {
    name: "iPod-mini",
    techUsed: ["React", "CSS", "JavaScript"],
    description:
      "An interactive digital music player that delivers intuitive navigation and control for all songs. Users can navigate using the Virtual Click Wheel, enjoying music playback and control at their fingertips, replicating the classic iPod experience.",
    githubLink: `${githubLink}/iPod-mini`,
    completionDate: "December 2023",
  },
];

// Education Experience
export const educationExperience = [
  {
    key: 1,
    institution: "Kumaun University, Uttarakhand",
    graduation: "Jan 2022",
    degree: "UG",
    type: "education",
  },
  {
    key: 2,
    institution: "Gurukul Academy",
    graduation: "Aug 2018",
    degree: "XII",
    type: "education",
  },
];

const iconSize = 15;
const iconClass = "mx-auto";

export const skills = [
  {
    key: 1,
    name: "Python",
    type: "language",
    icon: PythonOriginal ? (
      <PythonOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 2,
    name: "JavaScript",
    type: "language",
    icon: JavascriptOriginal ? (
      <JavascriptOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 3,
    name: "HTML",
    type: "language",
    icon: Html5Original ? (
      <Html5Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 4,
    name: "CSS",
    type: "language",
    icon: Css3Original ? (
      <Css3Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 5,
    name: "React",
    type: "framework",
    icon: ReactOriginal ? (
      <ReactOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 6,
    name: "Next.js",
    type: "framework",
    icon: NextjsOriginal ? (
      <NextjsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 7,
    name: "TailwindCSS",
    type: "framework",
    icon: TailwindcssOriginal ? (
      <TailwindcssOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 8,
    name: "Bootstrap",
    type: "framework",
    icon: BootstrapPlain ? (
      <BootstrapPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 9,
    name: "Node.JS",
    type: "framework",
    icon: NodejsOriginal ? (
      <NodejsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 10,
    name: "MongoDB",
    type: "database",
    icon: MongodbPlain ? (
      <MongodbPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 11,
    name: "Postman",
    type: "tool",
    icon: PostmanPlain ? (
      <PostmanPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 12,
    name: "C",
    type: "language",
    icon: CPlain ? <CPlain className={iconClass} size={iconSize} /> : null,
  },
  {
    key: 13,
    name: "Express",
    type: "framework",
    icon: ExpressOriginal ? (
      <ExpressOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 14,
    name: "Django",
    type: "framework",
    icon: DjangoPlain ? (
      <DjangoPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 15,
    name: "MySQL",
    type: "database",
    icon: MysqlOriginalWordmark ? (
      <MysqlOriginalWordmark className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 16,
    name: "PostgreSQL",
    type: "database",
    icon: PostgresqlOriginal ? (
      <PostgresqlOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 17,
    name: "Blender",
    type: "tool",
    icon: BlenderOriginal ? (
      <BlenderOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 18,
    name: "Photoshop",
    type: "tool",
    icon: PhotoshopOriginal ? (
      <PhotoshopOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 19,
    name: "Figma",
    type: "tool",
    icon: FigmaOriginal ? (
      <FigmaOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
];

const appsData = [
  {
    id: 1,
    name: "Google Chrome",
    icon: "/images/apps/chrome.png",
    action: "browser",
    size: "w-18 h-18",
  },
  {
    id: 2,
    name: "About Me",
    icon: "/images/apps/folder.png",
    action: "explorer",
    size: "w-18 h-18",
  },
  {
    id: 3,
    name: "Recycle Bin",
    icon: "/images/apps/recyclebin.png",
    action: "recycle",
    size: "w-14 h-14",
  },
  {
    id: 4,
    name: "Microsoft Edge",
    icon: "/images/apps/edge.png",
    action: "browser",
    size: "w-11 h-11",
  },
  {
    id: 5,
    name: "Calculator",
    icon: "/images/apps/calculator.png",
    action: "calculator",
    size: "w-11 h-11",
  },
  {
    id: 6,
    name: "VS Code",
    icon: "https://laaouatni.github.io/w11CSS/images/vs-code.ico",
    action: "vscode",
    size: "w-8 h-8",
  },
  {
    id: 7,
    name: "Emoji TicTacToe",
    icon: "https://raw.githubusercontent.com/MishanPoudel/Emoji-TicTacToe/main/public/favicon.ico",
    action: "app",
    subAction: "emoji",
    size: "w-10 h-10",
  },
  {
    id: 8,
    name: "Spotify",
    icon: "https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png",
    action: "app",
    subAction: "spotify",
    size: "w-10 h-10",
  },
];

// Export default data
export default appsData;

// Social Media Links
export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/lakhvinder1203/",
  github: githubLink,
};
