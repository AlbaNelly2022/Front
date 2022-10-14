
function getReservaciones() {


    $.ajax({
        url: "http://localhost:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarReservacion(respuesta);

        }

    });

}
function postReservaciones(){
    if($("#startDate").val().length===0 || $("#devolutionDate").val().length===0 ){

        alert("Todos los campos son obligatorios");

    }else{
        let Cajas = {
            startDate: $("#startDate").val(),
            devolutionDate: $("#devolutionDate").val(),
            status:$("#status").val(),
            client:{idClient: +$("#select-cliente").val() },
            machine:{id: +$("#select-maquina").val() }  
        };
    
        $.ajax({
            url: "http://localhost:8080/api/Reservation/save",
            type: "POST",
            datatype: "JSON",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(Cajas),
            success: function (respuesta) {
                alert("Se creo correctamente la reservación ");
                window.location.reload();
            }
        });

    }
   
}

function putReservaciones() { }

function deleteReservaciones() { }


///////////////////////////////

function pintarReservacion(respuesta) {
    let myTable = "<table>"

    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta[i].status + "</td>";
        myTable += "<td>" + respuesta[i].machine.name + "</td>";
        myTable += "<td>" + respuesta[i].client.name + "</td>";
        myTable += "<td><button onclick:'deleteReservaciones("+respuesta[i].id+")'>Borrar</button>"
        myTable += "</tr>";
    }
    
    myTable += "</table>"
    $("#resultado1").html(myTable);
}


function getMachineToReservation(){

    $.ajax({

        url: "http://localhost:8080/api/Machine/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta1) {
            let $select = $("#select-maquina");
            $.each(respuesta1, function (id, name) {
                $select.append('<option value=' + name.id + '>' + name.name + '</option>')

            })
        }
    });
}

function getClientToReservation(){

    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (Respuesta) {
            
            let $select = $("#select-cliente");
            $.each(Respuesta, function (id, name) {
                $select.append('<option value=' + name.idClient + '>' + name.name + '</option>')

            })
        }
    });

}