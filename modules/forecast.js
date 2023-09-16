const temperature = document.querySelectorAll('.forecast__temperature')
const date = document.querySelectorAll('.forecast__date')

export function splitForecast(iteration, temp) {
	const timestamp = dateInfo
	const date = new Date(timestamp * 1000)

	const day = date.getDate()
	const month = date.toLocaleString('default', { month: 'short' })
	const formattedDate = `${day} ${month}`

	temperature[iteration].textContent = `Temperature: ${Math.round(temp)}°`
	date[iteration].textContent = formattedDate
}
