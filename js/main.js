// array de estudiantes
const estudiantes = [];

// funcion que agrega un estudiante
function agregarEstudiante() {
    const nombreEstudiante = document.getElementById('estudianteNombre').value;

    // agrega el estudiante al array
    estudiantes.push(nombreEstudiante);

    // limpia el campo de texto
    document.getElementById('estudianteNombre').value = '';

    // actualiza la lista de estudiantes en el DOM
    actualizarListaEstudiantes();
}

// funcion que actualiza la lista de estudiantes en el DOM
function actualizarListaEstudiantes() {
    const listaEstudiantes = document.getElementById('listaEstudiantes');

    // limpia la lista
    listaEstudiantes.innerHTML = '';

    // agregar cada estudiante al DOM
    for (let i = 0; i < estudiantes.length; i++) {
        const item = document.createElement('li');
        item.textContent = estudiantes[i];
        listaEstudiantes.appendChild(item);
    }
}