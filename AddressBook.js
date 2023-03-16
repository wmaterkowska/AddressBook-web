// Write a message to the console.

const contactFactory = (id, name, surname, phoneNumber, address) => {
    return {
        id: id,
        name: name,
        surname: surname,
        phoneNumber: phoneNumber,
        address: address
    }
};

let contacts = [];

function search() {
    // https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/

    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let contacts = document.getElementsByClassName('contact');

    for (let i = 0; i < contacts.length; i++) {
        if (!contacts[i].innerHTML.toLowerCase().includes(input)) {
            contacts[i].style.display = "none";
        } else {
            contacts[i].style.display = "table";
        }
    }

};


$(document).ready(function () {


    function validationOfContact(name, surname, phone) {

        // let pattern = "^([0-9\(\)\/\+ \-]*)$";
        let pattern = /\+[0-9]{2}\ [0-9]{3}\ [0-9]{3}\ [0-9]{3}/;

        if (name === '') { alert("Name is mandatory."); }

        if (surname === '') { alert("Surname is mandatory."); }

        if (phone === '') { alert("Phone Number is mandatory.") }

        if (!phone.match(pattern)) { alert("Use: +xx xxx xxx xxx format."); }

        for (let i = 0; i < contacts.length; i++) {
            if (name.toLowerCase() === contacts[i].name.toLowerCase()
                && surname.toLowerCase() === contacts[i].surname.toLowerCase()) {
                alert(`${name} ${surname} already is in your Address Book.`)
                return false;
            }
        }

        if (name !== '' && surname !== '' && phone.match(pattern)) {
            return true;
        }

        return false;
    };


    let id = 0;
    function addContact(id, name, surname, phone, address) {

        let contact = '<section class="element contact" ><button id="name-surname"><p id="id">' + id + '</p> <dfn class="contact-label">Name: </dfn>'
            + name + ' <p class= "contact-label"></p><dfn class="contact-label"> Surname: </dfn>' + surname +
            '</button> <p id="contact-phone"> Phone:  ' + phone +
            '</p><p id="contact-address-label"> Address: </p><p id="contact-address">' + address +
            '</p>  <button id="delete">Delete</button> </section>'

        $('#contacts').append(contact);

        let newContact = contactFactory(id, name, surname, phone, address);
        contacts.push(newContact);
        console.log(contacts);

        // localStorage.id = 2;
        // console.log(localStorage.id);
    };


    $('#show-contact-form-button').on('click', function (event) {
        event.preventDefault();

        $('#add-contact').slideToggle(200);
    })


    $('#add-button').on('click', function add(event) {
        event.preventDefault();

        let $name = $("#name");
        let nameInput = $name.val();

        let $surname = $("#surname");
        let surnameInput = $surname.val();

        let $phone = $("#phone-number");
        let phoneInput = $phone.val();

        let $address = $("#address");
        let addressInput = $address.val();


        if (validationOfContact(nameInput, surnameInput, phoneInput, addressInput)) {

            addContact(id++, nameInput, surnameInput, phoneInput, addressInput);
            document.getElementById("contact-form").reset();
            $('#add-contact').slideUp(400);
        }

    });



    $("#contacts").on('click', '#name-surname', function () {

        $(this).parents('section').children('p').toggle();
        $(this).parents('section').children('button').children('.contact-label').toggle();
        $(this).parents('section').children('#delete').toggle();
    });


    $("#contacts").on('click', '#delete', function () {

        $(this).parents('section').remove();

        let idToDelete = $(this).parents('section').text()[0];
        // console.log(idToDelete);
        let contactToDelete = contacts.find(element => element[0] === idToDelete);
        contacts.splice(contacts.indexOf(contactToDelete), 1);
        console.log(contacts);

    });


});