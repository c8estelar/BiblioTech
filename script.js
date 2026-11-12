function login(){

    email = document.getElementById("email");
    password = document.getElementById("password"); 

    if(email.value == "admin@biblioweb.test" &&password.value == "Admin123"){
        window.location ="./index.html"
        sessionStorage("auth","true")
    }else{
        console.log("credenciales incorrectas")
    }
} 
function verificarlogin(){
    autenticacion = sessionStorage.getItem("auth")
    if(autenticacion != "true");
    window.location = "./catalogo.html"; 
}
function salir(){
    sessionStorage.clear();
    window.location = "./index.html"
}