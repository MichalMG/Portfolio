import { useState } from "react";
import axios from 'axios';
import bgContact from '../../assets/bg_contact.jpg'
import GsapOffice from "../../components/Contact/GsapOffice/GsapOffice";
import validation from "../../helpers/validation";
import Input from "../../components/Contact/Input/Input";
import useWebTitle from "../../hook/useWebTitle";

const API_URL = 'https://api.emailjs.com/api/v1.0/email/send';

export default function Contact() {

  const setTitle = useWebTitle();

  setTitle('Kontakt');

  const [loading, setLoading] = useState(false);
  const [emailInfo, setEmailInfo] = useState("");

  const [form, setForm] = useState({
    name: {
      value: "",
      rules: ['required', 'name'],
      valid: false,
      message: ""
    },
    email: {
      value: "",
      rules: ['required', 'email'],
      valid: false,
      message: ""
    },
    textarea: {
      value: "",
      rules: ['required'],
      valid: false,
      message: ""
    }
  })

  const formIsValid = Object.values(form).filter(el => el.valid === true).length === 3 ? false : true;

  const formValueHandler = (event, type) => {
    const value = event.target.value;
    const resValidation = validation(value, form[type].rules);
    setForm({ ...form, [type]: { ...form[type], value, valid: !resValidation, message: resValidation } })
  }

  const formHandler = async (e) => {
    e.preventDefault();
    if (formIsValid) return;
    setLoading(true);


    const data = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_USER_ID,
      template_params: {
        'username': form.name.value,
        'message': form.textarea.value,
        'reply_to': form.email.value,
        'my_name': "Michal"
      }
    }

    const send = await axios.post(API_URL, data)

    if (send.status !== 200) {
      setLoading(false);
      setEmailInfo("Niestety nie udało się wysłać wiadomości. Spróbuj jeszcze raz");
    } else {
      setLoading(false);
      setEmailInfo("Wiadomość została wysłana");
      setForm({
        name: {
          value: "",
          rules: ['required', 'name'],
          valid: false,
          message: ""
        },
        email: {
          value: "",
          rules: ['required', 'email'],
          valid: false,
          message: ""
        },
        textarea: {
          value: "",
          rules: ['required'],
          valid: false,
          message: ""
        }
      })
    }
  }


  return (
    <div style={{ width: '100%' }}>
      < p className="text-center display-6 mb-3 border-bottom border-1 border-mygreen text-mygray pb-2" > Kontakt </p>
      <div className="position-relative">
        <div className="position-absolute" style={{ width: '100%', height: '100%', top: 0, left: 0, background: `url(${bgContact})`, backgroundPosition: 'center', backgroundSize: 'cover', filter: 'grayscale(0)', zIndex: -1 }}></div>
        <div className="position-absolute" style={{ width: '100%', height: '100%', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,.6)', zIndex: -1 }}></div>
        <div className="container text-light">

          <div className="row my-4 py-3 align-items-center justify-content-center" >

            <div className="col-12 col-sm-6 d-flex justify-content-center mb-4" >
              <GsapOffice />
            </div>

            <div className="col-12 col-sm-6 d-flex flex-column">
              <form onSubmit={formHandler}>
                <div className="row">
                  <div>{emailInfo ? (<div className="col-12 alert alert-warning">{emailInfo}</div>) : null}</div>

                  <Input
                    value={form.name.value}
                    title='Imię'
                    valid={form.name.valid}
                    message={form.name.message}
                    type="text"
                    inputHandler={e => formValueHandler(e, "name")}
                  />

                  <Input
                    value={form.email.value}
                    title='Email'
                    valid={form.email.valid}
                    message={form.email.message}
                    type="text"
                    inputHandler={e => formValueHandler(e, "email")}
                  />

                  <Input
                    message={form.textarea.message}
                    value={form.textarea.value}
                    inputHandler={e => formValueHandler(e, "textarea")}
                    valid={form.textarea.valid}
                    type="textarea"
                    title="Wiadomość"
                  />

                </div>
                {loading
                  ? (<button className="btn btn-outline-myorange w-100 mt-2" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Wysyłanie</button>)
                  : <button type="submit" className="btn btn-outline-myorange w-100 mt-2" disabled={formIsValid}>Wyślij</button>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d275544.887684665!2d19.947768765440813!3d50.086295505497894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1622227227317!5m2!1spl!2spl" style={{ border: '0', width: '100%', height: '35vh' }} title="map" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  )
}