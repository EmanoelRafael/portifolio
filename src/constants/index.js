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
    secou,
    motorola,
    cin_ufpe,
    meusFlashcards,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title_en: "About",
      title_pt: "Sobre",
    },
    {
      id: "work",
      title_en: "Work",
      title_pt: "Trabalhos",
    },
    {
      id: "contact",
      title_en: "Contact",
      title_pt: "Contato",
    },
  ];
  
  const services = [
    {
      title_en: "Backend Developer",
      title_pt: "Desenvolvedor Backend",
      icon: backend,
    },
    {
      title_en: "Data Analysis",
      title_pt: "Análise de Dados",
      icon: data_analysis,
    },
    {
      title_en: "Data Engineering",
      title_pt: "Engenharia de Dados",
      icon: data_engineering,
    },
    {
      title_en: "Software Engineering",
      title_pt: "Engenharia de Software",
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
      title_en: "Teacher Assistant of Data Structures and Algorithms ",
      title_pt: "Monitor da Disciplina de Estruturas de Dados e Algoritmos",
      company_name: "Cin-UFPE",
      icon: cin_ufpe,
      iconBg: "#383E56",
      date_en: "Feb 2022 - Jul 2022",
      date_pt: "Fev 2022 - Jul 2022",
      points_en: [
        "Assist the teacher in preparing exercise lists.",
        "Prepare and teach tutoring classes.",
        "Correct students' exercise lists, checking for syntax and logic errors in the codes.",
        "Assist students in classes, clarifying possible doubts regarding algorithms and data structures while solving the exercise lists.",
      ],
      points_pt: [
        "Auxiliar o professor na elaboração das listas de exercícios.",
        "Elaborar e ministrar aulas de monitoria.",
        "Corrigir as listas de exercícios dos alunos, verificando erros de sintaxe e lógica nos códigos.",
        "Auxiliar os alunos nas aulas, esclarecendo possíveis dúvidas quanto aos algoritmos e as estruturas de dados durante a resolução das listas de exercícios.",
      ],
    },
    {
      title_en: "Internship at the Cin-Motorola project",
      title_pt: "Estágio no Projeto cin-motorola",
      company_name: "Fade-UFPE",
      icon: motorola,
      iconBg: "#E6DEDD",
      date_en: "Jun 2022 - Jun 2024",
      date_pt: "Jun 2022 - Jun 2024",
      points_en: [
        "I worked on the development of an audio test automation tool at the Cin-Motorola agreement.",
        "Performing validation tests for the tool.",
        "Analysis of the results of the validation tests, producing visual material for later sharing with the team.",
        "Development and maintenance of machine learning models for use in research.",
      ],
      points_pt: [
        "Trabalhei no desenvolvimento de uma ferramenta de automação de testes de áudios no convênio Cin-Motorola.",
        "Realização de testes de validação da ferramenta.",
        "Análise dos resultados dos testes de validação, produzindo material visual para posterior compartilhamento com a equipe.",
        "Desenvolvimento e manutenção de modelos de aprendizagem de máquina para utilização na pesquisa.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Secou",
      description_en:
        "Secou is an application that consists in monitoring and informing the flooded points of a city.",
      description_pt:
        "Secou é uma aplicação que consiste no monitoramento e informação dos pontos de alagamento de uma cidade.",
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
    {
      name: "My Flashcards",
      description_en:
        "My Flashcards is an easy way to story flashcards grouping by tags, making the study process much easier.",
      description_pt:
        "Meus Flashcards é uma maneira fácil de armazenar flashcards, agupando-os por tags, tornando o estudo mais fácil.",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
      ],
      image: meusFlashcards,
      source_code_link: "https://github.com/EmanoelRafael/flashcards.git",
    }
  ];
  
  export { services, technologies, experiences, projects };