/*
Crear una función que, dado un objeto props, devuelva un template string de un componente picture cuya imagen de avatar es
https://randomuser.me/api/portraits/women/1.jpg cambiando el numero 1 de antes de jpg por el id de props y poniendo dentro 
del picture un texto en negrita con el atributo nombre de props (Podéis añadir mas cosas que queráis al componente). 
Hacer en un archivo css los estilos para que el componente se vea bonito. Añadir dicho componente al body del html. 
Añadirle a cada componente un evento on click que, al pinchar en su imagen, se le añada o quite la clase "disabled" que 
será una clase con opacidad 0.3.

Una vez hagáis esto con js vanilla, investigar en la documentación el concepto "web components" y la     
(usad importad el cdn desde unpkg, no se permite el uso de node)
*/
const  generateProp = (props) => `<picture><img src=https://randomuser.me/api/portraits/${props.categoria}/${props.id}.jpg class=avatar ><h4>${props.nombre}<h4></picture>`;
const container = document.querySelector(".container");

let names = ["Pablo","Juanbe","Jurado","Marcelo","Joaquin","Miguel"];
let categories = ["women","men","lego"];
for(let i = 0; i<6; i++){
    let idP = parseInt(Math.floor(Math.random()*6));
    let idN = parseInt(Math.floor(Math.random()*6));
    const prop = {categoria:categories[parseInt(Math.floor(Math.random()*categories.length))], id:idP,nombre:names[idN]};
    console.log(idP);
    container.innerHTML += (generateProp(prop));
}
const img = document.querySelectorAll(".avatar");
img.forEach(el => el.addEventListener('click', function(){
    el.classList.toggle("disabled");
}))


