$.getJSON('https://gist.githubusercontent.com/ozansulukpinar/ce09412f4859d67ff070f59eb5439fb3/raw/226356535f77ab0cb0ec584339335ae5d0cb77d1/naturalparksinturkey.json', function (data) {

    let nPark = data[Math.floor(Math.random() * data.length)];

    let areaMessage = '';

    if (nPark.size != '') {
        areaMessage = ' It occupies an area of ' + nPark.size + ' hectares.';
    }

    let message = nPark.name + ' is a natural park in ' + nPark.city + ', Turkey.' + areaMessage;

    console.log(message);
    
});
