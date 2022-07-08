const libros = [
    {nombre: "Viaje consciente",
    autor: "Andres Laudano" },
    {nombre: "Emociones para la vida",
    autor: "Enric Corbera"}
]

class Usuario {
    constructor(nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
    }
   
    getFullname() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(pet){
        this.mascotas.push(pet);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(titulo, nombreAutor){
        this.libros.push({nombre:titulo, autor: nombreAutor})
    }

    getBookNames(){
        return this.libros.map((nombreDelLibro) => nombreDelLibro.nombre)
    }
}

const nuevoUsuario = new Usuario ("Elton", "John", libros, ["perro", "gato"] )

console.log(nuevoUsuario.getFullname()); // get 
nuevoUsuario.addMascota("pato");        // add
console.log(nuevoUsuario.countMascotas()); // get
nuevoUsuario.addBook("Calculo", "Stewart"); // add
console.log(nuevoUsuario.getBookNames()); // get
