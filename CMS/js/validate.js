$(document).ready(function() {

    $("#formlogin").validate({
        rules: {
            loginUser: {
                required: true,
                minlength: 5,
                maxlength: 50
            },
            loginPassword: {
                required: true,
                minlength: 8,
                maxlength: 30
            }
        },

        messages: {
            loginUser: "Please enter your login user",
            loginPassword: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long",
                maxlength: "Your password must be less than 30 characters long"
            }
        }
    });
});