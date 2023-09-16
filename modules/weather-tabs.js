function initTabs() {
	const weatherBattons = document.querySelector('.weather__buttons')
	const weatherBattonAll = Array.from(
		document.querySelectorAll('.weather__button')
	)
	const weatherTabs = document.querySelector('.weather__tabs')
	const weatherTabAll = document.querySelectorAll('.weather__tab')

	weatherBattons.addEventListener('click', function (event) {
		const clickButton = event.target
		if (checkClickTabs(clickButton)) {
			changeTabs(clickButton)
		}
	})

	function checkClickTabs(clickButton) {
		const clickButtonParent = clickButton.closest('.weather__button')
		const activeClickElementParent =
			clickButtonParent.classList.contains('-active')
		return clickButtonParent && !activeClickElementParent
	}

	function changeTabs(clickButton) {
		const activeButton = weatherBattons.querySelector(
			'.weather__button.-active'
		)
		activeButton.classList.remove('-active')
		clickButton.classList.add('-active')
		const indexClickButton = weatherBattonAll.findIndex(
			item => item === clickButton
		)
		const activeTab = weatherTabs.querySelector('.weather__tab.-active')
		activeTab.classList.remove('-active')
		const newActiveTab = weatherTabAll[indexClickButton]
		newActiveTab.classList.add('-active')
	}
}

export { initTabs }
