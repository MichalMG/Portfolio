import { useEffect } from 'react';
import { gsap } from "gsap";
import { ReactComponent as LogoSvg } from '../../../assets/svg/logo1.svg';



export default function GsapLogo() {


  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    const tl = gsap.timeline({
      delay: 1
    });

    tl.set(boxes, {
      transformOrigin: '50% 50%',
      opacity: 0,
      y: 0,
      visibility: 'visible'
    });
    tl.to(boxes[0], {
      duration: 1,
      opacity: 1,
    })
      .add('slideBox')
      .to(boxes[1], {
        duration: 1,
        opacity: 1,
        y: 35,
        x: -35,
        delay: .5
      })
      .to(boxes[2], {
        duration: 1,
        opacity: 1,
        y: -35,
        x: 35,
        delay: .5,
      }, "slideBox")
      .add("positionBox")
      .to(boxes[1], {
        duration: 1,
        x: "-=150px",
        y: 0,
        backgroundColor: 'black',
      })
      .to(boxes[2], {
        duration: 1,
        x: "+=150px",
        y: 0,
        backgroundColor: 'black',
      }, "positionBox")
      .to(boxes[0], {
        duration: 1,
        backgroundColor: 'white',
        rotate: '45deg',
      })
      .to([boxes[1], boxes[2]], {
        duration: 1,
        borderColor: 'transparent',
      }, 'positionBox')
      .to(boxes[3], {
        duration: .01,
        scale: 0
      })
      .to([boxes[1], boxes[2]], {
        duration: 2,
        scale: 1,
        x: 0,
        y: 0,
        delay: .3
      })
      .add('logoStart')
      .to(boxes[3], {
        duration: 1,
        opacity: 1,
        scale: 1
      })
      .to(boxes[0], {
        duration: 1.5,
        backgroundColor: '#0E3240',
        borderColor: '#3C8C03'
      }, 'logoStart')
      .to(boxes, {
        duration: 1,
        scale: 1.5
      }, 'logoStart')
  }, [])


  return (
    <div className="box-container">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box logo">
        <LogoSvg />
      </div>
    </div>
  )
}