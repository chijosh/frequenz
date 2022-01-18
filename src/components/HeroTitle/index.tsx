import { FC } from 'react';
import { LoginFormProps } from '../../App'
import './HeroTitle.scss'

const HeroTitle: FC<LoginFormProps> = ({ title }) => {
  return (
    <div>
      <h1
        className="heroTitle-header"
        style={{ marginTop: '80px' }}
      >
        {title}
      </h1>
      <div className="styled-underline" />
    </div>
  )
}

export default HeroTitle
