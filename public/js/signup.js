$(document).ready(function(){

    // var signUpBtn = $("#signup");
    var nameInput = $("#inputName");
    var emailInput = $("#inputEmail");
    var passwordInput = $("#inputPassword");

    $("#signup").on("click", function(event) {

        var userData = {
            name: nameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        signUpUser(userData.name, userData.email, userData.password);

    });

});