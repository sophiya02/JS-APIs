let w_api_key = config.WEATHER_API_KEY;
let submit = document.getElementById("submit");
let city = document.getElementById("city");
let fail = document.getElementById("fail");
let cityValue = "london";
async function getWeatherData() {

    try {
        console.log(cityValue);
        let wres = await fetch(`http://api.weatherapi.com/v1/current.json?key=9ec8d3e2584f417397685005220702&q=${cityValue}&aqi=no`);
        let wdata = await wres.json();
        // console.log(wdata);
        return wdata;
        }   
    catch (error) {
        // console.log(error);
        fail.innerText = `${error} `;
        showFail();
    }
}

async function disData() {
    let wdata = await getWeatherData();
    // console.log(wdata);
    if(!wdata.error) {
        
        document.getElementById("ele1").innerText = `${wdata.current.condition.text} `;
        document.getElementById("ele2").src= `https:${wdata.current.condition.icon}`;
        // console.log(typeof(wdata.current.condition.icon));
        document.getElementById("ele3").innerText = `Humidity: ${wdata.current.humidity} `;
        document.getElementById("ele4").innerText = `${wdata.current.temp_c} deg C`;
        document.getElementById("ele5").innerText = `${wdata.current.temp_f} F `;
        document.getElementById("ele6").innerText = `Wind: ${wdata.current.wind_dir} direction `;
        document.getElementById("ele7").innerText = `at: ${wdata.current.wind_kph} kph `;
        document.getElementById("ele8").innerText = `${wdata.location.region}  `;
        document.getElementById("ele9").innerText = `${wdata.location.country}  `;
        document.getElementById("ele10").innerText= `${wdata.location.localtime}  `;
        showSuccess();
    }
    else
     {  
          fail.innerText = `${wdata.error.message} `;
          showFail();
        }

}
function showFail(){
    displayData.style.display="none";
    fail.style.display="block";
    
}
function showSuccess(){
    fail.style.display="none";
    displayData.style.display="grid";
}
// console.log(document.getElementById("ele2").src);
submit.addEventListener("click", () => {
    cityValue = document.getElementById("city").value;
    // console.log(cityValue);
    disData();


});