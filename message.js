const messages = document.querySelector("#messages");
const textbox = document.querySelector("#textbox");
const button = document.querySelector("#button");

button.addEventListener('click', () => {
    let list = document.createElement('li');
    list.innerHTML = textbox.value;
    messages.appendChild(list);
    textbox.value = '';
})