/// GET POST PUT DELETE


function getMensaje() {

    $.ajax({
        url: "http://localhost:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarMensaje(respuesta);

        }

    });
}

function postMensaje() {
    let Cajas = {
        messageText: $("#messageText").val(),
        machine: { id: +$("#select-maquina").val() },
        client: { idClient: +$("#select-cliente").val() }
    };


    $.ajax({
        url: "http://localhost:8080/api/Message/save",
        type: "POST",
        datatype: "JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(Cajas),
        success: function (respuesta) {
            alert("Se creo correctamente una nueva máquina");
           window.location.reload();
        }
    });
    console.log(Cajas);
}

function putMensaje() { }

function deleteMensaje() { }

/////////////////////////////////////f
function pintarMensaje(respuesta) {

    let myTable = "<table>";
    let MENSAJE = "MENSAJE";
    let MAQUINA = "MAQUINA";
    let CLIENTE = "CLIENTE";

    myTable += "<th>" + MENSAJE + "</th>";
    myTable += "<th>" + MAQUINA + "</th>";
    myTable += "<th>" + CLIENTE + "</th>";

    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "<td>" + respuesta[i].machine.name + "</td>";
        myTable += "<td>" + respuesta[i].client.name+ "</td>";
        myTable += "<td><button onclick:'deleteMensaje("+respuesta[i].id+")'>Borrar</button>"
        myTable += "</tr>";
    }
    myTable += "</table>"
    $("#resultado1").html(myTable);
}

function getMachineToMessage() {

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


function getClientToMessage() {

    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta2) {
            let $select = $("#select-cliente");
            $.each(respuesta2, function (idClient, name) {
                $select.append('<option value=' + name.idClient + '>' + name.name + '</option>')

            })
        }
    });

}