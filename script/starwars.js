//Tuan Luong-Original work. 
//Purpose of this project was to expore single page applications using JS by making a
//Star wars databank from the star wars api

function getplanets() {
    var alertrow = document.getElementById("alertrow"); //Informs the user while get request is loading
    var mainbody = document.getElementById("mainbody");
    mainbody.innerHTML = "";
    alertrow.innerHTML = `
    <div class="alert alert-secondary" role="alert">
    Loading Resource... 
    </div>
    `;
    $.ajax({ //method to call API using jquery
        type: "GET",
        url: "https://swapi.dev/api/planets",
        dataType: "json",

    }).done(function(data) {
        alertrow.innerHTML = "";
        var results = data.results;
        var firstrow = '<div class="row">'; //Prints out first row from API call
        for (var i = 0; i < 5; i++) { //Prints first row and assigns data to each category
            //To a card
            var currentresult = results[i];
            var currentcard = `
                <div class="col-md-2">
                <div class="card">
                <div class="card-header">
                    <h3>` + currentresult.name + `</h3>
                </div>
                <div class="card-body">
                    <p class="card-text">Rotation Period:` + currentresult.rotation_period + `</p>
                    <p class="card-text">Orbital Period:` + currentresult.orbital_period + `</p>
                    <p class="card-text">Diameter:` + currentresult.diameter + `</p>
                    <p class="card-text">Climate:` + currentresult.climate + `</p>
                    <p class="card-text">Gravity:` + currentresult.gravity + `</p>
                    <p class="card-text">Terrain:` + currentresult.terrain + `</p>
                    <p class="card-text">Surface Water:` + currentresult.surface_water + `</p>
                    <p class="card-text">Population:` + currentresult.population + `</p>
                    
                </div>
                </div>
                </div>
                `;
            firstrow = firstrow + currentcard;

        }
        firstrow = firstrow + '</div>' + '</br>' + '</br>';
        var secondrow = '<div class="row">';

        for (var n = 5; n < 10; n++) { //prints out second row and assigns to cards
            var currentresult = results[n];
            var currentcard = `
                <div class="col-md-2">
                <div class="card">
                <div class="card-header">
                    <h3>` + currentresult.name + `</h3>
                </div>
                <div class="card-body">
                    <p class="card-text">Rotation Period:` + currentresult.rotation_period + `</p>
                    <p class="card-text">Orbital Period:` + currentresult.orbital_period + `</p>
                    <p class="card-text">Diameter:` + currentresult.diameter + `</p>
                    <p class="card-text">Climate:` + currentresult.climate + `</p>
                    <p class="card-text">Gravity:` + currentresult.gravity + `</p>
                    <p class="card-text">Terrain:` + currentresult.terrain + `</p>
                    <p class="card-text">Surface Water:` + currentresult.surface_water + `</p>
                    <p class="card-text">Population:` + currentresult.population + `</p>
                </div>
                </div>
                </div>
                `;
            secondrow = secondrow + currentcard;

        }
        secondrow = secondrow + '</div>'; //Closes off the card and container rows
        mainbody.innerHTML = firstrow + secondrow; //Displays in main body

    }).fail(function() { //Alerts users if the API call has failed
        alertrow.innerHTML = `
        <div class="alert alert-secondary" role="alert">
        Error, Failed to Load Resource
        </div> 
        `;
    });
}

function getPeople() { //Functions the same, except with different parameters, API call and data categories. 
    var alertrow = document.getElementById("alertrow");
    var mainbody = document.getElementById("mainbody");
    mainbody.innerHTML = "";
    alertrow.innerHTML = `
    <div class="alert alert-secondary" role="alert">
    Loading Resource... 
    </div>
    `;
    $.ajax({
        type: "GET",
        url: "https://swapi.dev/api/people",
        dataType: "json",

    }).done(function(data) {
        alertrow.innerHTML = "";
        var results = data.results;
        var firstrow = '<div class="row">';
        for (var i = 0; i < 5; i++) {
            var currentresult = results[i];
            var currentcard = `
                <div class="col-md-2">
                <div class="card">
                <div class="card-header">
                    <h3>` + currentresult.name + `</h3>
                </div>
                <div class="card-body">
                    <p class="card-text">Mass:` + currentresult.mass + `</p>
                    <p class="card-text">Hair Color:` + currentresult.hair_color + `</p>
                    <p class="card-text">Skin Color:` + currentresult.skin_color + `</p>
                    <p class="card-text">Birth Year:` + currentresult.birth_year + `</p>
                    <p class="card-text">Gender:` + currentresult.gender + `</p>
                </div>
                </div>
                </div>
                `;
            firstrow = firstrow + currentcard;

        }
        firstrow = firstrow + '</div>' + '</br>' + '</br>';
        var secondrow = '<div class="row">';

        for (var n = 5; n < 10; n++) {
            var currentresult = results[n];
            var currentcard = `
                <div class="col-md-2">
                <div class="card">
                <div class="card-header">
                    <h3>` + currentresult.name + `</h3>
                </div>
                <div class="card-body">
                    <p class="card-text">Mass:` + currentresult.mass + `</p>
                    <p class="card-text">Hair Color:` + currentresult.hair_color + `</p>
                    <p class="card-text">Skin Color:` + currentresult.skin_color + `</p>
                    <p class="card-text">Birth Year:` + currentresult.birth_year + `</p>
                    <p class="card-text">Gender:` + currentresult.gender + `</p>
                </div>
                </div>
                </div>
                `;
            secondrow = secondrow + currentcard;

        }
        secondrow = secondrow + '</div>';
        mainbody.innerHTML = firstrow + secondrow;

    }).fail(function() {
        alertrow.innerHTML = `
        <div class="alert alert-secondary" role="alert">
        Error, Failed to Load Resource
        </div>
        `;
    });


}

