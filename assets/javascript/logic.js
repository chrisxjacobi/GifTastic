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

$('button').on('click', function() {
    var p = $(this).data('name');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({ url: queryURL, method: 'GET' })
        .done(function(response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $('<div class="item">');
                var rating = results[i].rating;
                var p = $('<p>').text("Rating: " + rating);
                
                var personImage = $('<img>');
                personImage.attr('src', results[i].images.fixed_height.url);

                gifDiv.append(p)
                gifDiv.append(personImage)

                $('#gifsAppearHere').prepend(gifDiv);
            }
        });

});



