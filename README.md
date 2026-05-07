# Calculadora de Dimensionamento de Resolução para Painéis de LED (Estudo de Caso)

<p align="center">
  <img width="1200" height="600" alt="demonstracao-calculadora" src="https://github.com/user-attachments/assets/87f4e4c7-43df-451e-b7bd-51d11eb59332" />
</p>

## Sobre o Projeto

Este projeto consiste em uma calculadora web interativa desenvolvida como um estudo de caso para resolver um problema comum no planejamento e instalação de painéis de LED: o dimensionamento exato da resolução com base nas características físicas e técnicas do painel.

👀 <a href="https://lucianosergiodasilva.github.io/app-calculo-resolucao2/" target="_blank">Clique aqui para ver o projeto funcionando</a>

## Problema que o Projeto Resolve

No contexto de projetos de painéis de LED, o cálculo manual da resolução recomendada pode ser complexo e propenso a erros. Ele envolve considerar as dimensões físicas desejadas para o painel (comprimento e altura), o "pixel pitch" (a distância entre os centros dos LEDs), e as dimensões físicas das placas modulares individuais que formam o painel completo.

Se esses cálculos não forem feitos corretamente, o resultado pode ser um painel com resolução insuficiente para a aplicação desejada ou uma configuração física de placas que não preenche o espaço planejado de forma otimizada.

**A solução:** Esta calculadora automatiza esse processo. O usuário fornece as seguintes informações através de um formulário:

-   **Comprimento do Painel:** A dimensão horizontal total desejada (em metros).
-   **Altura do Painel:** A dimensão vertical total desejada (em metros).
-   **Pixel Pitch:** A distância entre pixels do módulo LED (em milímetros).
-   **Comprimento da Placa:** A dimensão horizontal de cada placa modular individual (em milímetros).
-   **Altura da Placa:** A dimensão vertical de cada placa modular individual (em milímetros).

## Como Funciona (Estudo de Caso)

O projeto foi construído como um exercício de front-end para demonstrar a manipulação de dados e a criação de lógica de negócios no navegador.

O funcionamento simulado no GIF acima mostra as etapas:
1.  O usuário preenche os campos do formulário (que são obrigatórios).
2.  Clica no botão "Calcular Resolução".
3.  A aplicação JavaScript processa os dados e, instantaneamente, exibe um resumo com a **Resolução Recomendada (L x A)** e a **Configuração Física (número de módulos e total)**.

## Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Este projeto foi construído utilizando as seguintes tecnologias fundamentais do desenvolvimento web:

-   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5 logo" width="20" height="20"> **HTML5:** Para a estrutura semântica do formulário e dos elementos de exibição de resultado.
-   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3 logo" width="20" height="20"> **CSS3:** Para a estilização visual moderna, incluindo o uso de Flexbox/Grid para o layout e o efeito de desfoque no fundo do formulário.
-   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript logo" width="20" height="20"> **JavaScript:** Para a lógica do formulário, validação de campos obrigatórios, os cálculos matemáticos e a renderização dinâmica do resumo do projeto.

## Pré-requisitos e Execução

Como é um projeto puramente front-end, não há necessidade de um servidor backend. Basta abrir o arquivo `index.html` em qualquer navegador da web moderno para utilizá-lo.

---

Este projeto é um exemplo prático de como transformar uma necessidade de cálculo técnico em uma ferramenta de software simples e útil.
