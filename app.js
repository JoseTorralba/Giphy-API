$(document).ready(function () {

    // Array of video games, sets values in button which then returns results
    const videoGames = [
        "Witcher 3",
        "Monster Hunter World",
        "Kingdom Hearts 3",
        "Persona 5",
        "Final Fantasy VI",
        "Elder Scrolls V Skyrim"
    ];

    // Displays Buttons
    const buttons = document.getElementById('buttonDiv');

    for (var i = 0; i < videoGames.length; i++) {

        const createButton = document.createElement('button');

        createButton.innerHTML = videoGames[i];
        createButton.value = videoGames[i];

        buttonDiv.appendChild(createButton);
    }

    // Shows Gif results when button pressed
    $('button').click (function (event) {
			var offset = Math.round(Math.random() * 100);
			var query = this.value;
            var key = "gc7kXsvMsDTr6mMHxbc8FMK8D23EPLG2";
            var url = "https://api.giphy.com/v1/gifs/search?q="

                + query
                + videoGames[i]
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












