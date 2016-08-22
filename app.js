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
            address: []
        }
        var selectPhone = $('.addPhone input');
        var length = selectPhone.length;
        for (var i = 0; i < length; i++) {
            var tempPhone = $(selectPhone[i]).val();
            contact.phoneNumber.push(tempPhone)
        }
        var selectAddress = $('.containAddress .addAddress');
        for (var i = 0; i < selectAddress.length; i++) {
            var tempAddress = $(selectAddress[i])
            var inputs = tempAddress.find('input');
            var street = $(inputs[0]).val();
            var city = $(inputs[1]).val();
            var state = $(inputs[2]).val();

            contact.address.push({
                street: street,
                city: city,
                state: state
            })

        }
        var index = contacts.push(contact) - 1;

        $('#firstName').val("");
        $('#lastName').val("");
        $('#phoneNumber').val("");
        $('.street').val("");
        $('.city').val("");
        $('.state').val("");

        $("#addressBook").append("<li><a href='#aside' class='contactList' id= '" + index + "'>" + contact.firstName + " " + contact.lastName + "</li>");
    });

    $('body').on('click', '.contactList', function(event) {
        event.preventDefault();
        $('.first-and-last-name-card').text(contacts[this.id].firstName + " " + contacts[this.id].lastName);
        $('.first-name-card').text(contacts[this.id].firstName);
        $('.last-name-card').text(contacts[this.id].lastName);
        $('.phone-card').text(contacts[this.id].phoneNumber);


        for (var i = 0; i < contacts[this.id].address.length; i++) {
            $('.address-card').append(contacts[this.id].address[i].street + " " + contacts[this.id].address[i].city + " " + contacts[this.id].address[i].state);
        }

    });

    // Add and remove phone numbers
    $('.additionalPhone').on('click', function(event) {
        event.preventDefault();
        $('.addPhone').append('<div class="newPhone"><input type="tel" class="form-control"><button class="removePhone btn-primary">Remove</button></br></div>');
    });

    $('body').on('click', '.removePhone', function(event) {
        event.preventDefault();
        $(this).parent().remove();
    });

    // Add and remove addresses
    $('.additionalAddress').on('click', function(event) {
        event.preventDefault();
        $('.addAddress').first().clone().appendTo('.containAddress');
        $('.addAddress').last().append('<button class="removeAddress btn-primary">Remove</button></br>')
    });
    $('body').on('click', '.removeAddress', function(event) {
        event.preventDefault();
        $(this).parent().remove();

    });




}); // end doc ready
