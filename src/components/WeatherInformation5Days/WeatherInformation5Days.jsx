import './WeatherInformation5Days.css'

function WeatherInformation5Days({ weather5Days }) {
  let dailyForecast = {}

  for(let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString()
    
    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6)

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })

    return newDate
  }

  return (
    <section className='weather-container'>

      <h3>Previsão próximos 5 dias</h3>

      <div className='weather-list'>
        {next5DaysForecast.map(forecast => (

          <div key={forecast.dt} className='weather-item'>
            <p className='forecast-day'>{ convertDate(forecast) }</p>
            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="clima" />
            <p className='forecast-description'>{ forecast.weather[0].description }</p>
            <p>{ Math.round(forecast.main.temp_min) }°C min / { Math.round(forecast.main.temp_max) }°C máx</p>
          </div>

        ))}
      </div>
    </section>
  )
}

export default WeatherInformation5Days;
