function submitForm (){

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var streetAddress = $("#streetAddress").val();
    var streetAddress2 = $("#streetAddress2").val();
    var streetAddress3 = $("#streetAddress3").val();
    var country = $("#country").val();
    var provinceState = $("#provinceState").val();
    var emailAddress = $("#emailAddress").val();
    var password = $("#password").val();
    var passwordConfirm = $("#passwordConfirm").val();


    var errors = 0;

    if (firstName == "") {
      errors = 1;
        $("#firstNameError").addClass('showError');
    } else {
        $("#firstNameError").removeClass('showError');
    }

    if (lastName == "") {
      errors = 2;
        $("#lastNameError").addClass('showError');
    } else {
        $("#lastNameError").removeClass('showError');
    }

    if (streetAddress == "") {
      errors = 3;
        $("#streetAddressError").addClass('showError');
    } else {
        $("#streetAddressError").removeClass('showError');
    }

    if (country == "") {
      errors = 4;
        $("#countryError").addClass('showError');
    } else {
        $("#countryError").removeClass('showError');
    }

    if (provinceState == "") {
      errors = 5;
        $("#provinceStateError").addClass('showError');
    } else {
        $("#provinceStateError").removeClass('showError');
    }

    if (emailAddress == "") {
      errors = 6;
        $("#emailAddressError").addClass('showError');
    } else {
        $("#emailAddressError").removeClass('showError');
    }

    if (emailAddress != ""){
        errors = ValidateEmail(emailAddress,errors);
        $("#passwordError").addClass('showError');
    } else {
        $("#passwordError").removeClass('showError');
    }


    if (password == "") {
      errors = 7;
        $("#passwordError").addClass('showError');
    } else {
        $("#passwordError").removeClass('showError');
    }

    if (password.length < 6) {
        errors = 7;
        $("#passwordError").addClass('showError');
    } else {
        $("#passwordError").removeClass('showError');
    }


    if (passwordConfirm == "") {
      errors = 8;
        $("#passwordConfirmError").addClass('showError');
    } else {
        $("#passwordConfirmError").removeClass('showError');
    }

    if (password != passwordConfirm) {
      errors = 8;
        $("#passwordConfirmError").addClass('showError');
    } else {
        $("#passwordConfirmError").removeClass('showError');
    }

    if (errors != 0) {
        alert("You have errors! code: "+errors);
    } else {
        dataString = sendToServer(firstName,lastName,streetAddress,country,provinceState,emailAddress,password,passwordConfirm);
        $.ajax({
            type: "POST",
            url: "/send.php",
            data: dataString,
            success: function(msg) {
                if (msg!= "") {
                    alert(msg);
                }
            }
        });
    }
}

function sendToServer(firstName,lastName,streetAddress,country,provinceState,emailAddress,password,passwordConfirm) {
    var dataString = "firstName= "+firstName+"&lastName= "+lastName+"&streetAddress= "+streetAddress+"&country= "+country+"&provinceState= "+provinceState+
    "&emailAddress= "+emailAddress+"&password= "+password+"&passwordConfirm= "+passwordConfirm;

    return dataString;
}

function ValidateEmail(emailAddress,errors)
{
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailAddress)){
        return errors;
    } else {
        alert("You have entered an invalid email address!")
        return 6;
    }
}

