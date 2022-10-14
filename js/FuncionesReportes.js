function traerReporteStatus() {

    $.ajax({
        url: "http://localhost:8080/api/Reservation/report-status",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            printStatus(respuesta);
        }
    });
}

function traerReportesFechas() {

    $.ajax({
        url: "http://localhost:8080/api/Reservation/report-date/{dateOne}/{dateTwo}",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            // pintarReservacion(respuesta);
          //  console.log(respuesta);
        }

    });

}

function traerReportesClientes() {

    $.ajax({
        url: "http://localhost:8080/api/Reservation/report-clients",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
             printClientes(respuesta);
            console.log(respuesta);

        }

    });
}

/////// Hacer tablas para mostrar los datos////
//tabla Status
function printStatus(respuesta){
let myTable="<table>"
myTable +="<tr>";
myTable += "<td>Estado </td>";
myTable += "<td> Numero de reservaciones </td>";
myTable+="</tr>";
myTable+="<tr>";
myTable += "<td> Completada </td>";
myTable += "<td>" + respuesta.completed + "</td>";
myTable+="</tr>";
myTable+="<tr>";
myTable += "<td> Cancelada </td>";
myTable += "<td>" + respuesta.cancelled + "</td>";
myTable+="</tr>";
myTable+="</table>"
$("#resultado1").html(myTable);
}

// tabla cliente 

function printClientes(respuesta){
    let myTable2="<table>"
    myTable2 +="<tr>";
    myTable2 += "<td> Total de reservaciones</td>";
    myTable2 += "<td> Cliente </td>";
    myTable2+="</tr>";
   
    for(i=0;i<respuesta.length;i++){
    myTable2 +="<tr>";
    myTable2 += "<td>" + respuesta[i].total + "</td>";
    myTable2 += "<td>" + respuesta[i].client.name + "</td>";
    myTable2+="</tr>";
    }
    myTable2+="</table>"
    $("#resultado2").html(myTable2);
    }