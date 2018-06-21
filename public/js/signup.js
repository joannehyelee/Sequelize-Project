$(document).ready(function(){

    // var signUpBtn = $("#signup");
    var nameInput = $("#inputName");
    var emailInput = $("#inputEmail");
    var passwordInput = $("#inputPassword");

    $("#signup").on("click", function(event){
        event.preventDefault();
        
        var userData = {
            username: nameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        signUpUser(userData.username, userData.email, userData.password);
    });

    function signUpUser(username, email, password) {
        $.post("/users/signup", {
            username: username,
            email: email,
            password: password
        }).then(function(data) {
            console.log(data);
        });
    }

});