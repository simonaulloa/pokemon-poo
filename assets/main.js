function ataque(){

function Pokemon(nombre, color, poderDeAtaque){
  this.nombre = nombre
  this.color = color
  
  this.nivelDeAmistad = 0
  
  this.vida = 100
  this.poderDeAtaque = poderDeAtaque
  
  this.mostrarpokemon = function(){
    return("hola, soy: " + this.nombre + " y soy de color: " + this.color)
  }
  this.aumentarAmistad = function(valor){
    this.nivelDeAmistad = this.nivelDeAmistad + valor
  }
  this.atacar = function(pokemon){
    pokemon.vida = pokemon.vida - this.poderDeAtaque
  }
}

  var ataque1 = document.getElementById("cosa").value
  var ataque2 = document.getElementById("cosa2").value
  var pokemon1 = new Pokemon (cosa, "amarillo", 10)
  var pokemon2 = new Pokemon (cosa2, "rojo", 30)
  
  var res = document.getElementById("resultado");
  res.innerHTML = "Pokemon 1 ataco a pokemon 2 y pokemon tiene 30 de vida restante";
}