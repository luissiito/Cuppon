export default class Vendedor{
    constructor(){
        this.nombre = 'NO ASIGNADO';
        this.direccion = 'NO ASIGNADO';
    }

    getNombre(){
        return this.nombre;
    }
    getDireccion(){
        return this.direccion;
    }

    setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    setDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion;
    }
}