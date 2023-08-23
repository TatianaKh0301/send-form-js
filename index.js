const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.getElementsByClassName('form-contact') [0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Clicked");
})