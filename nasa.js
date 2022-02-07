let nasa_api_key=config.NASA_API_KEY;
let head=document.getElementById("about-head");
let para=document.getElementById("about-para");
let date=document.getElementById("date");
let aboutBg=document.getElementById("about-bg");
let corner=document.getElementById("corner");
let icon=document.getElementById("icon");
async function getData(){
    try
    {
        const res= await fetch( `https://api.nasa.gov/planetary/apod?api_key=${nasa_api_key}`);
        // console.log(res);
        const data= await res.json();
        // console.log(data);
        // console.log(typeof(data));
        return data;
    }
    catch(error){
        console.log("error");
    }
}
    window.addEventListener('DOMContentLoaded',async()=>{
        let data= await getData();
        // console.log(typeof(data));
        // console.log(data["title"]);
        if(data.media_type=="image")
        document.body.style.backgroundImage=`url("${data.hdurl}"`;
        // document.body.style.backgroundImage=`url("https://apod.nasa.gov/apod/image/2202/NGC4651_CFHT_1587.jpg"`;
        head.innerText=data.title;
        para.innerHTML=data.explanation;
        date.innerHTML=data.date;
        // document.body.style.backgroundImage=data.hdurl;

    });
    corner.addEventListener("click",()=>{
        if(aboutBg.style.display=="block")
        aboutBg.style.display="none";
        else
        aboutBg.style.display="block";
    })

