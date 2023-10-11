// Ao Carregar o DOM
window.document.addEventListener('DOMContentLoaded', () => {
  
  // Botões
  const btnOff = document.getElementById('btn-off');
  const btnOn = document.getElementById('btn-on');

  // Lampadas images
  const lampadaApagada = document.getElementById('lampada-apagada');
  const lampadaAcesa20Volts = document.getElementById('lampada-acesa-20');
  const lampadaAcesa50Volts = document.getElementById('lampada-acesa-50');
  const lampadaAcesa100Volts = document.getElementById('lampada-acesa-100');


  let contador = 2;

  function atualizarEstado() {
    // Valor do Range [0 - 100]
    const valorSelecionado = parseInt(document.getElementById('valorSelecionado').textContent);

    // Oculta todas as imagens antes de exibir a desejada
    lampadaApagada.style.display = 'none';
    lampadaAcesa20Volts.style.display = 'none';
    lampadaAcesa50Volts.style.display = 'none';
    lampadaAcesa100Volts.style.display = 'none';

    // Se for par = apagado || Se for ímpar = ligado
    if (contador % 2 === 1) {
        btnOn.style.display = 'block';
        btnOff.style.display = 'none';

        if (valorSelecionado >= 90) {
          lampadaAcesa100Volts.style.display = 'block';
        } 
        else if (valorSelecionado >= 21) {
          lampadaAcesa50Volts.style.display = 'block';
        } else if (valorSelecionado >= 1) {
          lampadaAcesa20Volts.style.display = 'block';
        } else {
            lampadaApagada.style.display = 'block';
        }
    } else {
        btnOff.style.display = 'block';
        btnOn.style.display = 'none';
        lampadaApagada.style.display = 'block';
    }
  }

  btnOff.addEventListener('click', () => {
      contador--;
      atualizarEstado();
  });

  btnOn.addEventListener('click', () => {
      contador++;
      atualizarEstado();
  });

  // Toda vez que eu alterar o range [0-100] o valorSelecionado vai mudar, e a cada chamada da função, o estado do componente também muda
  const inputRange = document.getElementById('controlador');
  const valorSelecionado = document.getElementById('valorSelecionado');

  inputRange.addEventListener('input', () => {
      valorSelecionado.textContent = inputRange.value;
      atualizarEstado();
  });

  // Chame a função inicialmente para definir o estado inicial
  atualizarEstado();
});
