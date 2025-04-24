const taxas = {
  USD: 0.20, // 1 BRL = 0.20 USD
  EUR: 0.18  // 1 BRL = 0.18 EUR
};

function converter() {
  const valor = parseFloat(document.getElementById("valor").value);
  const moeda = document.getElementById("moeda").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(valor) || valor <= 0) {
    resultado.textContent = "Digite um valor válido.";
    return;
  }

  const taxa = taxas[moeda];
  const convertido = (valor * taxa).toFixed(2);
  resultado.textContent = `${valor} BRL = ${convertido} ${moeda}`;
}
