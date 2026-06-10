const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20 },
    { id: 2, nombre: 'Juan', edad: 22 },
    { id: 3, nombre: 'Maria', edad: 21 },
];


// Función que retorna una Promesa
function buscarEstudiantePorId(id) {
    return new Promise((resolve, reject) => {
      const estudiante = estudiantes.find(e => e.id === id);
  
      if (estudiante) {
        resolve(estudiante);
      } else {
        reject(`Error: No existe un estudiante con el ID ${id}.`);
      }
    });
  }


//buscarEstudiantePorId(2)
//    .then(est => console.log(`Nombre: ${est.nombre}, Edad: ${est.edad}`))
//    .catch(err => console.error(err));
  
//buscarEstudiantePorId(1)
//    .then(est => console.log(`Nombre: ${est.nombre}, Edad: ${est.edad}`))
//    .catch(err => console.error(err));
  
//buscarEstudiantePorId(10)
//    .then(est => console.log(`Nombre: ${est.nombre}, Edad: ${est.edad}`))
//    .catch(err => console.error(err));
