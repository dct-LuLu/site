//document.onmousemove = function(e) {
//  document.body.style.setProperty('--x',(e.clientX)+'px');
//  document.body.style.setProperty('--y',(e.clientY)+'px');
//}

var click;

function arrondir(float,vrg){return Math.trunc(float*Math.pow(10,vrg))/Math.pow(10,vrg)}//Fonction qui permet d'arrondir un float, prends en argument le float et le nombre de chiffre après la virgule voulu

document.addEventListener('DOMContentLoaded', () => {
  let mousePosX = 0,
    mousePosY = 0;
    //mouseCircle = document.getElementById('mouse-circle');

  document.onmousemove = (_) => {
    mousePosX = _.pageX;
    mousePosY = _.pageY;
  }

  let delay = 10,
    revisedMousePosX = 0,
    revisedMousePosY = 0;

  function delayMouseFollow() {
    requestAnimationFrame(delayMouseFollow);

    revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
    revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

    document.body.style.setProperty('--x',(arrondir(revisedMousePosX,5)+'px'));
    document.body.style.setProperty('--y',(arrondir(revisedMousePosY,5)+'px'));
  }
  delayMouseFollow();
});

//Bouton pour desactiver le background
let bg=true;
document.getElementById("STOP").addEventListener('click',function(){
  bg = !bg
  if(!bg){document.body.style.backgroundImage = "none";}
  else{document.body.style.backgroundImage = 'url("../assets/image/backgrounds/backgroundtrippy.gif")';}
})


