$(document).ready(function(){

    var productCode = $("#inputProductCode");
    var description = $("#inputDescription");
    var imageURL = $("#inputFile");
    var price = $("#inputPrice");
    var quantity = $("#inputQuantity");

    $("#addProductBtn").on("click", function(event){
        event.preventDefault();

        console.log(event.target.files[0]);
        
        var gameData = {
            name: productCode.val().trim(),
            description: description.val().trim(),
            imageURL: imageURL.val().trim(),
            price: price.val().trim(),
            quantity: quantity.val().trim()
        };

        createGame(gameData.name, gameData.description, gameData.imageURL, gameData.price, gameData.quantity);
    });

    function createGame(name, description, imageURL, price, quantity) {
        $.post("/games/new", {
            name: name,
            description: description,
            imageURL: imageURL,
            price: price,
            quantity: quantity
        }).then(function(data) {
            console.log(data);
        });
    }

});