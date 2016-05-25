var country = null;
var maximo;
var lugar = "";
var historial = new Array();
var aleatorio = null;
var nomPais = "";
var a;

$(document).ready(function() {
	selectcountry();
	nombrePais = paisString();
	//imagenCoder();
});


function selectcountry() {
	$("#country").on('change', function(){
		country = ($("#pais").val());
		if (country === 1){
			lugar = mexico;
		} else {
			lugar = peru;
		}
		aleatorios();
		imagenCoder();
	});
}

function aleatorios() {
	maximo = lugar.length;
	var condicion = true;
	do {
		aleatorio = Math.floor(Math.random()*maximo)
		if(historial.length == maximo){
			aleatorio = -1
			condicion = false;
		} else if (historial.length == 0) {
			historial.push(aleatorio);
			condicion = false;
		} else {
			var nuevoNum = historial.indexOf(aleatorio);
			if (nuevoNum < 0){
				historial.push(aleatorio);
				condicion = false;
			}
			else {
				console.log(aleatorio+' repetido!')
			}
		}
	} while (condicion);
	return aleatorio;
}

function paisString() {
	nomPais= (lugar === mexico) ? ("mexico") : ("peru");
	return nomPais;
}

function imagenCoder() {
	a =lugar[aleatorios()];
	var src = "fotos/"+paisString()+"/"+a.image;
	$("#foto").attr("src", src);
	return a;
}

