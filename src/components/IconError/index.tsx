import { FC } from 'react';
import WarningIcon from '@material-ui/icons/Warning'
import './iconError.scss'

interface IconProp {
  text: string
}

const IconError: FC<IconProp> = ({ text }) => {
  return (
    <span className="error-log">
      <WarningIcon variant="secondary" />
      {text}
    </span>
  )
}

export default IconError
