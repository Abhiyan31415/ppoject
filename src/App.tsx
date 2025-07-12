import './App.css'
import Home from './components/home/Home'
import ProjectShowcase from './components/showcase/ProjectShowcase.tsx'
import TechJourney from './components/journey/TechJourney.tsx'
import InteractiveTimeline from './components/timeline/InteractiveTimeline.tsx'
import Contact from './components/contact/Contact.tsx'

const App:React.FC = () => { 
  return (
    <div className='bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen'>
      <Home/>
      <TechJourney/>
      <ProjectShowcase/>
      <InteractiveTimeline/>
      <Contact/>
    </div>
  )
}

export default App
