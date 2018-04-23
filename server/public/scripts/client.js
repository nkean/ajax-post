console.log('client.js had been loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery had been loaded');
    $('#submitButton').on('click', addNew);
    getAllRecords();
}

function getAllRecords() {
    $.ajax({
        method: 'GET',  // could also use type: , but it breaks in angular?
        url: '/record'
    })
        .then(function (response) {
            $('#recordList').empty();
            response.forEach(function (record) {
                let formattedCost = `$ ${record.cost.toLocaleString()}`;
                $('#recordList').append(`<tr>
                                            <td>${record.title}</td>
                                            <td>${record.artist}</td>
                                            <td>${record.year}</td>
                                            <td>${formattedCost}</td>
                                         </tr>`);
            });
        });
}

function addNew() {
    const newRecord = {
        title: $('#inputTitle').val(),
        artist: $('#inputArtist').val(),
        year: $('#inputYear').val(),
        cost: $('#inputCost').val()
    };
    console.log('New record added:', newRecord);
    $('input').val('');

    $.ajax({
        method: 'POST',
        url: '/record/add',
        data: newRecord
    })
        .then(function (response) {
            console.log(response);
            getAllRecords();
        });
}