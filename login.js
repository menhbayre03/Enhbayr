let phone = document.getElementById("phone");
let pass = document.getElementById("pass");
let sign = document.querySelector(".sign");
sign.addEventListener('click', () => {
    if(phone.value === "" || pass.value === ""){
        alert("Бүртгэлийн хуудсаа үнэн зөв гүйцэт бөглөнө үү...")
    }

    users = JSON.parse(localStorage.users)
    console.log(users)
    for(var i=0; i<users.length; i++){
        if(users[i].Dugaar == phone.value && users[i].Password == pass.value){
            window.location.href = "./burtgegdlee.html"
        } else{
            alert("Eror")
        }
    }
})