function agregar(value) {
  document.getElementById("pantalla").value += value;
}

function calcular() {
  try {
    let result = eval(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = result;
  }catch(error) {
    document.getElementById("pantalla").value = "Error";
  }
}

function limpiar() {
  document.getElementById("pantalla").value = "";
}