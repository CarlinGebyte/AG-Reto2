let button = document.getElementById('7');

button.addEventListener('click', e => {
    e.preventDefault();
    console.log(button.value);
})