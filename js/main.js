function bookFind(){
    var search = document.getElementById('search')
    var ed= document.getElementById('results').innerHTML.value= ""
    console.log(ed)

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json", 
        
        success: function(data){

            for(var i = 0; i< data.items.length; i++){
                //results.innerHTML += "<h5>" + data.items[i].volumeInfo.infoLink + "</h5>"
                results.innerHTML += '<a href =" ' + data.items[i].volumeInfo.infoLink+ ' ">Link </a><br/> <br/>';
            }
            //console.log(data)
             

        },
        type: 'GET'

    })

}
document.getElementById('button').addEventListener('click', bookFind, false)
