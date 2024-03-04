import { productos } from "./datos.js";

export function cargarInformacionALasCards() {
    const cards = document.querySelectorAll('.container .card');
    for (let i = 0; i <= cards.length; i++) {
        cards[i].querySelector('img').src = productos[i].getUbicacionDeLaImagen();
        cards[i].querySelector('.card-title').textContent = productos[i].getTitulo();
        cards[i].querySelector('.nombreDelVendedor').textContent = productos[i].getVendedor().getNombre();
        cards[i].querySelector('.direccionDelVendedor').textContent = productos[i].getVendedor().getDireccion();        
        cards[i].querySelector('.precio').textContent = `$${productos[i].getPrecio()}`;
        cards[i].querySelector('.precioDeOferta').textContent = `$${productos[i].getPrecioDeOferta()}`;
    }
}