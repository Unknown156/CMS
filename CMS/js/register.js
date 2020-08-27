$(document).ready(function() {

    $("#formlogin").validate({
        rules: {
            username: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            email: {
                required: true,
                minlength: 5,
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 30
            },
            repassword: {
                required: true,
                minlength: 8,
                maxlength: 30
            }
        },

    });
});