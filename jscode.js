var inputvalue=document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik="e11452321f1e40b6dc863a919c1a7fc5"
function conversion(val){
    return (val-273).toFixed(3)
}
btn.addEventListener('click',function()
{
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik).then(res => res.json())

    .then(data => 
        {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspeed = data['wind']['speed']

        city.innerHTML=`Weather of <span> ${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${conversion(tempature)}C</span>`
        description.innerHTML=`Sky conditions: <span>${descrip}<span>`
        wind.innerHTML=`Wind speed: <span>${wndspeed} km/h<span>`


    })
    .catch(err => alert('You entered wrong city name'))
})