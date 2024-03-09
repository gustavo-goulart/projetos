function adicionarCaracter(caracter) {
  const valorDisplay = document.querySelector(".display").value;

  document.querySelector(".display").value = valorDisplay + caracter;
}

function limpaTela() {
  document.querySelector(".display").value = "";
}

function calcular() {
  const valorDisplay = document.querySelector(".display").value;

  if (valorDisplay) {
    // verifica se a expressão contém uma divisão por zero
    if (valorDisplay.includes("/0")) {
      alert("Não é possível fazer divisão por zero!");
      clean();
    } else {
      // realiza a operação
      document.querySelector(".display").value = eval(valorDisplay); //calcula
    }
  }
}

function inverterNumero() {
  const valorDisplay = document.querySelector(".display").value;

  document.querySelector(".display").value = valorDisplay * -1;
}
