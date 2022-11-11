
/*window.onload = localStorage.getItem("storageChoice");
alert("Storage choice"+storageChoice);*/

/*document.getElementById("steamid").addEventListener("submit", validateID(e)){
  if(!isValid){
    e.preventDefault();
  }
};*/


document.getElementById("focus").onclick = function() {//Permet d'avoir le focus meme en cliquant à coté de la zone de saisie
  document.getElementById("steamid").focus();
}

function submitted(event) {//SI LE FORM EST SUBMIT:
  event.preventDefault();
  var id = document.getElementById("steamid").value
  var x = id.toString();
  var y = 'id';
  sessionStorage.setItem(y,x);
  sessionStorage.getItem(y);
  

  if (id.length===17 && !isNaN(id)) {
    /*FAIRE TESTSER SI ELLE EXISTE EN EXECUTANT UNE REQUETE PHP SERVER SIDE POUR UNIQUEMENT VERIFIER LA VALIDITé DE l'ID*/
    if (id==="76561198089925382"){
      window.open("../html/stats.html","_self");
    }
    else {
      //tester l'id
      alert("bon");
      window.open("../html/stats.html","_self");
    }
  }
  else {
    alert("SteamID64 invalide");
  }
}

function copy(){
  navigator.clipboard.writeText("76561198089925382");
  alert("Copié dans le presse papier");//FAIRE UN SYSTEME DE NOTIFICATION
}

window.onload = function() {//EMPECHE LE FORM DE RELOAD LA PAGE
  let form = document.querySelector("form");
  form.onsubmit = submitted.bind(form);
}

/*
function getJsonFromAPI(steamID64)
  { https://partner.steam-api.com
    let croisle = "nan mais vrm crois le";
    let url = "https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v1/?key="+croisle+"&steamid="+steamID64+"&appid=730";
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let gameList = response.response.games;
        let gameListLength = gameList.length;
        let gameListArray = [];
        for (let i = 0; i < gameListLength; i++) {
          gameListArray.push(gameList[i].name);
        }
        localStorage.setItem("gameList",gameListArray);
        localStorage.setItem("gameListLength",gameListLength);
        //console.log(gameListArray);
        //console.log(gameListLength);
      }
    };
    xhr.send();
  }*/
