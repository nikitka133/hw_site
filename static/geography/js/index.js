const salaryCanvas = document.getElementById('salary'); 
const vacancyCanvas = document.getElementById('vacancy');

const salaryCtx = salaryCanvas.getContext('2d');
const vacancyCtx = vacancyCanvas.getContext('2d');

// salary chart

cityElements = document.getElementsByClassName('city_salary');
let citiesSalary = [];
for (var i = 0; i < cityElements.length; i++) {
    citiesSalary.push(cityElements[i].textContent);
}


salaryCtx.fillStyle = "black"; 
salaryCtx.lineWidth = 2.0;
salaryCtx.beginPath();
salaryCtx.moveTo(30, 10);
salaryCtx.lineTo(30, 460);
salaryCtx.lineTo(500, 460);
salaryCtx.stroke();

salaryCtx.fillStyle = "black";
for(let i = 0; i < 6; i++) { 
    salaryCtx.fillText((5 - i) * 20 + "", 4, i * 80 + 60); 
    salaryCtx.beginPath(); 
    salaryCtx.moveTo(25, i * 80 + 60); 
    salaryCtx.lineTo(30, i * 80 + 60); 
    salaryCtx.stroke(); 
}

for(var i=0; i<citiesSalary.length; i++) {
    if (i<citiesSalary.length/2){
        salaryCtx.fillText(citiesSalary[i], 50 + i*30, 495-i*5.5); 
    }else{
        salaryCtx.fillText(citiesSalary[i], 50 + i*30, 495+(i-citiesSalary.length)*5.5);         
    }
}

salaryElements = document.getElementsByClassName('salary');
let salaryData = [];
for (var i = 0; i < salaryElements.length; i++) {
    salaryData.push(salaryElements[i].textContent);
}

salaryCtx.fillStyle = "green"; 
for(var i=0; i<salaryData.length; i++) { 
    var dp = salaryData[i]; 
    salaryCtx.fillRect(60 + i*30, 460-dp*5 , 5, dp*5); 
}

// vacancy chart

cityElements = document.getElementsByClassName('city_vacancy');
let citiesVacancy = [];
for (var i = 0; i < cityElements.length; i++) {
    citiesVacancy.push(cityElements[i].textContent);
}


vacancyCtx.fillStyle = "black"; 
vacancyCtx.lineWidth = 2.0;
vacancyCtx.beginPath();
vacancyCtx.moveTo(30, 10);
vacancyCtx.lineTo(30, 460);
vacancyCtx.lineTo(500, 460);
vacancyCtx.stroke();

vacancyCtx.fillStyle = "black";
for(let i = 0; i < 6; i++) { 
    vacancyCtx.fillText((5 - i) * 20 + "", 4, i * 80 + 60); 
    vacancyCtx.beginPath(); 
    vacancyCtx.moveTo(25, i * 80 + 60); 
    vacancyCtx.lineTo(30, i * 80 + 60); 
    vacancyCtx.stroke(); 
}

for(var i=0; i<citiesVacancy.length; i++) {
    if (i<citiesVacancy.length/2){
        vacancyCtx.fillText(citiesVacancy[i], 50 + i*30, 495-i*5.5); 
    }else{
        vacancyCtx.fillText(citiesVacancy[i], 50 + i*30, 495+(i-citiesVacancy.length)*5.5);         
    }
}

vacancyElements = document.getElementsByClassName('vacancy');
let vacancyData = [];
for (var i = 0; i < vacancyElements.length; i++) {
    vacancyData.push(vacancyElements[i].textContent);
}

vacancyCtx.fillStyle = "blue"; 
for(var i=0; i<vacancyData.length; i++) { 
    var dp = vacancyData[i]; 
    vacancyCtx.fillRect(60 + i*30, 460-dp*5 , 5, dp*5); 
}