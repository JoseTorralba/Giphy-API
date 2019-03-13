// Document on ready
document.addEventListener("DOMContentLoaded", function() {
    // Video Game Genre Object
    const gameGenreObj = {
        western: {
            genre: 'Western Games',
            icon: 'fas fa-horse-head'
        },
        fps: {
            genre: 'First Person Games',
            icon: 'fas fa-user'
        },
        rpg: {
            genre: 'Role Playing Games',
            icon: 'fas fa-dragon'
        },
        sports: {
            genre: 'Sports Games',
            icon: 'fas fa-futbol'
        },
        fighting: {
            genre: 'Fighting Games',
            icon: 'fas fa-fist-raised'
        },
        adventure: {
            genre: 'Adventure Games',
            icon: 'fas fa-map'
        },
        tpg: {
            genre: 'Third Person Games',
            icon: 'fas fa-walking'
        },
        racing: {
            genre: 'Racing Games',
            icon: 'fas fa-car'
        },
    };

    // Loops Through gameGenreObj
    for (var key in gameGenreObj) {
        if (gameGenreObj.hasOwnProperty(key)) {

            // Gets ul Tag by Class
            const buttonContainer = document.querySelector('.genre-showcase');

            // Creates List Items
            const createListItem = document.createElement('li');
            createListItem.classList.add('genre-showcase__list');
            createListItem.innerHTML = `
                <figure class="genre-showcase__fig">
                    <button class="genre-showcase__btn" value="${gameGenreObj[key]['genre']}">
                        ${gameGenreObj[key]['genre']}
                        <i class="${gameGenreObj[key]['icon']} genre-showcase__btn--icon"></i> 
                    </button>
                </figure>
            `;
            // Appends Create List Item
            buttonContainer.appendChild(createListItem);
        }
    };

    // Gets Submit Button by Class
    var submitButton = document.querySelector('.submit-btn');

    // Gets Genre Button by Class
    var genreButton = document.querySelectorAll('.genre-showcase__btn');

    // Genre Button on Click
    genreButton.forEach(function (genreButton) {
        genreButton.addEventListener('click', function() {

            // Gets Value of Genre Clicked
            videoGameGenre = this.value; 

            // Displays Get Gifs Button
            submitButton.style.opacity = '1';
            submitButton.style.cursor = 'pointer';
        });
    });

    // Submit Button on Click
    submitButton.addEventListener('click', function() {
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

        // Fetches Giphy API Data
        fetch(url).then(response => {
            return response.json();
        }).then(giphy => {

            // Gets Gif Container Div and Hides previous Gif results
            const getGifContainer = document.querySelector('.gif-container');
            getGifContainer.innerHTML = "";

            for (let i = 0; i < giphy.data.length; i++) {
                const gif = giphy.data[i];

                // Creates Div Containing Gif
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('gif-container__gif');

                // Creates Img to Display Gif
                const createImg = document.createElement('img');
                createImg.setAttribute('src', gif.images.downsized.url);
                createImg.classList.add('gif-container__gif--img')

                // Display Gifs
                imgContainer.append(createImg)
                getGifContainer.append(imgContainer);

            };
        }).catch(err => {
            console.log('There is and Error of ' + err);
        });
    });

    // Animated Scroll
    $('.submit-btn').click(function () {
        $('html, body').animate({
            scrollTop: $('#gifs').offset().top
        }, 1000);
    });
});