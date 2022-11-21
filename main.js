let currentDatee = document.getElementById("date");
    let currentWether = document.getElementById("wethericon");

    let currentDay = ()=>{
        let weekDays = new Array(7);
        weekDays[0] = "Sunday";
        weekDays[1] = "Monday";
        weekDays[2] = "Tuesday";
        weekDays[3] = "Wednesday";
        weekDays[4] = "Thrusday";
        weekDays[5] =  "Fryday";
        weekDays[6] = "Saturday";

        let Months = new Array(12);
        Months[0] = "JAN";
        Months[1] = "FEB";
        Months[2] ="MAR";
        Months[3] = "APR";
        Months[4] = "MAY";
        Months[5] = "JUN";
        Months[6] = "JULY";
        Months[7] = "AUG";
        Months[8] = "SEPT";
        Months[9] = "OCT"
        Months[10] = "NOV";
        Months[11] = "DEC"
        let currentTime = new Date();
        currentDay = weekDays[currentTime.getDay()];
        currentMonth = Months[currentTime.getMonth()];
        currentYear = currentTime.getFullYear();
        currentDate = currentTime.getDate();

        console.log(currentTime.getHours())
        console.log(currentTime.getMinutes())
        console.log(currentTime.getSeconds())

        currentDatee.innerHTML = `${currentDay} | ${currentDate} | ${currentMonth} | ${currentYear}`;
        // console.log(currentTime.getMonth())
    }

    currentDay();



    // let s = setInterval(()=>{
    //     console.log("hi there");
    // },1000);
    
    let tempData = setInterval(()=>{
        fetch("https://api.openweathermap.org/data/2.5/weather?q=patna&appid=1c498ed436194996868104427e41f9e6")
        .then((q)=>{
            return q.json();
        }).then((d)=>{
            // console.log(d.main.temp);
            let temp_data = document.getElementById("temp_data")
            // console.log(temp_data)
            temp_data.innerHTML =  `${parseFloat((d.main.temp - 273).toFixed(2))} °C`;

        })
    },1000)