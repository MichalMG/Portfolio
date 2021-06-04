import { useEffect, useRef } from 'react';
import project1 from '../../assets/strona1.jpg';
import project2 from '../../assets/strona2.jpg';
import project3 from '../../assets/strona3.jpg';
import project4 from '../../assets/strona4.jpg';
import Project from "../../components/Project/Project";
import { gsap } from 'gsap'
import useWebTitle from '../../hook/useWebTitle';


export default function Projects() {

  const setTitle = useWebTitle();

  setTitle('Projekty');

  const allProjects = [{
    image: project1,
    imgInfo: 'projekt 1',
    technology: ['html', 'js', 'css', 'bootstrap', 'react', 'firebase'],
    title: 'NotesApp',
    description: 'W pełni responsywna strona, która pozwala nam na rejestracje, logowanie, edycję oraz usuwanie użytkownika, sesja użytkownika jest zapisana w localstorage oraz trwa 60 minut. W aplikacji można dodawać, edytować usuwać oraz personalizować notatki, które są przypisane do aktualnie zalogowanego użytkownika (obsługa- firebase)',
    liveView: 'https://www.onet.pl',
    githubLink: 'https://www.onet.pl'
  }, {
    image: project2,
    imgInfo: 'projekt 2',
    technology: ['html', 'js', 'css', 'bootstrap', 'react'],
    title: 'Projekt fermy drobiu, sprzedaży jajek',
    description: 'Strona zaprojektowana dla firmy, która zajmuje się sprzedażą jajek. Strona responsywna, w calości zaprojektowana i wykonana, wypełniona przykładowym tekstem.',
    liveView: 'https://www.onet.pl',
    githubLink: 'https://www.onet.pl'
  }, {
    image: project3,
    imgInfo: 'projekt 3',
    technology: ['html', 'js', 'css', 'bootstrap', 'react'],
    title: 'Projekt firmy budowlanej/Usługi koparko-ładowarką',
    description: 'Strona zaprojektowana dla firmy świadczącej usługi koparko ładowarką oraz usługi budowlane. Projekt został oparty na Reacie, w pełni responsywny..',
    liveView: 'https://www.onet.pl',
    githubLink: 'https://www.onet.pl'
  }, {
    image: project4,
    imgInfo: 'projekt 4',
    technology: ['html', 'js', 'css', 'bootstrap', 'react'],
    title: 'WeatherApp',
    description: 'Responsywna strona, która przedstawia aktualną prognozę pogody dla wyszukanego miasta, która jest wczytywana z zewnętrznego API',
    liveView: 'https://www.onet.pl',
    githubLink: 'https://www.onet.pl'
  }]

  const projectsContainer = useRef();

  useEffect(() => {

    const elements = projectsContainer.current.children;

    const elementsActive = [];

    const animationProjectHandler = (element, id) => {

      if (elementsActive.includes(id)) return;


      const container = element.querySelector('.card-container');
      const containerIfo = element.querySelector('.content-container');

      const containerImgAft = element.querySelector('.img-container>.after-box');
      const containerImgBef = element.querySelector('.img-container>.before-box');

      const tl = gsap.timeline();

      tl.to(container, {
        duration: 1.5,
        scaleX: 1,
        ease: "power2.inOut"
      })
        .to(containerIfo, {
          duration: 0.75,
          opacity: 1,
          delay: .4,
          ease: "none"
        })
        .add("boxy")
        .to(containerImgAft, {
          duration: .75,
          transformOrigin: '0 0',
          right: '-100%',
          ease: 'none'
        })
        .to(containerImgBef, {
          duration: .75,
          transformOrigin: '100% 100%',
          left: '-100%',
          ease: 'none'
        }, "boxy")

      elementsActive.push(id);
    }

    animationProjectHandler(elements[0], 0);

    document.addEventListener("scroll", () => {
      for (let i = 1; i < elements.length; i++) {
        if (window.scrollY >= (elements[i - 1].querySelector('div.card').offsetTop)) {
          animationProjectHandler(elements[i], i);
        }
      }
    })

  }, [])


  return (
    <div style={{ width: '100%' }}>
      < p className="text-center display-6 mb-3 border-bottom border-1 border-mygreen text-mygray pb-2" > Projekty      </p>
      <div className="container">
        <div ref={projectsContainer} className="row" >

          {allProjects.map((proj, index) => {
            if (((index + 1) % 2) === 0) {
              return <Project key={index} {...proj} order="2" />
            } else return <Project key={index} {...proj} />
          })}

        </div>
      </div>
    </div>
  )
}