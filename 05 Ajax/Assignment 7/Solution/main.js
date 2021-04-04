const form = document.querySelector('form')
const cityInput = document.querySelector('input')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    // alert(cityInput.value)
    searchWeather(cityInput.value)
})

function searchWeather(searchValue){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=cdf20991b6cf08f876c6e3dbec5aab0c&units=metric`).then((data)=>{
        // console.log(data)
        return data.json()
    }).then(parsedData => {
        // console.log(parsedData)
        if(parsedData.cod == 200){
            setDisplay(parsedData)
        }
    })
}

function setDisplay(data){
    let divCollection = document.getElementsByClassName("weather")
    divLenght = divCollection.length
    // console.log(doesDivExist)
    if(divLenght){
        let count
        for(count = 0; count<divLenght; count++){
            divCollection[count].remove()
        }
    }
    form.insertAdjacentHTML('afterend',`<div class="weather">
    <div class="display">
        <p class="display2">${data.name}, ${data.sys.country}</p>
        <p>${new Date().toLocaleString('default', {weekday: 'long'})}, ${new Date().getDate()} ${new Date().toLocaleString('default', {month: 'long'})} ${new Date().getFullYear()}</p>
        <p class="display1">${data.main.temp}&#176;C</p>
        <p class="display3">${data.weather[0].main}</p>
        <p>${data.main.temp_min}, ${data.main.temp_max}</p>
        <p>visibility: ${data.visibility}</p> 
    </div>
</div>`)
cityInput.value=""
cityInput.focus()
}