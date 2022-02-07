
// async function loadUsers(){
//      const res=await fetch("data.json");
//      const users=await res.json();
//      console.log(users);
//      return users;
// }

// async function printQuote(){
//     let users=await loadUsers();
//     let ind=Math.floor(Math.random()*users.length);
//     document.getElementById("para").innerHTML=users[ind].para;
// }
// console.log("after print");
// document.getElementById("btn").addEventListener('click', printQuote);
// console.log("after click");


async function getData(){
    const res= await fetch('https://api.github.com/users');
    // console.log("res: " + typeof(res));
    // console.log(res);
    const data=await res.json();
    // converts the data to json format using JSON.stringyfy();
    // console.log(data);
    // console.log("data: " +typeof(data));
    return data;
}
// getData();
window.addEventListener('DOMContentLoaded', async()=>{
    let data=await getData();
    // console.log("data1: " +typeof(data));
    for(let key in data)
    {
        // console.log(data[0].avatar_url)
        // document.body.style.backgroundImage=`url("${data[0].avatar_url}"`;
        // document.getElementById("container").style.backgroundImage=`url("${data[0].avatar_url}"`;
        // document.getElementById("img1").src=data[0].avatar_url;
        // document.getElementById("para1").innerHTML=data[0].login;
        // document.getElementById("img2").src=data[1].avatar_url;
        // document.getElementById("para2").innerHTML=data[1].login;
        // document.getElementById("img3").src=data[2].avatar_url;
        // document.getElementById("para3").innerHTML=data[2].login;
        // document.getElementById("img4").src=data[3].avatar_url;
        // document.getElementById("para4").innerHTML=data[3].login;
    }
})