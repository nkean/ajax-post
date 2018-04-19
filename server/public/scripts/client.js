console.log('client.js had been loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery had been loaded');
    displayRecords();
}

function displayRecords() {
    $.ajax({
        method: 'GET',  // could also use type: , but it breaks in angular?
        url: '/records'
    })
        .then(function (response) {
            response.forEach(function (record) {
                let formattedCost = record.cost.toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3);
                $('#recordList').append(`<tr>
                                            <td>${record.title}</td>
                                            <td>${record.artist}</td>
                                            <td>${record.year}</td>
                                            <td>${formattedCost}</td>
                                         </tr>`);
            });
        });
}