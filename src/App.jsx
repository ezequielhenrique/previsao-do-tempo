import { useState, useRef } from 'react';
import axios from 'axios';

import WeatherInformation from './components/WeatherInformation/WeatherInformation';
import WeatherInformation5Days from './components/WeatherInformation5Days/WeatherInformation5Days';
import Message from './components/Message/Message';
import Footer from './components/Footer/Footer';

import 'leaflet/dist/leaflet.css';
import './App.css';

function App() {
  const [weather, setWheater] = useState()
  const [weather5Days, setWheater5Days] = useState()
  const [message, setMessage] = useState()

  const inputRef = useRef()

  async function searchCity() {
    try {

      const cityName = inputRef.current.value
      const apiKey = 'dc972233c68e7abe443bf5e38da343cb'

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`
      const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`

      const apiData = await axios.get(url)
      const apiData5Days = await axios.get(url5Days)

      setWheater(apiData.data)
      setWheater5Days(apiData5Days.data)
      setMessage(null)

    } catch (error) {
      if (error.response) {
        if (error.response.status == 404) {
          setMessage('Cidade não encontrada')
        }
      } else if (error.request) {
        setMessage('Sem resposta do servidor');
      } else {
        setMessage('A requisição não pode ser concluída')
      }
    }
  }

  return (
    <>
      <main className='container'>
        <h1>Previsão do tempo</h1>
        <input ref={ inputRef } type='text' placeholder='Digite o nome da cidade'></input>
        <button onClick={ searchCity }>Buscar</button>
        
        { message && <Message type={'error'} msg={ message }/>}

        { weather && <WeatherInformation weather={ weather }/> }
        { weather && <WeatherInformation5Days weather5Days = { weather5Days }/> }
      </main>
      <Footer/>
    </>
  )
}

export default App;
