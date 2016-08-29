var topics = ['instruments', 'nature', 'swimming', 'space'];



function renderButtons() {
    $('#addButton').empty();
    //for loop that iterates through array and creates button
    for (var i = 0; i < topics.length; i++) {


        var button = $('<button>');
        button.addClass('topic');
        button.attr('data-name', topics[i]);
        button.text(topics[i]);
        $('#addButton').append(button);

    }
};

$('#addGif').on('click', function() {
    var userInput = $('#gif-input').val().trim();
    console.log($('#gif-input'));
    topics.push(userInput);
    renderButtons();
    return false;
});
renderButtons();
