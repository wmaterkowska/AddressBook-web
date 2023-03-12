// Write a message to the console.
const addressFactory = (name, surname, phoneNumber, address) => {
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

// $('#add-contact').hide();

$(document).ready(function () {

    let id = 0;

    function addContact(name, surname, phone, address, id) {

        let contact = '<section class="element contact" > <p>' + name + ' ' + surname +
            '</p> <p>' + phone + '</p><p>' + address +
            '</p>  <button id="delete">Delete</button> </section>'

        $('#contacts').append(contact);

        let newContact = addressFactory(name, surname, phone, address);
        contacts.push(newContact);
        // console.log(contacts);
    };


    $('#show-contact-form').on('click', function (event) {
        event.preventDefault();

        $('#add-contact').slideDown(200);
    })


    $('#add-button').on('click', function (event) {
        event.preventDefault();

        let $name = $("#name");
        let nameInput = $name.val();

        let $surname = $("#surname");
        let surnameInput = $surname.val();

        let $phone = $("#phone-number");
        let phoneInput = $phone.val();

        let $address = $("#address");
        let addressInput = $address.val();


        addContact(nameInput, surnameInput, phoneInput, addressInput, ++id);

        document.getElementById("contact-form").reset();

        $('#add-contact').slideUp(300);
    });


    $("#contacts").on('click', '#delete', function () {

        $(this).parents('section').remove();

    });


});