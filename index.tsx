import React, { FC } from 'react'
import './Button.scss'
export type variantType =
  | 'primary'
  | 'secondary'
  | 'ternary'
  | 'danger'
  | 'primary-hollow'
  | 'secondary-hollow'
  | 'ternary-hollow'
  | 'danger-hollow'

export type btnType = 'button' | 'submit' | 'reset' | undefined

interface ButtonProps {
  /**
   * One of the 4 HTML button types:
   * 'button', 'submit', 'reset' and undefined
   */
  type: btnType
  /**
   * It can be one of these strings:
   * 'primary'
   * 'secondary'
   * 'ternary'
   * 'danger'
   * 'primary-hollow'
   * 'secondary-hollow'
   * 'ternary-hollow'
   * 'danger-hollow'
   */
  variant: variantType
  /**
   * Button Text
   */
  text: string
  /**
   * onClick event. Don't provide it if you need onSubmit from form
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: FC<ButtonProps> = ({ variant, text, onClick, type }) => {
  return (
    <button type={type} className={`btn btn__${variant}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
