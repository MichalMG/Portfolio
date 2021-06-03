
const InputText = (props) => {
  return (<div className="col-12 col-lg-6">
    <div className="mb-2">
      <label className="input__container2">
        <input type="text" value={props.value} onChange={(e) => props.inputHandler(e)} className="form-control text-mygray shadow-none" style={{ backgroundColor: "rgba(0,0,0,.5)", borderColor: 'rgba(0,0,0,.9)' }} required />
        <span className="input__container2-placeholder">{props.title}</span>
        <span className="input__container2-border"></span>
        {props.valid
          ? <><span className="input__container2-ico">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#198754" className="bi bi-check-lg" viewBox="0 0 16 16">
              <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
            </svg>
          </span>
            <div className="p-0 m-0 text-myorange input__container2-validation-message">{props.message}</div>
          </>
          : null}
        {props.message
          ? (<>
            <span className="input__container2-ico">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DC3545" className="bi bi-exclamation-lg" viewBox="0 0 16 16">
                <path d="M6.002 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm.195-12.01a1.81 1.81 0 1 1 3.602 0l-.701 7.015a1.105 1.105 0 0 1-2.2 0l-.7-7.015z" />
              </svg>
            </span>
            <div className="p-0 m-0 text-myorange input__container2-validation-message">{props.message}</div>
          </>
          )
          : null}
      </label>
    </div>
  </div>)
}

const Textarea = props => {
  return (
    <div className="col-12">
      <div className={`${props.message ? "mb-0" : "mb-3"}`}>
        <textarea value={props.value} onChange={(e) => props.inputHandler(e)} className={`form-control text-mygray shadow-none ${props.valid ? "is-valid" : ""}  ${props.message ? "is-invalid" : ""}`} name="" style={{ backgroundColor: "rgba(0,0,0,.5)", borderColor: 'rgba(0,0,0,.9)' }} placeholder={props.title} rows="6"></textarea>
        <div className="invalid-feedback p-0 m-0 text-myorange">{props.message}</div>
      </div>
    </div>
  )
}

export default function Input(props) {

  switch (props.type) {
    case 'text':
      return <InputText {...props} />
    case 'textarea':
      return <Textarea {...props} />
    default:
      return;
  }

}