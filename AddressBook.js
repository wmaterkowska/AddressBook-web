// Write a message to the console.

const contactFactory = (name, surname, phoneNumber, address) => {
    return {
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


    // reading from localStorage
    function readFromLocalStorage() {
        let contactsJson = localStorage.contacts;
        if (contactsJson !== undefined) {
            contacts = JSON.parse(contactsJson);
        }

        contacts.forEach(element => {
            let nameContact = element.name;
            let surnameContact = element.surname;
            let phoneContact = element.phoneNumber;
            let addressContact = element.address;

            addContactCard(nameContact, surnameContact, phoneContact, addressContact);
        });
    };

    readFromLocalStorage();

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




    function addContact(name, surname, phone, address) {

        let newContact = contactFactory(name, surname, phone, address);

        if (!contacts.includes(newContact)) {
            addContactCard(name, surname, phone, address);

            contacts.push(newContact);
            console.log(contacts);
        }

        localStorage.contacts = JSON.stringify(contacts);
        console.log(localStorage.contacts);
    };

    function addContactCard(name, surname, phone, address) {

        let contact = '<section class="element contact" ><button id="name-surname"><dfn class="contact-label">Name: </dfn>'
            + name + ' <p class= "contact-label"></p><dfn class="contact-label"> Surname: </dfn>' + surname +
            '</button> <p id="contact-phone"> Phone:  ' + phone +
            '</p><p id="contact-address-label"> Address: </p><p id="contact-address">' + address +
            '</p>  <button id="delete">Delete</button> </section>'

        $('#contacts').append(contact);
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

            addContact(nameInput, surnameInput, phoneInput, addressInput);
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

        let nameToDelete = $(this).parents('section').text().split(' ')[1];
        let surnameToDelete = $(this).parents('section').text().split(' ')[4];

        let contactToDelete = contacts.find(element => element.name === nameToDelete && element.surname === surnameToDelete);
        contacts.splice(contacts.indexOf(contactToDelete), 1);
        console.log(contacts);

        localStorage.contacts = JSON.stringify(contacts);
        console.log(localStorage.contacts);

    });


});