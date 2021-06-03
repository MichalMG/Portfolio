export default function Layout(props) {

  return (
    <div className="d-flex flex-column justify-content-center layout-wrapper" >
      <div>
        {props.header}
      </div>
      <div className="d-flex align-items-center justify-content-center" style={{ flexGrow: 1 }}>
        {props.content}
      </div>
      <div>
        {props.footer}
      </div>
    </div>
  )
}