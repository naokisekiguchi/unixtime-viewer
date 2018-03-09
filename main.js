document.addEventListener("DOMContentLoaded",()=>{
  setInterval(()=>{
    console.log("tick");
    const date = new Date();
    let unixtime = date.getTime();
    document.querySelector("#current").innerHTML = date;
    document.querySelector("#unixtime").innerHTML = Math.floor(unixtime/1000);
    document.querySelector("#unixtime_hex").innerHTML = Math.floor(unixtime/1000).toString(16);
    document.querySelector("#unixtime_binary").innerHTML = Math.floor(unixtime/1000).toString(2);
  },250);
});
