import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Footer from './components/Footer/Footer'
import Slick from './components/Slick/Slick'
import salats from './data/Salads'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Intro />
      </div>
      <div>
        <Slick />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
