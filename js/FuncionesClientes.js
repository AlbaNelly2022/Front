// GET PUT POST DELETE
function getCliente() {

    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarCliente(respuesta);
        }
    });
}

function postCliente() {
    if($("#name").val().length===0 || $("#age").val().length===0 || $("#email").val().length===0 || $("#password").val().length===0){

        alert("Todos los campos son obligatorios");
    }else{
        
        let Cajas = {
        email: $("#email").val(),
        password: $("#password").val(),
        name: $("#name").val(),
        age: $("#age").val()

    };

    $.ajax({
        url: "http://localhost:8080/api/Client/save",
        type: "POST",
        datatype: "JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(Cajas),
        success: function (respuesta) {
            alert("Se creo un nuevo usuario correctamente");
            window.location.reload();
        }

    });}

    
}

function putCliente() { }

function deleteCliente(idDesdeBoton) { 

    let myData2 = {id : idDesdeBoton}
    $.ajax({
        url: "http://localhost:8080/api/Client/"+idDesdeBoton,
        type: "DELETE",
        datatype: "JSON",
        data: JSON.stringify(myData2),
        contentType:"application/json",
        success: function (respuesta) {
            alert("Se elimino correctamente el cliente");
            window.location.reload();
        }
    });
    

}

///////////////////////////////////
function pintarCliente(respuesta) {

    let myTable = "<table>"
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].idClient + "</td>";
        myTable += "<td>" + respuesta[i].email + "<td>";
        myTable += "<td>" + respuesta[i].password + "<td>";
        myTable += "<td>" + respuesta[i].name + "<td>";
        myTable += "<td>" + respuesta[i].age + "<td>";
        myTable += "<td> <button onclick='deleteCliente("+respuesta[i].idClient+")'>Borrar</button>";

        myTable += "</tr>";
    }

    myTable += "</table>"
    $("#resultado1").html(myTable);
}

