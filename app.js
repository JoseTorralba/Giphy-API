// Animated Scroll
$('#submit').click(function () {
    $('html, body').animate({
        scrollTop: $('#gifs').offset().top
    }, 1000);
});

$(document).ready(function () {

    // Array of movies genre
    const movieGenre = [
        "Western Games",
        "First Person Games",
        "Role Playing Games", 
        "Thriller Games",
        "Horror Games",
        "Adventure Games",
        "Third Person Games",
        "Action Games"
    ];

    // Empty String
    let videoGameGenre = "";

    // Displays Gif Buttons
    for (var i = 0; i < movieGenre.length; i++) {

        const gifBtn = document.getElementById('buttonDiv');
        const createButton = document.createElement('button');
        createButton.classList.add("movie-genre");

        createButton.innerHTML = movieGenre[i];
        createButton.value = movieGenre[i];

        gifBtn.appendChild(createButton);
    }

    $('.movie-genre').on('click', function () {
        videoGameGenre = this.value;
    });

    // Shows Gif results when sumbit button is clicked
    $('#submit').click(function (event) {

        var offset = Math.round(Math.random() * 100);
        var query = videoGameGenre;
        var key = "gc7kXsvMsDTr6mMHxbc8FMK8D23EPLG2";
        var url = "https://api.giphy.com/v1/gifs/search?q="
            + query
            + "&api_key=" 
            + key
            + "&limit=12"
            + "&offset="
            + offset;

        $.getJSON(url, function (json) {
            console.log(json);

            // Hides previous results
            document.getElementById('gifs').innerHTML = "";

            // Displays Gifs
            for (let i = 0; i < json.data.length; i++) {

                const gif = json.data[i];

                const imgElem = $('<img>')
                    .attr('src', gif.images.downsized.url)

                const imgContainer = $('<div>')
                    .addClass('gif');

                imgContainer.append(imgElem)

                $('#gifs').append(imgContainer);
            };
        });
    }); 
});