let input = document.getElementById("input")
// let post = document.querySelector(".post")
// let poster = document.querySelector(".poster")
// input.addEventListener('click', () => {
  // setTimeout(() => {
    // post.style.display = "block"
    // poster.style.display = 'none'
//   }, 100);
// })

const img = document.querySelector('#img');
const avatar = document.querySelector('#avatar');
const poster_img = document.querySelector('.poster_img');

img.addEventListener('change' ,() =>{
  const image = img.files[0];
  setTimeout( () => {
    avatar.src = URL.createObjectURL(image);
  } , 500)
});

// let write_text = document.getElementById("write_text");
// let enter_post = document.querySelector(".enter_post");
// let poster_text = document.getElementById("poster_text");

// enter_post.addEventListener('click', () => {
//   if(write_text.value != ""){
//     post.style.display='none';
//     poster.style.display='block';

//     const CreateNewElem = ({ param }) => {

//       const div = document.createElement("div");
//       const text = document.createElement("h2");
//       div.style.backgroundColor = "red"
//       div.style.marginTop = "1rem"

//       text.innerText(param);
//       div.appendChild(text);
//       poster.text = div;
//     };

//     CreateNewElem(write_text.value)

//   } else if(write_text.value === ""){
//     alert("Text oruulna uu.")
//   }
// })

// let impormation_FirstName = document.querySelector('.impormation_firstName');
// let impormation_LastName = document.querySelector('.impormation_lastName');
// let impormation_Phone = document.querySelector('.impormation_phone');
// let impormation_Email = document.querySelector('.impormation_email');
// let impormation_Password = document.querySelector('.impormation_password');
// let header_section_name = document.getElementById('header_section_name');

//  users = JSON.parse(localStorage.users)
// for(var i=0; i<users.length; i++){
//   // if(user[i] === )
//     impormation_FirstName.innerText = "FirstName :" + users[i].firstName;
//     impormation_LastName.innerText = "LastName :" + users[i].lastName;
//     impormation_Phone.innerText = "PhoneNumber :" + users[i].Dugaar;
//     impormation_Email.innerText = "Email :" + users[i].email;
//     impormation_Password.innerText = "Password :" + users[i].Password;
//     header_section_name.innerText = users[i].firstName;
// }


const post = document.getElementById("post");
const contain_post = document.querySelector(".contain_post");
const nameInput = post["name"];

const text = JSON.parse(localStorage.getItem("text")) || [];

const add = (name) => {
  text.push({name});
  
  localStorage.setItem("text", JSON.stringify(text));
  
  return { name };
};

const createElement = ({ name }) => {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  
  h2.innerText = name;
  
  div.append(h2);
  contain_post.appendChild(div);
  
  let clr_btn = document.getElementById("clr_btn")

  clr_btn.addEventListener('click', () => {
    contain_post.remove(div)
    localStorage.removeItem("text")
  })
  
};

text.forEach(createElement);

post.onsubmit = e => {
  e.preventDefault();
  
  const newadd = add(
    nameInput.value,
    );
    
    createElement(newadd);
    
    nameInput.value = "";
  };