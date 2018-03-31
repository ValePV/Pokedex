$(document).ready(function() {
  for (var i = 1; i <= 100; i++) {
    $('#pokemon').append('<div class="contain-poke"><img class="img-pokemon" id="' 
      + i + '" data-id="'+ i +'" src="http://pokeapi.co/media/img/' + i + '.png"></div>');
  }
  
   
  
  $('.img-pokemon').click(function(){
    var pokId = $(this).data("id")
   // console.log(pokId);
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokId + '/')
    .then(function(response) {
      // Turns the the JSON into a JS object
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let name = data.name;
      let numb = data.id;
      let weight = data.weight;
      let type = [];
      let ability = [];
      let stat = [];
      let move = [];
      
      for (let i = 0; i < data.moves.length; i++) {
        move.push(data.moves[i].move.name);
      }

      for (let i = 0; i < data.types.length; i++) {
        type.push(data.types[i].type.name);
      }
      
      for (let i = 0; i < data.abilities.length; i++) {
        ability.push(data.abilities[i].ability.name);
      }
      for (let i = 0; i < data.stats.length; i++) {
        stat.push(data.stats[i].stat.name);
      }
      $('#pokemon').hide();
      $('.my_pokemon').append('<div class="cont-pokedex row">'
        + '<div class="col-xs-11 col-sm-11 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">'
        + '<div class="row panel-pokemon">'
        + '<div class="col-xs-11 col-md-3 col-md-3 col-lg-3">'
        +   '<h2 class="text-center tittle-pokem">' + name + '</h2>'
        +   '<div class="cont-img">'
        +     '<img class="img-poke-info" src="http://pokeapi.co/media/img/' + numb + '.png"/>'
        +   '</div>'
        + '</div>'
        + '<div class="col-xs-11 col-md-3 col-md-3 col-lg-3 contain-details">'
        +   '<div class="row descrip contain-info">' 
        +   '</div>'
        +   '<div class="row contain-info">' 
        +     '<div class="col-xs-11 col-md-4 col-md-4 col-lg-4">'
        +       '<h5> Number </h5>'
        +     '</div>'
        +     '<div class="col-xs-11 col-md-8 col-md-8 col-lg-8">'
        +       '<h5>' + numb + '</h5>'
        +     '</div>'
        +   '</div>'
        +   '<div class="row contain-info">' 
        +     '<div class="col-xs-11 col-md-4 col-md-4 col-lg-4">'
        +       '<h5> Weight </h5>'
        +     '</div>'
        +     '<div class="col-xs-11 col-md-8 col-md-8 col-lg-8">'
        +       '<h5>' + weight + '</h5>'
        +     '</div>'
        +   '</div>'
        +   '<div class="row habit contain-info">' 
        +   '</div>'
        + '</div>'
        + '<div class="col-xs-11 col-md-3 col-md-3 col-lg-3 contain-details">'
        +   '<div class="row color contain-info">' 
        +   '</div>'
        +   '<div class="row contain-info">' 
        +     '<div class="col-xs-11 col-md-4 col-md-4 col-lg-4">'
        +       '<h5> Ability </h5>'
        +     '</div>'
        +     '<div class="col-xs-11 col-md-8 col-md-8 col-lg-8">'
        +       '<h5>' + ability[0] + '</h5><h5>' + ability[1] + '</h5>'
        +     '</div>'
        +   '</div>'
        +   '<div class="row contain-info">' 
        +     '<div class="col-xs-11 col-md-4 col-md-4 col-lg-4">'
        +       '<h5> Type </h5>'
        +     '</div>'
        +     '<div class="col-xs-11 col-md-8 col-md-8 col-lg-8">'
        +       '<h5>' + type[0] + '</h5><h5>' + type[1] + '</h5>'
        +     '</div>'
        +   '</div>'
        + '</div>'
        + '<div class="col-xs-11 col-md-3 col-md-3 col-lg-3 contain-details">'
        +   '<div class="row contain-info">' 
        +     '<div class="col-xs-4 col-md-4 col-md-4 col-lg-4">'
        +       '<h5> Stats </h5>'
        +     '</div>'
        +     '<div class="col-xs-11 col-md-8 col-md-8 col-lg-8">'
        +       '<h5>' + stat[0] + '</h5><h5>' + stat[1] + '</h5>'
        +       '<h5>' + stat[2] + '</h5>'
        +     '</div>'
        +   '</div>'
        +   '<div class="row contain-info">' 
        +     '<div class="col-xs-11 col-md-4 col-md-4 col-lg-4">'
        +       '<h5> Moves </h5>'
        +     '</div>'
        +     '<div class="col-xs-11 col-md-8 col-md-8 col-lg-8">'
        +       '<h5>' + move[0] + '</h5><h5>' + move[1] + '</h5>'
        +       '<h5>' + move[2] + '</h5>'
        +       '<h5>' + move[3] + '</h5><h5>' + move[4] + '</h5>'
        +     '</div>'
        +   '</div>'
        + '</div>'
        + '</div>'
        + '</div>'
        +'</div>');
    });

    /* return fetch("https://pokeapi.co/api/v2/pokemon-species/" + poke_name.value +"/"); */
  fetch('https://pokeapi.co/api/v2/pokemon-species/' + pokId +'/')
    .then(function(response) {
    //Convierte el texto en formato JSON en un objeto JS
      return response.json();
    })
    .then(function(data) {
      console.log(data);

      let color = data.color.name;
      let habitat = data.habitat.name;
      

      $('.habit').append('<div class="col-xs-11 col-md-4 col-md-4 col-lg-4">'
          +         '<h5> Habitat </h5>'
          +       '</div>'
          +       '<div class="col-xs-11 col-md-8 col-md-8 col-lg-8">'
          +         '<h5>' + habitat + '</h5></div>');

      $('.color').append('<div class="col-xs-11 col-md-4 col-md-4 col-lg-4">'
          +         '<h5> Color </h5>'
          +       '</div>'
          +       '<div class="col-xs-11 col-md-8 col-md-8 col-lg-8">'
          +         '<h5>' + color + '</h5></div>');

      //$('.panel-pokemon').css("background-color",'"' + color + '"' );
      $('.panel-pokemon').css("background-color", color );

    })




  fetch('https://pokeapi.co/api/v2/characteristic/' + pokId +'/')
    .then(function(response) {
    //Convierte el texto en formato JSON en un objeto JS
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let description = [];

      for (let i = 0; i < data.descriptions.length; i++) {
          description.push(data.descriptions[i].description);
      }

      $('.descrip').append('<div class="col-md-12">'
          + '<h5 class="text-center">' + description[0] + '</h5><h5 class="text-center">' + description[1] + '</h5>'
          +'</div>');
      

                        


    })
  })

});



  


