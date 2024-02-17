
document.addEventListener("DOMContentLoaded", function() {
    var botonMostrarLista = document.getElementById("mostrarLista");
    var listaDesplegable = document.getElementById("listaDesplegable");
  
    botonMostrarLista.addEventListener("click", function() {
      listaDesplegable.style.display = listaDesplegable.style.display === "block" ? "none" : "block";
    });
  
    listaDesplegable.addEventListener("mouseleave", function() {
      listaDesplegable.style.display = "none";
    });
  });