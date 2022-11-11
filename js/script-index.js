let clicked = true;

//Fonction qui permet d'activer l'animation de choix sur la boite ou le click a été éffectué
function animBox(box) {
  document.getElementById(box).style.animation="choosen 4.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1 ";
  document.getElementById("atitle").style.animation="gone 5s ease-out 1"
  document.getElementById("jtitle").style.animation="gone 5s ease-out 1"
  document.getElementById("mtitle").style.animation="gone 5s ease-out 1"
  if (box==="jbox"){m.style.animation="gone 5s ease-out 1"}
  else{j.style.animation="gone 5s ease-out 1"}
  FooterInactif()
}

function ClickedChoice(b) {
  if (clicked) {//Permet de ne pas clicker sur plusieurs choix
    
    localStorage.setItem("storageChoice",b);
    clicked = false;
    //COMMENCER l'ANIMATION 
    animBox(b);
    var fadeAway = setInterval(function() {
      let sound=document.getElementById("bsound");
      if (sound.volume<=0.005){clearInterval(fadeAway)}
      else{sound.volume-=0.005}
    },20)
    window.setTimeout('window.open("html/id.html","_self")',3500);
    //page2 window.onload=alert(localStorage.getItem("storageChoice")); 
  }
}

let j = document.getElementById("jbox")
let m = document.getElementById("mbox")
j.onclick = () => {ClickedChoice("jbox")};
m.onclick = () => {ClickedChoice("mbox")};

//document.getElementById('ifoottext').mouseover(function(event){
//  console.log("ooo")
//  event.target.innerHTML="Bienvenue dans SPORTS STATS&#8482; veuillez choisir entre l'analyse d'un seul joueur ou d'un match entier";})
//Fonction qui permet de créer un effet de perspective sur la boite, prends en argument la boite sur laquelle est la souris, et l'angle x et y qu'elle doit prendre
function mooveBox(box,x,y) {
  document.getElementById(box).style.cssText = `
  box-shadow:-2px 0 0 5px rgba(255, 0, 0, 0.473);
  text-shadow:-6px 3px 2px rgba(0, 0, 0, 0.2);
  opacity: 1;
  transition:0s;
  transform:perspective(500px) rotateY(${y}deg) rotateX(${x}deg);`;
  
  let dict = {
  "jbox": `Choisissez "JOUEUR" pour analyser toutes les statistiques d'un unique joueur`,
  "mbox": `Choisisser "MATCH" pour analyser les statistiques des derniers matchs d'un unique joueur`};
  document.getElementById('ifoothead').style.cssText =`opacity:0;`;
  document.getElementById('ifoottext').style.cssText =`opacity:1;`;
  document.getElementById('ifoottext').innerHTML=dict[box];
  document.getElementById('ifooter').style.cssText = `
  height: 11.042vw !important;
  opacity: 0.75 !important;
  background-color: rgba(61, 5, 5, 0.733) !important;`;
}

//Fonction qui prends en argument l'id de la boite qui doit être remis en position normale
function defaultBox(box) {
  document.getElementById(box).style.cssText =`
  opacity:0.75;
  transform:perspective(500px) rotateY(0deg) rotateX(0deg);
  transition: 0.3s;`;
  document.getElementById('ifoothead').style.cssText =`opacity:1;`;
  FooterInactif()
}

onmousemove = function(e){
  if (clicked){
    let width=window.innerWidth;              //WINDOW MAX X
    let height=window.innerHeight;            //WINDOW MAX Y
    let mx=e.pageX                            //MOUSE X
    let my=e.pageY                            //MOUSE Y
    let hn=(height*0.25)                      //BOX Y MIN
    let hx=(height*0.25)+352                  //BOX Y MAX
    let jwn=((width-454)/3)                   //JBOX X MIN
    let jwx=jwn+227                           //JBOX X MAX   
    let mwn=((width-454)*(2/3))+227           //MBOX X MIN
    let mwx=mwn+227                           //MBOX X MAX
    //console.log(jwx, hn, mwn, mwx, e.pageX , e.pageY)
    //console.log("mouse location:", e.pageX ,e.pageY , height, width)

    if ((hn<=my)&&(hx>=my)){ //Si le curseur correspond à la hauteur des box
      let degY=-(((my-hn)-176)*(15/176))
      if ((jwn<=mx)&&(jwx>=mx)){//si le curseur est dans la jbox
        let jdegX=((mx-jwn)-113.5)*(15/113.5)
        mooveBox("jbox",degY,jdegX);
      }

      else if ((mwn<=mx)&&(mwx>=mx)){//si le cursuer est dans la mbox
        let mdegX=((mx-mwn)-113.5)*(15/113.5)
        mooveBox("mbox",degY,mdegX);
      }
      else {
        defaultBox("jbox");
        defaultBox("mbox");
      }
    }
    else {
      defaultBox("jbox");
      defaultBox("mbox");
    }
  }
}

//Fonction qui affiche le message de bienvenue lorsqu'on a le curseur au dessus du footer
document.getElementById("ifooter").addEventListener("mouseover",function(){
  document.getElementById("ifoottext").innerHTML="Bienvenue dans SPORTS STATS&#8482; veuillez choisir entre l'analyse d'un seul joueur ou d'un match entier";
});

function FooterInactif(){
  document.getElementById('ifoottext').style.cssText =`opacity:0;`;
  document.getElementById('ifooter').style.cssText = `
  height:1.146vw;
  opacity:0.5;
  background-color: rgba(61, 5, 5, 0.308);`;
}

document.getElementById("quitbutton").onclick = function(){window.open("about:blank", "_self","")};//FONCTION BOUTON QUITTER (PUISQU'IL EST INUTILE ET IMPOSSIBLE DE CREER UN BOUTON "QUITTER" SUR UNE PAGE WEB, CE BOUTON CHARGE JUSTE UNE PAGE VIDE SOIT UNE PAGE about:blank)