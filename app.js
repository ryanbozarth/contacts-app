'use strict';

$(document).ready(function() {

    var contacts = []

    $('#submitForm').on("click", function(event) {
        event.preventDefault();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();

        var phoneNumber = $('#phoneNumber').val();
        var street = $('#street').val();
        var city = $('#city').val();
        var state = $('#state').val();
        var contact = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: [],
            // address : [{street: "some street", city: "some city"}]
            street: street,
            city: city,
            state: state
        }
        var selectPhone = $('.addPhone input');
        var length = selectPhone.length;
        for (var i = 0; i < length; i++) {
            var tempPhone = $(selectPhone[i]).val();
            // more code needed
            contact.phoneNumber.push(tempPhone)
        }

        // Index is used to identify location of contact in an array
        var index = contacts.push(contact) - 1;

        $('#firstName').val("");
        $('#lastName').val("");
        $('#phoneNumber').val("");
        $('#street').val("");
        $('#city').val("");
        $('#state').val("");

        $("#addressBook").append("<li><a href='#aside' class='contactList' id= '" + index + "'>" + contact.firstName + " " + contact.lastName + "</li>");
    });

    $('body').on('click', '.contactList', function(event) {
        event.preventDefault();
        console.log("hi");
        console.log(contacts[this.id]);
        $('.first-and-last-name-card').text(contacts[this.id].firstName + " " + contacts[this.id].lastName);
        $('.first-name-card').text(contacts[this.id].firstName);
        $('.last-name-card').text(contacts[this.id].lastName);
        $('.phone-card').text(contacts[this.id].phoneNumber);
        $('.address-card').text(contacts[this.id].street + " " + contacts[this.id].city + " " + contacts[this.id].state);

    });

    $('.additionalPhone').on('click', function(event) {
        event.preventDefault();
        $('.addPhone').append('<div class="newPhone"><input type="tel" class="form-control"><button class="removePhone btn-primary">Remove</button></br></div>');
    });

    $('body').on('click', '.removePhone', function(event) {
        event.preventDefault();
        // hints: this
        $(this).parent().remove();
        console.log($(this).text());
        // $('.addPhone input:first').siblings().remove();
        // $('.addPhone').append('<br>');
    });
    // Hints
    // better ways
    // .clone() jquery

    // $('.additionalAddress').on('click', function(event) {
    //     event.preventDefault();
    //     $('.addAddress').append('<input type="tel" class="form-control"><br>');
    // });





}); // end doc ready
