const cityForm = document.querySelector('[data-js="change-location"]')
const cityName = document.querySelector('[data-js="city-name"]')
const cityWeather = document.querySelector('[data-js="city-weather"]')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

const showCityCard = () => {
   if(cityCard.classList.contains('d-none')){
      cityCard.classList.remove('d-none')
   }
}

const showCityWeatherInfo = async event => {
   const inputValue = event.target.city.value
   const [{ Key, LocalizedName }] = await getCityData(inputValue)
   const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key)
   
   timeImg.src = IsDayTime ? './src/dia.jpg' : './src/noite.jpg'
   timeIconContainer.innerHTML = `<img src="./src/icons/${WeatherIcon}.svg"/>`
   cityName.textContent = LocalizedName
   cityWeather.textContent = WeatherText
   cityTemperature.textContent = Temperature.Metric.Value
   showCityCard()
}

cityForm.addEventListener('submit', event => {
   event.preventDefault()
   showCityWeatherInfo(event)
   
   cityForm.reset()
})
