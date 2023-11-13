const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const error = document.getElementById('error');

const dummyCredential = {
    user:"user@gmail.com",
    password:"1234"
}
localStorage.setItem("user",JSON.stringify(dummyCredential));

function checkValidation(validateInput){
    let user = JSON.parse(localStorage.getItem("user"));
    if(validateInput && user.user === email.value && user.password === password.value){
        alert('login successful')
    }
    else
    {
        error.innerHTML="Enter the correct credential...."
    }
}



form.addEventListener('submit',e=>{
    e.preventDefault();
    checkValidation(validateInputs());
});

function setError(id,message){
    id.placeholder = message;
    id.classList.add('placeholder-red-600');
}

const validateInputs = () =>{
    const validEmail = email.value.trim();
    const validpassword = password.value.trim();

    if(validEmail===''){
        setError(email,"Require the email address.")
    }
    else if(!validateEmail(validEmail))
    {
        setError(email,"Invaild email address")
    }
    if(validpassword === '')
    {
        setError(password,"Require the password.")
    }
    else{
        return true
    }
    
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };