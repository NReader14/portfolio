import { useState } from 'react'
import './App.css'
import './styles/Transitions.css'
import Header from './components/Header'
import { Home, Projects, About, Contact } from './pages'

const pages = ['Home', 'Projects', 'About', 'Contact']
const DURATION = 400 // must match the 0.4s in Transitions.css

function App() {
  const [page, setPage] = useState('Home')
  const [prevPage, setPrevPage] = useState(null)
  const [direction, setDirection] = useState('forward')

  function navigate(next) {
    if (next === page || prevPage) return
    setDirection(pages.indexOf(next) > pages.indexOf(page) ? 'forward' : 'back')
    setPrevPage(page)
    setPage(next)
    setTimeout(() => setPrevPage(null), DURATION)
  }

  const views = {
    Home: <Home onNavigate={navigate} />,
    Projects: <Projects />,
    About: <About />,
    Contact: <Contact />,
  }

  return (
    <>
      <Header onNavigate={navigate} currentPage={page} />
      <main className={`stack ${direction}`}>
        {prevPage && (
          <div key={prevPage} className="page leaving">
            {views[prevPage]}
          </div>
        )}
        <div key={page} className="page entering">
          {views[page]}
        </div>
      </main>
    </>
  )
}

export default App