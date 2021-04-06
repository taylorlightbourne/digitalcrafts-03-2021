const button = document.querySelector(".button")
button.innerText = "Enter"
const inputValue = document.querySelector(".inputValue")
const name = document.querySelector(".name")
const temp = document.querySelector(".temp")
const API ="ac813b93c33296e12a37202012c9b25d"


const addWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${inputValue.value},us&appid=${API}`)
    
    .then((response) => response.json())
    .then((data) =>  {
        console.log(data)

        let location = document.querySelector(".name");
        location.innerHTML = data['name'];
        let temperature = document.querySelector(".temp");
        temperature.innerHTML = data['main']['temp'];
        let description = document.querySelector(".desc");
        description.innerHTML = data['weather'][0]['description'];
    })
};

button.addEventListener("click", function() {
    addWeather();
});
