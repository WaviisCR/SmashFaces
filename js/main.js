var country = null;
var maximo;
var lugar = "";
var historial = [];
var aleatorio = null;
var nomPais = "";

//$(document).ready(function() {
$("#country").change(function() {
    country = $(this).val();
    if (country === 0) {
        lugar = peru;

    } else {
        lugar = mexico;
    }
    imagenCoder();
});
//});

function aleatorios() {
    maximo = lugar.length;
    var condicion = true;
    do {
        aleatorio = Math.floor(Math.random() * maximo)
        if (historial.length == maximo) {
            aleatorio = -1
            condicion = false;
        } else if (historial.length == 0) {
            historial.push(aleatorio);
            condicion = false;
        } else {
            var nuevoNum = historial.indexOf(aleatorio);
            if (nuevoNum < 0) {
                historial.push(aleatorio);
                condicion = false;
            } else {
                console.log(aleatorio + ' repetido!')
            }
        }
    } while (condicion);
    return aleatorio;
}

function paisString() {
    nomPais = (lugar === mexico) ? "mexico" : "peru";
    return nomPais;
}

function imagenCoder() {
    aletorio = aleatorios();
    var sr = (country == 0) ? ("peru/" + peru[aleatorio].image) : ("mexico/" + mexico[aleatorio].image);
    $("#fotos").html('<img class="img-responsive bandera" src="fotos/' + sr + '"/>');
}

function consultaName() {
    var nameConsulta = "";
    nameConsulta = (lugar == 0) ? peru[aleatorio].name : mexico[aleatorio].name;
    console.log(nameConsulta);
    return nameConsulta;
}

function getInputValue() {
    var mensaje = $("#codername").val();
    return mensaje;
}

function comprobar() {
    if (getInputValue() === consultaName()) {
        alert("Excelente acertaste");
        setTimeout(imagenCoder(), 2000);
    } else {
        alert("Sigue Intentando");
    }
};

$(document).ready(function() {
    $("#comprobar").click(comprobar);
});