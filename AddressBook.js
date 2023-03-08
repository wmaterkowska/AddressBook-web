// Write a message to the console.
const addressFactory = (name, surname, phoneNumber, address) => {
    return {
        name: name,
        surname: surname,
        phoneNumber: phoneNumber,
        address: address
    }
};

function addAddress() {
    console.log("test2");
    $('#contacts-table').append(`
    <tr id="R${++rowIdx}">
        <table>
            <tr>
                <td>Name</td>
                <td>Surname</td>
            </tr>
            <tr>
                <td>Phone Number</td>
            </tr>
            <tr>
                <td>Address</td>
            </tr>
        </table>
    </tr>
    `)

};




$(document).ready(function () {

    let rowIdx = 0;


    let newAddress = $("<table>");
    newAddress.text("test");
    $("#contacts-table").append(newAddress);


    $(this).find('#add').on('click', function () {
        console.log("test");
        addAddress();
    });



});