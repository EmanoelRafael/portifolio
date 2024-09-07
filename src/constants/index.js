import {
    data_analysis,
    backend,
    software_engineering,
    data_engineering,
    angular,
    java,
    spring,
    python,
    pandas,
    sql,
    git,
    docker,
    starbucks,
    tesla,
    secou,
    motorola,
    cin_ufpe,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analysis",
      icon: data_analysis,
    },
    {
      title: "Data Engineering",
      icon: data_engineering,
    },
    {
      title: "Software Engineering",
      icon: software_engineering,
    },
  ];
  
  const technologies = [
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "SQL",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Teacher Assistant of Data Structures and Algorithms ",
      company_name: "Cin-UFPE",
      icon: cin_ufpe,
      iconBg: "#383E56",
      date: "Feb 2022 - Jul 2022",
      points: [
        "Assist the teacher in preparing exercise lists.",
        "Prepare and teach tutoring classes.",
        "Correct students' exercise lists, checking for syntax and logic errors in the codes.",
        "Assist students in classes, clarifying possible doubts regarding algorithms and data structures while solving the exercise lists.",
      ],
    },
    {
      title: "Internship at the Cin-Motorola project",
      company_name: "Fade-UFPE",
      icon: motorola,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Jun 2024",
      points: [
        "I worked on the development of an audio test automation tool at the Cin-Motorola agreement.",
        "Performing validation tests for the tool.",
        "Analysis of the results of the validation tests, producing visual material for later sharing with the team.",
        "Development and maintenance of machine learning models for use in research.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Secou",
      description:
        "Secou is an application that consists in monitoring and informing the flooded points of a city.",
      tags: [
        {
          name: "ionic",
          color: "blue-text-gradient",
        },
        {
          name: "fastAPI",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
      ],
      image: secou,
      source_code_link: "https://github.com/saranicoly/secou",
    },
  ];
  
  export { services, technologies, experiences, projects };