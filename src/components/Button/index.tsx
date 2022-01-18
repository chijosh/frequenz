import { FC } from 'react';
import './Button.scss'

export type variantType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'disabled-secondary'
  | 'primary-hollow'

interface ButtonProps {
  variant: variantType;
  text: string;
  icon: JSX.Element | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: FC<ButtonProps> = ({ variant, text, onClick, icon }) => {
  return (
    <button className={`btn btn__${variant}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  )
}

export default Button
