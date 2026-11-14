function login() {

    email = document.getElementById("email");
    password = document.getElementById("password");

    if (email.value == "admin@biblioweb.test" && password.value == "Admin123") {
        window.location.href = "./admin.html"
        sessionStorage.setItem("auth", "true")
    } else {
        console.log("credenciales incorrectas")
    }
}
function verificarlogin() {
    autenticacion = sessionStorage.getItem("auth")
    if (autenticacion != "true")
        window.location.href = "./login.html";
}
function salir() {
    cerrar = document.getElementById("cerrar-sesion");
    sessionStorage.clear();
    window.location.href = "./index.html";
}

const botoncambiar = document.getElementById("botontema")

 const clavetema = "tema";
    const temaguardado = localStorage.getItem(clavetema) || "light";
    document.documentElement.setAttribute("data-bs-theme", temaguardado)
    
botoncambiar.addEventListener("click", function cambiartema() {
    
    const temaactual = document.documentElement.getAttribute("data-bs-theme");
    const nuevotema = temaactual === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", nuevotema);
   

})

    