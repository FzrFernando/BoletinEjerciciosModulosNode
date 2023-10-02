function calcularAreaCirculo(radio) {
    const area = Math.PI * Math.pow(radio, 2);
    return area;
}
  

function calcularCircunferenciaCirculo(radio) {
    const circunferencia = 2 * Math.PI * radio;
    return circunferencia;
}

module.exports={ calcularAreaCirculo, calcularCircunferenciaCirculo}