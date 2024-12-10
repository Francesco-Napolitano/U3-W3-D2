import { Card, Spinner, Alert } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = (props) => {
  const [weather, setWeather] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const weatherHomepage = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Milan&appid=6b201a38c300d1fcbbc71de9f70fe57a'
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore all'avvio")
        }
      })
      .then((data) => {
        console.log(data)
        setWeather(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log('OH NO!', err)
        setError(true)
      })
  }

  useEffect(() => {
    weatherHomepage()
  }, [])

  return (
    <Card>
      <Card.Body>
        {loading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status" variant="info" />
          </div>
        )}
        {error && <Alert variant="danger">Errore</Alert>}
        {!error && !loading && (
          <>
            <Card.Title>
              Today in {weather.name}, {weather.sys.country}{' '}
              <i
                className="bi bi-heart"
                onClick={() => {
                  navigate('/favourite' + weather.id)
                }}
              ></i>
            </Card.Title>
            <Card.Text>
              {weather.weather[0].main} - ({weather.weather[0].description})
            </Card.Text>
            <Card.Text className="m-0">
              Humidity: {weather.main.humidity} %{' '}
            </Card.Text>
            <Card.Text className="fs-1">
              Temperature: {(weather.main.temp - 273.15).toFixed(0)} °C
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  )
}

export default HomePage
