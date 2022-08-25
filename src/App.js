import Box from './components/Box'

function App() {

  return (
    <section>
      <Box>
        <img src="./images/icon-sedans.svg" alt="" />
        <h1>Sedans</h1>
        <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
        <button>Learn More</button>
      </Box>

      <Box>
        <img src="./images/icon-suvs.svg" alt="" />
        <h1>SUVs</h1>
        <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
        <button>Learn More</button>
      </Box>

      <Box>
        <img src="./images/icon-luxury.svg" alt="" />
        <h1>Luxury</h1>
        <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
        <button>Learn More</button>
      </Box>
    </section>
  )
}

export default App;
