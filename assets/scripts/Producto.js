
export default class Producto{
    contructor(){
        this.ubicacionDeLaImagen = '...';
        this.titulo = 'NO DISPONIBLE';
        this.vendedor = 'new Vendedor()';
        this.precio = 0;
        this.precioDeOferta = 0;
    }

    getUbicacionDeLaImagen(){
        return this.ubicacionDeLaImagen;
    }
    getTitulo(){
        return this.titulo;
    }
    getVendedor(){
        return this.vendedor;
    }
    getPrecio(){
        return this.precio;
    }
    getPrecioDeOferta(){
        return this.precioDeOferta;
    }

    setUbicacionDeLaImagen(nuevaUbicacionDeLaImagen){
        this.ubicacionDeLaImagen = nuevaUbicacionDeLaImagen;
    }
    setTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }
    setVendedor(nuevoVendedor){
        this.vendedor = nuevoVendedor;
    }
    setPrecio(nuevoPrecio){
        this.precio = nuevoPrecio;
    }
    setPrecioDeOferta(nuevoPrecioDeOferta){
        this.precioDeOferta = nuevoPrecioDeOferta;
    }
}