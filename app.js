$(document).ready(function () {

    // Array of video games, can be changed to anything video game related
    // Maybe things like game genres?
    const videoGames = [
        "witcher 3",
        "need for speed",
        "Monster Hunter World",
        "FIFA"
    ];

    // Array of filters for video games
    // Can be changed to like game ratings or something to go with the first array
    const filterChoices = [
        "Main Characters",
        "brand",
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


    $('.video-game').on('click', function () {
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


    // Shows Gif results when button is clicked
    $('#submit').click(function (event) {

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












