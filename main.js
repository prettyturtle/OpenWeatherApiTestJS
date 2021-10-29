const cityNameLabel = document.querySelector(".city-name")
const weatherResultTotal = document.querySelector(".weather-result-total")
const weatherDescriptionLabel = document.querySelector(".weather-description")
const meanTempLabel = document.querySelector(".temp-mean")
const maxTempLabel = document.querySelector(".temp-max")
const minTempLabel = document.querySelector(".temp-min")
const errorMessage = document.querySelector(".error-message")


const searchButton = document.querySelector(".search-btn")


let city = ""
const apiKey = "72b679ddb227219023234c815867edb3"

searchButton.addEventListener("click", function () {
  
  city = document.querySelector(".city-text-field").value

  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  axios({
    method: 'get',
    url: baseURL
  })
    .then(function (response) {

      errorMessage.style.visibility = "hidden"

      let cityName = response.data.name // Japan
      let weatherDescription = response.data.weather[0].description // clear sky
      const temperatureInformation = response.data.main // 온도 정보
      let meanTemperature = temperatureInformation.temp - 273.15 // 평균 온도
      let maxTemperature = temperatureInformation.temp_max - 273.15 // 최대 온도
      let minTemperature = temperatureInformation.temp_min - 273.15 // 최저 온도
      
      cityNameLabel.innerHTML = cityName
      weatherDescriptionLabel.innerHTML = weatherDescription
      meanTempLabel.innerHTML = `현재: ${meanTemperature.toFixed(0)}°C`
      maxTempLabel.innerHTML = `최대: ${maxTemperature.toFixed(0)}°C`
      minTempLabel.innerHTML = `최저: ${minTemperature.toFixed(0)}°C`

      weatherResultTotal.style.visibility = "visible"
    })
    .catch(function (error) {
      console.log(error)
      weatherResultTotal.style.visibility = "hidden"
      errorMessage.style.visibility = "visible"
    });
    
})