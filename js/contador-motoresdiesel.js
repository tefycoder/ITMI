/*====================
		tren de fuerza
	======================*/

	formato_tiempo = (arg) => arg < 10 ? `0${arg}` : arg;
function cuenta_regresiva(arg) {
  var fecha = new Date(arg);
  var hoy = new Date();
  var segundosTotales = (fecha - hoy) / 1000;
  var dias = Math.floor(segundosTotales / 3600 / 24);
  var horas = Math.floor(segundosTotales / 3600) % 24;
  var minutos = Math.floor(segundosTotales / 60) % 60;
  var segundos = Math.floor(segundosTotales) % 60;
  return {
    "dias": formato_tiempo(dias),
    "horas": formato_tiempo(horas),
    "minutos": formato_tiempo(minutos),
    "segundos": formato_tiempo(segundos)
  };
}
function imprimir() {
  var arg = '14 Feb 2022';
  $('#dias').html(cuenta_regresiva(arg).dias);
  $('#horas').html(cuenta_regresiva(arg).horas);
  $('#minutos').html(cuenta_regresiva(arg).minutos);
  $('#segundos').html(cuenta_regresiva(arg).segundos);
}
setInterval(imprimir, 1000);
//console.log(cuenta_regresiva('20 Jan 2022'));