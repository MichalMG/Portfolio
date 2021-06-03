export default function ProjectIco(props) {

  return (
    <div className="col-2 col-sm-1">
      <div className="card border-0 " style={{ backgroundColor: 'transparent' }}>
        <div className="card-body p-2 d-flex align-items-center justify-content-center">
          <svg viewBox="0 0 128 128" style={{ width: 'auto', height: '50px' }}>
            {props.children}
          </svg>
        </div>
      </div>
    </div>
  )
}