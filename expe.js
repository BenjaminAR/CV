var modal = document.querySelector('.fondo'); // selecciona el valor dde .fondo en el documento
var closeButton = document.querySelector('.fondo .close'); // selecciona los valores dde .close .fondo en el documento
var anchors = document.querySelectorAll('.caja a'); // selecciona el valor dde .caja en el documento y crea a "a"

closeButton.addEventListener('click', function(e){ //se crea un evento 
  e.preventDefault(); // detener la accion del evento 
  modal.style.display = 'none';  //La segunda imagen no es visible y el espacio es ocupado por el contenido que está a continuación
})
anchors.forEach(a => a.addEventListener('click', function(e){ //metodo que afecta directamente a "caja" y "a"
  e.preventDefault(); //detiene la accion del evento 
  var img = this.querySelector('img');   //de any seleccion la img
  var modalImg = modal.querySelector('img'); //se proporciona un nuevo valor a los img del fondo
  modalImg.src = img.src; //cambia la imagen de div fondo por la de ul  a
  modal.style.display = 'flex'; //centara lo que se muestra en el display
}));// en este caso las imagenes aumentan su escala en un numero un este caso 4