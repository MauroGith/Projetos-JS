const cityForm = document.querySelector('[data-js="change-location"]')
const cityName = document.querySelector('[data-js="city-name"]')
const cityWeather = document.querySelector('[data-js="city-weather"]')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

const showCard = () => 
   cityCard.classList.contains('d-none')
      ? cityCard.classList.remove('d-none')
      : cityCard

const attDisplayImage = IsDayTime => 
  IsDayTime 
   ? timeImg.src = './src/dia.jpg'
   : timeImg.src = './src/noite.jpg' 

const attDisplayText = (timeIcon, LocalizedName, WeatherText, Temperature) => {
   timeIconContainer.innerHTML = timeIcon
   cityName.textContent = LocalizedName
   cityWeather.textContent = WeatherText
   cityTemperature.textContent = Temperature.Metric.Value
}

const APIData = async event => {
   const inputValue = event.target.city.value
   const [{ Key, LocalizedName }] = await getCityData(inputValue)
   const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeather(Key)
   const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`

   attDisplayImage(IsDayTime)
   attDisplayText(timeIcon, LocalizedName, WeatherText, Temperature)
}

cityForm.addEventListener('submit', event => {
   event.preventDefault()
   showCard()
   APIData(event)
   
   cityForm.reset()
})