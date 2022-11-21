let fs = require("fs");
let http = require("http");
let requests = require("requests");

let homeFile = fs.readFileSync("home.html","utf-8")

let replaceVal = (tempVal,originalVal)=>{
    let temperature = tempVal.replace("{%tempval%}",originalVal.main.temp);
    // console.log(temperature);
    // console.log(originalVal.main.temp);
    return temperature;
}
// console.log(replaceVal);
// console.log(homeFile);

let server = http.createServer((req,res)=>{
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=patna&appid=1c498ed436194996868104427e41f9e6")
        .on("data",(chunk)=>{
            // console.log(chunk)
            let maindata = JSON.parse(chunk);
            let arrData = [maindata];

            let realTimeData = arrData.map((val)=>{
                replaceVal(homeFile,val);
                // res.write(realTimeData);
                // console.log(val.main);
            }).join("");
            console.log(realTimeData);
            // console.log(arrData[0].main.temp);
            // res.write(realTimeData);
        }).on("end",(err)=>{
            res.end();
        })
        
    }else{
        res.end("URL NOT FOUND !")
    }
})

server.listen(2000,"localhost");

