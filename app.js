$(document).ready(function () {

    // Array of video games, sets values in button which then returns results
    const videoGames = [
        "witcher 3",
        "Monster Hunter World",
        "Kingdom Hearts 3",
        "cats"
    ];

    // Array of filters for video games
    const filterChoices = [
        "Main Characters",
        "maps",
        "Enemies"
    ];
    
    let videoGameQuery = "";
    let filterQuery = "";

    // Displays Gif Buttons
    for (var i = 0; i < videoGames.length; i++) {

        const gifBtn = document.getElementById('buttonDiv');
        const createButton = document.createElement('button');
        createButton.classList.add("video-game");

        createButton.innerHTML = videoGames[i];
        createButton.value = videoGames[i];

        gifBtn.appendChild(createButton);
    }

    $('.video-game').on('click', function() {
        videoGameQuery = this.value;
    });

    // Displays Filter Buttons
    for (var i = 0; i < filterChoices.length; i++) {

        const filterBtn = document.getElementById('filterDiv');
        const createFilterBtn = document.createElement('button');

        createFilterBtn.innerHTML = filterChoices[i];
        createFilterBtn.value = filterChoices[i];

        filterBtn.appendChild(createFilterBtn);
    }


    // Shows Gif results when button pressed
    $('#submit').click (function (event) {

			var offset = Math.round(Math.random() * 100);

			var query = videoGameQuery + "+" + filterQuery;
            var key = "gc7kXsvMsDTr6mMHxbc8FMK8D23EPLG2";
            var url = "https://api.giphy.com/v1/gifs/search?q="
                + query
                + "&api_key=" 
                + key
                + "&limit=15"
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
                }
            }); // JSON
    }); 
});












