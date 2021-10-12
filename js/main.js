function buscarLibros() {
	var buscar = document.getElementById('buscar').value;
	var opcion = document.getElementById('opción').value;
	console.log(buscar, opcion);

	if (buscar == "") {
		alert("Ingrese un valor a buscar");
		
	} 
	else {

		$.ajax({
			type: 'GET',
			url: "https://www.googleapis.com/books/v1/volumes?q=" + opcion + buscar + "&orderBy=relevance" + "&maxResults=10" + "&key=AIzaSyDsFlFumcGvU5v_5ToYQEikrzzFiINDyxM",
			dataType: "json",
			success: function(data) {
				//libro = "<ul>";
				//console.log(data)
				libro = "";
				infoLibroimg = "";
				infoLibroMore = "";

				for (i = 0; i < data.items.length; i++) {
					
					if (data.items[i].volumeInfo.imageLinks.thumbnail === undefined) {
						console.log(data.items[i].volumeInfo.imageLinks.thumbnail);
						return "";						
					} 
					
					else {

						infoLibroimg = "<div id='btn'> <img src=" + data.items[i].volumeInfo.imageLinks.thumbnail + " alt='img' width='130px'/>";

						console.log(data.items[i].volumeInfo.imageLinks.thumbnail);
						
						infoLibroMore = "<button><a href=./pages/vermas.html?" + data.items[i].id + ">Más</a></h3></button></div>";
	
						libro += infoLibroimg + infoLibroMore;
						//console.log(libro);
		
						$("#resultado").html(libro);
					}
				}		
			}
		})	
	}
}

$(document).ready(function(){
    $("#button1").click(buscarLibros)

})