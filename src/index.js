// //////// INDEX //////// //

import truncateLinkName from './raisin/raisin.js'
import {clockContainer, toggleClockDisplay, displayTime, displayDate} from './clock/clock.js'
import {buttonsContainer, searchContainer, toggleEngineIcons, sendSearch} from './search/search.js'
import {openweatherInner, toggleWeatherDisplay, getOpenWeatherData} from './openweather/openweather.js'
import getUnsplashData from './unsplash/unsplash.js'

// Raisin
truncateLinkName()

// Clock
clockContainer.addEventListener('click', toggleClockDisplay)
displayTime()
displayDate()

// Search
buttonsContainer.addEventListener('click', toggleEngineIcons)
searchContainer.addEventListener('keypress', sendSearch)

// Openweather
getOpenWeatherData()
openweatherInner.addEventListener('click', toggleWeatherDisplay)

// Unsplash
getUnsplashData()

// Weather
