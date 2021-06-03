export default function TechIco(props) {


  return (
    <>
      <div className="col-4 col-md-2" style={{ filter: 'grayscale(1)' }}>
        <div className="card border-0" style={{ backgroundColor: 'transparent' }}>
          <div className="card-body d-flex align-items-center justify-content-center">
            <svg fill={props.fill ? props.fill : ''} viewBox="0 0 128 128" style={{ width: 'auto', height: '150px' }}>
              {props.children}
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}