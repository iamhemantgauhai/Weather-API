var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var desc = document.querySelector('.desc');
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=aa1fee6d5c2e24496e97f7f956bf05f0')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue+" °C";
            desc.innerHTML = descValue;

        })

    .catch(err => alert("Wrong city name!"))
})







