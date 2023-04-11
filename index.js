function addingEventListener() {
    const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}
// document.querySelector('#button').addEventListener
// ('click', () => alert('I was clicked'))
addingEventListener();
