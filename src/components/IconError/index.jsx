import WarningIcon from '@material-ui/icons/Warning'
import './iconError.scss'

const IconError = ({ text }) => {
  return (
    <span className="error-log">
      <WarningIcon variant="secondary" />
      {text}
    </span>
  )
}

export default IconError
