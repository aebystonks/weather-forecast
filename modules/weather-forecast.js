const detailsTemp = document.querySelector('.details__temperature')
const detailsCity = document.querySelector('.details__city')
const detailsFeelsLike = document.querySelector('.details__feels-like')
const detailsWeather = document.querySelector('.details__weather')
const sunrise = document.querySelector('.details__sunrise')
const sunset = document.querySelector('.details__sunset')

export function splitDetails(
	city,
	temp,
	feelsLike,
	weatherInfo,
	sunriseInfo,
	sunsetInfo
) {
	function formatTime(timestamp) {
		const time = new Date(timestamp * 1000)
		return `${String(time.getHours()).padStart(2, '0')}:${String(
			time.getMinutes()
		).padStart(2, '0')}`
	}

	const sunriseDate = formatTime(sunriseInfo)
	const sunsetDate = formatTime(sunsetInfo)

	detailsCity.textContent = city
	detailsTemp.textContent = Math.trunc(temp)
	detailsFeelsLike.textContent = Math.trunc(feelsLike)
	detailsWeather.textContent = weatherInfo
	sunrise.textContent = sunriseDate
	sunset.textContent = sunsetDate
}
