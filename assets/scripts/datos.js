import Producto from "./Producto.js";
import Vendedor from "./Vendedor.js";

export const productos = [
    new Producto(), new Producto(), new Producto(),
    new Producto(), new Producto(), new Producto()
];

function cargarInformacionALosProductos(){
    setUbicacionDeLasImagenALosProductos();
    setTituloALosProductos();
    setVendedorALosProductos();
    setNombreDelVendedorALosProductos();
    setDireccionDelVendedorALosProductos();
    setPrecioALosProductos();
    setPrecioDeOfertaALosProductos();
}

function setUbicacionDeLasImagenALosProductos(){
    productos[0].setUbicacionDeLaImagen('./assets/img/cupon-1.jpg');
    productos[1].setUbicacionDeLaImagen('./assets/img/cupon-2.jpg');
    productos[2].setUbicacionDeLaImagen('./assets/img/cupon-3.jpg');
    productos[3].setUbicacionDeLaImagen('./assets/img/cupon-4.jpg');
    productos[4].setUbicacionDeLaImagen('./assets/img/cupon-5.jpg');
    productos[5].setUbicacionDeLaImagen('./assets/img/cupon-6.jpg');
}

function setTituloALosProductos(){
    productos[0].setTitulo('Plumón Coral Fleece estampado en modelo y tamaño a elección');
    productos[1].setTitulo('Entrada para compartir + platos de fondo + postres + bebestibles');
    productos[2].setTitulo('Evaluación integral + blanqueamiento dental led + limpieza + fluoración');
    productos[3].setTitulo('Colación para 2 personas + postre (no incluye bebidas)');
    productos[4].setTitulo('1, 2 o 4 tickets para Stukids. Elige sucursal');
    productos[5].setTitulo('San Pedro de Atacama : 1 o 2 noches en alojamiento a elección');
}

function setVendedorALosProductos(){
    productos[0].setVendedor(new Vendedor());
    productos[1].setVendedor(new Vendedor());
    productos[2].setVendedor(new Vendedor());
    productos[3].setVendedor(new Vendedor());
    productos[4].setVendedor(new Vendedor());
    productos[5].setVendedor(new Vendedor());
}

function setNombreDelVendedorALosProductos(){
    productos[0].getVendedor().setNombre('Plumones Manolino');
    productos[1].getVendedor().setNombre('V for Vegan');
    productos[2].getVendedor().setNombre('Clínica Dental Quijada');
    productos[3].getVendedor().setNombre('Suricata almacen');
    productos[4].getVendedor().setNombre('Stukids Centro de Eventos');
    productos[5].getVendedor().setNombre('D-Latam Travel');
}

function setDireccionDelVendedorALosProductos(){
    productos[0].getVendedor().setDireccion('9191 Avenida Vitacura, Chile');
    productos[1].getVendedor().setDireccion('777 Jesse Pinkman, Chile');
    productos[2].getVendedor().setDireccion('1342, Blanco Encalada, Chile');
    productos[3].getVendedor().setDireccion('1071 Miguel Claro, Chile');
    productos[4].getVendedor().setDireccion('133 El tranque, Chile');
    productos[5].getVendedor().setDireccion('D-Latam Travel');
}

function setPrecioALosProductos(){
    productos[0].setPrecio(45990);
    productos[1].setPrecio(30990);
    productos[2].setPrecio(300000);
    productos[3].setPrecio(4200);
    productos[4].setPrecio(4000);
    productos[5].setPrecio(80200);
}

function setPrecioDeOfertaALosProductos(){
    productos[0].setPrecioDeOferta(22990);
    productos[1].setPrecioDeOferta(12990);
    productos[2].setPrecioDeOferta(25990);
    productos[3].setPrecioDeOferta(2100);
    productos[4].setPrecioDeOferta(2500);
    productos[5].setPrecioDeOferta(44100);
}

cargarInformacionALosProductos();