function getShips() { //Functions the same, except with different parameters, API call and data categories. 
    var alertrow = document.getElementById("alertrow");
    var mainbody = document.getElementById("mainbody");
    mainbody.innerHTML = "";
    alertrow.innerHTML = `
    <div class="alert alert-secondary" role="alert">
    Loading Resource... 
    </div>
    `;
    $.ajax({
        type: "GET",
        url: "https://swapi.dev/api/starships",
        dataType: "json",

    }).done(function(data) {
        alertrow.innerHTML = "";
        var results = data.results;
        var firstrow = '<div class="row">';
        for (var i = 0; i < 5; i++) {
            var currentresult = results[i];
            var currentcard = `
                <div class="col-md-2">
                <div class="card">
                <div class="card-header">
                    <h3>` + currentresult.name + `</h3>
                </div>
                <div class="card-body">
                    <p class="card-text">Model:` + currentresult.model + `</p>
                    <p class="card-text">Manufacturer:` + currentresult.manufacturer + `</p>
                    <p class="card-text">Cost:` + currentresult.cost_in_credits + `</p>
                    <p class="card-text">Length:` + currentresult.length + `</p>
                    <p class="card-text">Max Sublight Speed:` + currentresult.max_atmosphering_speed + `</p>
                    <p class="card-text">Crew:` + currentresult.crew + `</p>
                    <p class="card-text">Passengers:` + currentresult.passengers + `</p>
                    <p class="card-text">Cargo Capacity:` + currentresult.cargo_capacity + `</p>
                    <p class="card-text">Consumables:` + currentresult.consumables + `</p>
                    <p class="card-text">Hyperdrive Rating:` + currentresult.hyperdrive_rating + `</p>
                    <p class="card-text">Ship Class:` + currentresult.starship_class + `</p>
                </div>
                </div>
                </div>
                `;
            firstrow = firstrow + currentcard;

        }
        firstrow = firstrow + '</div>' + '</br>' + '</br>';
        var secondrow = '<div class="row">';

        for (var n = 5; n < 10; n++) {
            var currentresult = results[n];
            var currentcard = `
                <div class="col-md-2">
                <div class="card">
                <div class="card-header">
                    <h3>` + currentresult.name + `</h3>
                </div>
                <div class="card-body">
                    <p class="card-text">Model:` + currentresult.model + `</p>
                    <p class="card-text">Manufacturer:` + currentresult.manufacturer + `</p>
                    <p class="card-text">Cost:` + currentresult.cost_in_credits + `</p>
                    <p class="card-text">Length:` + currentresult.length + `</p>
                    <p class="card-text">Max Sublight Speed:` + currentresult.max_atmosphering_speed + `</p>
                    <p class="card-text">Crew:` + currentresult.crew + `</p>
                    <p class="card-text">Passengers:` + currentresult.passengers + `</p>
                    <p class="card-text">Cargo Capacity:` + currentresult.cargo_capacity + `</p>
                    <p class="card-text">Consumables:` + currentresult.consumables + `</p>
                    <p class="card-text">Hyperdrive Rating:` + currentresult.hyperdrive_rating + `</p>
                    <p class="card-text">Ship Class:` + currentresult.starship_class + `</p>
                </div>
                </div>
                </div>
                `;
            secondrow = secondrow + currentcard;

        }
        secondrow = secondrow + '</div>';
        mainbody.innerHTML = firstrow + secondrow;

    }).fail(function() {
        alertrow.innerHTML = `
        <div class="alert alert-secondary" role="alert">
        Error, Failed to Load Resource
        </div>
        `;
    });
}



function getFilms() { //Functions the same, except with different parameters, API call and data categories. 
    var alertrow = document.getElementById("alertrow");
    var mainbody = document.getElementById("mainbody");
    mainbody.innerHTML = "";
    alertrow.innerHTML = `
    <div class="alert alert-secondary" role="alert">
    Loading Resource... 
    </div>
    `;
    $.ajax({
        type: "GET",
        url: "https://swapi.dev/api/films",
        dataType: "json",

    }).done(function(data) {
        alertrow.innerHTML = "";
        var results = data.results;
        var firstrow = '<div class="row" id="movierow">';
        for (var currentresult of results) {

            var currentcard = `
                <div class="col-md-2">
                <div class="card">
                <div class="card-header">
                    <h3>` + currentresult.episode_id + `</h3>
                </div>
                <div class="card-body">
                    <p class="card-text">Title:` + currentresult.title + `</p>
                    <p class="card-text">Director:` + currentresult.director + `</p>
                    <p class="card-text">Producers:` + currentresult.producer + `</p>
                    <p class="card-text">Release Date:` + currentresult.release_date + `</p>
                    
                </div>
                </div>
                </div>
                `;
            firstrow = firstrow + currentcard;



        }
        firstrow = firstrow + '</div>';
        mainbody.innerHTML = firstrow;


    }).fail(function() {
        alertrow.innerHTML = `
        <div class="alert alert-secondary" role="alert">
        Error, Failed to Load Resource
        </div>
        `;
    });
}