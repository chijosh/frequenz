import './Button.scss'

const Button = ({ variant, text, onClick, type, icon, disabled }) => {
  return (
    <button type={type} className={`btn btn__${variant}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  )
}

export default Button
