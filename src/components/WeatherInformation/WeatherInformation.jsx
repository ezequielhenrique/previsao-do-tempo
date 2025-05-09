import { useEffect } from 'react';
import WeatherMap from '../WeatherMap/WeatherMap';
import './WeatherInformation.css';

function WeatherInformation({ weather }) {

  const weatherDescription = weather.weather[0].description;

  useEffect(() => {
    const setBackground = () => {
      const backgroundColors = {
        'céu limpo': 'linear-gradient(to right, #00b4db, #0083b0)',
        'algumas nuvens': 'linear-gradient(to right, #56ccf2, #2f80ed)',
        'nuvens dispersas': 'linear-gradient(to right, #d7dde8, #56ccf2)',
        'nublado': 'linear-gradient(to right, #bdc3c7, #757f9a)',
        'chuva leve': 'linear-gradient(to right, #8f94fb,  #4e54c8)',
        'chuva': 'linear-gradient(to right, #4286f4, #373b44)',
        'trovoada com chuva': 'linear-gradient(to right, #2c5364, #203a43, #0f2027)',
        'neve': 'linear-gradient(to right, #e6dada, #274046)',
        'névoa': 'linear-gradient(to right, #d7dde8, #757f9a)'
      };
  
      const color = backgroundColors[weatherDescription.toLowerCase()] || 'linear-gradient(to right, #00b4db, #0083b0)';
      document.body.style.background = color;
    };
  
    setBackground();
  }, [weatherDescription]);

  return (
    <section className='weather-container'>
      <h2>{ weather.name }, { weather.sys.country }</h2>
      <div className='weather-subcontainer'>
        <div>
          <div className='weather-info'>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="clima"/>
            <p className='temperature'>{ Math.round(weather.main.temp) }°C</p>
          </div>
          <div>
            <p className='description'>{ weather.weather[0].description }</p>
          </div>
          <div className='details'>
            <p>Sensação térmica<br/>{ Math.round(weather.main.feels_like) }°C</p>
            <p>Humidade<br/>{ weather.main.humidity }%</p>
            <p>Velocidade do vento<br/>{ weather.wind.speed } m/s</p>
          </div>
        </div>
        <WeatherMap lat={ weather.coord.lat } lon={ weather.coord.lon } city={ weather.name }/>
      </div>
    </section>
  )
}

export default WeatherInformation;
