const weatherForm = document.querySelector('.weather__form')
export const weatherInput = weatherForm.querySelector('.weather__input')
const forecastCards = document.querySelectorAll('.forecast__card')
const likeButton = document.querySelector('.now__like')
const locationsContainer = document.querySelector('.weather__cities')

import { forecastFetch } from '../modules/forecast-data.js'
import { splitForecast } from '../modules/forecast.js'
import { weatherFetch } from '../modules/weather-data.js'
import { splitDetails } from '../modules/weather-forecast.js'
import { currentCityName, splitFunction } from '../modules/weather-now.js'
import { initTabs } from '../modules/weather-tabs.js'

let citiesList = []

weatherForm.addEventListener('submit', async event => {
	event.preventDefault()

	try {
		const weatherData = await weatherFetch(weatherInput.value)
		const forecastData = await forecastFetch(weatherInput.value)
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
			weatherData.weather[0].description,
			weatherData.sys.sunrise,
			weatherData.sys.sunset
		)
		for (let i = 0; i < forecastCards.length; i++) {
			splitForecast(
				i,
				forecastData.city.name,
				forecastData.list[i].main.temp,
				forecastData.list[i].dt,
				forecastData.list[i].main.feels_like,
				forecastData.list[i].weather[0].description,
				forecastData.list[i].weather[0].icon,
				forecastData.list[i].dt
			)
		}

		weatherInput.value = ''
		console.log(weatherData)
	} catch (error) {
		console.error(error)
	}
})

function addCity(newCity) {
	if (!citiesList.includes(newCity)) {
		citiesList.push(newCity)
	} else {
		alert(new Error('Country is already exist'))
	}
}

likeButton.addEventListener('click', () => {
	addCity(currentCityName.textContent)
	splitFavourite()
})

async function splitFavourite() {
	locationsContainer.textContent = ''
	citiesList.forEach((elem, index) => {
		const location = document.createElement('li')
		location.className = 'weather__city'
		location.textContent = elem

		const deleteButton = document.createElement('span')
		deleteButton.className = 'weather__delete-city'

		location.append(deleteButton)
		locationsContainer.append(location)

		deleteButton.addEventListener('click', () => {
			citiesList = citiesList.filter((item, idx) => idx !== index)
			splitFavourite()
		})

		location.addEventListener('click', () => {
			try {
				const currentCities = document.querySelectorAll('.weather__city')

				currentCities.forEach(currentCity => {
					currentCity.addEventListener('click', async () => {
						const weatherData = await weatherFetch(currentCity.textContent)
						const forecastData = await forecastFetch(currentCity.textContent)

						splitFunction(
							weatherData.main.temp,
							weatherData.name,
							weatherData.weather[0].icon
						)
						splitDetails(
							weatherData.name,
							weatherData.main.temp,
							weatherData.main.feels_like,
							weatherData.weather[0].description,
							weatherData.sys.sunrise,
							weatherData.sys.sunset
						)
						for (let i = 0; i < forecastCards.length; i++) {
							splitForecast(
								i,
								forecastData.city.name,
								forecastData.list[i].main.temp,
								forecastData.list[i].dt,
								forecastData.list[i].main.feels_like,
								forecastData.list[i].weather[0].description,
								forecastData.list[i].weather[0].icon,
								forecastData.list[i].dt
							)
						}
					})
				})
			} catch (error) {
				console.error(error)
			}
		})
	})
}

initTabs()
