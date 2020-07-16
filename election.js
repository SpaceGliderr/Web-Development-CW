var idEndPhrase = "-results";
var id_name;
var i;

function showResults(idFirstPhrase){
  var regions = ["perak", "penang", "kedah", "perlis", "johor", "kelantan", "melaka", "negeri-sembilan", "pahang", "selangor", "terengganu", "sabah", "sarawak", "federal-territory", "all"];
  id_name = regions[idFirstPhrase] + idEndPhrase;
  document.getElementById(id_name).classList.remove('hidden');

  regions.splice(idFirstPhrase, 1);
  for(i = 0; i < regions.length; i++){
    document.getElementById(regions[i] + idEndPhrase).classList.add('hidden');
  }
}
