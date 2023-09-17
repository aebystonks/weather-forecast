const temperature = document.querySelector('.now__temperature')
export const currentCityName = document.querySelector('.now__city')
const weatherIcon = document.querySelector('.now__img')

export function splitFunction(temp, city, icon) {
	temperature.textContent = Math.trunc(temp) + '°'
	currentCityName.textContent = city
	weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@4x.png`
}
