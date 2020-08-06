let question = prompt('Buenas dias, welcome to the bollos de yuca restaurant, ¿cuantas personas van a ordenar bollitos?');

const formato = {
  nombre: '',
  apellido: '',
  edad: 0,
  };
const consumer= [];


for (contador=1; contador<=question; contador++) {
      formato.nombre = prompt('Por favor, ingrese el nombre de la persona N°' + contador); 
      formato.apellido = prompt('Por favor, ingrese el apellido de la persona N°' + contador);
      formato.edad = prompt('Por favor, ingrese la edad de la persona N°' + contador);
    consumer.push(Object.assign({}, formato));
}; 

for(let conta =0; conta<=question; conta++){
  console.log(Object.assign(consumer)[conta]);
} 
