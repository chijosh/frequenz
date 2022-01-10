import { makeStyles } from '@material-ui/core/styles'
import Login from './components/Login'

const useStyles = makeStyles({
  root: {
    backgroundImage: 'linear-gradient(to right bottom, #600DFF, #100045 )',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex'
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Login />
    </div>
  )
}

export default App
