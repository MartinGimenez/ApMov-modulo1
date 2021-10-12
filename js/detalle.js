function getGET()
				    {
    // capturamos la url
    var loc = document.location.href;
    console.log(loc)
    if(loc.indexOf('?')>0)
    {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1];
        console.log(getString)

        $.ajax({
		type: 'GET',
		url: "https://www.googleapis.com/books/v1/volumes/" + getString ,
		dataType: "json",
		success: function(data) {
			//libro = "<ul>";

			libromas = ""

			var infoLibroimg = "<div id='btn'> <img src='"+data.volumeInfo.imageLinks.thumbnail+"' width='120px'/>";
            var infoLibrotitle = "<h3>" + data.volumeInfo.title + "</h3>";
            var infoLibrosubtitle = "<h4>" + data.volumeInfo.subtitle + "</h4>";
            var infoLibroautor = "<h4>" + data.volumeInfo.authors + "</h4>";
            var infoLibroedit = "<h5>" + data.volumeInfo.publisher + "</h5>";
            var infoLibroyear = "<h5>" + data.volumeInfo.publishedDate + "</h5>";
            var infoLibrodes = "<br><p>" + data.volumeInfo.description + "</p>";
            var infoLibrobtnbuy = "<button ><a href=" + data.saleInfo.buyLink + " target='_blank'>Comprar</a></button>";
            console.log(data.saleInfo)

                libromas += infoLibroimg+infoLibrotitle+infoLibrosubtitle+infoLibroautor+infoLibroedit+infoLibroyear+infoLibrobtnbuy+infoLibrodes;
                

                

			//libro += "</ul>";

			$("#resultado2").html(libromas);

			}
			
	})

        //return libromas;
    }
}
$(document).ready(function()
{
    // Cogemos los valores pasados por get
    var valor=getGET();
    //$("#resultado2").html(valor)
    //document.write(valor);
});