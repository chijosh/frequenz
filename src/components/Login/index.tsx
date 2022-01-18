import { FC } from 'react';
import Form from '../Form'
import HeroTitle from '../HeroTitle'
import './Login.scss'
import { LoginFormProps } from '../../App'


const Login: FC<LoginFormProps> = ({ title }) => {
  return (
    <main className="loginContainer">
      <div className="loginContainer__left">
        <div className="loginContainer__left-container">
          <HeroTitle title={title} />
        </div>
      </div>
      <div className="loginContainer__right">
        <Form />
      </div>
    </main>
  )
}

export default Login
