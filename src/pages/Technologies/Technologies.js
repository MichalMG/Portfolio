import TechIco from '../../components/Icons/TechIco/TechIco';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { CssSvg, GreenSockIco, HtmlSvg, JsSvg, ReactSvg, NodeSvg, SassSvg, BootstrapSvg, FirebaseSvg, MongoDbSvg, ExpressSvg, GitHubSvg, FigmaSvg } from '../../components/Icons/IcoSvg';
import useWebTitle from '../../hook/useWebTitle';

export default function Technologies() {

  const setTitle = useWebTitle();

  setTitle('Technologie');

  useEffect(() => {
    gsap.registerPlugin(CSSRulePlugin);

    const icons = document.querySelectorAll('.dev-ico-container > div');

    const tl = gsap.timeline();

    tl.to(icons, {
      duration: .6,
      filter: 'grayscale(0)',
      stagger: .3,
      delay: .3
    })


    icons.forEach(icon => {
      const shakeTl = gsap.timeline({
        paused: true,
      });

      shakeTl.to(icon, {
        duration: .065,
        x: '+=2.5px',
        yoyo: true,
        repeat: -1,
      })

      icon.addEventListener('mousemove', () => shakeTl.play());
      icon.addEventListener('mouseleave', () => shakeTl.paused(true));
    })

  })

  return (
    <div style={{ width: '100%' }}>
      <p className="text-center display-6 mb-3 border-bottom border-1 border-mygreen text-mygray pb-2">Poznane technologie
      </p>
      <div className="container">
        <div className="row justify-content-center dev-ico-container">

          {/* HTML start */}
          <TechIco>
            <HtmlSvg />
          </TechIco>
          {/* HTML end */}

          {/* CSS start */}
          <TechIco>
            <CssSvg />
          </TechIco>
          {/* CSS end */}

          {/* JS start */}
          <TechIco>
            <JsSvg />
          </TechIco>
          {/* JS end */}

          {/* React start */}
          <TechIco>
            <ReactSvg />
          </TechIco>
          {/* React end */}


          {/* Node.js start */}
          <TechIco>
            <NodeSvg />
          </TechIco>
          {/* Node.js end */}


          {/* SASS start */}
          <TechIco>
            <SassSvg />
          </TechIco>
          {/* SASS end */}


          {/* Bootstrap start */}
          <TechIco>
            <BootstrapSvg />
          </TechIco>
          {/* Bootstrap end */}


          {/* Firebase start */}
          <TechIco>
            <FirebaseSvg />
          </TechIco>
          {/* Firebase end */}


          {/* MongoDB start */}
          <TechIco>
            <MongoDbSvg />
          </TechIco>
          {/* MongoDB end */}


          {/* Express start */}
          <TechIco fill="#ffffff">
            <ExpressSvg />
          </TechIco>
          {/* Express end */}


          {/* Github start */}
          <TechIco>
            <GitHubSvg />
          </TechIco>
          {/* Github end */}


          {/* Figma start */}
          <TechIco>
            <FigmaSvg />
          </TechIco>
          {/* Figma end */}

          {/* GreenSock start */}
          <GreenSockIco />
          {/* GreenSock end */}

        </div>
      </div>
    </div>
  )
}