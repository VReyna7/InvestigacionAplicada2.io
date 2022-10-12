//Ejemplo de LocalStorage para La investigacion Aplicada de DAW

const inputColor = document.getElementById('inputColor');
const body = document.body;
inputColor.addEventListener('change', (e)=>{
    const color = e.target.value;
    localStorage.setItem('colorWindow',color);
    body.style.backgroundColor = localStorage.getItem('colorWindow');
});

body.style.backgroundColor = localStorage.getItem('colorWindow');
