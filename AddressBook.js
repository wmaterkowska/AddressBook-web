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
    // let input = $("#search").val();
    // input = input.toLowerCase();
    // let contacts = $('.contact');

    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let contacts = document.getElementsByClassName('contact');
    console.log("test" + contacts);

    for (let i = 0; i < contacts.length; i++) {
        if (!contacts[i].innerHTML.toLowerCase().includes(input)) {
            contacts[i].style.display = "none";
        } else {
            contacts[i].style.display = "table";
        }
    }

};


$(document).ready(function () {


    function addContact(name, surname, phone, address, id) {

        let contactTable = '<tr id="contact-table' + id + '" class = "contact"><td><table><tr><td>' + name + '</td><td>'
            + surname + '</td></tr><tr><td>' + phone
            + '</td></tr><tr><td>' + address + '</td></tr></table></td><td><button id="delete">delete</button></td></tr>';

        $('#contacts-table').append(contactTable);

        let newContact = addressFactory(name, surname, phone, address);
        contacts.push(newContact);
    };



    $('#add-button').on('click', function (event) {
        event.preventDefault();

        let id = 0;

        let $name = $("#name");
        let nameInput = $name.val();

        let $surname = $("#surname");
        let surnameInput = $surname.val();

        let $phone = $("#phone-number");
        let phoneInput = $phone.val();

        let $address = $("#address");
        let addressInput = $address.val();


        addContact(nameInput, surnameInput, phoneInput, addressInput, ++id);
    });


    $("#contacts-table").on('click', '#delete', function () {

        $(this).parents('tr').remove();

    });


});