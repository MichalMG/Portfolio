import { Link } from 'react-router-dom'
import companyLogo from '../../assets/svg/logo.svg'
import ContactSection from './ContactSection/ContactSection'


export default function Footer() {

  return (
    <footer className="pt-4 border-2 border-top border-myorange text-mygray" style={{ backgroundColor: 'rgba(255,255,255,.075)' }}>
      <div className="container" >
        <div className="row justify-content-around">
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center order-2 order-md-1 my-3 my-md-2">
            <img src={companyLogo} alt="company logo" style={{ width: 'auto', height: '100px' }} />
          </div>

          <div className="col-12 col-md-4 align-items-center d-flex order-1 order-md-2">
            <p className="mb-0">Wszystkich zainteresowanych współpracą zapraszam do kontaktu przez <Link to="/contact" style={{ textDecoration: "none" }}>formularz kontaktowy</Link> lub mailowo</p>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center order-3">
            <div className="d-flex flex-column justify-content-around">

              <ContactSection contact="xxx, 30-442 Kraków">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </ContactSection>

              <ContactSection contact="+48 505 xxx xxx">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </ContactSection>

              <ContactSection contact="mmichalg74@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
              </ContactSection>

            </div>
          </div>

        </div>
      </div>
      <div className="mt-4 text-center" style={{ backgroundColor: 'black', color: "#555" }}>
        <p className="py-2 mb-0">Copyright by MG</p>
      </div>
    </footer>
  )
}