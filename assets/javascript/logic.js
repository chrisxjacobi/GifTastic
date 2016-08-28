var topics = ['instruments', 'nature', 'swimming', 'space'];

$(document).ready(function() {

    function renderButtons() {

        $('#buttonsView').empty();

        for (var i = 0; i < topics.length; i++) {
            var button = $('<button>');
           /* button.addClass('topic');
            a.attr('data-name', topics[i]);
            a.text(topics[i]);
            $('#buttonsView').append(button); */
        }

        $('#addTopic').on('click', function() {
            var topic = $('#topic-input').val().trim();
            topics.push(topic);
            renderButtons();
            return false;
        })

        function displayTopicInfo() {

            var topic = $(this).attr('data-name');
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC&limit=10";
            $.ajax({ url: queryURL, method: 'GET' }).done(function(response) {
                $("#topicsView").html(JSON.stringify(response));
            });
        }


        $(document).on('click', '.topic', displayTopicInfo);
        renderButtons();
    };
});

/*

$('button').on('click', function() {
    var p = $(this).data('instruments');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({ url: queryURL, method: 'GET' })
        .done(function(response) {
            var results = response.data;

            function renderButtons() {

                $('#buttonsView').empty();

                for (var i = 0; i < topics.length; i++) {
                    var button = $('<button>');
                    button.addClass('topic');
                    a.attr('data-name', topics[i]);
                    a.text(topics[i]);
                    $('#buttonsView').append(button);
                }
            };

            for (var i = 0; i < topics.length; i++) {
                var gifDiv = $('<div class="item">')

                var rating = results[i].rating;

                var p = $('<p>').text("Rating: " + rating);

                var topicImage = $('<img>');
                topicImage.attr('src', results[i].images.fixed_height.url);

                gifDiv.append(p)
                gifDiv.append(topicImage)

                $('#gifsAppearHere').prepend(gifDiv);
            }

        });

        $('#addTopic').on('click', function(){
        var topic = $('#topic-input').val().trim();
        topics.push(topic);
        renderButtons();

        return false;
    }) */
