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
    liveView: 'https://michalmg.github.io/Notes/',
    githubLink: 'https://github.com/MichalMG/Notes'
  }, {
    image: project2,
    imgInfo: 'projekt 2',
    technology: ['html', 'js', 'css', 'bootstrap', 'react'],
    title: 'Projekt fermy drobiu, sprzedaży jajek',
    description: 'Strona zaprojektowana dla firmy, która zajmuje się sprzedażą jajek. W pełni responsywna strona. Strona przygotowana do publikacji, została stworzona do portfolio. Stronę w całości zaprojektowałem i zakodowałem.',
    liveView: 'https://michalmg.github.io/Eggs',
    githubLink: 'https://github.com/MichalMG/Eggs'
  }, {
    image: project3,
    imgInfo: 'projekt 3',
    technology: ['html', 'js', 'css', 'bootstrap', 'react'],
    title: 'Projekt strony firmy budowlanej/Usługi koparko-ładowarką',
    description: 'Strona zaprojektowana dla firmy budowlanej/świadczącej usługi koparko ładowarką. W pełni responsywna strona, wraz z działającym formularzem kontaktowym opartym na EmailJS (dodatkowo formularz posiada walidację). Strona przygotowana do publikacji, została stworzona do portfolio. Stronę w całości zaprojektowałem i zakodowałem',
    liveView: 'https://michalmg.github.io/Appbud/',
    githubLink: 'https://github.com/MichalMG/Appbud'
  }, {
    image: project4,
    imgInfo: 'projekt 4',
    technology: ['html', 'js', 'css', 'bootstrap', 'react'],
    title: 'WeatherApp',
    description: 'Responsywna strona, która przedstawia aktualną prognozę pogody dla wyszukanego miasta wczytywaną z zewnętrznego API',
    liveView: 'https://michalmg.github.io/WeatherApp/',
    githubLink: 'https://github.com/MichalMG/WeatherApp'
  }]

  const projectsContainer = useRef();
  const mouse = useRef();
  const mouseContainer = useRef();

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
        if (window.scrollY >= (elements[i - 1].querySelector('div.card').offsetTop - 150)) {
          animationProjectHandler(elements[i], i);
        }
      }
    })

  }, [])
  useEffect(() => {
    const mouseScroll = mouse.current;
    const tl = gsap.timeline({ repeat: -1 });

    tl.set(mouseScroll, {
      transform: 'translateY(0)',
      opacity: 0,
    })

    tl.to(mouseScroll, {
      duration: .3,
      opacity: 1,
    })
      .fromTo(mouseScroll, {
        transform: 'translateY(0)',
      }, {
        duration: .75,
        transform: 'translateY(7px)',
        ease: 'none'
      })
      .to(mouseScroll, {
        duration: .3,
        opacity: 0,
      });
  }, [])


  return (
    <div style={{ width: '100%' }}>
      < p className="text-center display-6 mb-3 border-bottom border-1 border-mygreen text-mygray pb-2 position-relative" > Projekty
        <svg className="position-relative" style={{ left: '25px' }} fill="currentColor" version="1.1" id="Warstwa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="50px" height="50px" viewBox="0 0 16 16" enableBackground="new 0 0 16 16" xmlSpace="preserve">
          <path className="text-dark" id="mouse" d="M12,11c0,2.209-1.791,4-4,4s-4-1.791-4-4V5c0-2.209,1.791-4,4-4s4,1.791,4,4V11z M8,0C5.239,0,3,2.239,3,5v6
	c0,2.762,2.239,5,5,5c2.762,0,5-2.238,5-5V5C13,2.239,10.762,0,8,0z"/>
          <path ref={mouse} className="text-mygreen" id="scroll" d="M8,3c0.276,0,0.5,0.224,0.5,0.5v2C8.5,5.776,8.276,6,8,6S7.5,5.776,7.5,5.5v-2C7.5,3.224,7.724,3,8,3z" />
        </svg>
      </p>


      {/* < p className="text-center display-6 mb-3 border-bottom border-1 border-mygreen text-mygray pb-2" > Projekty      </p>

      <div ref={mouseContainer} style={{ position: 'fixed', left: '50%', bottom: '20%', zIndex: 1, transform: 'translateX(-50%)' }}>
        <div className="text-dark">
          <svg fill="currentColor" version="1.1" id="Warstwa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="70px" height="70px" viewBox="0 0 16 16" enableBackground="new 0 0 16 16" xmlSpace="preserve">
            <path id="mouse" d="M12,11c0,2.209-1.791,4-4,4s-4-1.791-4-4V5c0-2.209,1.791-4,4-4s4,1.791,4,4V11z M8,0C5.239,0,3,2.239,3,5v6
	c0,2.762,2.239,5,5,5c2.762,0,5-2.238,5-5V5C13,2.239,10.762,0,8,0z"/>
            <path ref={mouse} className="text-mygreen" id="scroll" d="M8,3c0.276,0,0.5,0.224,0.5,0.5v2C8.5,5.776,8.276,6,8,6S7.5,5.776,7.5,5.5v-2C7.5,3.224,7.724,3,8,3z" />
          </svg>
        </div>
      </div> */}
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