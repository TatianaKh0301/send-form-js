const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contact') [0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Clicked");

    let ebody = `
    <b>Name:</b>${fname.value}&nbsp;${lname.value}
    <br>
    <b>Email:</b>${email.value}
    <br>
    <b>Phone number:</b>${phone.value}
    <br>
    <b>Message:</b>${message.value}
    `
    // Email code
    Email.send({
        SecureToken : "bb59fcdb-6741-40ac-95d6-3cd1c3dc1093",
        To : 'tatyana.kharlamova@aysal.com.ua',
        From : "testtkh0301@gmail.com",
        Subject : "Testing email" + email.value,
        Body : ebody
    }).then(
      message => alert("email was sending"),      
      submit.reset()
    );
    
})