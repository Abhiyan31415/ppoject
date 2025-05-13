import './App.css'
import Home from './components/home/Home'
import Projects from './components/project/Projects'
const App:React.FC = () => { 
  return (
    <div className='bg-gradient-to-br from-green-200 via-purple-200 to-pink-200'>
      <Home/>
      <Projects/>
    </div>
  )
}

export default App
