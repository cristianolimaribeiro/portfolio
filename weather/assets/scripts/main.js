window.addEventListener('load', initPage)
const search = document.querySelector('.submit')

function initPage(){
    let url
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((pos) => {
            let lat = pos.coords.latitude
            let long = pos.coords.longitude
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=a47a3f5c1460521341ea075fffd1b072&lang=pt_br`
            fetchOnLoad(url)
        })
    }
}

function fetchOnLoad(api){
    fetch(`${api}`)
        .then((response) => {
            return response.json() })
        .then((data) =>  {
            const elementContent = document.querySelector('.container-city-data')
            const options = { dateStyle: 'short' };
            const date = new Date(data.dt * 1000).toLocaleString('pt-br', options)
        
           elementContent.innerHTML =      `
                            <div class="container-city__header">
                            <div class="container-city__header--name">
                                <h3 class="city-name">${data.name}</h3>
                            </div>
                            <div class="container-city__header--min-max">
                                <span class="container__span--city">
                                    <img class="span__image--arrow" src="./assets/images/icons/arrowdown.png" alt="Temperatura minima">
                                    <p class="span__text">${data.main.temp_min.toFixed(0)}°</p>
                                </span>
                            </div>
                            <span class="container__span--city">
                                <img class="span__image--arrow" src="./assets/images/icons/arrowup.png" alt="Temperatura máxima">
                                <p class="span__text">${data.main.temp_max.toFixed(0)}°</p>
                            </span>
                        </div>
                        <div class="container-city__content">
                            <div class="city-content__data">
                                <p class="city-content__data--day">quarta</p>
                                <p class="city-content__data--date">${date}</p>
                                <div class="city-content__data--wind">
                                    <img src="./assets/images/icons/windspeed.png" alt="" class="city-content__data--wind-img">
                                    <p class="city-content__data--wind-speedy">${data.wind.speed} km/h</p>
                                </div>
                                <div class="city-content__data--humidity">
                                    <img src="./assets/images/icons/humidity.png" alt="" class="city-content__data--humidity-img">
                                    <p class="city-content__data--humidity-humidity">${data.main.humidity}%</p>
                                </div>
                            </div>
                            <div class="city-content__img">
                                <img class="city-content__img--img" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png
        
                                " alt="">
                                <p class="city-content__img--description">${data.weather[0].description}</p>
                            </div>
                            <div class="city-content__degree">
                                <p class="city-content__degree--text">${data.main.temp.toFixed(0)}°</p>
                            </div>
                        </div>
                        </div>
        `
    })
}

async function fetchData() {
    const researchedCity = document.querySelector('.input__search').value
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${researchedCity}&units=metric&appid=a47a3f5c1460521341ea075fffd1b072&lang=pt_br`
    const response = await fetch(`${API_URL}`);
    const responseJson = await response.json();
    return responseJson;
}

function appendContent(content) {
    const elementContent = document.querySelector('.container-city-data')
    const options = { dateStyle: 'short' };
    const date = new Date(content.dt * 1000).toLocaleString('pt-br', options)

    elementContent.innerHTML =      `
                    <div class="container-city__header">
                    <div class="container-city__header--name">
                        <h3 class="city-name">${content.name}</h3>
                    </div>
                    <div class="container-city__header--min-max">
                        <span class="container__span--city">
                            <img class="span__image--arrow" src="./assets/images/icons/arrowdown.png" alt="Temperatura minima">
                            <p class="span__text">${content.main.temp_min.toFixed(0)}°</p>
                        </span>
                    </div>
                    <span class="container__span--city">
                        <img class="span__image--arrow" src="./assets/images/icons/arrowup.png" alt="Temperatura máxima">
                        <p class="span__text">${content.main.temp_max.toFixed(0)}°</p>
                    </span>
                </div>
                <div class="container-city__content">
                    <div class="city-content__data">
                        <p class="city-content__data--day">quarta</p>
                        <p class="city-content__data--date">${date}</p>
                        <div class="city-content__data--wind">
                            <img src="./assets/images/icons/windspeed.png" alt="" class="city-content__data--wind-img">
                            <p class="city-content__data--wind-speedy">${content.wind.speed} km/h</p>
                        </div>
                        <div class="city-content__data--humidity">
                            <img src="./assets/images/icons/humidity.png" alt="" class="city-content__data--humidity-img">
                            <p class="city-content__data--humidity-humidity">${content.main.humidity}%</p>
                        </div>
                    </div>
                    <div class="city-content__img">
                        <img class="city-content__img--img" src="http://openweathermap.org/img/wn/${content.weather[0].icon}.png

                        " alt="">
                        <p class="city-content__img--description">${content.weather[0].description}</p>
                    </div>
                    <div class="city-content__degree">
                        <p class="city-content__degree--text">${content.main.temp.toFixed(0)}°</p>
                    </div>
                </div>
                </div>
`
   
}

async function main(){
    const initialData = await fetchData()
    appendContent(initialData)

}

search.addEventListener('click', () => {
    main()
    document.querySelector('.input__search').value = ""
})