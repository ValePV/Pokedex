
 $(document).ready(function(){

  for(var i = 1; i <= 100; i++){
    $('#pokemon').append('<div class="contain-poke"><img id="' 
      + i + '" src="http://pokeapi.co/media/img/' + i + '.png"></div>');
  }
})

var search = document.getElementById('search');
var poke_name = document.getElementById('poke_name');

search.addEventListener('click', function(){
fetch("https://pokeapi.co/api/v2/pokemon/"+poke_name.value+"/")
  .then(function(response) {
   //Turns the the JSON into a JS object
   return response.json();
   
 })
 .then(function(data) {
   let name = data.name;
   let numb = data.id;
   let ability = [];
   let stat = [];

   for (let i = 0; i<data.abilities.length; i++){
    ability.push(data.abilities[i].ability.name);
   }
   for (let i = 0; i<data.stats.length; i++){
    stat.push(data.stats[i].stat.name);
   }
   $('#pokemon').hide();
   $('.my_pokemon').append('<div class="cont-pokedex"><div class="cont-img">'
    + '<img src="http://pokeapi.co/media/img/' + numb
    + '.png"/></div><h2 class="text-center tittle-pokem">'
    + name + numb + '</h2><h3 class="text-center">Ability</h3><p>' + ability[0] 
    + '</p><p>' + ability[1] + '</p><h3 class="text-center">Stats</h3><p>' + stat[0] 
    + '</p><p>' + stat[1] + '</p><p class="other"></p></div>');


  /*return fetch("https://pokeapi.co/api/v2/pokemon-species/" + poke_name.value +"/");*/

/*fetch('flowers.jpg').then(function(response) {
   data1 = response.blob();
 return response.blob();
}).then(function(myBlob) {
 var objectURL = URL.createObjectURL(myBlob);
 myImage.src = objectURL;
 return fetch('chair.jpg');
}).then(function(response){
   return response.blob();
}).then(function(myBlob){

}).catch(function(error){

});*/
/* })
 .then(function(data1) {
  let habit = data1.habitat;
  console.log(habit);
  $('.other').append('<p>' + habit + '</p>');
 })*/

});
});

























/*let display = document.querySelector('.list-of-pokemons');

fetch('https://pokeapi.co/api/v2/pokemon/?limit=949')
.then(function(response) {
  //Convierte el texto en formato JSON en un objeto JS
  return response.json();
})
.then(function(data) {*/
  /*console.log(data);*/
  //mostrar lista de pokemones
  /*const infPokem = ('https://pokeapi.co/api/v2/pokemon-form/1/').val();
  console.log(infPokem);
  for (var i = 0; i < infPokem.length; i++) {
    $(".list-of-pokemons").append("<h2>" + infPokem[i].name + "</h2>");
  }*/
   //display =`<h2>${data.name}</h2>`
  //Let's make some HTML!
 /* let html = `<h2><a href="${data.html_url}">${data.login}</a></h2>
    <p>${data.name}</p>
    <p>Followers: ${data.followers}</p>
  `;
//img pokeapi.co/media/sprites/pokemon/2.png
  //Put that HTML on the page
  display.innerHTML = html;*/
//});
/*
const infPokem = ('https://pokeapi.co/api/v2/pokemon/?limit=949').val();

for ( i = 0; i < infPokem.length ; i++ ){
  $('.img-Pkem').append("<span class'sect-otherest1'><a href='BAR1-KrossBar-Bar'><div class='rest'>" +
  "<a href='#modal-restDescription' data-toggle='modal'><img class='restim' src='assets/images/"
  + places[i]['img'] + "'></a>" +
  "</div></a></>");*/
/*
function pokeSubmit() {
    var param = document.getElementById("pokeInput").value;
    var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + param + "/";
    var pokeURL2 = "https://pokeapi.co/api/v2/pokemon/" + param + "/";*/

    /*$.getJSON(pokeURL, function(data){
        //console.log(data);
        var pokeID = data.national_id;
        var pokeName = data.name;
        var pokeType1 = data.types[0].name;
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].name;
        }
        else var pokeType2 = null;
        var descriptionURI = "http://pokeapi.co" + data.descriptions[0].resource_uri;
        var pokeDescription = "";*/
/*
        $.getJSON(descriptionURI, function(data2){
            //console.log(data2);
            pokeDescription = data2.description;
        });

        $.getJSON(pokeURL2, function(data3){
            //console.log(data3);

             //console.log(JSON.stringify(data, null, "  "));
            var imageURI = data3.sprites.front_default;

            console.log("Number: ", pokeID);
            console.log("Name: ", pokeName);
            console.log("Type 1: ", pokeType1);
            console.log("Type 2: ", pokeType2);
            console.log("Description URI: ", descriptionURI);
            console.log("Description: ", pokeDescription);
            console.log("Image URI: ", imageURI);
*/
        

   
