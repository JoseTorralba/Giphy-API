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

    // Gets Submit & Gif Section by Class
    var getSubmitButton = document.querySelector('.submit-btn');
    var getGifSection = document.querySelector('.gif-section');


    function getRandomGifs(genreValue) {
        // Displays Gif Section
        getGifSection.style.display = 'block';
        var offset = Math.round(Math.random() * 100);
        var query = videoGameGenre;
        var key = "gc7kXsvMsDTr6mMHxbc8FMK8D23EPLG2";

        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=12&offset=${offset}`)
        .then(function (response) {
            response.json()

            .then(function (giphy) {

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
            })
        })
    }

    function createGenreButtons() {
        // Loops Through gameGenreObj object
        for (var genre in gameGenreObj) {

            if (gameGenreObj.hasOwnProperty(genre)) {

                // Gets Button Container by Class Then Creates Buttons
                const getGenreButtonContainer = document.querySelector('.genre-showcase');
                const displayGenreButton = document.createElement('div');

                displayGenreButton.classList.add('genre-showcase__container');
                displayGenreButton.innerHTML = `
                    <button class="genre-showcase__btn" value="${gameGenreObj[genre]['genre']}">
                        <i class="${gameGenreObj[genre]['icon']} genre-showcase__btn--icon"></i> 
                        <p class="genre-showcase__btn--text">${gameGenreObj[genre]['genre']}</p>
                        
                    </button>
                `;
                // Appends Genre Buttons
                getGenreButtonContainer.appendChild(displayGenreButton);
            }
        };
    }
    // Displays Genre Buttons
    createGenreButtons()

    // Genre Button on Click
    var genreButton = document.querySelectorAll('.genre-showcase__btn');
    genreButton.forEach(function (genreButton) {
        genreButton.addEventListener('click', function() {

            // Gets Value of Genre Clicked
            videoGameGenre = this.value; 
        });
    });

    // Submit Button on Click
    getSubmitButton.addEventListener('click', function() {
        getRandomGifs(videoGameGenre);
    });

    // Animated Scroll
    $('.submit-btn').click(function () {
        $('html, body').animate({
            scrollTop: $('#gifs').offset().top
        }, 1000);
    });
});