'use strict';

$( document ).ready(function() {
    

var contact = [{
	firstName: " ",
	lastName: " ",
	phoneNumber: " ",
	street: " ",
	city: " ",
	state: " "
}]


$('form').submit(function(event){
	event.preventDefault();
	var first = $('#firstName').val();
	var lastName = $('#lastName').val();
	var phoneNumber = $('#phoneNumber').val();
	var street = $('#street').val();
	var city = $('#city').val();
	var state = $('#state').val();
	// var contactArray = [firstName, lastName, phoneNumber, street, city, state];
	
	Object.create(contact);

	console.log(contact.firstName);

	// console.log(contactArray);

});







}); // end doc ready