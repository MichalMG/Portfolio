import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Link } from "react-router-dom";


export default function GsapText() {

  const textWrapper = useRef();


  useEffect(() => {
    const text =
      'Od ponad roku uczę się kodować i poszukuję swojej pierwszej pracy jako frontend developer. Zaraszam do zapoznania się z projektami, a w przypadku zainteresowania współpracą do kontaktu.';
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(CSSRulePlugin);

    const elements = textWrapper.current;


    const cursor = elements.querySelector('.cursor');
    const welcomeHi = elements.querySelector('.welcome-hi');
    const welcomeBox = elements.querySelector('.welcome-box');
    const textContainer = elements.querySelector('.text');
    const buttonsContainer = elements.querySelectorAll('.buttons-container > a');

    // const btn1 = CSSRulePlugin.getRule(".buttons-container > a:nth-child(1)::before");
    // const btn2 = CSSRulePlugin.getRule(".buttons-container > a:nth-child(2)::before");
    // const btn3 = CSSRulePlugin.getRule(".buttons-container > a:nth-child(3)::before");

    let cursorTl = gsap.timeline({})

    cursorTl.set(cursor, {
      visibility: 'visible'
    })

    cursorTl.to(cursor, {
      visibility: 'visible',
      duration: .45,
      opacity: 0,
      repeat: -1,
      yoyo: true,
    })


    const hiTl = gsap.timeline();

    hiTl.set(welcomeBox, {
      width: 0,
      delay: .5,
      visibility: 'visible'
    })
      .set(welcomeHi, {
        opacity: 0,
        autoAlpha: 0,
        visibility: 'visible'
      })
      .set(buttonsContainer, {
        autoAlpha: 0,
        opacity: 0,
        visibility: 'visible'
      })


    hiTl.to(welcomeBox, {
      duration: 1,
      width: '100%'
    })
      .to(welcomeHi, {
        duration: 1,
        autoAlpha: 1,
        opacity: 1
      })
      .to(welcomeBox, {
        duration: 1,
        height: '100%'
      })
      .add('cursorBreak')
      .to(textContainer, {
        duration: 4,
        text: {
          value: text,
          speed: 1.5,
        },
        delay: .6,
        ease: 'none'
      })
      .to(buttonsContainer, {
        duration: 1,
        autoAlpha: 1,
        opacity: 1,
        delay: 2,
        ease: 'power1.out',
        stagger: .2
      })
      // .to([btn1, btn2, btn3], {
      //   duration: 2,
      //   top: "-75px",
      //   ease: 'power1.out',
      // })
      // .to(btn2, {
      //   duration: 1,
      //   left: "150px",
      // })
      // .to(btn3, {
      //   duration: 1,
      //   left: "150px",
      // })
      .add(cursorTl, "cursorBreak")
  }, [])

  return (
    <div ref={textWrapper} className="text-mygray mb-4 mb-lg-0">

      <h1>
        <span className="welcome">
          <span className="welcome-hi">Cześć !</span>
          <span className="welcome-box bg-myorange"></span>
        </span>
        <br />
        <span className="text fs-4"></span>
        <span className="cursor">_</span>
      </h1>

      <div className="buttons-container mt-4">
        <Link to="/technologies" className="btn btn-outline-myorange me-3">Technologie</Link>
        <Link to="/projects" className="btn btn-outline-myorange me-3">Projekty</Link>
        <Link to="/contact" className="btn btn-outline-myorange">Kontakt</Link>
      </div>

    </div>
  )
}