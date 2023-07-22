import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import salats from './data/Data'
import Footer from './components/Footer/Footer'
import Button from './components/Button/Button'
import Slick from './components/Slick/Slick'

function App() {
  return (
    <div className="App">
      <Header />

      <Intro />

      <Slick />

      <div className="main">
        {salats.map((ojb) => (
          <div>
            <Card
              title={ojb.name}
              price={ojb.price}
              img={ojb.img}
              key={ojb.id}
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default App
