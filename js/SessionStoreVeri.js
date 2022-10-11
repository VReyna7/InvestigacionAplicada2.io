if(sessionStorage.getItem('display')){
    let estiloCorreo = document.getElementById('correo');
    let estiloNombre = document.getElementById('nombre');
    let estiloEdad = document.getElementById('edad');
    let divForm = document.getElementById('divForm');
    var nombreh1 = document.getElementById('nombreH2');
    var emailh1 = document.getElementById('emailH2');
    var numeroH2 = document.getElementById('numeroH2');
    var divsito = document.getElementById('divsito');

    estiloCorreo.style.display = sessionStorage.getItem('display');
    estiloNombre.style.display = sessionStorage.getItem('display');
    estiloEdad.style.display = sessionStorage.getItem('display');
    divForm.style.display = sessionStorage.getItem('display');

    divsito.style.display = "flex";
    emailh1.innerHTML = "Tu email en esta sesion es: " + sessionStorage.getItem('email');
    nombreh1.innerHTML = "Tu nombre en esta sesion es: " + sessionStorage.getItem('nombre');
    numeroH2.innerHTML = "Tu edad es de " + sessionStorage.getItem('Edad')+ " años";
}
