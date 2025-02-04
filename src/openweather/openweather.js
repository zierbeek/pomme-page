// //////// WEATHER //////// //
const openweatherInner = document.querySelector('pp-openweather-inner')
const openWeatherLoaderContainer = document.querySelector('pp-openweather-loader-container')

function handleopenWeatherApiError(response) {
  const openWeatherErrorContainer = document.querySelector('pp-openweather-error-container')
  const openWeatherErrorCode = document.querySelector('.openweather-error-code')

  openWeatherErrorCode.innerHTML = response.status
  openWeatherLoaderContainer.style.display = 'none'
  openWeatherErrorContainer.style.display = 'flex'
}

function displayOpenWeatherData(data) {
  const openWeatherLoader = document.querySelector('pp-openweather-loader-container')
  const openWeatherContainer = document.querySelector('pp-openweather')
  const temperature = document.querySelector('.temp-value')
  const humid = document.querySelector('.humid-value')
  const icons = [...document.querySelectorAll('.pp-openweather-icon')]
  const cityName = document.querySelector('.city-value')
  const sunrise = document.querySelector('.openweather-back-sunrise')
  const sunset = document.querySelector('.openweather-back-sunset')

  icons.forEach(icon => {
    if (icon.getAttribute('data-type').includes(data.weather[0].main.toLowerCase())) {
      icon.dataset.state = 'show'
    } else {
      icon.dataset.state = 'hide'
    }
  })

  cityName.innerHTML = process.env.OPEN_WEATHER_CITY_DISPLAY_NAME || process.env.OPEN_WEATHER_CITY_QUERY_NAME
  temperature.innerHTML = data.main.temp > 0 && data.main.temp < 10 ? `0${Math.round(data.main.temp)}°` : `${Math.round(data.main.temp)}°`
  humid.innerHTML = `${data.main.humidity}%`
  sunrise.innerHTML = formatTimestamp(data.sys.sunrise)
  sunset.innerHTML = formatTimestamp(data.sys.sunset)
  openWeatherLoader.style.display = 'none'
  openWeatherContainer.style.display = 'flex'
}

async function getOpenWeatherData() {
  const apiKey = process.env.OPEN_WEATHER_API_KEY
  const url = 'https://api.openweathermap.org/data/2.5/weather'
  const city = process.env.OPEN_WEATHER_CITY_QUERY_NAME
  const units = process.env.OPEN_WEATHER_UNITS
  const response = await fetch(`${url}?q=${city}&units=${units}&APPID=${apiKey}`)

  if (response.ok) {
    const jsonResponse = await response.json()
    return displayOpenWeatherData(jsonResponse)
  }

  return handleopenWeatherApiError(response)
}

function toggleWeatherDisplay() {
  openweatherInner.classList.toggle('is-flipped')
}

function formatTimestamp(stamp) {
  const date = new Date(stamp * 1000)
  let h = date.getHours()
  let m = date.getMinutes()

  h = (h < 10) ? '0' + h : h
  m = (m < 10) ? '0' + m : m

  return `${h}:${m}`
}

export {openweatherInner, toggleWeatherDisplay, getOpenWeatherData}
