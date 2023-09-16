import { weatherInput } from '../Lesson_weather/main.js'

export async function forecastFetch() {
	const serverUrl = 'http://api.openweathermap.org/data/2.5/forecast'
	const apiKey = '1fc1c3c4f7ab985357be46392f09aafe'
	const cityName = weatherInput.value
	const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`

	const response = await fetch(url)
	const data = response.json()
	return data
}
