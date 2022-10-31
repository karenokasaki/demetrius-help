/* ARQUIVO RESPONSÁVEL PELA MANIPULAÇÃO DO DOM */
/* capturar todos os elementos do dom */

/* 
1º identificar com um seletor o meu elemento html
2º capturar o elemento
*/
const btnInput = document.querySelector("#btn-input");
const inputs = document.querySelector("#inputs");
//console.log(inputs);
btnInput.onclick = () => {
  console.log("cliquei no botão");
  inputs.className = "show exemple1 exempl2";
};

const text = document.querySelector("#text");
/* INNERTEXT deixa você VISUALIZAR o texto que está dentro da tag */
console.log(text.innerText);
/* innerText também permite que você ALTERE o texto de dentro de uma tag */
text.innerText = "Demetrius";

/* innerHTML -> injeta um pedaço de HTML em uma tag */
const ul = document.querySelector("#ul");
/* const items = `
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
`;

ul.innerHTML = items;
 */

const btnTodo = document.querySelector("#btn-todo");
const inputTodo = document.querySelector("#input-todo");

btnTodo.addEventListener("click", () => {
  /* nas tags de INPUT é preciso pegar o VALUE */
  console.log(inputTodo.value);
  /* li -> list item */
  let li = document.createElement("li"); // <li></li>
  li.innerText = inputTodo.value; // <li>Estudar Dom!</li>

  /* pai.appendChild(filho) */
  ul.appendChild(li);
});
