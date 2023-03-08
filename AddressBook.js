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


    function addAddress() {


        let $inputName = $(this).find("#name");
        let inputName = $inputName.val();

        let htmlTable = '<tr><table><tr><td>Name</td><td>Surname</td></tr><tr><td>Phone Number</td></tr><tr><td>Address</td></tr></table></tr>';

        $('#contacts-table').append(htmlTable);

    };



    $(this).find('#test-button').on('click', function (event) {
        event.preventDefault();
        addAddress();
    });



});