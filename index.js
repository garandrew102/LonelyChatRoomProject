const chatbox = document.querySelector("#chatbox");
const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");

form.addEventListener("submit", formSubmitStructure)
function formSubmitStructure(noRefresh) {
    noRefresh.preventDefault();
    const chatNames = ["Me", "Myself", "I"][Math.floor(Math.random() * 3)];
    Message(chatNames, input.value);
    form.reset();
}


const time = new Date().toLocaleTimeString();

let newMessage = false;
function Message(sender, theText) {
if (!theText.length) return;
newMessage++;

const text = `<ul class = 'message' id = '${newMessage}'>
                <li>${time}</li>
                <li class = "sender">${sender}:</li>
                <li>${theText}</li>
                <li class = "delete" onclick = "deleteMe(${newMessage})">Delete Me</li>
                </ul>`

chatbox.innerHTML += text;
chatbox.scrollTop = chatbox.scrollHeight;
}

function deleteMe(newMessage) {
    const text = document.getElementById(newMessage);
    text.remove();
}

button.addEventListener("click", joke);

function joke() {
fetch("https://api.icndb.com/jokes/random?limitTo=[nerdy]")
.then ((response) => response.json())
.then((json) => Message("This is my joke", json.value.joke));
}
