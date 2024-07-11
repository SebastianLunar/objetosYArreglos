console.log("JS Conected");

let estudiantes = []
let formRegistro = document.getElementById("form1");
let listaUsuarios = document.getElementById("estudiantesListados");
let formUpdate = document.getElementById("form2");

function addStudent(student) {
  estudiantes.push(student);
}

formRegistro.addEventListener('submit', function(e) {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = Number(document.getElementById("edad").value);
  let grade = Number(document.getElementById("grade").value);

  let nuevoEstudiante = { 
    name: nombre,
    lastName: apellido,
    age: edad,
    grade
  };

  addStudent(nuevoEstudiante);
  formRegistro.reset();

  listaUsuarios.innerHTML = "";
  for (let index = 0; index < estudiantes.length; index++) {
    console.log(index);
    listaUsuarios.innerHTML += `
      <tr>
        <td>${estudiantes[index].name}</td>
        <td>${estudiantes[index].lastName}</td>
        <td>${estudiantes[index].age}</td>
        <td>${estudiantes[index].grade}</td>
      </tr>
    ` 
  }

})