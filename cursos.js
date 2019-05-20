let cursos =[{
  id: 1,
  nombre: 'fisica',
  duracion: 40,
  valor: 40000
},
{
  id: 2,
  nombre: 'quimica',
  duracion: 30,
  valor: 30000
},
{
  id: 3,
  nombre: 'matematica',
  duracion: 50,
  valor: 50000
}
];


//funcion para enviar los datos de cada curso cada 2 segundos
let datosCurso= (tiempo,curso,callback)=>{
  setTimeout(function(){
    callback('Id del curso: '+ curso.id+ '\n'
    +'Nombre del curso: '+ curso.nombre+'\n'
    +'Duracion del curso:'+ curso.duracion+'\n'
    +'Valor del curso: '+ curso.valor+'\n'
  );
}, tiempo);
};



module.exports={
  cursos,
  datosCurso
};
