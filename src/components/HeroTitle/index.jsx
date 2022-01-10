import './HeroTitle.scss'

function index({ text }) {
  return (
    <div>
      <h1
        className="heroTitle-header"
        style={{ marginTop: '80px' }}
        component="h1"
        variant="h2"
      >
        {text}
      </h1>
      <div className="styled-underline" />
    </div>
  )
}

export default index
