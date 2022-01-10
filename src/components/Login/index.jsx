import Form from '../Form'
import HeroTitle from '../HeroTitle'
import './Login.scss'

const Login = (props) => {
  return (
    <main className="loginContainer">
      <div className="loginContainer__left">
        <div className="loginContainer__left-container">
          <HeroTitle text={'Frequenz'} />
        </div>
      </div>
      <div className="loginContainer__right">
        <Form />
      </div>
    </main>
  )
}

export default Login
