const temperature = document.querySelectorAll('.forecast__temperature')
const forecastDate = document.querySelectorAll('.forecast__date')
const forecastFilesLike = document.querySelectorAll('.forecast__feels-like')
const forecastCondition = document.querySelectorAll('.forecast__conditions')
const forecastCard = document.querySelector('.forecast__cards')
const icon = forecastCard.querySelectorAll('img')
const forecastTime = document.querySelectorAll('.forecast__time')
const forecastCity = document.querySelector('.forecast__city')

export function splitForecast(
	iteration,
	cityName,
	temp,
	dateInfo,
	filesLike,
	condition,
	weatherIcon,
	mainTimeStamp
) {
	function formatTime() {
		const time = new Date(mainTimeStamp * 1000)
		return `${String(time.getHours()).padStart(2, '0')}:${String(
			time.getMinutes()
		).padStart(2, '0')}`
	}

	const realTime = formatTime()

	const timestamp = dateInfo
	const date = new Date(timestamp * 1000)

	const day = date.getDate()
	const month = date.toLocaleString('default', { month: 'short' })
	const formattedDate = `${day} ${month}`

	forecastCity.textContent = cityName
	temperature[iteration].textContent = `Temperature: ${Math.round(temp)}°`
	forecastDate[iteration].textContent = formattedDate
	forecastFilesLike[iteration].textContent = `Feels like: ${Math.round(
		filesLike
	)}°`
	forecastCondition[iteration].textContent = condition
	icon[
		iteration
	].src = `https://openweathermap.org/img/wn/${weatherIcon}@4x.png`
	forecastTime[iteration].textContent = realTime
}
