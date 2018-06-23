$(document).ready(function(){

    var addproductCode = $("#addinputProductCode");
    var adddescription = $("#addinputDescription");
    var addimageURL = $("#addinputFile");
    var addprice = $("#addinputPrice");
    var addquantity = $("#addinputQuantity");
    var editproductCode = $("#editinputProductCode");
    var editdescription = $("#editinputDescription");
    var editimageURL = $("#editinputFile");
    var editprice = $("#editinputPrice");
    var editquantity = $("#editinputQuantity");

    $("#addProductBtn").on("click", function(event){
        
        var gameData = {
            code: addproductCode.val().trim(),
            description: adddescription.val().trim(),
            imageURL: addimageURL.val().trim(),
            price: addprice.val().trim(),
            quantity: addquantity.val().trim()
        };

        createGame(gameData.code, gameData.description, gameData.imageURL, gameData.price, gameData.quantity);
    });

    $(".deleteProductBtn").on("click", function(event){
        var id = $(this).parent("td").parent("tr").children("th").html();
        console.log(id);

        $.ajax({
            method: "DELETE",
            url: "/games/" + id
        }).then(function(){
            window.location.href = "/games";
        });
    });

    $(".editProductBtn").on("click", function(event){
        var id = $(this).parent("td").parent("tr").children("th").html();

        $.get("/games/" + id, function(data) {
            if (data) {
                editproductCode.val(data.code);
                editdescription.val(data.description);
                // imageURL.val(data.imageURL);
                editprice.val(data.price);
                editquantity.val(data.quantity);
            }

            $("#updateProductBtn").on("click", function(event){
                // console.log(event);
                var gameData = {
                    code: editproductCode.val().trim(),
                    description: editdescription.val().trim(),
                    imageURL: editimageURL.val().trim(),
                    price: editprice.val().trim(),
                    quantity: editquantity.val().trim()
                };

                gameData.id = id;
                updateGame(gameData);
            });
        });
    });

    function createGame(code, description, imageURL, price, quantity) {
        $.post("/games/new", {
            code: code,
            description: description,
            imageURL: imageURL,
            price: price,
            quantity: quantity
        }).then(function(data) {
            console.log(data);
            window.location.href = "/games";
        });
    }

    function updateGame(gameData) {
        // console.log(gameData.id);

        $.ajax({
            method: "PUT",
            url: "/games",
            data: gameData
        }).then(function(){
            window.location.href = "/games";
        });
    }


});