// Registration

function register() {
    uname=reg_name.value;
    email=reg_email.value;
    phno=reg_phn.value;
    quali=reg_quali.value;
    pswd=reg_pswd.value;


stuDetails={
    uname,
    email,
    phno,
    quali,
    pswd
}

if(email in localStorage){
    alert('user already present');
}
else{
 
       if(ValidatePh(phno)){
        if(ValidateEmail(email)){
            localStorage.setItem(email,JSON.stringify(stuDetails));
            alert('Registered successfully');
            window.location.href="./index.html";
    
        }
        else{
            alert("Please provide valid Email ID!")
    
        }

    }else{
        alert("Provide valid Phone Number!")
    }
    
}
}

// Login

function login() {
    email=login_email.value;
    pswd=login_pswd.value;
        
    if (email in localStorage) {
        stuDetails=JSON.parse(localStorage.getItem(email));
    

     if (pswd==stuDetails.pswd) {
        alert('Login successful');
        window.location.href='./home.html';  
     }
     else{
        alert('Incorrect password');
     }
    }
    else{
        alert('Invalid email id')
    }
}

// Logout

function logout() {
    window.location="/index.html";
}                                                   


function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
  
      return true;
  
    } else {
  
      return false;
  
    }
  
  }


  function ValidatePh(input){
    if(input.length===10){
        return true;
    }
    else{
        return false;
    }
  }

