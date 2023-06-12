// let weather = {
//     "apiKey": "9969e5ceb5207490f3ec4ebb9eb3062f",
//     fetchWeather: function (city) {
//         fetch(
//                 "https://api.openweathermap.org/data/2.5/weather?q=" +
//                 city +
//                 "&units=metric&appid=" +
//                 this.apiKey
//             ).then((response) => response.json())
//             .then((data) => this.displayWeather(data))
//     },
//     displayWeather: function (data) {
//         const {
//             name
//         } = (data);
//         const {
//             icon,
//             description
//         } = data.weather[0];
//         const {
//             temp,
//             humidity
//         } = data.main;
//         const {
//             speed
//         } = data.wind;
//         console.log(name, icon, description, temp, humidity, speed);
//         document.querySelector(".city").innerHTML = "Weather in " + name;
//         document.querySelector(".icon").src =
//             "http://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector(".description").innerHTML = description;
//         document.querySelector(".temp").innerHTML = parseInt(temp) + "°C";
//         document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
//         document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " km/h";
//         document.querySelector(".weather").classList.remove("loading");
        
//     },
//         search: function() {
//             this.fetchWeather(document.querySelector(".search-bar").value);
//         }
// };

// document.querySelector(".search button").addEventListener("click", function() {
//    weather.search();
// });

// document.querySelector(".search-bar").addEventListener("keyup", function(event) {
//     if (event.key == "Enter") {
//         weather.search();
//     }
// });

// weather.fetchWeather("Indore");

