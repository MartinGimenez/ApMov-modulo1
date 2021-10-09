function buscarLibros() {
	var buscar = document.getElementById('buscar').value;
	//var is = "";
	var opcion = document.getElementById('opción').value;

	var arg_modal = "";
	console.log(buscar)

	$.ajax({
		type: 'GET',
		url: "https://www.googleapis.com/books/v1/volumes?q=" + opcion + buscar + "&maxResults=10" + "&key=AIzaSyDsFlFumcGvU5v_5ToYQEikrzzFiINDyxM",
		dataType: "json",
		success: function(data) {
			//libro = "<ul>";
			console.log(data)
			libro = ""
			libromas = ""
			for (i = 0; i < data.items.length; i++) {
				/*resultado.innerHTML += "<h4>" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "</h4>"
				resultado.innerHTML += "<h4>" + data.items[i].volumeInfo.title + "</h4>"
				resultado.innerHTML += "<h4>" + data.items[i].volumeInfo.authors + "</h4>"
				resultado.innerHTML += "<h4>" + data.items[i].volumeInfo.title + "</h4>"*/

				var infoLibroimg = "<div id='btn'> <img src="+data.items[i].volumeInfo.imageLinks.thumbnail+" alt='img' width='90px'/>";
                //var infoLibroimg = "<div id='btn'> <img src="+data.items[i].volumeInfo.imageLinks.thumbnail+" alt='img' width='90px'/></div>";

                var infoLibrotitle = "<h3>" + data.items[i].volumeInfo.title + "</h3>";
                var infoLibrosubtitle = "<h4>" + data.items[i].volumeInfo.subtitle + "</h4>";
                var infoLibroautor = "<h4>" + data.items[i].volumeInfo.authors + "</h4>";
                var infoLibroedit = "<h5>" + data.items[i].volumeInfo.publisher + "</h5>";
                var infoLibroyear = "<h5>" + data.items[i].volumeInfo.publishedDate + "</h5>";
                var infoLibrodes = "<br><p>" + data.items[i].volumeInfo.description + "</p>";
                var infoLibrobtnMore = "<button ><a href=vermas.html?" + data.items[i].id + ">Ver Más</a></button>";
                var infoLibrobtnbuy = "<button ><a href=" + data.items[i].volumeInfo.buyLink + ">Comprar</a></button>";
                var infoLibrobtn = "<button type='submit' value=''><a href='mailto:direccion@correo.com?&subject=Libro&body=Hola zoquete. Te comparto este libro, " + infoLibrotitle +  ", esta MUY BUENO!!'>Compartir</a></button></div>";
                
                    libro += infoLibroimg+infoLibrotitle+infoLibroautor+infoLibrobtn;
                    //libro += infoLibroimg;

                    libromas += infoLibroimg+infoLibrotitle+infoLibrosubtitle+infoLibroautor+infoLibroedit+infoLibroyear+infoLibrodes+infoLibrobtnbuy;
                    }

                    

				//libro += "</ul>";
				$("#resultado").html(libro);
				$("#resultado2").html(libromas);

			}
			
	})
}

$(document).ready(function(){
    $("#button1").click(buscarLibros)

})