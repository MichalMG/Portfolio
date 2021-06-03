import GsapLogo from "../../components/Home/GsapLogo/GsapLogo";
import GsapText from "../../components/Home/GsapText/GsapText";
import useWebTitle from "../../hook/useWebTitle";

export default function Home() {

  const setTitle = useWebTitle();

  setTitle('Strona główna');

  return (
    <div className="container" >
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-12 col-lg-6">
          <GsapLogo />
        </div>
        <div className="col-12 col-lg-6 overflow-hidden">
          <GsapText />
        </div>
      </div>
    </div>
  )
}