const moneyCanvas = document.getElementById('money_chart'); 
const vacanciesCanvas = document.getElementById('vacancies_chart');
const profmoneyCanvas = document.getElementById('profmoney_chart'); 
const profvacanciesCanvas = document.getElementById('profvacancies_chart');


const moneyCtx = moneyCanvas.getContext('2d');
const vacanciesCtx = vacanciesCanvas.getContext('2d');
const profmoneyCtx = profmoneyCanvas.getContext('2d');
const profvacanciesCtx = profvacanciesCanvas.getContext('2d');

const years = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

// money chart

moneyCtx.fillStyle = "black"; 
moneyCtx.lineWidth = 2.0;
moneyCtx.beginPath();
moneyCtx.moveTo(30, 10);
moneyCtx.lineTo(30, 460);
moneyCtx.lineTo(500, 460);
moneyCtx.stroke();

moneyCtx.fillStyle = "black";
for(let i = 0; i < 6; i++) { 
    moneyCtx.fillText((5 - i) * 20 + "", 4, i * 80 + 60); 
    moneyCtx.beginPath(); 
    moneyCtx.moveTo(25, i * 80 + 60); 
    moneyCtx.lineTo(30, i * 80 + 60); 
    moneyCtx.stroke(); 
}

for(var i=0; i<10; i++) { 
    moneyCtx.fillText(years[i], 50+ i*50, 475); 
}

moneyElements = document.getElementsByClassName('money_chart');
let moneyData = [];
for (var i = 0; i < moneyElements.length; i++) {
    moneyData.push(moneyElements[i].textContent);
}

moneyCtx.fillStyle = "green"; 
for(var i=0; i<moneyData.length; i++) { 
    var dp = moneyData[i]; 
    moneyCtx.fillRect(60 + i*50, 460-dp*5 , 5, dp*5); 
}

// vacancies chart

vacanciesCtx.fillStyle = "black"; 
vacanciesCtx.lineWidth = 2.0;
vacanciesCtx.beginPath();
vacanciesCtx.moveTo(30, 10);
vacanciesCtx.lineTo(30, 460);
vacanciesCtx.lineTo(500, 460);
vacanciesCtx.stroke();

vacanciesCtx.fillStyle = "black";
for(let i = 0; i < 6; i++) { 
    vacanciesCtx.fillText((5 - i) * 20 + "", 4, i * 80 + 60); 
    vacanciesCtx.beginPath(); 
    vacanciesCtx.moveTo(25, i * 80 + 60); 
    vacanciesCtx.lineTo(30, i * 80 + 60); 
    vacanciesCtx.stroke(); 
}

for(var i=0; i<10; i++) { 
    vacanciesCtx.fillText(years[i], 50+ i*50, 475); 
}

vacanciesElements = document.getElementsByClassName('money_chart');
let vacanciesData = [];
for (var i = 0; i < vacanciesElements.length; i++) {
    vacanciesData.push(vacanciesElements[i].textContent);
}

vacanciesCtx.fillStyle = "blue"; 
for(var i=0; i<vacanciesData.length; i++) { 
    var dp = vacanciesData[i]; 
    vacanciesCtx.fillRect(60 + i*50, 460-dp*5 , 5, dp*5); 
}

// prof money chart

profmoneyCtx.fillStyle = "black"; 
profmoneyCtx.lineWidth = 2.0;
profmoneyCtx.beginPath();
profmoneyCtx.moveTo(30, 10);
profmoneyCtx.lineTo(30, 460);
profmoneyCtx.lineTo(500, 460);
profmoneyCtx.stroke();

profmoneyCtx.fillStyle = "black";
for(let i = 0; i < 6; i++) { 
    profmoneyCtx.fillText((5 - i) * 20 + "", 4, i * 80 + 60); 
    profmoneyCtx.beginPath(); 
    profmoneyCtx.moveTo(25, i * 80 + 60); 
    profmoneyCtx.lineTo(30, i * 80 + 60); 
    profmoneyCtx.stroke(); 
}

for(var i=0; i<10; i++) { 
    profmoneyCtx.fillText(years[i], 50+ i*50, 475); 
}

profmoneyElements = document.getElementsByClassName('money_chart');
let profmoneyData = [];
for (var i = 0; i < profmoneyElements.length; i++) {
    profmoneyData.push(profmoneyElements[i].textContent);
}

profmoneyCtx.fillStyle = "red"; 
for(var i=0; i<profmoneyData.length; i++) { 
    var dp = profmoneyData[i]; 
    profmoneyCtx.fillRect(60 + i*50, 460-dp*5 , 5, dp*5); 
}

// prof vacancies chart

profvacanciesCtx.fillStyle = "black"; 
profvacanciesCtx.lineWidth = 2.0;
profvacanciesCtx.beginPath();
profvacanciesCtx.moveTo(30, 10);
profvacanciesCtx.lineTo(30, 460);
profvacanciesCtx.lineTo(500, 460);
profvacanciesCtx.stroke();

profvacanciesCtx.fillStyle = "black";
for(let i = 0; i < 6; i++) { 
    profvacanciesCtx.fillText((5 - i) * 20 + "", 4, i * 80 + 60); 
    profvacanciesCtx.beginPath(); 
    profvacanciesCtx.moveTo(25, i * 80 + 60); 
    profvacanciesCtx.lineTo(30, i * 80 + 60); 
    profvacanciesCtx.stroke(); 
}

for(var i=0; i<10; i++) { 
    profvacanciesCtx.fillText(years[i], 50+ i*50, 475); 
}

profvacanciesElements = document.getElementsByClassName('money_chart');
let profvacanciesData = [];
for (var i = 0; i < profvacanciesElements.length; i++) {
    profvacanciesData.push(profvacanciesElements[i].textContent);
}

profvacanciesCtx.fillStyle = "yellow"; 
for(var i=0; i<profvacanciesData.length; i++) { 
    var dp = profvacanciesData[i]; 
    profvacanciesCtx.fillRect(60 + i*50, 460-dp*5 , 5, dp*5); 
}