const portfolioRouter = require('express').Router()

portfolioRouter.get('/', async (request, response) => {
  const data = {
    hero: {
      title: 'Abraham Serrano Montiel',
      subtitle: 'Frontend Developer',
      contentTitle:
        'Apasionado por las nuevas tecnologías que esta en constante aprendizaje y desarrollo.',
      url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/LOGO-ASMZOOM.png?alt=media&token=4e08e6e5-6783-4420-8b72-62e774a3a7d1'
    },
    skills: {
      titleSkill: 'Skills',
      skillArray: [
        {
          id: '1',
          name: 'HTML 5',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/icon-html.png?alt=media&token=3082c40b-6937-4d62-ab8a-0edef5a591c9'
        },
        {
          id: '2',
          name: 'CSS 3',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/icon-css3.png?alt=media&token=5fb38a64-b19d-49cc-baae-2725b6336876'
        },
        {
          id: '3',
          name: 'JavaScript',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/icon-js.png?alt=media&token=19150664-1305-46a1-84e9-8dc4f8f8d6d2'
        },
        {
          id: '4',
          name: 'React',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/icon-react.png?alt=media&token=d5766952-3090-4543-8175-36c9d3fdfe1e'
        },
        {
          id: '5',
          name: 'Next.js',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/next.png?alt=media&token=38b8f116-a5fc-4413-8459-83699c725625'
        },
        {
          id: '6',
          name: 'Git',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/icon-git.png?alt=media&token=addfc9c3-2b46-403d-9181-e58d0ae541a4'
        },
        {
          id: '7',
          name: 'Node.js',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/icon-node.png?alt=media&token=746bf621-6381-400f-8f92-29f3c30d2f56'
        }
      ]
    },
    projects: {
      titleProjects: 'Projects',
      projectsArray: [
        {
          id: '1',
          project: 'MovieMon',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/moviemon.png?alt=media&token=1c9e4051-b372-4e7c-aadd-6959c4966a3a',
          url: 'https://movie-mon-frontend.now.sh/'
        },
        {
          id: '2',
          project: 'Petgram',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/petgram.png?alt=media&token=89223e86-f620-4d06-8b14-dff95d942e0c',
          url: 'https://petgram-abrahamserrano96.vercel.app/'
        },
        {
          id: '3',
          project: 'Portfolio',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/portfolio.png?alt=media&token=dd68328a-52b7-42fb-bce5-4242e6d4c093',
          url: 'https://www.abrahamsm.com/'
        },
        {
          id: '4',
          project: 'Psicoterapeuta',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/react.png?alt=media&token=28e6ab16-09af-4e93-8f2f-dd4d51e0c5c9',
          url: 'https://psicoterapeutamagdalenamontiel.com/'
        },
        {
          id: '5',
          project: 'Fizz Buzz',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/fizzbuzz.png?alt=media&token=b2522b49-c292-4275-9e64-dcd3cd8e7cf4',
          url: 'https://abrahamsm96.github.io/fizz-buzz/'
        },
        {
          id: '6',
          project: 'Rick and Morty',
          img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/rick%20and%20morty.png?alt=media&token=dffe18dd-cb1c-4736-b6f3-6771f56ed252',
          url: 'https://abrahamsm96.github.io/RickAndMorty-React/#/'
        }
      ]
    },
    about: {
      titleAbout: 'Acerca de mi',
      subtitle: 'Abraham Serrano Montiel',
      contentAbout:
        'Mi acercamiento al desarrollo web inicia por mi curiosidad por saber como funcionan las cosas, esa curiosidad crece con los años conociendo Javascript del lado del Frontend junto con React y del lado del Backend con NodeJS. Soy autodidacta en constante aprendizaje.'
    },
    contact: {
      titleContact: 'Contacto',
      email: 'AbrahamSerrano96@hotmail.com',
      url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/about-me.jpeg?alt=media&token=211a7616-b975-4a18-a84b-fd52c045fc9e'
    },
    social: {
      socialMedia: [
        {
          id: '1',
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/abraham-serrano-504b4b162/'
        },
        {
          id: '2',
          name: 'Facebook',
          url: 'https://www.facebook.com/abraham.s.montiel'
        },
        {
          id: '3',
          name: 'Git Hub',
          url: 'https://github.com/AbrahamSM96'
        }
      ],
      urlPortfolio:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-6f7e5.appspot.com/o/CV_AbrahamSerrano_com.pdf?alt=media&token=b979e1c8-ad83-4aae-a1e1-adf0fc2ce0a1'
    }
  }
  response.json(data)
})

module.exports = portfolioRouter
