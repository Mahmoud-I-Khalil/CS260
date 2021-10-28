const url = "https://api.kanye.rest/";
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let results = "";
    results += '<div class = "item"><p>Kanye once said:';
    results += '" '+ json.quote + ' "';
    results += '</p></div>';
    document.getElementById("KanyeWest").innerHTML = results;;
});

document.getElementById("buttonClick").addEventListener("click", function(event) {
  event.preventDefault();
  var value = document.getElementById("cryto_options").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://api.coincap.io/v2/assets/" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      console.log(value);
      let results = '<div class="image_crypto"><img src="images/'+value+'.png" alt=""></div>';
      results+= '<div class="data"><h3> Name: '+json["data"]["name"] +'</h3></div>';
      results+= '<div class="data"><h3> Price: '+json["data"]["priceUsd"].substring(0,8) +'$</h3></div>';
      results+= '<div class="data"><h3> MarketCap: '+json["data"]["marketCapUsd"].substring(0,8) +'$</h3></div>';
      results+= '<div class="data"><h3> Percent Change in 24hrs: '+json["data"]["changePercent24Hr"].substring(0,4) +'%</h3></div>';
      results+= '<div class="data"><h3> Current Supply: '+json["data"]["supply"].substring(0,8) +' coins</h3></div>';
      if(json["data"]["maxSupply"] != null){
        results+= '<div class="data"><h3> Max Supply: '+json["data"]["maxSupply"].substring(0,8) +' coins</h3></div>';
      }
      results+= '<div class="data"><h3> Coin Rank: '+json["data"]["rank"] +'</h3></div>'
      document.getElementById("Crypto").innerHTML = results;
    });
});
