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

          <TechIco>
            <HtmlSvg />
          </TechIco>

          <TechIco>
            <CssSvg />
          </TechIco>

          <TechIco>
            <JsSvg />
          </TechIco>

          <TechIco>
            <ReactSvg />
          </TechIco>


          <TechIco>
            <NodeSvg />
          </TechIco>


          <TechIco>
            <SassSvg />
          </TechIco>


          <TechIco>
            <BootstrapSvg />
          </TechIco>


          <TechIco>
            <FirebaseSvg />
          </TechIco>


          <TechIco>
            <MongoDbSvg />
          </TechIco>


          <TechIco fill="#ffffff">
            <ExpressSvg />
          </TechIco>


          <TechIco>
            <GitHubSvg />
          </TechIco>


          <TechIco>
            <FigmaSvg />
          </TechIco>

          <GreenSockIco />

        </div>
      </div>
    </div>
  )
}