function load(){//onload
  function process(obj){
  /*Noms des maps*/                    const maps =['cs_assault','cs_italy','cs_office','de_aztec','de_cbble','de_dust2','de_dust','de_inferno','de_nuke','de_train','de_bank','de_vertigo','ar_monastery','ar_shoots','ar_baggage','de_lake','de_sugarcane','de_stmarc','de_shorttrain','de_safehouse','cs_militia'];

  /*Noms des armes*/                   const weapons =['deagle','glock','elite','fiveseven','awp','ak47','aug','famas','g3sg1','p90','mac10','ump45','xm1014','m249','hkp2000','p250','sg556','scar20','ssg08','mp7','mp9','nova','negev','sawedoff','bizon','tec9','mag7','m4a1','galilar']
  /*Prix des armes*/                   const wpprix=[700,200,300,500,4750,2700,3300,2050,5000,2350,1050,1200,2000,5200,200,300,3000,5000,1700,1500,1250,1050,1700,1100,1400,500,1300,3100,1800]
  /*Dégats des armes*/                 const wpdg=[53,30,38,31,115,35,31,30,80,25,28,35,20,32,35,38,30,80,88,29,26,26,35,32,27,33,30,33,30]

  /*Noms des achievements*/            const achievement=["GIVE_DAMAGE_LOW","KILL_ENEMY_RELOADING","IMMOVABLE_OBJECT","KILL_ENEMY_LOW","WIN_ROUNDS_LOW","IMMOVABLE_IN_ROUND","EARN_MONEY_LOW","KILL_SNIPER_WITH_SNIPER","KILL_LOW_DAMAGE","LOSSLESS_EXTERMINATION","KILL_ENEMY_LAST_BULLET","DAMAGE_NO_KILL","HEADSHOTS_IN_ROUND","HIP_SHOT","FAST_ROUND_WIN","KILLING_SPREE","DOMINATIONS_LOW","LAST_PLAYER_ALIVE","KILLS_WITH_MULTIPLE_GUNS","KILL_ENEMY_TEAM","WIN_BOMB_PLANT","WIN_BOMB_DEFUSE","KILL_ENEMIES_WHILE_BLIND","REVENGES_LOW","DOMINATION_OVERKILLS_LOW","KILL_WHEN_AT_LOW_HEALTH","KILLING_SPREE_ENDER","AVENGE_FRIEND","KILL_ENEMY_IN_AIR","GIVE_DAMAGE_MED","KILL_BOMB_PICKUP","WIN_PISTOLROUNDS_LOW","WIN_KNIFE_FIGHTS_LOW","KILL_TWO_WITH_ONE_SHOT","KILL_ENEMY_MED","BLOODLESS_VICTORY","KILL_WITH_OWN_GUN","WIN_ROUNDS_MED","HEADSHOTS","STILL_ALIVE","BOMB_PLANT_IN_25_SECONDS","KILL_WHILE_IN_AIR","DOMINATIONS_HIGH","KILL_BOMB_DEFUSER","KILL_SNIPERS","WIN_BOMB_PLANT_AFTER_RECOVERY","CONCURRENT_DOMINATIONS","EXTENDED_DOMINATION","BORN_READY","BASE_SCAMPER","PISTOL_ROUND_KNIFE_KILL","WIN_MAP_DE_DUST2","WIN_PISTOLROUNDS_MED","EARN_MONEY_MED","KILL_SNIPER_WITH_KNIFE","WIN_GUN_GAME_ROUNDS_LOW","KILLS_ENEMY_WEAPON","KILL_ENEMY_BLINDED","FLAWLESS_VICTORY","WIN_MAP_DE_LAKE","DEFUSE_DEFENSE","DONATE_WEAPONS","GUN_GAME_KILL_KNIFER","GUN_GAME_FIRST_KILL","KILL_ENEMY_HKP2000","KILL_ENEMY_P250","BOMB_DEFUSE_CLOSE_CALL","WIN_DUAL_DUEL","KILL_ENEMIES_WHILE_BLIND_HARD","KILL_ENEMY_GLOCK","WIN_MAP_DE_INFERNO","KILL_ENEMY_AWP","BOMB_PLANT_LOW","KILL_ENEMY_SG556","SILENT_WIN","KILL_WITH_EVERY_WEAPON","KILL_HOSTAGE_RESCUER","KILL_ENEMY_DEAGLE","REVENGES_HIGH","KILL_ENEMY_FIVESEVEN","KILL_ENEMY_SSG08","KILL_ENEMY_ELITE","SURVIVE_GRENADE","DEAD_GRENADE_KILL","DOMINATION_OVERKILLS_MATCH","KILL_ENEMY_AK47","KILL_ENEMY_FAMAS","ONE_SHOT_ONE_KILL","GIVE_DAMAGE_HIGH","WIN_MAP_AR_SHOOTS","KILL_ENEMY_KNIFE","KILL_ENEMY_M4A1","GUN_GAME_ROUNDS_LOW","KILLER_AND_ENEMY_IN_AIR","WIN_PISTOLROUNDS_HIGH","KILL_ENEMY_MP9","KILL_ENEMY_SCAR20","KILL_ENEMY_MAG7","WIN_MAP_DE_BANK","KILL_ENEMY_MAC10","KILL_ENEMY_HIGH","KILL_ENEMY_AUG","WIN_ROUNDS_WITHOUT_BUYING","GUN_GAME_CONSERVATIONIST","KILL_ENEMY_TEC9","KILL_ENEMY_NEGEV","KILL_ENEMY_G3SG1","WIN_ROUNDS_HIGH","DOMINATION_OVERKILLS_HIGH","CAUSE_FRIENDLY_FIRE_WITH_FLASHBANG","MEDALIST","KILL_ENEMY_GALILAR","BOMB_DEFUSE_LOW","KILL_ENEMY_TASER","WIN_MAP_DE_STMARC","WIN_MAP_DE_NUKE","WIN_MAP_DE_SAFEHOUSE","KILL_ENEMY_SAWEDOFF","GUN_GAME_KILL_KNIFER","KILL_ENEMY_MP7","GUN_GAME_KNIFE_KILL_KNIFER","KILL_ENEMY_NOVA","META_PISTOL","GOOSE_CHASE","WIN_MAP_DE_TRAIN","KILL_ENEMY_P90","WIN_MAP_DE_SUGARCANE","KILL_ENEMY_UMP45","WIN_KNIFE_FIGHTS_HIGH","EARN_MONEY_LOW","KILL_ENEMY_XM1014","KILL_ENEMY_M249","TR_BOMB_PLANT_LOW","RESCUE_ALL_HOSTAGES","WIN_MAP_AR_BAGGAGE","KILL_ENEMY_BIZON","META_RIFLE","WIN_MAP_CS_OFFICE","KILL_ENEMY_HEGRENADE","SURVIVE_MANY_ATTACKS","META_SHOTGUN","FAST_HOSTAGE_RESCUE","META_SMG","WIN_MAP_DE_SHORTTRAIN","KILL_ENEMY_MOLOTOV","GUN_GAME_TARGET_SECURED","WIN_GUN_GAME_ROUNDS_MED","GUN_GAME_FIRST_THING_FIRST","PLAY_EVERY_GUNGAME_MAP","KILLED_DEFUSER_WITH_GRENADE","GUN_GAME_ROUNDS_MED","GRENADE_MULTIKILL","TR_BOMB_DEFUSE_LOW","BREAK_WINDOWS","WIN_EVERY_GUNGAME_MAP","META_WEAPONMASTER","WIN_MAP_DE_DUST","WIN_MAP_CS_ITALY","BOMB_MULTIKILL","GUN_GAME_RAMPAGE","WIN_MAP_DE_AZTEC","RESCUE_HOSTAGES_LOW","WIN_GUN_GAME_ROUNDS_HIGH","RESCUE_HOSTAGES_MED","WIN_GUN_GAME_ROUNDS_EXTREME","WIN_GUN_GAME_ROUNDS_ULTIMATE","GUN_GAME_ROUNDS_HIGH"]
  /*Titre des achievements*/           const achtitle=['Points en votre faveur', 'Abattu au dépourvu', 'Invincible', 'Emballeur de cadavres', 'Noobel ordre mondial', 'Indestructible', 'Obligations de guerre', 'Œil pour œil', 'Formé à la finition', 'Règle de pitié', 'Balle magique', 'Amorce', 'Rédemption du déchiqueteur de tête', 'Tir à la hanche', 'Guerre éclair', 'Balistique', 'Récidiviste', "Guerre d'usure", 'Varier les plaisirs', "Quelqu'un a fait sauter une bombe", 'Le nettoyeur', 'Rite du premier désamorçage', 'Rage aveugle', "Plutôt deux fois qu'une", 'Insurgé', 'La dernière embuscade', 'Une victime, une fin de série', 'Ange vengeur', 'Tir au lapin', 'Vous avez fait vos points', 'Prix de participation', "Inauguration d'un calibre", 'Ça va couper !', 'Une balle est une balle', 'Coup de balai', 'Brancardier', 'Objet Tr0uvé', 'Pro-mu', 'Ligne de mire optimale', 'Toujours là', 'Mèche courte', 'Épée de Damoclès', 'Massacreur', 'Anti-antiterroriste', 'Chasseur de sniper', 'Testament et explosion de volonté', 'Coup du chapeau', 'Brutalité excessive', 'Né pour tuer', 'Campeur de base', 'Combattant de rue', 'Vétéran de la carte Dust2', 'Donner une chance au calibre', 'Butin de guerre', 'Snipoignardé', 'Gungamer', "On récolte ce que l'on sème", 'Ambition aveugle', 'Guerre froide', 'Vacances', 'Defusus interruptus', 'Donatueur', 'Refusé !', 'PREMIER !', 'Spécialiste du P2000/USP Tactical', 'Spécialiste du P250', 'Au-dessus de tous', "Roi de l'akimbo", "Qui ne tente rien n'a rien", 'Spécialiste du Glock-18', 'Vétéran de la carte Inferno', "Spécialiste de l'AWP", 'Boumala boumala', 'Spécialiste du SG553', 'Opération sac noir', 'Tireur expert', 'Élimination du guide0', 'Spécialiste du Desert Eagle', "On n'abandonne pas les braves", 'Spécialiste du Five-SeveN', 'Spécialiste du SSG 08', 'Spécialiste des Dual Berettas', 'Résistant aux éclats', 'Dix hommes en colère', 'Enterrement prématuré', 'Un tir ! Un mort !', 'Spécialiste du FAMAS', "Spécialiste de l'AK-47", 'Un million de plaies', 'Vétéran de la carte Shoots', 'Expert au Couteau', 'Spécialiste de la M4 AR', 'Exercice exercice exercice', 'Nécrobaties aériennes', 'Pacte du calibre', 'Spécialiste du MP9', 'Spécialiste du MAG-7', 'Spécialiste du SCAR-20', 'Comptez là-dessus', 'Spécialiste du MAC-10', 'Dieu de la guerre', "Spécialiste de l'AUG", 'Le béret frugal', 'Spécialiste du Tec-9', 'Économe', 'Spécialiste du Negev', 'Spécialiste du G3SG1', "L'é-leet des hommes", 'Commander et contrôler', "Le chemin vers l'enfer", 'Spécialiste du Galil AR', 'Récompensé', 'Spécialiste du Zeus x27', 'Marcsman', 'Le démineur', 'Vétéran de la carte Nuke', 'Spécialiste du Sawed-Off', 'Ma maison', 'Spécialiste du MP7', 'Terrain de jeu équilibré', 'Lame à lame', 'Spécialiste en pistolet', 'Spécialiste du Nova', 'Attrape-moi si tu peux', 'Vétéran de la carte Train', 'Spécialiste du P90', 'Train-train habituel', "Spécialiste de l'UMP-45", 'La tranche ensanglantée', 'Argent sale', 'Spécialiste du XM1014', 'Spécialiste du M249', 'Mèche courte', 'Le bon berger', 'Je réclame mes valises', 'Spécialiste du PP-Bizon', 'Spécialiste en fusil', 'Vétéran de la carte Office', 'Spécialiste de la grenade explosive', "À l'épreuve des balles", 'Spécialiste en fusil à pompe', 'Libéré en vitesse', 'Spécialiste en pistolet mitrailleur', 'Vétéran de la carte Shorttrain', 'Expert en flamme', 'Cible sécurisée', 'Tir continu', 'Commençons par le commencement !', 'Touriste', 'Désamorce ça !', "Collecteurs d'armes", 'Les démolisseurs', 'Désamorçage rapide', 'Pour qui sonne la glace', 'Vétéran de la carte Italy', "Maître d'armes", "Tireur d'élite", 'Vétéran de la carte Dust', 'Frappe groupée', 'Folie meurtrière !', 'Vétéran de la carte Aztec', 'Diplomatie du cowboy', 'Mort du siècle', 'RES Tsar', 'Le professionnel', 'Mangeur de pizza froide', 'Roi de la victime']
  /*Descriptions des achievements*/    const achdesc=['Infligez un total de 2 500 points de dégâts aux ennemis', "Tuez un ennemi pendant qu'il recharge", 'Tuez quatre ennemis au cours de la même manche', 'Tuez 25 ennemis', 'Remportez dix manches', 'Tuez un ennemi qui a tué quatre de vos coéquipiers durant cette manche', 'Gagnez un montant total de 50 000 $', "Tuez un sniper ennemi en train d'utiliser sa lunette à l'aide de votre propre fusil de précision", "Tuez un ennemi qui a été réduit à moins de 5% de vie par d'autres joueurs", "Éliminez l'ensemble de l'équipe adverse sans qu'aucun de vos coéquipiers ne soit tué", "Tuez un ennemi avec la dernière balle de votre chargeur (à l'exception des fusils de précisions et du Zeus x27)", 'Infligez au moins 95% de dégâts à un ennemi qui est ensuite tué par un autre joueur', 'Tuez cinq ennemis avec des tirs en pleine tête au cours de la même manche', "Tuez un ennemi d'un tir au fusil de précision sans l'aide de la lunette", 'Remportez une manche contre cinq ennemis en moins de 30 secondes', 'En mode Classique, tuez quatre joueurs ennemis en quinze secondes', 'Dominez un ennemi', "Soyez le dernier joueur en vie dans une manche avec une équipe d'au moins cinq joueurs", 'Utilisez cinq armes différentes au cours de la même manche pour tuer vos victimes', 'Remportez une manche en posant une bombe', 'En mode Classique, tuez cinq ennemis au cours de la même manche', 'Remportez une manche en désamorçant une bombe', 'Tuez un ennemi pendant que vous êtes aveuglé par une GSS', 'Tuez un ennemi que vous dominez déjà', 'Tuez un ennemi qui vous domine', "Tuez un ennemi alors qu'il ne vous reste qu'un point de vie", 'Tuez un joueur ennemi qui vient de tuer quatre de vos coéquipiers en moins de 15 secondes', "Au cours de la même manche, tuez un ennemi qui a abattu un joueur de votre liste d'amis", "Tuez un ennemi alors qu'il se trouve en l'air", 'Infligez un total de 50 000 points de dégâts aux ennemis', "Tuez un ennemi en moins de trois secondes après qu'il ait récupéré la bombe", 'Remportez 5 manches au pistolet en mode Compétitif', 'Remportez un combat au couteau', "Tuez deux ennemis d'une seule balle", "Éliminez l'ensemble de l'équipe adverse sans qu'aucun de vos coéquipiers ne soit touché", 'Tuez 500 ennemis', "Tuez un ennemi avec une arme qu'il a laissé tomber pendant cette même manche", 'Remportez 200 manches', "Tuez 250 ennemis d'un tir en pleine tête", "Survivre plus de 30 secondes avec moins de 10 points de vie en mode Course à l'armement ou le mode Démolition", 'Posez une bombe en moins de 25 secondes (à l’exception du mode Démolition)', "Tuez un ennemi tout en vous trouvant en l'air", 'Dominez dix ennemis', "Tuez un antiterroriste pendant qu'il désamorce la bombe", "Tuez 100 snipers ennemis en train d'utiliser leur lunette", "Remportez une manche en ramassant la bombe d'un coéquipier tué et en la faisant exploser", 'Dominez trois ennemis simultanément', 'Tuez un ennemi que vous avez dominé quatre autres fois', "Tuez un ennemi avec la première balle de votre arme après être réapparu en mode Course à l'armement", "Tuez un ennemi qui vient juste de réapparaitre en mode Course à l'armement", 'Tuez un ennemi au couteau pendant la manche au pistolet dans une partie Classique', 'Remportez 100 manches sur Dust2', 'Remportez 25 manches au pistolet en mode Compétitif', 'Gagnez un montant total de 2 500 000 $', 'Tuez un sniper ennemi au couteau pendant que celui-ci utilise sa lunette', "Remportez une partie en mode Course à l'armement ou Démolition", 'Tuez 100 ennemis avec leurs propres armes', 'Tuez 25 ennemis désorientés par des GSS', "Remportez une manche sans qu'aucun joueur ennemi ne meure", 'Remportez cinq parties sur Lake', 'Interrompez le désamorçage pour tuer un terroriste, puis terminez le désamorçage de la bombe', 'Donnez 100 armes à vos coéquipiers', "Tuez un joueur qui a atteint le niveau couteau d'or en mode Course à l'armement", "Soyez le premier joueur à tuer quelqu'un lors d'une partie en Course à l'armement ou en Démolition", 'Tuez 100 ennemis avec le P2000', 'Tuez 25 ennemis avec le P250', "Désamorcez une bombe à moins d'une seconde de l'explosion", 'Utilisez les Dual Berettas pour tuer un joueur ennemi qui possède et utilise aussi les Dual Berettas', 'Tuez deux ennemis alors que vous êtes aveuglé par une GSS', 'Tuez 100 ennemis avec le Glock-18', 'Remportez 100 manches sur Inferno', "Tuez 500 ennemis avec l'AWP", 'Posez 100 bombes', 'Tuez 100 ennemis avec le SG553', 'Remportez une manche sans faire le moindre bruit de pas, tout en tuant au moins un ennemi', 'Faites une victime avec chaque arme', 'Tuez un ennemi qui porte un otage', 'Tuez 200 ennemis avec le Desert Eagle', 'Tuez 20 ennemis qui vous dominent', 'Tuez 25 ennemis avec le Five-SeveN', 'Tuez 100 ennemis avec le SSG 08', 'Tuez 25 ennemis avec les Dual Berettas', "Encaissez 80 points de dégâts d'une grenade ennemie et survivez à la manche", 'Tuez 10 ennemis que vous dominez déjà en une seule partie', "Tuez un ennemi à l'aide d'une grenade juste après votre mort", "Tuez trois joueurs consécutifs avec la première balle de votre arme en mode Course à l'armement", 'Tuez 100 ennemis avec le FAMAS', "Tuez 1 000 ennemis avec l'AK-47", 'Infligez un total de 1 000 000 de points dégâts aux ennemis', "Remportez cinq parties sur Shoots en mode Course à l'armement", 'Tuez 100 ennemis avec le couteau', "Tuez 1 000 ennemis avec un fusil d'assaut M4", "Jouez à 100 parties en mode Course à l'armement ou Démolition", "Tuez un ennemi alors que vous vous trouvez tous les deux en l'air", 'Remportez les 250 premières manches au pistolet en mode Compétitif', 'Tuez 100 ennemis avec le MP9', 'Tuez 50 ennemis avec le MAG-7', 'Tuez 100 ennemis avec le SCAR-20', 'Remportez cinq parties sur Bank', 'Tuez 100 ennemis avec le MAC-10', 'Tuez 10 000 ennemis', "Tuez 250 ennemis avec l'AUG", 'Remportez 10 manches sans mourir ni dépenser le moindre dollar', 'Tuez 100 ennemis avec le Tec-9', "Remportez une partie sans recharger aucune de vos armes en Course à l'armement", 'Tuez 100 ennemis avec le Negev', 'Tuez 100 ennemis avec le G3SG1', 'Remportez 5 000 manches', 'Tuez 100 ennemis que vous dominez déjà', 'Aveuglez un joueur ennemi qui par la suite tue un de ses coéquipiers', 'Tuez 250 ennemis avec le Galil AR', 'Remportez 100 succès', 'Tuez 10 ennemis avec le Zeus x27', 'Remportez cinq parties sur St. Marc', 'Désamorcez 100 bombes avec succès', 'Remportez 100 manches sur Nuke', 'Tuez 50 ennemis avec le Sawed-Off', 'Remportez cinq parties sur Safehouse', 'Tuez 250 ennemis avec le MP7', "Tuez un joueur qui a atteint le niveau couteau d'or avec une mitraillette en mode Course à l'armement", "Tuez un joueur qui a atteint le niveau couteau d'or avec votre couteau en mode Course à l'armement", 'Débloquez toutes les récompenses de spécialiste en pistolets', 'Tuez 100 ennemis avec le Nova', 'En tant que dernier terroriste en vie, retenez le désamorceur suffisamment longtemps pour que la bombe explose', 'Remportez 100 manches sur Train', 'Tuez 500 ennemis avec le P90', 'Remportez cinq parties sur Sugarcane', "Tuez 250 ennemis avec l'UMP-45", 'Remportez 100 combats au couteau', 'Gagnez un montant total de 50 000 000 $', 'Tuez 200 ennemis avec le XM1014', 'Tuez 100 ennemis avec la M249', 'Posez cinq bombes en mode Démolition', 'Libérez tous les otages au cours de la même manche', "Remportez cinq parties sur Baggage en mode Course à l'armement", 'Tuez 250 ennemis avec le PP-Bizon', 'Débloquez toutes les récompenses de spécialiste en fusils', 'Remportez 100 manches sur Office', 'Tuez 100 ennemis avec des grenades explosives', "Survivez aux dégâts infligés par cinq joueurs au cours d'une même manche", 'Débloquez toutes les récompenses de spécialiste en fusils à pompe', 'Libérez tous les otages en moins de 90 secondes', 'Débloquez toutes les récompenses de spécialiste en pistolets mitrailleurs', 'Remportez cinq parties sur Shorttrain', 'Tuez 100 ennemis avec des cocktails Molotov ou des grenades incendiaires', "Abattez seul l'équipe Antiterroriste avant que la bombe ne soit posée en mode Démolition", "Remportez 25 parties en mode Course à l'armement ou Démolition", "Abattez seul l'équipe Terroriste avant que la bombe ne soit posée en mode Démolition", "Jouez à une manche sur chaque carte en Course à l'armement et en Démolition", "Tuez le désamorceur à l'aide d'une grenade explosive", "Jouez à 500 parties en mode Course à l'armement ou Démolition", 'Tuez trois ennemis avec une seule grenade explosive', 'Désamorcez cinq bombes en mode Démolition', 'Détruisez 14 vitres au cours de la même manche sur Office', 'Remportez 100 manches sur Italy', 'Débloquez toutes les récompenses de spécialiste en maniement des armes', "Remportez une partie sur chaque carte en Course à l'armement et en Démolition", 'Remportez 100 manches sur Dust', 'Tuez cinq ennemis avec une bombe que vous avez posée', "Remportez une partie sans mourir en mode Course à l'armement", 'Remportez 100 manches sur Aztec', 'Libérez 100 otages', "Remportez 100 parties en mode Course à l'armement ou Démolition", 'Libérez 500 otages', "Remportez 500 parties en mode Course à l'armement ou Démolition", "Remportez 1 000 parties en mode Course à l'armement ou Démolition", "Jouez à 5 000 parties en mode Course à l'armement ou Démolition"]
  /*Pourcentages des achievements*/    const achpercent=[67.0, 66.4, 66.2, 64.6, 63.8, 62.0, 61.3, 60.4, 59.9, 57.4, 55.1, 53.5, 52.8, 52.5, 50.7, 48.1, 47.2, 47.1, 46.9, 45.7, 45.7, 45.2, 45.1, 42.8, 42.8, 42.3, 41.6, 39.9, 39.8, 38.7, 38.2, 37.8, 36.6, 36.5, 34.5, 34.1, 32.7, 32.7, 31.9, 31.2, 31.0, 29.7, 29.0, 28.4,27.2, 27.0, 26.8, 26.2, 25.9, 25.8, 25.7, 25.1, 24.6, 24.1, 22.7, 22.3, 22.0, 21.8, 21.3, 21.2, 20.9, 20.6, 20.5, 20.4, 20.3, 19.2, 18.6, 18.5, 17.8, 17.6, 17.5, 17.5, 17.4, 17.2, 17.1, 16.9, 16.6, 16.4, 16.1, 15.9, 15.4, 15.2, 15.0, 14.3, 14.3, 13.9, 13.9, 13.9, 13.1, 12.6, 12.4, 12.2, 11.7, 11.5, 11.5, 11.4, 11.1, 11.1, 11.0, 10.8, 10.8, 10.6, 10.6, 10.0, 10.0, 10.0, 9.9, 9.8, 9.8, 9.7, 9.4, 9.4, 9.3, 9.3, 9.3, 8.9, 8.7, 8.7, 8.6, 8.6, 8.4, 8.1, 8.1, 8.0, 7.6, 7.5, 7.4, 7.3, 6.6, 6.4, 6.2, 6.1, 6.1, 6.1, 5.8, 5.7, 5.4, 5.4, 5.1, 5.1, 5.0, 4.6, 4.3, 4.3, 4.0, 3.8, 3.8, 3.8, 3.6, 3.6, 3.5, 3.4, 3.3, 2.7, 2.7, 2.6, 2.3, 2.3, 2.2, 2.1, 2.1, 2.0, 1.9, 1.8, 1.7, 1.6, 1.6]


    //console.log('Json steam 64 id: ',obj.playerstats.steamID);
    //console.log('Game name: ',obj.playerstats.gameName);

    //STATS:
    //console.log('Kills: ',obj.playerstats.stats.total_kills.value);
    //console.log('Deaths: ',obj.playerstats.stats.total_deaths.value);
    //console.log('K/d: ',obj.playerstats.stats.total_kills.value/obj.playerstats.stats.total_deaths.value);
    //console.log('Precision: ',arrondir((obj.playerstats.stats.total_shots_hit.value/obj.playerstats.stats.total_shots_fired.value)*100,2)+'%');

    //ACHIEVEMENTS:
    //console.log('Achievements: ',Object.values(obj.playerstats.achievements).length,'/ 167');//NOMBRE D'ACHIEVEMENTS TOTAUX DU JOUEUR /167
    //console.log('Achievements: ',Object.values(obj.playerstats.achievements).length/167*100,'%');//POURCENTAGE D'ACHIEVEMENTS

    function verifFormat(type,listeNoms){
      let listeProtected=[]
      for (let i in listeNoms){
        //Permet de handle les stats qui n'existent pas
        if(typeof obj.playerstats.stats[type+listeNoms[i]]!=='undefined'){listeProtected.push(obj.playerstats.stats[type+listeNoms[i]].value)}
        //Si la valeur n'a pas été définie ou la met à 0
        else{//console.log("Valeur "+listeNoms[i]+" introuvable, donc variable associé à 0")
          listeProtected.push(0)}
      }
      return listeProtected
    }

    function select(liste,ordre,nb){//Fonction qui prends en argument une liste à deux dimension un ordre et un nombre de valeur à retourner
      let listeRetournee=[];
      if (nb>liste[0].length){nb=liste[0].length}//Permet à ce qu'il n'y ait pas de dépssement
      for (let i = 0; i<2;i++){
        for (let j = 0; j < nb; j++){
          if (ordre==="croissant"){listeRetournee.push(liste[i][liste[i].length-(j+1)])}
          else if(ordre==="dcroissant"){listeRetournee.push(liste[i][j])}
        }
      }
      return listeRetournee
    }

    function show()//affiche les résultats
    {
      click=false;//set le click à false

       //TOOLTIP

       function tooltip(message,ordre) {
        if (ordre) {
          document.getElementById('ifoothead').style.cssText =`opacity:0;`;
          document.getElementById('ifoottext').style.cssText =`opacity:1;`;
          document.getElementById("ifoottext").innerHTML=message;
          document.getElementById('ifooter').style.cssText = `
          height: 11.042vw !important;
          opacity: 0.75 !important;
          background-color: rgba(39, 38, 38, 0.719) !important;`;
        }
        else {
          document.getElementById('ifoothead').style.cssText =`opacity:1;`;
          document.getElementById('ifoottext').style.cssText =`opacity:0;`;
          document.getElementById('ifooter').style.cssText = `
          height:1.146vw;
          opacity:0.5;
          background-color: rgba(46, 45, 45, 0.308); !important`;
          document.getElementById("ifoottext").addEventListener('mouseover',function(){if (!click){this.innerHTML="Bienvenue sur la page de résultats!<br>Vous pouvez clicker sur les différents cadres pour avoir des informations supplémentaires<br>Vous pouvez aussi désactiver le fond animé en clickant sur la croix rouge en haut à droite"};});
        }
      }


      //PROFILE
      let partstat=verifFormat("",["total_rounds_played","total_time_played","total_matches_won","total_matches_played"])
      document.getElementById('winr').innerHTML="Win ratio: "+arrondir((partstat[2]/partstat[3])*100,2)+'%';
      document.getElementById('roundw').innerHTML=`${partstat[0]} rounds`;
      document.getElementById('tps').innerHTML=`${arrondir(partstat[1]/3600,0)} H`;
      document.getElementById('prf').addEventListener('click',function(_){
        click = !click
        tooltip(`<p style='font-size:1.5vw'>Le win ratio est calculé en fonction du nombres de parties compétitive classiques remportées sur le nombre joués, et ne comprends pas les égalités comme des parties gagnés
        <br>Le nombre de rounds représente le nombre de manches remportés en partie compétitive classiques
        <br>Le temps de jeu représente le temps d'heures passés en partie compétitive classiques uniquement</p>`,click);});

      //ACHIEVEMENTS
      
      //Pourcentage achievments
      let complet=document.createElement("p");
      complet.setAttribute('style','margin-top:10px;text-decoration:underline;');
      complet.innerHTML="Achievements: "+Object.values(obj.playerstats.achievements).length+"/"+167 +" ("+Math.trunc(Object.values(obj.playerstats.achievements).length/167*100)+"%)";
      document.getElementById("fait").appendChild(complet);

      for (const i of Object.keys(achievement))
      {
        //Création du cadre d'achievement
        let achv=document.createElement("div");
        achv.setAttribute('class','achv')
        //console.log("NUMERO "+i+": "+achievement[i]+": "+obj.playerstats.achievements[achievement[i]]);
        //Création du cadre pourcentage
        let prc=document.createElement("div");
        prc.setAttribute('class','prc');
        prc.setAttribute('style',`width:${achpercent[i]}%`);
        achv.appendChild(prc);

        //Création du titre de l'achievement
        let title=document.createElement("p");
        title.setAttribute('class','ach-title');
        title.innerHTML=`${achtitle[i]}`;
        achv.appendChild(title);

        //Création de la description de l'achievement
        let desc=document.createElement("p");
        desc.setAttribute('class','ach-desc');
        desc.innerHTML=`${achdesc[i]}`;
        achv.appendChild(desc);

        //Création de l'image dans le cadre de l'achievement
        let achvimg =document.createElement("img");
        achvimg.src=`../assets/image/achievements/${achievement[i]}.jpg`;
        achvimg.setAttribute('class','achv-img');
        achv.appendChild(achvimg);

        //vérifie si la variable existe et est définie, donc si l'achievement est déjà fait
        if (typeof obj.playerstats.achievements[achievement[i]] !== 'undefined'){
          document.getElementById('fait').appendChild(achv);
        }
        else{
          achvimg.setAttribute('style','filter: grayscale(100%)');
          document.getElementById('pfait').appendChild(achv);
        }
      }

      document.getElementById('succes').addEventListener('click',function(_){
        click = !click
        tooltip(`<p style='font-size:1.2vw'>Il y a 167 succès unique au total sur le jeu ils se débloquent en partie<br>
        Les achievements sont composé d'un titre, une description, une illustration et une barre en fond qui représente le pourcentage de réussite global de tous les joueurs<br>
        Les achievements se trouvant au dessus sont ceux débloqué par le joueur et ceux se trouvant en dessous du séparateur ne sont pas encoré débloqués par le joueur, les deux catégories sont triés par le pourcentage de réussite globale<br>Vous pouvez 
        consulter la <a href='https://steamcommunity.com/stats/CSGO/achievements' target='_blank'>page officielle</a> pour plus de renseignement sur les succès</p>`,click);});
      


      //BRG
      //Cet partie du code peut aider à comprendre le reste c'est une version simplifié de toutes les fonctions qui s'occupent d'aller chercher les données dans le json les vérifier et afficher en conséquence le résultat ou non
      let tasimg=document.createElement("img");
      tasimg.setAttribute('id','tasimg');

      let task=document.createElement("p");
      let tass=document.createElement("p")
      task.setAttribute('id','task');
      tass.setAttribute('id','tass');
      let killtaser
      let shottaser
      if(typeof obj.playerstats.stats.total_kills_taser!=='undefined'){ killtaser=obj.playerstats.stats.total_kills_taser.value}
      else{killtaser=0;};//Si la valeur n'a pas été définie ou la met à 0
      task.innerHTML=`${killtaser}<br>victimes`;
      if(typeof obj.playerstats.stats.total_shots_taser!=='undefined'){ shottaser=obj.playerstats.stats.total_shots_taser.value}
      else{ shottaser=0;};
      tass.innerHTML=`${shottaser}<br>tirs`;

      document.getElementById('brg').appendChild(task);
      document.getElementById('brg').appendChild(tass);
      document.getElementById('brg').appendChild(tasimg);

      document.getElementById('brg').addEventListener('click',function(_){
        click = !click
        tooltip(`<p style='font-size:1.7vw'>Le taser est une arme unique étant plus de l'ordre de l'équipement<br>
        Le taser tue instantanément l'ennemi en un seul coup, mais la portée est minime et n'a qu'une seule charge!<br>
        Le taser est aussi surnommé Zeus x27, basé sur la divinité de l'éclair, zeus, le modèle est basé sur le taser M26</p>`,click);});
   

      //strengh
      var strenghstat=verifFormat("",["total_kills","total_deaths","total_damage_done","total_kills_headshot","total_shots_fired","total_shots_hit"])
      document.getElementById('kd')   .innerHTML="K/D ratio: "+arrondir((strenghstat[0]/strenghstat[1]),2)+'%';
      document.getElementById('hdsh') .innerHTML="Headshots ratio: "+arrondir((strenghstat[3]/strenghstat[5])*100,2)+'%';
      document.getElementById('prcss').innerHTML="Precision: "+arrondir((strenghstat[5]/strenghstat[4])*100,2)+'%';
      document.getElementById('ttdmg').innerHTML="Dégats totaux: "+strenghstat[2];
      document.getElementById('strengh').addEventListener('click',function(_){
        click = !click
        tooltip(`<p style='font-size:1.5vw'>Le K/D représente le ratio du nombre de victime par mort
        <br>Le ratio de headshots correspond aux nombre de balles qui touchent la tête de l'ennemi sur toutes les balles qui touchent l'ennemi
        <br>La précision est le ration du nombre de balles qui touchent sur celles tirés<br>Les dégats totaux correspondent aux dégats infligés aux ennemis en partie compétitive classiques uniquement</p>`,click);});

      //WEAPONS
      const BTN_NOMS=["PRIX","DGT","KILLS","HDR"]
      const BTN_LST=["btnarg","btndgt","btnkil","btnprc"];
      var btnwdg=[0,0,0,0]//les élements html
      var btnstatus=[false,false,true,false]//status des btn au début
      let shotslst=verifFormat('total_shots_',weapons)
      let hitslst=verifFormat('total_hits_',weapons)
      var killslst=verifFormat('total_kills_',weapons)
      var preclst=[]
      for (const i of Object.keys(weapons)){
        preclst.push((hitslst[i]/shotslst[i])*100)
      }
      var list_list=[wpprix,wpdg,killslst,preclst]

      //Fonction qui prends en argument une liste non trié, la trie, et retourne une nouvelle liste des index trié, ex:
      //liste = [7,2,4,6,2,0,1]
      //il la trie [0,1,2,2,4,6,7]
      //et retourne enfin [6,2,4,5,3,0,1] on a donc une liste qui nous permet de à partir de la liste non trié, et la liste d'index de faire une liste trié qui peut alors s'appliqué à plusieurs liste qui étaient dans le meme ordre sans devoir toutes les triés
      function tree(listeNonTrie){
        let listeIndx= Array.from(Array(listeNonTrie.length).keys())
        .sort((a, b) => listeNonTrie[a] < listeNonTrie[b] ? -1 : (listeNonTrie[b] < listeNonTrie[a]) | 0)
        return listeIndx
      }

      function wsh(e){
        for (let i in BTN_LST) {//on va comparer pour chaque boutons
          if (e.target.id===BTN_LST[i]){//on regarde quel bouton a été appuyé
            btnstatus[i] = !btnstatus[i];//on échange le statut du bouton
            if (btnstatus[i]){//si le bouton est false on tri par ordre croissant:
              wee(tree(list_list[i]).reverse())
              document.getElementById(e.target.id).style.color='rgba(25, 255, 0, 0.473)';
            }
            else{//sinon par ordre Dcroissant
              wee(tree(list_list[i]))
              document.getElementById(e.target.id).style.color='rgba(255, 0, 0, 0.473)';
            }
          }
        }
      }

      function wee(listeIndex){
        document.getElementById('weapons').remove();
        var weap=document.createElement('div');
        weap.setAttribute('id','weapons');
        document.getElementById('weapons-wrapper').appendChild(weap);

        var topwpn=document.createElement("div");
        topwpn.setAttribute('id','topwpn');
        document.getElementById('weapons').appendChild(topwpn);
        for (const j of Object.keys(BTN_LST)){//on crée les 4 boutons de tri
          btnwdg[j]=document.createElement("p");//on fait les paragraphes
          btnwdg[j].innerHTML=BTN_NOMS[j];//on écrit les noms des btn
          btnwdg[j].setAttribute('id',BTN_LST[j]);//on leur attribue une id
          btnwdg[j].addEventListener('click',function(event){wsh(event);});//on appelle la fonction wsh avec l'événement
          document.getElementById('topwpn').appendChild(btnwdg[j]);//on ajoute les btn
        }

        for (const j of Object.keys(weapons)){
          let i=listeIndex[j];
          var caseweapon=document.createElement("div");
          caseweapon.setAttribute('id','caseweapon');
          document.getElementById('weapons').appendChild(caseweapon);
          let szgrph=37//taille de la boite du graphique
          let rad=arrondir((100/(Math.PI*2)),5);//on calule le rayon
          let draw=`d="M${szgrph/2} ${(szgrph-(rad*2))/2} a ${rad} ${rad} 0 0 1 0 ${rad*2} a ${rad} ${rad} 0 0 1 0 ${-rad*2}"`//on calcule la circonférence du cercle sur 100 pour utiliser un pourcentage
          caseweapon.innerHTML=`
          <div id="boxwpn">
          <img class="logowpn" src="../assets/image/weapons/icon-${weapons[i]}.png" alt="">
          <p class='textwpn' id='prixwpn'>${wpprix[i]} $</p>
          <p class='textwpn' id='dmgwpn'>- ${wpdg[i]}</p>
          </div>
          <p class="killswpn">${killslst[i]}</p>
          <div id="backwpn" style='background-image:url(../assets/image/weapons/logo_${weapons[i]}.png)'></div>
          <div class="cercle-wrapper">
            <svg viewBox="0 0 ${szgrph} ${szgrph}" class="cercle-svg">
              <path class="cercle-bg" ${draw}/>
              <path class="cercle" stroke-dasharray="${Math.trunc(preclst[i])}, 100" ${draw}/>
              <text x="${szgrph/2}" y="${szgrph-rad}" class="pourcentage">${arrondir(preclst[i],1)}%</text>
            </svg>
          </div>`;
          if (j!==weapons.length-1){//Pour qu'il n'y ait pas de séparateur en bas
            let separ=document.createElement('div');
            separ.setAttribute('id','sep');
            document.getElementById('weapons').appendChild(separ);}
          }
          document.getElementById('weapons').addEventListener('click',function(e){
            if (e.target.id!==BTN_LST[0]&&e.target.id!==BTN_LST[1]&&e.target.id!==BTN_LST[2]&&e.target.id!==BTN_LST[3]){
              click = !click
              tooltip(`<p style='font-size:1.4vw'>Le prix correspond au prix de l'arme en partie compétitive classique<br>DGT corresponds aux dégats moyens pour une seule balle, la moyenne est
              calculé graçe aux dégats de chaque parties du corp<br>Les kills correspondent aux nombres de victimes fait avec l'arme depuis le début du jeu<br>HDR corresponds à la précision
              il est calculé en fonction du nombre de tirs fait avec l'armes et aux nombres de touches<br>Vous pouvez 
              consulter le <a href='https://developer.valvesoftware.com/wiki/Category:Counter-Strike:_Global_Offensive_Weapons' target='_blank'>wiki officiel</a> pour plus de renseignement sur les armes</p>`,click);}});
      }

      //wee(tree('total_kills_',weapons,true).reverse());
      wee(tree(killslst).reverse());

      


      //wpst 
      const backgear=["ct_knife.png","t_knife.png","hegrenade.png","incgrenade.png","molotov.png"],
      prcbackgear=[0,15,40,65,80];
      let backgearwd=[0,0,0,0,0]
      for (const j of Object.keys(backgear)){
        backgearwd[j]=document.createElement("div")
        backgearwd[j].setAttribute('id','backgear');
        backgearwd[j].style.backgroundImage=`url("../assets/image/gear/${backgear[j]}")`;
        backgearwd[j].style.left=`${prcbackgear[j]}%`;
        document.getElementById('wpst-wrapper').appendChild(backgearwd[j])
        }

      let sp=[0,0]
      const prcsp=[35,65]
      for (const j of Object.keys(sp)){
        sp[j]=document.createElement('div');
        sp[j].setAttribute('id','separvabs');
        sp[j].style.left=`${prcsp[j]}%`;
        document.getElementById('wpst-wrapper').appendChild(sp[j]);}

      let gearwd=[0,0,0],
      gearlst=verifFormat("",["total_kills_knife","total_kills_hegrenade","total_kills_molotov"]),
      txtcontainer=document.createElement('div');
      txtcontainer.setAttribute('id','txtcontainer');
      document.getElementById('wpst-wrapper').appendChild(txtcontainer);
      for (const j of Object.keys(gearwd)) {
        gearwd[j]=document.createElement("p")
        gearwd[j].setAttribute('id','gearwd');
        gearwd[j].innerHTML=`${gearlst[j]}`;
        document.getElementById('txtcontainer').appendChild(gearwd[j]);
      }
      document.getElementById('wpst').addEventListener('click',function(_){
        click = !click
        tooltip(`<p style='font-size:2vw'>La première case correspond aux nombre de kills au couteau (C et CT)<br>Le deuxième cadre correspond aux nombre d'éliminations à la HE (grenade explosive)<br>Et le troisième corresponds aux nombres d'énnemis immolés par le feu</p>`,click);})


      //MVP
      let statss=verifFormat("",['total_mvps','total_money_earned','total_broken_windows','total_planted_bombs','total_defused_bombs','total_rescued_hostages']),
      statsdesc=['MVPS','Gains totaux','Vitres cassés','Bombes plantées','Bombes désamorcées','Otages sauvés'],
      staswdg=[0,0,0,0,0,0];//Une liste pour les objets html qui vont être crées
      for (const i of Object.keys(statss)) {
        staswdg[i]=document.createElement('p');
        staswdg[i].setAttribute('class','txtstats');
        staswdg[i].innerHTML="<span id='first-word'>"+statsdesc[i]+": </span>"+[statss[i]]
        if(i==0){
          let gtxtb=document.createElement('div');
          gtxtb.setAttribute('id','gtxtb');
          gtxtb.setAttribute('class','txtb');
          document.getElementById('mvp').appendChild(gtxtb);
        }
        if (i<=2){
          staswdg[i].setAttribute('class','statsgauche');
          gtxtb.appendChild(staswdg[i]);

        }
        if (i==3)
        {let separv=document.createElement('div');
        separv.setAttribute('id','sepv');
        document.getElementById('mvp').appendChild(separv);
        let dtxtb=document.createElement('div');
        dtxtb.setAttribute('id','dtxtb');
        dtxtb.setAttribute('class','txtb');
        document.getElementById('mvp').appendChild(dtxtb);}
        if (i>=3){
          staswdg[i].setAttribute('class','statsdroite');
          dtxtb.appendChild(staswdg[i]);
        }
      }

      document.getElementById('mvp').addEventListener('click',function(e){
        if (e.target.id!==BTN_LST[0]&&e.target.id!==BTN_LST[1]&&e.target.id!==BTN_LST[2]&&e.target.id!==BTN_LST[3]){
          click = !click
          tooltip(`<p style='font-size:2vw'>Les MVP (Most Valuable Player) sont attribué au meilleur joueur de la manche<br>Les gains totaux représentent le montant total d'argent gagné depuis le début par le joueur</p>`,click);}});


      //MAPS 
      document.getElementById('maps').addEventListener('click',function(e){
        click = !click;
        if (e.target.id!=='mapswitch'){//Permet à ce que le tooltip ne s'affiche pas lorsqu'on change l'ordre des maps
          tooltip("<p style='font-size:1.5vw'>Le nombre de wins correspond aux nombres de parties entières remportées<br>Le nombre de rounds correspond aux nombres de manches joués, il y a miniumum 15 manches par parties et maximum 30<br>Le win rate est le pourcentage de parties remportées par rapport aux nombre de parties joués<br>Vous pouvez consulter le <a href='https://developer.valvesoftware.com/wiki/List_of_CS:GO_Maps' target='_blank'>wiki officiel</a> pour plus de renseignement sur les maps</p>",click);}});
      
      //Permet de trier les maps et de trier la liste des noms dans le meme ordre pour que les données soient bien affichées
      function triMap(type,listeNoms){
        let listeVar=verifFormat(type,listeNoms)
        for (const i of Object.keys(listeNoms)) {
          let dejaTrie=true;
          for (let j=0;j<(listeNoms.length-i-1);j++){
            if(listeVar[j] > listeVar[j+1]){[listeVar[j],listeVar[j+1],listeNoms[j],listeNoms[j+1],dejaTrie]=[listeVar[j+1],listeVar[j],listeNoms[j+1],listeNoms[j],false];}
          }
          if (dejaTrie) break;
        }
        return [listeNoms,listeVar]
      }

      function MapsAffichage(){//fonction qui va afficher les maps en fonction de croissant ou décroissant
        let mapRoundSorted=triMap('total_rounds_map_',maps),
        mapWinSorted=triMap('total_wins_map_',maps), 
        mapRounds, 
        mapWins;
        if (croissant){
          mapRounds=select(mapRoundSorted,'croissant',3)
          mapWins=select(mapWinSorted,'croissant',3)}
        else{
          mapRounds=select(mapRoundSorted,'dcroissant',3)
          mapWins=select(mapWinSorted,'dcroissant',3)}
        for (let i = 0; i < 3; i++){document.getElementById("map-"+(i+1)).innerHTML='<p style="font-size: 1.2ch;">'+mapWins[i].slice(3).toUpperCase()+'</p> <p style="font-size: 2.2ch;">'+mapWins[i+3]+`<br>WINS</p><img src="../assets/image/maps/logo_${mapWins[i]}.png" id="imap" style="width:6vw;height:auto;"><p>`+mapRounds[i+3]+'<br>ROUNDS</p>WIN RATE<br>'+arrondir((mapWins[i+3]/(mapRounds[i+3]/30)),2)+'%';}
      }

      var croissant=true;
      MapsAffichage()
      document.getElementById('mapswitch').addEventListener('click', function(_) {//Bouton pour échanger l'ordre
        croissant = !croissant
        MapsAffichage()
      })
    }
    show();
  }

  let x =sessionStorage.getItem('id');
  //console.log('Input steam 64 id: ',x);
  if (x==="76561198089925382")//ID de test
  {
    const json =`
    {
      "playerstats": {
        "steamID": "76561198089925382",
        "gameName": "ValveTestApp260",
        "stats": {
          "total_kills": {
            "value": 73770
          },
          "total_deaths": {
            "value": 71890
          },
          "total_time_played": {
            "value": 4528250
          },
          "total_planted_bombs": {
            "value": 2481
          },
          "total_defused_bombs": {
            "value": 439
          },
          "total_wins": {
            "value": 27801
          },
          "total_damage_done": {
            "value": 10325763
          },
          "total_money_earned": {
            "value": 153587396
          },
          "total_rescued_hostages": {
            "value": 987
          },
          "total_kills_knife": {
            "value": 2865
          },
          "total_kills_hegrenade": {
            "value": 480
          },
          "total_kills_glock": {
            "value": 1293
          },
          "total_kills_deagle": {
            "value": 2807
          },
          "total_kills_elite": {
            "value": 450
          },
          "total_kills_fiveseven": {
            "value": 1118
          },
          "total_kills_xm1014": {
            "value": 1036
          },
          "total_kills_mac10": {
            "value": 891
          },
          "total_kills_ump45": {
            "value": 1730
          },
          "total_kills_p90": {
            "value": 2739
          },
          "total_kills_awp": {
            "value": 11166
          },
          "total_kills_ak47": {
            "value": 11757
          },
          "total_kills_aug": {
            "value": 1948
          },
          "total_kills_famas": {
            "value": 1701
          },
          "total_kills_g3sg1": {
            "value": 1106
          },
          "total_kills_m249": {
            "value": 649
          },
          "total_kills_headshot": {
            "value": 23284
          },
          "total_kills_enemy_weapon": {
            "value": 7067
          },
          "total_wins_pistolround": {
            "value": 2065
          },
          "total_wins_map_cs_assault": {
            "value": 27
          },
          "total_wins_map_cs_italy": {
            "value": 23
          },
          "total_wins_map_cs_office": {
            "value": 365
          },
          "total_wins_map_de_aztec": {
            "value": 280
          },
          "total_wins_map_de_cbble": {
            "value": 1145
          },
          "total_wins_map_de_dust2": {
            "value": 8148
          },
          "total_wins_map_de_dust": {
            "value": 270
          },
          "total_wins_map_de_inferno": {
            "value": 2951
          },
          "total_wins_map_de_nuke": {
            "value": 758
          },
          "total_wins_map_de_train": {
            "value": 1259
          },
          "total_weapons_donated": {
            "value": 2794
          },
          "total_broken_windows": {
            "value": 209
          },
          "total_kills_enemy_blinded": {
            "value": 989
          },
          "total_kills_knife_fight": {
            "value": 364
          },
          "total_kills_against_zoomed_sniper": {
            "value": 5722
          },
          "total_dominations": {
            "value": 1298
          },
          "total_domination_overkills": {
            "value": 1402
          },
          "total_revenges": {
            "value": 614
          },
          "total_shots_hit": {
            "value": 261932
          },
          "total_shots_fired": {
            "value": 1187408
          },
          "total_rounds_played": {
            "value": 55497
          },
          "total_shots_deagle": {
            "value": 24734
          },
          "total_shots_glock": {
            "value": 32413
          },
          "total_shots_elite": {
            "value": 9687
          },
          "total_shots_fiveseven": {
            "value": 17333
          },
          "total_shots_awp": {
            "value": 37179
          },
          "total_shots_ak47": {
            "value": 198088
          },
          "total_shots_aug": {
            "value": 27379
          },
          "total_shots_famas": {
            "value": 32514
          },
          "total_shots_g3sg1": {
            "value": 8204
          },
          "total_shots_p90": {
            "value": 73308
          },
          "total_shots_mac10": {
            "value": 25607
          },
          "total_shots_ump45": {
            "value": 38077
          },
          "total_shots_xm1014": {
            "value": 36060
          },
          "total_shots_m249": {
            "value": 19060
          },
          "total_hits_deagle": {
            "value": 6303
          },
          "total_hits_glock": {
            "value": 7721
          },
          "total_hits_elite": {
            "value": 2242
          },
          "total_hits_fiveseven": {
            "value": 4097
          },
          "total_hits_awp": {
            "value": 12560
          },
          "total_hits_ak47": {
            "value": 38971
          },
          "total_hits_aug": {
            "value": 7476
          },
          "total_hits_famas": {
            "value": 7832
          },
          "total_hits_g3sg1": {
            "value": 2084
          },
          "total_hits_p90": {
            "value": 15964
          },
          "total_hits_mac10": {
            "value": 5844
          },
          "total_hits_ump45": {
            "value": 8512
          },
          "total_hits_xm1014": {
            "value": 8094
          },
          "total_hits_m249": {
            "value": 2360
          },
          "total_rounds_map_cs_assault": {
            "value": 59
          },
          "total_rounds_map_cs_italy": {
            "value": 64
          },
          "total_rounds_map_cs_office": {
            "value": 686
          },
          "total_rounds_map_de_aztec": {
            "value": 626
          },
          "total_rounds_map_de_cbble": {
            "value": 2343
          },
          "total_rounds_map_de_dust2": {
            "value": 16528
          },
          "total_rounds_map_de_dust": {
            "value": 508
          },
          "total_rounds_map_de_inferno": {
            "value": 6064
          },
          "total_rounds_map_de_nuke": {
            "value": 1640
          },
          "total_rounds_map_de_train": {
            "value": 2474
          },
          "last_match_t_wins": {
            "value": 7
          },
          "last_match_ct_wins": {
            "value": 3
          },
          "last_match_wins": {
            "value": 9
          },
          "last_match_max_players": {
            "value": 10
          },
          "last_match_kills": {
            "value": 13
          },
          "last_match_deaths": {
            "value": 9
          },
          "last_match_mvps": {
            "value": 1
          },
          "last_match_favweapon_id": {
            "value": 16
          },
          "last_match_favweapon_shots": {
            "value": 59
          },
          "last_match_favweapon_hits": {
            "value": 15
          },
          "last_match_favweapon_kills": {
            "value": 4
          },
          "last_match_damage": {
            "value": 2030
          },
          "last_match_money_spent": {
            "value": 21300
          },
          "last_match_dominations": {
            "value": 0
          },
          "last_match_revenges": {
            "value": 0
          },
          "total_mvps": {
            "value": 8188
          },
          "total_rounds_map_de_lake": {
            "value": 474
          },
          "total_rounds_map_de_safehouse": {
            "value": 308
          },
          "total_rounds_map_de_sugarcane": {
            "value": 12
          },
          "total_rounds_map_de_stmarc": {
            "value": 63
          },
          "total_rounds_map_de_bank": {
            "value": 74
          },
          "total_rounds_map_de_shorttrain": {
            "value": 25
          },
          "total_TR_planted_bombs": {
            "value": 22
          },
          "total_TR_defused_bombs": {
            "value": 6
          },
          "total_gun_game_rounds_won": {
            "value": 778
          },
          "total_gun_game_rounds_played": {
            "value": 1361
          },
          "total_wins_map_de_house": {
            "value": 5
          },
          "total_wins_map_de_bank": {
            "value": 41
          },
          "total_wins_map_de_vertigo": {
            "value": 284
          },
          "total_wins_map_ar_monastery": {
            "value": 38
          },
          "total_rounds_map_ar_shoots": {
            "value": 306
          },
          "total_rounds_map_ar_baggage": {
            "value": 148
          },
          "total_wins_map_ar_shoots": {
            "value": 177
          },
          "total_wins_map_ar_baggage": {
            "value": 85
          },
          "total_wins_map_de_lake": {
            "value": 247
          },
          "total_wins_map_de_sugarcane": {
            "value": 2
          },
          "total_wins_map_de_stmarc": {
            "value": 31
          },
          "total_matches_won_bank": {
            "value": 4
          },
          "total_wins_map_de_shorttrain": {
            "value": 22
          },
          "total_wins_map_de_safehouse": {
            "value": 167
          },
          "total_matches_won": {
            "value": 1598
          },
          "total_matches_played": {
            "value": 4488
          },
          "total_gg_matches_won": {
            "value": 177
          },
          "total_gg_matches_played": {
            "value": 1861
          },
          "total_progressive_matches_won": {
            "value": 469
          },
          "total_trbomb_matches_won": {
            "value": 6
          },
          "total_contribution_score": {
            "value": 182981
          },
          "last_match_contribution_score": {
            "value": 19
          },
          "last_match_rounds": {
            "value": 10
          },
          "total_kills_hkp2000": {
            "value": 3636
          },
          "total_shots_hkp2000": {
            "value": 68080
          },
          "total_hits_hkp2000": {
            "value": 16129
          },
          "total_hits_p250": {
            "value": 7480
          },
          "total_kills_p250": {
            "value": 1988
          },
          "total_shots_p250": {
            "value": 35358
          },
          "total_kills_sg556": {
            "value": 2050
          },
          "total_shots_sg556": {
            "value": 30709
          },
          "total_hits_sg556": {
            "value": 6963
          },
          "total_hits_scar20": {
            "value": 2036
          },
          "total_kills_scar20": {
            "value": 1102
          },
          "total_shots_scar20": {
            "value": 7392
          },
          "total_shots_ssg08": {
            "value": 9688
          },
          "total_hits_ssg08": {
            "value": 3125
          },
          "total_kills_ssg08": {
            "value": 1583
          },
          "total_shots_mp7": {
            "value": 88619
          },
          "total_hits_mp7": {
            "value": 22538
          },
          "total_kills_mp7": {
            "value": 3807
          },
          "total_kills_mp9": {
            "value": 974
          },
          "total_shots_mp9": {
            "value": 29612
          },
          "total_hits_mp9": {
            "value": 6412
          },
          "total_hits_nova": {
            "value": 7802
          },
          "total_kills_nova": {
            "value": 868
          },
          "total_shots_nova": {
            "value": 34359
          },
          "total_hits_negev": {
            "value": 2727
          },
          "total_kills_negev": {
            "value": 803
          },
          "total_shots_negev": {
            "value": 40176
          },
          "total_shots_sawedoff": {
            "value": 23154
          },
          "total_hits_sawedoff": {
            "value": 3859
          },
          "total_kills_sawedoff": {
            "value": 610
          },
          "total_shots_bizon": {
            "value": 34716
          },
          "total_hits_bizon": {
            "value": 8155
          },
          "total_kills_bizon": {
            "value": 1154
          },
          "total_kills_tec9": {
            "value": 1366
          },
          "total_shots_tec9": {
            "value": 23038
          },
          "total_hits_tec9": {
            "value": 5404
          },
          "total_shots_mag7": {
            "value": 27003
          },
          "total_hits_mag7": {
            "value": 6219
          },
          "total_kills_mag7": {
            "value": 750
          },
          "total_gun_game_contribution_score": {
            "value": 36131
          },
          "last_match_gg_contribution_score": {
            "value": 0
          },
          "total_kills_m4a1": {
            "value": 7481
          },
          "total_kills_galilar": {
            "value": 1356
          },
          "total_kills_molotov": {
            "value": 332
          },
          "total_kills_taser": {
            "value": 150
          },
          "total_shots_m4a1": {
            "value": 128095
          },
          "total_shots_galilar": {
            "value": 27190
          },
          "total_shots_taser": {
            "value": 576
          },
          "total_hits_m4a1": {
            "value": 29612
          },
          "total_hits_galilar": {
            "value": 5648
          },
          "total_rounds_map_ar_monastery": {
            "value": 70
          },
          "total_matches_won_train": {
            "value": 69
          },
          "total_rounds_map_de_vertigo": {
            "value": 635
          },
          "total_matches_won_shoots": {
            "value": 159
          },
          "total_matches_won_baggage": {
            "value": 86
          },
          "total_matches_won_lake": {
            "value": 56
          },
          "total_matches_won_stmarc": {
            "value": 17
          },
          "total_matches_won_safehouse": {
            "value": 128
          },
          "total_matches_won_shorttrain": {
            "value": 2
          },
          "GI.lesson.csgo_instr_explain_buymenu": {
            "value": 0
          },
          "GI.lesson.csgo_instr_explain_buyarmor": {
            "value": 0
          },
          "GI.lesson.csgo_instr_explain_plant_bomb": {
            "value": 0
          },
          "GI.lesson.csgo_instr_explain_bomb_carrier": {
            "value": 1
          },
          "GI.lesson.bomb_sites_A": {
            "value": 0
          },
          "GI.lesson.defuse_planted_bomb": {
            "value": 0
          },
          "GI.lesson.csgo_instr_explain_follow_bomber": {
            "value": 0
          },
          "GI.lesson.csgo_instr_explain_pickup_bomb": {
            "value": 0
          },
          "GI.lesson.csgo_instr_explain_prevent_bomb_pickup": {
            "value": 0
          },
          "GI.lesson.Csgo_cycle_weapons_kb": {
            "value": 16
          },
          "GI.lesson.csgo_instr_explain_zoom": {
            "value": 0
          },
          "GI.lesson.csgo_instr_explain_silencer": {
            "value": 16
          },
          "GI.lesson.csgo_instr_explain_reload": {
            "value": 16
          },
          "GI.lesson.tr_explain_plant_bomb": {
            "value": 0
          },
          "GI.lesson.bomb_sites_B": {
            "value": 0
          },
          "GI.lesson.version_number": {
            "value": 16
          },
          "GI.lesson.find_planted_bomb": {
            "value": 0
          },
          "GI.lesson.csgo_hostage_lead_to_hrz": {
            "value": 0
          },
          "GI.lesson.csgo_instr_rescue_zone": {
            "value": 0
          },
          "total_wins_map_cs_militia": {
            "value": 9
          },
          "total_rounds_map_cs_militia": {
            "value": 26
          },
          "GI.lesson.csgo_instr_explain_inspect": {
            "value": 32
          },
          "steam_stat_xpearnedgames": {
            "value": 26
          },
          "steam_stat_matchwinscomp": {
            "value": 9
          }
        },
        "achievements": {
          "WIN_BOMB_PLANT": {
            "achieved": 1
          },
          "BOMB_PLANT_LOW": {
            "achieved": 1
          },
          "BOMB_DEFUSE_LOW": {
            "achieved": 1
          },
          "KILL_ENEMY_LOW": {
            "achieved": 1
          },
          "KILL_ENEMY_MED": {
            "achieved": 1
          },
          "KILL_ENEMY_HIGH": {
            "achieved": 1
          },
          "BOMB_DEFUSE_CLOSE_CALL": {
            "achieved": 1
          },
          "KILL_BOMB_DEFUSER": {
            "achieved": 1
          },
          "WIN_BOMB_DEFUSE": {
            "achieved": 1
          },
          "BOMB_PLANT_IN_25_SECONDS": {
            "achieved": 1
          },
          "WIN_ROUNDS_LOW": {
            "achieved": 1
          },
          "WIN_ROUNDS_MED": {
            "achieved": 1
          },
          "WIN_ROUNDS_HIGH": {
            "achieved": 1
          },
          "GIVE_DAMAGE_LOW": {
            "achieved": 1
          },
          "GIVE_DAMAGE_MED": {
            "achieved": 1
          },
          "GIVE_DAMAGE_HIGH": {
            "achieved": 1
          },
          "KILLING_SPREE": {
            "achieved": 1
          },
          "KILL_WITH_OWN_GUN": {
            "achieved": 1
          },
          "RESCUE_HOSTAGES_LOW": {
            "achieved": 1
          },
          "RESCUE_HOSTAGES_MED": {
            "achieved": 1
          },
          "RESCUE_ALL_HOSTAGES": {
            "achieved": 1
          },
          "FAST_HOSTAGE_RESCUE": {
            "achieved": 1
          },
          "KILL_TWO_WITH_ONE_SHOT": {
            "achieved": 1
          },
          "EARN_MONEY_LOW": {
            "achieved": 1
          },
          "EARN_MONEY_MED": {
            "achieved": 1
          },
          "EARN_MONEY_HIGH": {
            "achieved": 1
          },
          "DEAD_GRENADE_KILL": {
            "achieved": 1
          },
          "KILL_ENEMY_DEAGLE": {
            "achieved": 1
          },
          "KILL_ENEMY_GLOCK": {
            "achieved": 1
          },
          "KILL_ENEMY_ELITE": {
            "achieved": 1
          },
          "KILL_ENEMY_FIVESEVEN": {
            "achieved": 1
          },
          "META_PISTOL": {
            "achieved": 1
          },
          "KILL_ENEMY_AWP": {
            "achieved": 1
          },
          "KILL_ENEMY_AK47": {
            "achieved": 1
          },
          "KILL_ENEMY_M4A1": {
            "achieved": 1
          },
          "KILL_ENEMY_AUG": {
            "achieved": 1
          },
          "KILL_ENEMY_FAMAS": {
            "achieved": 1
          },
          "KILL_ENEMY_G3SG1": {
            "achieved": 1
          },
          "META_RIFLE": {
            "achieved": 1
          },
          "KILL_ENEMY_P90": {
            "achieved": 1
          },
          "KILL_ENEMY_MAC10": {
            "achieved": 1
          },
          "KILL_ENEMY_UMP45": {
            "achieved": 1
          },
          "META_SMG": {
            "achieved": 1
          },
          "KILL_ENEMY_XM1014": {
            "achieved": 1
          },
          "META_SHOTGUN": {
            "achieved": 1
          },
          "KILL_ENEMY_HEGRENADE": {
            "achieved": 1
          },
          "KILL_ENEMY_KNIFE": {
            "achieved": 1
          },
          "KILL_ENEMY_M249": {
            "achieved": 1
          },
          "META_WEAPONMASTER": {
            "achieved": 1
          },
          "KILL_ENEMY_TEAM": {
            "achieved": 1
          },
          "KILLS_WITH_MULTIPLE_GUNS": {
            "achieved": 1
          },
          "KILL_HOSTAGE_RESCUER": {
            "achieved": 1
          },
          "LAST_PLAYER_ALIVE": {
            "achieved": 1
          },
          "KILL_ENEMY_LAST_BULLET": {
            "achieved": 1
          },
          "KILLING_SPREE_ENDER": {
            "achieved": 1
          },
          "BREAK_WINDOWS": {
            "achieved": 1
          },
          "HEADSHOTS": {
            "achieved": 1
          },
          "DAMAGE_NO_KILL": {
            "achieved": 1
          },
          "KILL_LOW_DAMAGE": {
            "achieved": 1
          },
          "KILL_ENEMY_RELOADING": {
            "achieved": 1
          },
          "KILL_ENEMY_BLINDED": {
            "achieved": 1
          },
          "KILL_ENEMIES_WHILE_BLIND": {
            "achieved": 1
          },
          "KILLS_ENEMY_WEAPON": {
            "achieved": 1
          },
          "KILL_WITH_EVERY_WEAPON": {
            "achieved": 1
          },
          "SURVIVE_GRENADE": {
            "achieved": 1
          },
          "WIN_KNIFE_FIGHTS_LOW": {
            "achieved": 1
          },
          "WIN_KNIFE_FIGHTS_HIGH": {
            "achieved": 1
          },
          "KILLED_DEFUSER_WITH_GRENADE": {
            "achieved": 1
          },
          "HIP_SHOT": {
            "achieved": 1
          },
          "KILL_SNIPER_WITH_SNIPER": {
            "achieved": 1
          },
          "KILL_SNIPER_WITH_KNIFE": {
            "achieved": 1
          },
          "KILL_SNIPERS": {
            "achieved": 1
          },
          "KILL_WHEN_AT_LOW_HEALTH": {
            "achieved": 1
          },
          "GRENADE_MULTIKILL": {
            "achieved": 1
          },
          "PISTOL_ROUND_KNIFE_KILL": {
            "achieved": 1
          },
          "FAST_ROUND_WIN": {
            "achieved": 1
          },
          "WIN_PISTOLROUNDS_LOW": {
            "achieved": 1
          },
          "WIN_PISTOLROUNDS_MED": {
            "achieved": 1
          },
          "WIN_PISTOLROUNDS_HIGH": {
            "achieved": 1
          },
          "BOMB_MULTIKILL": {
            "achieved": 1
          },
          "GOOSE_CHASE": {
            "achieved": 1
          },
          "WIN_BOMB_PLANT_AFTER_RECOVERY": {
            "achieved": 1
          },
          "LOSSLESS_EXTERMINATION": {
            "achieved": 1
          },
          "FLAWLESS_VICTORY": {
            "achieved": 1
          },
          "WIN_DUAL_DUEL": {
            "achieved": 1
          },
          "UNSTOPPABLE_FORCE": {
            "achieved": 1
          },
          "IMMOVABLE_OBJECT": {
            "achieved": 1
          },
          "HEADSHOTS_IN_ROUND": {
            "achieved": 1
          },
          "WIN_MAP_CS_OFFICE": {
            "achieved": 1
          },
          "WIN_MAP_DE_AZTEC": {
            "achieved": 1
          },
          "WIN_MAP_DE_DUST": {
            "achieved": 1
          },
          "WIN_MAP_DE_DUST2": {
            "achieved": 1
          },
          "WIN_MAP_DE_INFERNO": {
            "achieved": 1
          },
          "WIN_MAP_DE_NUKE": {
            "achieved": 1
          },
          "WIN_MAP_DE_SHORTTRAIN": {
            "achieved": 1
          },
          "KILL_WHILE_IN_AIR": {
            "achieved": 1
          },
          "KILL_ENEMY_IN_AIR": {
            "achieved": 1
          },
          "KILLER_AND_ENEMY_IN_AIR": {
            "achieved": 1
          },
          "SILENT_WIN": {
            "achieved": 1
          },
          "BLOODLESS_VICTORY": {
            "achieved": 1
          },
          "DONATE_WEAPONS": {
            "achieved": 1
          },
          "WIN_ROUNDS_WITHOUT_BUYING": {
            "achieved": 1
          },
          "DEFUSE_DEFENSE": {
            "achieved": 1
          },
          "KILL_BOMB_PICKUP": {
            "achieved": 1
          },
          "DOMINATIONS_LOW": {
            "achieved": 1
          },
          "DOMINATIONS_HIGH": {
            "achieved": 1
          },
          "DOMINATION_OVERKILLS_LOW": {
            "achieved": 1
          },
          "DOMINATION_OVERKILLS_HIGH": {
            "achieved": 1
          },
          "REVENGES_LOW": {
            "achieved": 1
          },
          "REVENGES_HIGH": {
            "achieved": 1
          },
          "CONCURRENT_DOMINATIONS": {
            "achieved": 1
          },
          "DOMINATION_OVERKILLS_MATCH": {
            "achieved": 1
          },
          "EXTENDED_DOMINATION": {
            "achieved": 1
          },
          "KILL_ENEMIES_WHILE_BLIND_HARD": {
            "achieved": 1
          },
          "CAUSE_FRIENDLY_FIRE_WITH_FLASHBANG": {
            "achieved": 1
          },
          "AVENGE_FRIEND": {
            "achieved": 1
          },
          "GUN_GAME_KILL_KNIFER": {
            "achieved": 1
          },
          "WIN_MAP_AR_SHOOTS": {
            "achieved": 1
          },
          "TR_BOMB_PLANT_LOW": {
            "achieved": 1
          },
          "TR_BOMB_DEFUSE_LOW": {
            "achieved": 1
          },
          "WIN_MAP_DE_LAKE": {
            "achieved": 1
          },
          "WIN_MAP_DE_SAFEHOUSE": {
            "achieved": 1
          },
          "WIN_MAP_DE_STMARC": {
            "achieved": 1
          },
          "GUN_GAME_KNIFE_KILL_KNIFER": {
            "achieved": 1
          },
          "GUN_GAME_SMG_KILL_KNIFER": {
            "achieved": 1
          },
          "GUN_GAME_ROUNDS_LOW": {
            "achieved": 1
          },
          "GUN_GAME_ROUNDS_MED": {
            "achieved": 1
          },
          "WIN_GUN_GAME_ROUNDS_LOW": {
            "achieved": 1
          },
          "WIN_GUN_GAME_ROUNDS_MED": {
            "achieved": 1
          },
          "WIN_GUN_GAME_ROUNDS_HIGH": {
            "achieved": 1
          },
          "PLAY_EVERY_GUNGAME_MAP": {
            "achieved": 1
          },
          "GUN_GAME_RAMPAGE": {
            "achieved": 1
          },
          "GUN_GAME_FIRST_KILL": {
            "achieved": 1
          },
          "GUN_GAME_FIRST_THING_FIRST": {
            "achieved": 1
          },
          "GUN_GAME_TARGET_SECURED": {
            "achieved": 1
          },
          "ONE_SHOT_ONE_KILL": {
            "achieved": 1
          },
          "GUN_GAME_CONSERVATIONIST": {
            "achieved": 1
          },
          "BASE_SCAMPER": {
            "achieved": 1
          },
          "BORN_READY": {
            "achieved": 1
          },
          "STILL_ALIVE": {
            "achieved": 1
          },
          "MEDALIST": {
            "achieved": 1
          },
          "WIN_MAP_DE_BANK": {
            "achieved": 1
          },
          "WIN_MAP_AR_BAGGAGE": {
            "achieved": 1
          },
          "KILL_ENEMY_BIZON": {
            "achieved": 1
          },
          "KILL_ENEMY_TEC9": {
            "achieved": 1
          },
          "KILL_ENEMY_TASER": {
            "achieved": 1
          },
          "KILL_ENEMY_HKP2000": {
            "achieved": 1
          },
          "KILL_ENEMY_P250": {
            "achieved": 1
          },
          "KILL_ENEMY_SCAR20": {
            "achieved": 1
          },
          "KILL_ENEMY_SG556": {
            "achieved": 1
          },
          "KILL_ENEMY_SSG08": {
            "achieved": 1
          },
          "KILL_ENEMY_MP7": {
            "achieved": 1
          },
          "KILL_ENEMY_MP9": {
            "achieved": 1
          },
          "KILL_ENEMY_MAG7": {
            "achieved": 1
          },
          "KILL_ENEMY_SAWEDOFF": {
            "achieved": 1
          },
          "KILL_ENEMY_NOVA": {
            "achieved": 1
          },
          "KILL_ENEMY_NEGEV": {
            "achieved": 1
          },
          "KILL_ENEMY_MOLOTOV": {
            "achieved": 1
          },
          "WIN_MAP_DE_TRAIN": {
            "achieved": 1
          },
          "KILL_ENEMY_GALILAR": {
            "achieved": 1
          }
        }
      }
    }`
    process(JSON.parse(json));
  }
  else
  {
    const json ='bro';
    process(JSON.parse(json));
    print('ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo')
  }
}
window.onload=load();