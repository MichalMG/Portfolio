import { BootstrapSvg, CssSvg, ExpressSvg, FigmaSvg, FirebaseSvg, GitHubSvg, GreenSockIcoProject, HtmlSvg, JsSvg, MongoDbSvg, NodeSvg, ReactSvg, SassSvg } from "../Icons/IcoSvg"
import ProjectIco from "../Icons/ProjectIco/ProjectIco"

export default function Project(props) {

  return (
    <div className="col-12" style={{ zIndex: 3 }}>
      <div className="card bg-dark text-mygray mb-4 overflow-hidden border-0 card-container" style={props.order === "2" ? { boxShadow: ".5px .5px 5px black, 10px 10px #3C8C03" } : { boxShadow: "-.5px .5px 5px black, -10px 10px #3C8C03" }}>
        <div className="row justify-content-between content-container">
          <div className={`col-12 col-sm-8 col-lg-5 img-container overflow-hidden ms-auto me-auto ms-lg-0 me-lg-0 ${props.order === "2" ? "order-lg-2" : "order-lg-1"}`}>
            <div className="after-box"></div>
            <div className="before-box"></div>
            <img src={props.image} className="card-img-top" alt={props.imgInfo} style={{ transformOrigin: '50% 50%', transform: 'scale(1.2)' }} />
          </div>
          <div className={`col-12 col-lg-7 d-flex flex-column justify-content-between align-items-between ${props.order === "2" ? "order-lg-1" : "order-lg-2"}`}>
            <div className="card-body d-flex flex-column justify-content-between pb-1" >
              <div>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
              </div>

              <div className="d-flex justify-content-around mt-3">

                {props.technology.map((technology, index) => {
                  if (technology === "bootstrap") {
                    return (
                      <ProjectIco key={index}>
                        <BootstrapSvg />
                      </ProjectIco>
                    )
                  } else if (technology === "html") {
                    return (
                      <ProjectIco key={index}>
                        <HtmlSvg />
                      </ProjectIco>
                    )
                  } else if (technology === "css") {
                    return (
                      <ProjectIco key={index}>
                        <CssSvg />
                      </ProjectIco>
                    )
                  } else if (technology === "node") {
                    return (
                      <ProjectIco key={index}>
                        <NodeSvg />
                      </ProjectIco>
                    )
                  } else if (technology === "sass") {
                    return (
                      <ProjectIco key={index}>
                        <SassSvg />
                      </ProjectIco>
                    )
                  } else if (technology === "firebase") {
                    return (
                      <ProjectIco key={index}>
                        <FirebaseSvg />
                      </ProjectIco>
                    )
                  } else if (technology === "mongodb") {
                    return (
                      <ProjectIco key={index}>
                        <MongoDbSvg />
                      </ProjectIco>
                    )
                  } else if (technology === "express") {
                    return (
                      <ProjectIco key={index}>
                        <ExpressSvg />
                      </ProjectIco>
                    )
                  } else if (technology === "react") {
                    return (
                      <ProjectIco key={index}>
                        <ReactSvg />
                      </ProjectIco>
                    )
                  } else if (technology === "js") {
                    return (
                      <ProjectIco key={index}>
                        <JsSvg />
                      </ProjectIco>
                    )
                  } else if (technology === "github") {
                    return (
                      <ProjectIco key={index}>
                        <GitHubSvg />
                      </ProjectIco>
                    )
                  } else if (technology === "figma") {
                    return (
                      <ProjectIco key={index}>
                        <FigmaSvg />
                      </ProjectIco>
                    )
                  } else if (technology === "greensock") {
                    return (
                      <GreenSockIcoProject key={index} />
                    )
                  }
                  return null;
                })}

              </div>


            </div>
            <div className="card-footer d-flex justify-content-between" style={{ flexGrow: 0 }}>
              <a href={props.liveView} className="btn btn-outline-mygray">Podgląd strony</a>
              <a href={props.githubLink} className="btn btn-outline-mygray">GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}