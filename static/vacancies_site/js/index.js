const mainPage = document.getElementById('main');
const demandPage = document.getElementById('demand');
const geographyPage = document.getElementById('geography');
const skillsPage = document.getElementById('skills');
const last_vacanciesPage = document.getElementById('last_vacancies');
const dropperButton = document.getElementById('dropper');

// button click event

mainPage.addEventListener(
	'click', function() {
		window.location.href = '/';
	}
);

demandPage.addEventListener(
	'click', function() {
		window.location.href = '/demand';
	}
);

geographyPage.addEventListener(
	'click',  function() {
		window.location.href = '/geography';
	}
);

skillsPage.addEventListener(
	'click', function() {
		window.location.href = '/skills';
	}
);

last_vacanciesPage.addEventListener(
	'click',  function() {
		window.location.href = '/last_vacancies';
	}
);


// drop down menu logic

function ToggleShower() {
    dropperButton.classList.toggle("show");
}

// if user clicks outside of dropdown content
window.onclick = function(event) {
  	if (!event.target.matches('.dropdown-menu')) {

    	var dropdowns = document.getElementsByClassName("dropdown-buttons");
    	var i;
    	for (i = 0; i < dropdowns.length; i++) {
      		var openDropdown = dropdowns[i];
      		if (openDropdown.classList.contains('show')) {
       			openDropdown.classList.remove('show');
      		}
    	}
  	}
}