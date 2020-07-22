// Text area
const textArea = document.querySelector('#text');
// Div que vai receber o elemento p já com o texto transformado
const result = document.querySelector('#result');
// Botões que irão atribuir o tipo de transformação ex. uppercase
const buttons = document.querySelectorAll('.button');
// Elemento que vai receber o texto transformado
const p = document.createElement('p');
// Botão para limpar caixa de texto
const clear = document.querySelector('#clear');

// Atribui a classe com as estilizações para o elemento
p.classList.add('p1');

result.appendChild(p);


buttons[0].addEventListener('click', () => textTransform('uppercase'));

buttons[1].addEventListener('click', () => textTransform('lowercase'));

buttons[2].addEventListener('click', () => textTransform('capitalize'));

buttons[3].addEventListener('click', () => copyToClipboard());

clear.addEventListener('click', () => clearText());

// Transforma o texto com base no atributo recebido
function textTransform(transform) {
  // Limpa o elemento toda vez que for chamado  
  p.innerHTML = '';
  // Cria o texto que vai ser colocado no elemento p
  let text = document.createTextNode(
    textArea.value.toLowerCase()
      .toString()
      .replace(/-/g, ' ')
  );

  p.appendChild(text);
  p.style.textTransform = transform;
};

// Função que limpa caixa de texto
function clearText() {
  textArea.value = '';
}

// Função para copiar texto transformado
function copyToClipboard() {
  var from = document.querySelector('.p1');
  var range = document.createRange();
  window.getSelection().removeAllRanges();
  range.selectNode(from);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}
