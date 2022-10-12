//Ejemplo de Session Storage para la Investigacion aplicada 2
const boton = document.getElementById('guardar');


const  emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

class Verificaciones{
     veriLetra(letras){
        if(isNaN(letras)){
             this.banderaLetra = true;
        }else{
            this.banderaLetra = false;
        }
    }

    veriCorreo(email){
        if(emailRegex.test(email)){
            this.banderaCorreo = true;
        }else{
           this.banderaCorreo = false;
        }
    }


    veriNumero(numero){
        if(!isNaN(numero)){
            if(numero>1){
                this.banderaNumero = true;
            }else{
                this.banderaNumero = false;
            }
       }else{
           this.banderaNumero = false;
       }
    }

    GetBanderaLetra(){
        return this.banderaLetra;
    }

    GetBanderaEmail(){
        return this.banderaCorreo;
    }

    GetBanderaNumero(){
        return this.banderaNumero;
    }

}




function iniciar(){
    const correo = document.getElementById('correo');
    const nombre = document.getElementById('nombre');
    const edad = document.getElementById('edad');
    const veri = new Verificaciones();
    veri.veriLetra(nombre.value);
    veri.veriCorreo(correo.value);
    veri.veriNumero(edad.value)

    if(veri.GetBanderaLetra() && veri.GetBanderaNumero() && veri.GetBanderaEmail()){
        if(sessionStorage.getItem('nombre') && sessionStorage.getItem('email') && sessionStorage.getItem('Edad')){

        }else{
            sessionStorage.setItem('nombre',nombre.value);
            sessionStorage.setItem('email',correo.value);
            sessionStorage.setItem('Edad',edad.value);
            sessionStorage.setItem('display',"none");
            location.reload();
        }
    }else{
        if(!veri.GetBanderaEmail()){
            alert("Error, El correo tiene un formato incorrecto, debe de ser, ej xxx@xxx.xxx")
        }

        if(!veri.GetBanderaNumero()){
            alert("La edad no puede estar vacio, ni con letras. Tiene que ser mayor a 1");
        }
    }
}


boton.onclick = iniciar;