var search = document.getElementById('search');
var pokeName = document.getElementById('poke_name');

search.addEventListener('click', function() {
  fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName.value + '/')
    .then(function(response) {
      // Turns the the JSON into a JS object
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let name = data.name;
      let numb = data.id;
      let weight = data.weight;
      let type = [];
      let ability = [];
      let stat = [];
      let move = [];
      
      for (let i = 0; i < data.moves.length; i++) {
        move.push(data.moves[i].move.name);
      }

      for (let i = 0; i < data.types.length; i++) {
        type.push(data.types[i].type.name);
      }
      
      for (let i = 0; i < data.abilities.length; i++) {
        ability.push(data.abilities[i].ability.name);
      }
      for (let i = 0; i < data.stats.length; i++) {
        stat.push(data.stats[i].stat.name);
      }
      $('#pokemon').hide();
      $('.my_pokemon').append('<div class="cont-pokedex row">'
        + '<div class="col-md-8 col-md-offset-2">'
        + '<div class="row panel-pokemon">'
        + '<div class="col-md-3">'
        +   '<h2 class="text-center tittle-pokem">' + name + '</h2>'
        +   '<div class="cont-img">'
        +     '<img class="img-poke-info" src="http://pokeapi.co/media/img/' + numb + '.png"/>'
        +   '</div>'
        + '</div>'
        + '<div class="col-md-3 contain-details">'
        +   '<div class="row descrip contain-info">' 
        +   '</div>'
        +   '<div class="row contain-info">' 
        +     '<div class="col-md-4">'
        +       '<h5> Number </h5>'
        +     '</div>'
        +     '<div class="col-md-8">'
        +       '<h5>' + numb + '</h5>'
        +     '</div>'
        +   '</div>'
        +   '<div class="row contain-info">' 
        +     '<div class="col-md-4">'
        +       '<h5> Weight </h5>'
        +     '</div>'
        +     '<div class="col-md-8">'
        +       '<h5>' + weight + '</h5>'
        +     '</div>'
        +   '</div>'
        +   '<div class="row habit contain-info">' 
        +   '</div>'
        + '</div>'
        + '<div class="col-md-3 contain-details">'
        +   '<div class="row color contain-info">' 
        +   '</div>'
        +   '<div class="row contain-info">' 
        +     '<div class="col-md-4">'
        +       '<h5> Ability </h5>'
        +     '</div>'
        +     '<div class="col-md-8">'
        +       '<h5>' + ability[0] + '</h5><h5>' + ability[1] + '</h5>'
        +     '</div>'
        +   '</div>'
        +   '<div class="row contain-info">' 
        +     '<div class="col-md-4">'
        +       '<h5> Type </h5>'
        +     '</div>'
        +     '<div class="col-md-8">'
        +       '<h5>' + type[0] + '</h5><h5>' + type[1] + '</h5>'
        +     '</div>'
        +   '</div>'
        + '</div>'
        + '<div class="col-md-3 contain-details">'
        +   '<div class="row contain-info">' 
        +     '<div class="col-md-4">'
        +       '<h5> Stats </h5>'
        +     '</div>'
        +     '<div class="col-md-8">'
        +       '<h5>' + stat[0] + '</h5><h5>' + stat[1] + '</h5>'
        +       '<h5>' + stat[2] + '</h5>'
        +     '</div>'
        +   '</div>'
        +   '<div class="row contain-info">' 
        +     '<div class="col-md-4">'
        +       '<h5> Moves </h5>'
        +     '</div>'
        +     '<div class="col-md-8">'
        +       '<h5>' + move[0] + '</h5><h5>' + move[1] + '</h5>'
        +       '<h5>' + move[2] + '</h5>'
        +       '<h5>' + move[3] + '</h5><h5>' + move[4] + '</h5>'
        +     '</div>'
        +   '</div>'
        + '</div>'
        + '</div>'
        + '</div>'
        +'</div>');
    });

/* return fetch("https://pokeapi.co/api/v2/pokemon-species/" + poke_name.value +"/"); */
fetch('https://pokeapi.co/api/v2/pokemon-species/' + poke_name.value +'/')
  .then(function(response) {
  //Convierte el texto en formato JSON en un objeto JS
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    let color = data.color.name;
    let habitat = data.habitat.name;
    

    $('.habit').append('<div class="col-md-4">'
        +         '<h5> Habitat </h5>'
        +       '</div>'
        +       '<div class="col-md-8">'
        +         '<h5>' + habitat + '</h5></div>');

    $('.color').append('<div class="col-md-4">'
        +         '<h5> Color </h5>'
        +       '</div>'
        +       '<div class="col-md-8">'
        +         '<h5>' + color + '</h5></div>');

    //$('.panel-pokemon').css("background-color",'"' + color + '"' );
    $('.panel-pokemon').css("background-color", color );

  })




fetch('https://pokeapi.co/api/v2/characteristic/' + poke_name.value +'/')
  .then(function(response) {
  //Convierte el texto en formato JSON en un objeto JS
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let description = [];

    for (let i = 0; i < data.descriptions.length; i++) {
        description.push(data.descriptions[i].description);
    }

    $('.descrip').append('<div class="col-md-12">'
        + '<h5 class="text-center">' + description[0] + '</h5><h5 class="text-center">' + description[1] + '</h5>'
        +'</div>');
    

                      


  })



});

$('.logo').click(function(){
      location.reload();

});
   

   
