const portfolioRouter = require("express").Router();

portfolioRouter.get("/", async (request, response) => {
  const data = {
    hero: {
      title: "Abraham Serrano Montiel",
      subtitle: "Frontend Developer",
      contentTitle:
        "Apasionado por las nuevas tecnologías que esta en constante aprendizaje y desarrollo.",
      url: "https://i.imgur.com/uyUHxN6.png",
    },
    skills: {
      titleSkill: "Skills",
      skillArray: [
        {
          id: "1",
          name: "HTML 5",
          img: "https://i.imgur.com/bhHa752.png",
        },
        {
          id: "2",
          name: "CSS 3",
          img: "https://i.imgur.com/46ysLUQ.png",
        },
        {
          id: "3",
          name: "JavaScript",
          img: "https://i.imgur.com/xRKdy9k.png",
        },
        {
          id: "4",
          name: "React",
          img: "https://i.imgur.com/DyRWEob.png",
        },
        {
          id: "5",
          name: "Next.js",
          img: "https://i.imgur.com/RyvWIzY.png",
        },
        {
          id: "6",
          name: "Git",
          img: "https://i.imgur.com/zRnSuqj.png",
        },
        {
          id: "7",
          name: "Node.js",
          img: "https://i.imgur.com/C71wMMX.png",
        },
        {
          id: "8",
          name: "GraphQL",
          img: "https://i.imgur.com/p7LSpIj.png",
        },
        {
          id: "9",
          name: "Mongo DB",
          img: "https://i.imgur.com/timopnw.png",
        },
        {
          id: "10",
          name: "Styled Components",
          img: "https://i.imgur.com/nMhFWAk.png",
        },
        {
          id: "11",
          name: "Redux",
          img: "https://res.cloudinary.com/dchfrwaei/image/upload/v1666284411/portfolio-api/redux_lcxzpy.svg",
        },
        {
          id: "12",
          name: "PostgreSQL",
          img: "https://res.cloudinary.com/dchfrwaei/image/upload/v1666284414/portfolio-api/postgresql_qkcjoi.svg",
        },
        {
          id: "13",
          name: "Material UI",
          img: "https://res.cloudinary.com/dchfrwaei/image/upload/v1666284408/portfolio-api/material-ui_f5izw5.svg",
        },
      ],
    },
    projects: {
      titleProjects: "Projects",
      projectsArray: [
        {
          id: "1",
          project: "MovieMon",
          img: "https://i.imgur.com/Tso1J5O.png",
          url: "https://movie-mon-frontend.now.sh/",
        },
        {
          id: "2",
          project: "Petgram",
          img: "https://i.imgur.com/AI9cZ5f.png",
          url: "https://petgram-abrahamserrano96.vercel.app/",
        },
        {
          id: "3",
          project: "Portfolio",
          img: "https://i.imgur.com/txHf1kj.png",
          url: "https://abrahamsm96.github.io/portfolio_abraham/",
        },
        {
          id: "4",
          project: "Psicoterapeuta",
          img: "https://i.imgur.com/a86z8hj.png",
          url: "https://psicoterapeutamagdalenamontiel.com/",
        },
        {
          id: "5",
          project: "Fizz Buzz",
          img: "https://i.imgur.com/ritBtJn.png",
          url: "https://abrahamsm96.github.io/fizz-buzz/",
        },
        {
          id: "6",
          project: "Rick and Morty",
          img: "https://i.imgur.com/baML0da.jpg",
          url: "https://abrahamsm96.github.io/RickAndMorty-React/#/",
        },
        {
          id: "7",
          project: "Portfolio NextJS",
          img: "https://i.imgur.com/EFq2a6O.png",
          url: "https://portfolio-next-gilt.vercel.app/",
        },
        {
          id: "8",
          project: "Swapi with Redux",
          img: "https://i.imgur.com/IP3421T.png",
          url: "https://swappi-test-liver-abrahamserrano96.vercel.app",
        },
        {
          id: "9",
          project: "Artist Searcher",
          img: "https://res.cloudinary.com/dchfrwaei/image/upload/v1666284400/portfolio-api/artist_hjoomk.png",
          url: "https://62e81ce614f9dc000815eef2--kaleidoscopic-torrone-dd97ea.netlify.app/",
        },
        {
          id: "10",
          project: "Configurador Hyundai 2020-2022",
          img: "https://res.cloudinary.com/dchfrwaei/image/upload/v1666284406/portfolio-api/configurador-hyundai-1_ckivui.png",
          url: "https://hmm-byo-stage.hyundaimotormex-leads.com/",
        },
        {
          id: "11",
          project: "Configurador Hyundai 2022",
          img: "https://res.cloudinary.com/dchfrwaei/image/upload/v1666284230/portfolio-api/configurador-hyundai-2_igbhfy.png",
          url: "https://hmm-byo2-stage.hyundaimotormex-leads.com/",
        },
        {
          id: "12",
          project: "Pokémon searcher",
          img: "https://res.cloudinary.com/dchfrwaei/image/upload/v1666284306/portfolio-api/pokemon-searcher_p6s6sq.png",
          url: "https://abrahamsm96.github.io/pokemon-search-background/",
        },
        {
          id: "13",
          project: "Devtter Twitter Clone",
          img: "https://res.cloudinary.com/dchfrwaei/image/upload/v1666284310/portfolio-api/devtter_kbfrkc.png",
          url: "https://devtter-abrahamserrano96.vercel.app/",
        },
        {
          id: "14",
          project: "Giffy searcher gifs",
          img: "https://res.cloudinary.com/dchfrwaei/image/upload/v1666284394/portfolio-api/giffy_fmrmnq.png",
          url: "https://giffy-phi.vercel.app/",
        },
      ],
    },
    about: {
      titleAbout: "Acerca de mi",
      subtitle: "Abraham Serrano Montiel",
      contentAbout:
        "Mi acercamiento al desarrollo web inicia por mi curiosidad por saber como funcionan las cosas, esa curiosidad crece con los años conociendo Javascript del lado del Frontend junto con React y del lado del Backend con NodeJS. Soy autodidacta en constante aprendizaje.",
    },
    contact: {
      titleContact: "Contacto",
      email: "AbrahamSerrano96@hotmail.com",
      url: "https://i.imgur.com/S9a4q9i.jpg",
    },
    social: {
      socialMedia: [
        {
          id: "1",
          name: "Linkedin",
          url: "https://www.linkedin.com/in/abraham-serrano-504b4b162/",
        },
        {
          id: "2",
          name: "Facebook",
          url: "https://www.facebook.com/abraham.s.montiel",
        },
        {
          id: "3",
          name: "Git Hub",
          url: "https://github.com/AbrahamSM96",
        },
      ],
      urlPortfolio:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/CV_AbrahamSerranoOct_compressed.pdf?alt=media&token=e1ffc838-01b9-4a17-8579-93fe4a463632",
    },
  };
  response.json(data);
});

module.exports = portfolioRouter;
