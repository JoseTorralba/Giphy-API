const url = "https://api-endpoint.igdb.com";
const apiKey = "7ca6e395faa4c4187548c1970573fef4";

let results = {};

fetch(url, {
    header:{
        'user-key': apiKey
    }
})

.then(res => res.json())
.then(data => {
    results = data;
});



