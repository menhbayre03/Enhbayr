  let firstName = document.getElementById("fname");
  let regExName = /^[A-Z]+/;
  let regExName1 = /[^0-9!@#$%^&* ]/;
  let regExName2 = /[a-zA-Z]$/;
  let regExName3 = /[1-9!@#$%^&* ]/

  firstName.addEventListener('input', () => {
    if(
       regExName.test(firstName.value) === true &&
       regExName1.test(firstName.value) === true&&
       regExName2.test(firstName.value) === true
      ) {
      firstName.style.border = "2px solid green"
      firstName.style.color = "green"
    } else{
      firstName.style.border = "2px solid red"
      firstName.style.color = "red"
    }

    if(firstName.value === ""){
      firstName.style.border = "none"
    }

    if(regExName3.test(firstName.value) === true){
      document.querySelector(".test").style.display = "block"
    } else{
      document.querySelector(".test").style.display = "none"
    }
  })
  
          // Last Name
  let lastName = document.getElementById('lname');
  
  lastName.addEventListener('input', () => {
    if(
      regExName.test(lastName.value) === true&&
      regExName1.test(lastName.value) === true&&
      regExName2.test(lastName.value) === true
        ){
          lastName.style.border = "2px solid green"
          lastName.style.color = "green"
        } else{
          lastName.style.border = "2px solid red"
          lastName.style.color = "red"
  
        }

      if(lastName.value === ""){
        lastName.style.border = "none"
      }

      if(regExName3.test(lastName.value) === true){
        document.querySelector(".test").style.display = "block"
      } else{
        document.querySelector(".test").style.display = "none"
      }
  })
  
  //        // Number
  let Dugaar = document.getElementById("dugaar");
  let regExDugaar1 = /^[0-9]{8}$/g;
  let regExDugaar2 = /[A-Za-z!@#$%^&* ]/
  
  Dugaar.addEventListener('input', () => {
      if(
          regExDugaar1.test(Dugaar.value) === true
        ){
          Dugaar.style.border = "2px solid green"
          Dugaar.style.color = "green"
        } else{
          Dugaar.style.border = "2px solid red"
          Dugaar.style.color = "red"
  
        }

        if(Dugaar.value === ""){
          Dugaar.style.border = "none"
        }

        if(regExDugaar2.test(Dugaar.value) === true){
          document.querySelector(".test1").style.display = "block"
          document.querySelector("p1").innerText = "Зөвхөн тооноос бүрдсэн байх."
        } else{
          document.querySelector(".test1").style.display = "none"
        }

        if(Dugaar.value.length > 8){
          document.querySelector(".test1").style.display = "block"
          document.querySelector("p1").innerText = "Зөвхөн 8 оронтой байх."
        }
  })
  
  //         // Email
  let Email = document.getElementById('email');
  const regExEmail = /..@gmail.com$/;
  const regExEmail1 = /[^ ]/;
  Email.addEventListener('input', () => {
      if(
          regExEmail.test(Email.value) === true&&
          regExEmail1.test(Email.value) === true
      ){
          Email.style.border = "2px solid green"
          Email.style.color = "green"
      } else{
          Email.style.border = "2px solid red"
          Email.style.color = "red"
  
      }

      if(Email.value === ""){
        Email.style.border = "none"
      }
  })
  
  //         // Password
  let Password = document.getElementById('password');
  const regExPass = /[^a-zA-z0-9]/;
  const regExPass1 = /[a-zA-z0-9]/;
  const regExPass2 = /[^ ]/;
  
  Password.addEventListener('input', () => {
  if(
      regExPass.test(Password.value) === true&&
      regExPass1.test(Password.value) === true&&
      regExPass2.test(Password.value) === true
      ){
          Password.style.border = "2px solid green"
          Password.style.color = "green"
      } else{
          Password.style.border = "2px solid red"
          Password.style.color = "red"
          
      };

      if(Password.value === ""){
        Password.style.border = "none"
      }
  });

  
  const Sign = document.querySelector(".sign");
  let err = document.querySelector(".test")
  Sign.addEventListener("click", () => {

    if(firstName.value === ""&&lastName.value === ""&&Dugaar.value === ""&&Email.value === ""&&Password.value === ""){
      alert("Бүртгэлийн хуудсаа бөглөнө үү.")
    }

    if(firstName.style.border === "2px solid red" || lastName.style.border === "2px solid red" || Dugaar.style.border === "2px solid red" || Email.style.border === "2px solid red" || Password.style.border === "2px solid red"){
       alert("Бүртгэлийн хуудсаа үнэн зөв гүйцэт бөглөнө үү.")
    }

    if(firstName.style.border === "2px solid green" || lastName.style.border === "2px solid green" || Dugaar.style.border === "2px solid green" || Email.style.border === "2px solid green" || Password.style.border === "2px solid green"){
      alert("Бүртгэлийн хуудсаа үнэн зөв гүйцэт бөглөнө үү.")
   }

    let local = document.getElementById("fname").value;  
    let local1 = document.getElementById("lname")  
    let local2 = document.getElementById("dugaar")  
    let local3 = document.getElementById("email")  
    let local4 = document.getElementById("password")
    console.log(local)  
    
    if(firstName.style.border === "2px solid green" && lastName.style.border === "2px solid green" && Dugaar.style.border === "2px solid green" && Email.style.border === "2px solid green" && Password.style.border === "2px solid green"){
      window.location.href="login.html"
    }

  })
