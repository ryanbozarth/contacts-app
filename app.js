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
            // more code needed
            contact.phoneNumber.push(tempPhone)
        }
        var selectAddress = $('.containAddress .addAddress');
        for (var i = 0; i < selectAddress.length; i++){
            var tempAddress = $(selectAddress[i])
            var inputs = tempAddress.find('input');
             var city = $(inputs[0]).val(); // one 
             contact.address.push({
                city: city
             })
            // filter() or find()
        }
        // this? $(this). parent(), wrap an extra div, 

        // { 
        //    cit     street: street, 
        //         city: city, 
        //         state: state
        //     }

        // Index is used to identify location of contact in an array
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
        $('.address-card').text(contacts[this.id].street + " " + contacts[this.id].city + " " + contacts[this.id].state);

    });

    $('.additionalPhone').on('click', function(event) {
        event.preventDefault();
        $('.addPhone').append('<div class="newPhone"><input type="tel" class="form-control"><button class="removePhone btn-primary">Remove</button></br></div>');
    });

    $('body').on('click', '.removePhone', function(event) {
        event.preventDefault();
        $(this).parent().remove();
        // $('.addPhone input:first').siblings().remove();
        // $('.addPhone').append('<br>');
    });
    $('.additionalAddress').on('click', function(event) {
        event.preventDefault();
        $('.addAddress').first().clone().appendTo('.containAddress');
        // clones 2, 3 at a time cause it's cloning all of it
        // how to add remove button to each set - append?
    });







}); // end doc ready
