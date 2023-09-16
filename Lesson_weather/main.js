const weatherForm = document.querySelector('.weather__form')
export const weatherInput = weatherForm.querySelector('.weather__input')
const forecastCards = document.querySelectorAll('.forecast__card')

import { forecastFetch } from '../modules/forecast-data.js'
import { splitForecast } from '../modules/forecast.js'
import { weatherFetch } from '../modules/weather-data.js'
import { splitDetails } from '../modules/weather-forecast.js'
import { splitFunction } from '../modules/weather-now.js'
import { initTabs } from '../modules/weather-tabs.js'

weatherForm.addEventListener('submit', async event => {
	event.preventDefault()

	try {
		const weatherData = await weatherFetch()
		const forecastData = await forecastFetch()
		console.log(forecastData)
		splitFunction(
			weatherData.main.temp,
			weatherData.name,
			weatherData.weather[0].icon
		)
		splitDetails(
			weatherData.name,
			weatherData.main.temp,
			weatherData.main.feels_like,
			weatherData.weather[0].main,
			weatherData.sys.sunrise,
			weatherData.sys.sunset
		)
		for (let i = 0; i < forecastCards.length; i++) {
			splitForecast(i, forecastData.list[i].main.temp, forecastData.list[i].dt)
		}

		weatherInput.value = ''
		console.log(weatherData)
	} catch (error) {
		console.error(error)
	}
})

initTabs()
