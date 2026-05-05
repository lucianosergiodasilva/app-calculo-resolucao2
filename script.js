function calcularResolucao() {
  // Pegando os valores
  const comprimentoInput = document.getElementById("comprimento").value;
  const alturaInput = document.getElementById("altura").value;
  const placaInput = document.getElementById("placa").value;
  const comprimentoDaPlacaInput = document.getElementById("comprimentoDaPlaca").value;
  const alturaDaPlacaInput = document.getElementById("alturaDaPlaca").value;
  const botaoCalcular = document.getElementById("botaoCalcular");
  const resultado = document.getElementById("resultado");

  // Cálculo do painel em metros quadrados
  const area = comprimentoInput * alturaInput;

  // Resolução de uma placa
  const resolucaoComprimentoPlacaEmPixel = Math.round(comprimentoDaPlacaInput / placaInput);
  const resolucaoAlturaPlacaEmPixel = Math.round(alturaDaPlacaInput / placaInput);

  // Quantidade de placas para formar o painel
  // 1- Converter a largura e altura do painel em milímetros
  // 2- Obter a quantidade total de módulos
  const quantidadePlacasComprimento = (comprimentoInput * 1000) / comprimentoDaPlacaInput;
  const quantidadePlacasAltura = (alturaInput * 1000) / alturaDaPlacaInput;
  const totalModulos = quantidadePlacasComprimento * quantidadePlacasAltura;

  // Resolução do painel
  const resolucaoComprimentoPainel = quantidadePlacasComprimento * resolucaoComprimentoPlacaEmPixel;
  const resolucaoAlturaPainel = quantidadePlacasAltura * resolucaoAlturaPlacaEmPixel;

  // Validação simples
  // 1- Se os campos não forem preenchidos, mostrará uma mensagem
  if (!comprimentoInput || !alturaInput || !placaInput || !comprimentoDaPlacaInput || !alturaDaPlacaInput) {
    resultado.innerHTML = `<h3>⚠ Preencha todos os campos.</h3>`;
    return;
  }

  // Exibe os valores na tela
  resultado.innerHTML = `
    <h3 style="margin-bottom: 10px;">Resumo do projeto</h3>
    <p>Para um painel de ${comprimentoInput}m x ${alturaInput}m (${area}m²):</p>
    <p>A resolução recomendada é:</p>
    <strong>${resolucaoComprimentoPainel}px (L) x ${resolucaoAlturaPainel}px (A)</strong>
    <p style="font-size: 0.8rem; color: #94a3b8; margin-top: 15px;">
        Configuração: ${quantidadePlacasComprimento} x ${quantidadePlacasAltura} módulos (Total: ${totalModulos})
    </p>
`;

  resultado.classList.add("active");
}
