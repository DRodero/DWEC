// Cargamos el contenido cuando la página esté lista
window.addEventListener('load', function () {

    let alumno = {
        nombre: 'Juan',
        apellidos: 'García Martínez',
        edad: 30,
        curso: 'DWEC',
        direccion: {
            calle: 'Calle Falsa',
            numero: 123,
            ciudad: 'Springfield'
        },
        mostrarInfo: function () {
            let direccionCompleta = `${this.direccion.calle} ${this.direccion.numero}, ${this.direccion.ciudad}`;
            return `<div class="card bg-info"><div class="card-body">
                ${this.nombre} ${this.apellidos}, ${this.edad} años, 
                curso: ${this.curso}, vive en ${direccionCompleta}.
            </div></div>`;
        }
    }

    // Crear un párrafo con la información del alumno
    const info = document.createElement('p');
    info.innerHTML = alumno.mostrarInfo();

    // Añadir el párrafo al final del main
    const main = document.getElementById('main');
    main.appendChild(info);

});


