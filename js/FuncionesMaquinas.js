/////GET POST PUT DELETE
function getMaquina() {

    $.ajax({

        url: "http://localhost:8080/api/Machine/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarMachine(respuesta);

        }
    });
}



function postMaquina() {
   if( $("#name").val().length===0 || $("#brand").val().length===0 || $("#year").val().length===0 || $("#description").val().length===0){

    alert("Todos los campos son obligatorios");

   }else{
    let Cajas = {
        name: $("#name").val(),
        brand: $("#brand").val(),
        year: $("#year").val(),
        description: $("#description").val(),
        category: { id: +$("#select-categoria").val() }
    };
    $.ajax({
        url: "http://localhost:8080/api/Machine/save",
        type: "POST",
        datatype: "JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(Cajas),
        success: function (respuesta) {
            alert("Se creo correctamente una nueva máquina");
            window.location.reload();
        }
    });
}

}

function putMaquina() { }

function deleteMaquina(id1) {
 
    let myData3 = {id : id1}
    $.ajax({
        url:  "http://localhost:8080/api/Machine/"+id1,
        type: "DELETE",
        datatype: "JSON",
        data: JSON.stringify(myData3),
        contentType:"application/json",
        success: function (respuesta) {
            alert("Se elimino correctamente la maquina");
            window.location.reload();
        }
    });

    
 }

/////////////////
function pintarMachine(respuesta) {
    let myTable = "<table>"
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].brand + "</td>";
        myTable += "<td>" + respuesta[i].year + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td>" + respuesta[i].category.name + "</td>";
        myTable += "<td><button onclick='deleteMaquina("+respuesta[i].id+")'>Borrar</button>"
        myTable += "</tr>";
    }
    myTable += "</table>"
    $("#resultado1").html(myTable);
}

function getCatergoritToMachine() {

    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            let $select = $("#select-categoria");
            $.each(respuesta, function (id, name) {
                $select.append('<option value=' + name.id + '>' + name.name + '</option>')

            })
        }
    });
}