export default function ContactSection(props) {

  return (
    <div className="d-flex align-items-center justify-content-start py-2 py-lg-0">
      <span className="text-mygreen">
        {props.children}
      </span>
      <p className="mb-0 ms-3">{props.contact}</p>
    </div>
  )
}