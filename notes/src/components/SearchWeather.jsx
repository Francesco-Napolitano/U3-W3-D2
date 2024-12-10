import { Card, Spinner, Alert } from 'react-bootstrap'

const SearchWeather = (props) => {
  return (
    <Card>
      <Card.Body>
        {props.loading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status" variant="info" />
          </div>
        )}
        {props.error && <Alert variant="danger">Errore</Alert>}
        {!props.error && !props.loading && (
          <>
            {props.result ? (
              <>
                <Card.Title>
                  Today in {props.result.name}, {props.result.sys.country}
                  <i className="bi bi-heart"></i>
                </Card.Title>
                <Card.Text>
                  {props.result.weather[0].main} - (
                  {props.result.weather[0].description})
                </Card.Text>
                <Card.Text className="m-0">
                  Humidity: {props.result.main.humidity} %{' '}
                </Card.Text>
                <Card.Text className="fs-1">
                  Temperature: {(props.result.main.temp - 273.15).toFixed(0)} °C
                </Card.Text>
              </>
            ) : null}
          </>
        )}
      </Card.Body>
    </Card>
  )
}

export default SearchWeather
