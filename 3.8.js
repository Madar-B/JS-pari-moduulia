let nroA = parseInt(document.getElementById("num1").value);
let nroB = parseInt(document.getElementById("num2").value);

const option = document.getElementById("operation");


option.addEventListener("change", function(event) {
  const selectedValue = event.target.value;
  let result = 0;

  switch (selectedValue) {
    case "lisays":
      result = nroA + nroB;
      break;
    case "jako":
      result = nroA / nroB;
      break;
    case "kerto":
      result = nroA * nroB;
      break;
    default:
      result = "Valitse toimipide";
  }

  document.getElementById("result").textContent = 'Tulos ' + result;
});
