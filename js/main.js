

//create instance of moment object
var MomentDate = moment();

var momentDateContainer = document.getElementById('displayMoment');

//display value of momement object on page in format D-M-YYYY
momentDateContainer.innerHTML = MomentDate.format('D-M-YYYY');

/* --------------------------------------------------------------- */

//create instance of JS Date object
var JsDate = new Date();

//setup formating variables
var jsDateContainer = document.getElementById('displayJsDate');
var jsDay = JsDate.getDate();
var jsMonth = JsDate.getMonth() + 1;
var jsYear = JsDate.getFullYear();

//display new format on page in format D-M-YYYY
jsDateContainer.innerHTML = jsDay + '-' + jsMonth + '-' + jsYear;
