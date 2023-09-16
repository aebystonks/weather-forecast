import { weatherInput } from '../Lesson_weather/main.js'

export async function weatherFetch() {
	const serverUrl = 'http://api.openweathermap.org/data/2.5/weather'
	const cityName = weatherInput.value
	const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'
	const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`

	const response = await fetch(url)
	const data = await response.json()
	return data
}
