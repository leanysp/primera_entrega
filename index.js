const{cursos, datosCurso} = require('./cursos');
const fs = require('fs');

//opciones a ingresar obligatorias
const opciones ={
  id:{
    demand:true,
    alias:'i'
  },

  nombre:{
    demand:true,
    alias:'n'
  },

  cedula:{
    demand:true,
    alias:'c'
  }
}

let crearArchivo = (curso,nombre,cedula) =>{
  texto= 'El estudiante '+ nombre + ', identificado con cedula #'+ cedula+',\n'
  + 'Se ha matriculado en el curso '+ curso.nombre + ' con id '+ curso.id +
  ', el cual tiene una duracion de '+ curso.duracion+' horas y un valor de '+ curso.valor;
  fs.writeFile('curso.txt', texto,(err)=>{
    if(err) throw(err);
    console.log('Se ha creado el archivo con los datos del curso y estudiante inscrito');
  });
}

const argv = require('yargs')
.command('inscribir', 'Inscripcion de estudiantes', opciones)
.argv;

//buscar curso
let curso = cursos.find(nomcurso =>nomcurso.id == argv.id);

if(curso){
  //el curso existe
  crearArchivo(curso,argv.nombre, argv.cedula)
} else {
  if(argv.id){
    //el curso no existe
    console.log('el curso no existe, ingrese un id de curso valido \n');
  }
  for (var i = 0; i < cursos.length; i++) {
    datosCurso((2000*(i+1)),cursos[i], function(datos){
      console.log(datos);
    });
  }
}
