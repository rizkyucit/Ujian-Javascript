var today = new Date();

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth()+1).padStart(2, '0');
var yyyy = today.getFullYear();

document.querySelector("#format1").innerHTML = "mm-dd-yyyy : " + mm + "-" + dd + "-" + yyyy;
document.querySelector("#format2").innerHTML = "mm/dd/yyyy : " + mm + "/" + dd + "/" + yyyy;
document.querySelector("#format3").innerHTML = "dd-mm-yyyy : " + dd + "-" + mm + "-" + yyyy;
document.querySelector("#format4").innerHTML = "dd/mm/yyyy : " + dd + "/" + mm + "/" + yyyy;