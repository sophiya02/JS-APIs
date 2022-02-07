let w_api_key = config.WEATHER_API_KEY;
let submit = document.getElementById("submit");
let city = document.getElementById("city");
let cityValue = "london";
async function getWeatherData() {

    try {
        console.log(cityValue);
        let wres = await fetch(`http://api.weatherapi.com/v1/current.json?key=9ec8d3e2584f417397685005220702&q=${cityValue}&aqi=no`);
        let wdata = await wres.json();
        console.log(wdata);
        return wdata;
    }
    catch (error) {

        return -1;
    }
}
async function disData() {
    let wdata = await getWeatherData();
    console.log(wdata);
    if (wdata != -1) {
        document.getElementById("ele1").innerText = `Temp in C= ${wdata.current.temp_c} deg celcius `;
        document.getElementById("ele2").innerText = `Temp in F= ${wdata.current.temp_f} fahrenhiet `;
        document.getElementById("ele3").innerText = `Cloud = ${wdata.current.cloud}  `;
        document.getElementById("ele4").innerText = `Wind direction= ${wdata.current.wind_dir}  `;
        document.getElementById("ele5").innerText = `Humidity= ${wdata.current.humidity} `;
        document.getElementById("ele6").innerText = `wind speed= ${wdata.current.wind_kph} kph `;
        document.getElementById("ele7").innerText = `Location= ${wdata.location.country}  `;
        document.getElementById("ele8").innerText = `Localtime= ${wdata.location.localtime}  `;
        document.getElementById("ele9").innerText = `Region= ${wdata.location.region}  `;
        document.getElementById("ele10").innerText = `Day: ${wdata.current.condition.text} `;
    }
    else
        document.getElementById("ele1").innerText = `error occured `;

}
submit.addEventListener("click", () => {
    cityValue = document.getElementById("city").value;
    // console.log(cityValue);
    disData();


});