let input;
input = document.getElementById("input")
function addingEventListener() {
    input.addEventListener('click', event => input.innerText = 'Hello')
}

addingEventListener()