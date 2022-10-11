window.addEventListener('load', ()=>{
    let baseDatos;
    //Creando Base de Datos
    let conexion = indexedDB.open('notasDb', 1);

    //funcion anonima para verificar la conexion con la base de datos
    conexion.onsuccess = function(evento){
        baseDatos = evento.target.result;
    }

    conexion.onerror = function(evento){
        document.querySelector('#resultado').innerText = `Error al abrir la base de datos: ${evento.target.errorCode}` ;
    }

    conexion.onupgradeneeded = function(evento){
        baseDatos = evento.target.result;

        //Creando la tabla
        let notas = baseDatos.createObjectStore('notas',{autoIncrement: true});
    }

    document.querySelector('#btnAgregar').addEventListener('click', function(evento){
        let contenido = document.querySelector('#contenido').value;

        //Verificando que el campo tenga un valor
        if(contenido.length){
            //seleccionando el documento a modificar y el tipo de operacion
            let transaccion = baseDatos.transaction(['notas'], 'readwrite');
            //accediendo al documento notas
            let notas = transaccion.objectStore('notas');
            //Creando objeto nota
            let nota = {contenido: contenido};
            //agregando la nota al documento o tabla
            notas.add(nota);

            //verificando el proceso
            transaccion.oncomplete = function(){
                document.querySelector('#resultado').innerText = 'La nota se creo de forma exitosa!!';
            }

            transaccion.onerror = function(evento){
                document.querySelector('#resultado').innerText = `Error al almacenar la nota: ${evento.target.errorCode}`;
            }
        
        }else{
            document.querySelector('#resultado').innerText = 'ERROR.CAMPO VACIO';
        }
    });
});