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


$(document).ready(function () {

    let id = 0;

    function addContact(name, surname, phone, address, id) {

        let contactTable = '<tr id="contact' + id +
            '" class="element contact"><td class="contact" id="contact-cell"><table><tr><td>' + name + '</td><td>'
            + surname + '</td></tr><tr><td colspan="2">' + phone
            + '</td></tr><tr><td colspan="2">' + address
            + '</td></tr></table></td><td id="delete-cell"><button id="delete">delete</button></td></tr>';
        let $contact = $(contactTable);
        $contact.attr("class", "contact");

        $('#contacts-table').append(contactTable);

        let newContact = addressFactory(name, surname, phone, address);
        contacts.push(newContact);
        // console.log(contacts);
    };


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

        document.getElementById("address-form").reset();

    });


    $("#contacts-table").on('click', '#delete', function () {

        $(this).parents('tr').remove();

    });


});