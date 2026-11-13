function login(){

    email = document.getElementById("email");
    password = document.getElementById("password"); 

    if(email.value == "admin@biblioweb.test" &&password.value == "Admin123"){
        window.location ="./admin.html"
        sessionStorage.setItemgit("auth","true")
    }else{
        console.log("credenciales incorrectas")
    }
} 
function verificarlogin(){
    autenticacion = sessionStorage.getItem("auth")
    if(autenticacion != "true");
    window.location = "./login.html";
}
function salir(){
    sessionStorage.clear();
    window.location = "../index.html"
}