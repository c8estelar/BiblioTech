function login(){

    email = document.getElementById("email");
    password = document.getElementById("password"); 

    if(email.value == "admin@biblioweb.test" &&password.value == "Admin123"){
        window.location ="./index.html"
    }else{
        console.log("credenciales incorrectas")
    }
}