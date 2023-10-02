// Simplemente genera un número aleatorio entre 0 y 16777215 (que es el equivalente decimal de 0xFFFFFF en hexadecimal) y 
//luego lo convierte a una cadena hexadecimal de 6 dígitos con ceros a la izquierda si es necesario.

function generarColor(){
    return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`;
}

module.exports = { generarColor }