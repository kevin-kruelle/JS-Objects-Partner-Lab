
function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let age = document.getElementById('age').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value
    let form1 = new FormData(fname, lname, age, password, confirmPassword);
    console.log(form1);
  }

  let data = document.querySelector('form').addEventListener('submit', logSubmit);


class FormData {
     constructor(firstName, lastName, age, password, confirmPassword) {
         this.firstName = firstName;
         this.lastName = lastName;
         this.age = age;
         this.password = password;
         this.confirmPassword = confirmPassword;
     }
 }




