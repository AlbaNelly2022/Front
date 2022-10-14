// GET PUT POST DELETE

function getCategoria() {

    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {

            pintarCategoria(respuesta);

        }
    });
}

function postCategoria() {

    if ($("#name").val().length === 0 || $("#description").val().length === 0) {
        alert("Todos los campos son obligatorios");
    } else {
        let Cajas = {
            name: $("#name").val(),
            description: $("#description").val()
        };

        $.ajax({
            url: "http://localhost:8080/api/Category/save",
            type: "POST",
            datatype: "JSON",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(Cajas),
            success: function (respuesta) {
                alert("Se creo correctamente la categoria");
                window.location.reload();
            }
        });

    }

}

function putCategoria() {


}

function deleteCategoria(idDesdeBoton) {

    let myData = { id: idDesdeBoton }
    $.ajax({
        url: "http://localhost:8080/api/Category/"+idDesdeBoton,
        type: "DELETE",
        datatype: "JSON",
        data: JSON.stringify(myData),
        contentType: "application/json",
        success: function (respuesta) {
            alert("Se elimino correctamente la categoria");
            window.location.reload();
        }
    });


}

///////////////////////////////

function pintarCategoria(respuesta) {
    let myTable = "<table>"
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td> <button onclick='deleteCategoria(" + respuesta[i].id + ")'>Borrar</button>"
        myTable += "</tr>";
    }
    myTable += "</table>"
    $("#resultado1").html(myTable);
}