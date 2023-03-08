// Write a message to the console.
const addressFactory = (name, surname, phoneNumber, address) => {
    return {
        name: name,
        surname: surname,
        phoneNumber: phoneNumber,
        address: address
    }
};



$(document).ready(function () {


    function addAddress(name, surname, phone, address, id) {

        let addressTable = '<tr id="contact-table' + id + '"><table><tr><td>' + name + '</td><td>'
            + surname + '</td><td rowspan="3">test</td></tr><tr><td>' + phone
            + '</td></tr><tr><td>' + address + '</td></tr></table></tr>';

        $('#contacts-table').append(addressTable);

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


        addAddress(nameInput, surnameInput, phoneInput, addressInput, ++id);


    });




});