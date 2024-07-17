import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "aashirwadlighters",
    des: "KEEP YOUR SPARK ALIVE",
    img: "/ember.png",
    iconLists: ["/WordPress-logotype-wmark-white.png", "/elementor.jpeg"],
    link: "https://aashirwadlighters.com/",
  },
  {
    id: 2,
    title: "Gravity44",
    des: "To build scalable businesses, you need better platforms",
    img: "/GRAVITY44.png",
    iconLists: ["/WordPress-logotype-wmark-white.png", "/elementor.jpeg"],
    link: "https://gravity44.com/",
  },
  {
    id: 3,
    title: "Benz Infotech",
    des: "Topnotch It company Solution for your business",
    img: "/benz.png",
    iconLists: ["/WordPress-logotype-wmark-white.png", "/elementor.jpeg"],
    link: "https://benzsinfotech.in/",
  },
];

export const testimonials = [
  {
    quote:
      "Carrd made it incredibly easy to set up my portfolio. The interface is intuitive, and I had my site up and running in no time. My clients love the clean and professional look of my page.",
    name: "Vivek Radadiya",
    title: "Director of aashirwadlighters",
  },
  {
    quote:
      "Gravity44 is a versatile platform designed for creating professional and aesthetically pleasing portfolio websites. With a focus on customization and user experience, it offers a range of tools to help users build and maintain their online presence effectively.",
    name: "Shailes",
    title: "Director of Gravity44",
  },
  {
    quote:
      "The flexibility Weebly offers in terms of design and functionality is fantastic. It was straightforward to add my projects and update the site whenever I completed a new piece. My clients appreciate the clear and organized presentation of my work",
    name: "Bansi Patodiya",
    title: "Director of Benz Infotech",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Expert WordPress Developer with Custom Theme Experience",
    desc: "Developed and customized WordPress themes to meet client specifications and enhance user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Skilled Front-End Developer Specializing in Responsive Design",
    desc: "Utilized front-end frameworks such as Bootstrap and Foundation to streamline development processes.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Experienced in HTML, CSS, JavaScript, and Modern Front-End Frameworks",
    desc: "Applied best practices in front-end development to optimize performance and user experience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Proficient in WordPress Plugin Development and Integration",
    desc: "Maintained and updated existing plugins to ensure compatibility with the latest WordPress versions.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link : "https://github.com/nareshvaghela"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/naresh-vaghela-0456a2183/"
  },
];
