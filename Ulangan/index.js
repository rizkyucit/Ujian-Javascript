function multiply() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 * num2;
  document.getElementById("output").innerHTML = result;
}

function divide() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  if (num2 == 0) {
    document.getElementById("output").innerHTML = "Tidak bisa dibagi 0";
  } else {
    var result = num1 / num2;
    document.getElementById("output").innerHTML = result;
  }
}