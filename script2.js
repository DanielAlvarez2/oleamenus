let closeButton = document.querySelector("#close-modal");
closeButton.addEventListener("click", closeModal);
let modal = document.querySelector("#modal-wrapper");
let modalImage = document.querySelector("#modal-image");
let modalText = document.querySelector("#modal-text");

let dinnerButton = document.querySelector("#dinner-button");
dinnerButton.addEventListener("click", dinnerDisplay);
let dinnerMenu = document.querySelector("#dinner-menu");
let dinnerWrapper = document.querySelector("#dinner-wrapper");

let specialsButton = document.querySelector("#specials-button");
specialsButton.addEventListener("click", specialsDisplay);
let specialsMenu = document.querySelector("#specials-menu");
let specialsWrapper = document.querySelector("#specials-wrapper");

let dessertButton = document.querySelector("#dessert-button");
dessertButton.addEventListener("click", dessertDisplay);
let dessertMenu = document.querySelector("#dessert-menu");
let dessertWrapper = document.querySelector("#dessert-wrapper");

let drinksButton = document.querySelector("#drinks-button");
drinksButton.addEventListener("click", drinksDisplay);
let drinksMenu = document.querySelector("#drinks-menu");
let drinksWrapper = document.querySelector("#drinks-wrapper");

let wineButton = document.querySelector("#wine-button");
wineButton.addEventListener("click", wineDisplay);
let wineMenu = document.querySelector("#wine-menu");
let wineWrapper = document.querySelector("#wine-wrapper");

let wagyuButton = document.querySelector("#wagyu-button");
wagyuButton.addEventListener("click", showModal);

let creamCheeseMousseButton = document.querySelector(
  "#cream-cheese-mousse-button"
);
creamCheeseMousseButton.addEventListener("click", showModal);

let jamonButton = document.querySelector("#jamon-button");
jamonButton.addEventListener("click", showModal);

let charcuterieButton = document.querySelector("#charcuterie-button");
charcuterieButton.addEventListener("click", showModal);

let kaleSaladButton = document.querySelector("#smoked-salmon-button");
kaleSaladButton.addEventListener("click", showModal);

let saladButton = document.querySelector("#salad-button");
saladButton.addEventListener("click", showModal);

let gazpachoButton = document.querySelector("#gazpacho-button");
gazpachoButton.addEventListener("click", showModal);

let cevicheButton = document.querySelector("#ceviche-button");
cevicheButton.addEventListener("click", showModal);

let tartareButton = document.querySelector("#tartare-button");
tartareButton.addEventListener("click", showModal);

let pulpoButton = document.querySelector("#pulpo-button");
pulpoButton.addEventListener("click", showModal);

let chipironesButton = document.querySelector("#chipirones-button");
chipironesButton.addEventListener("click", showModal);

let croquettesButton = document.querySelector("#croquettes-button");
croquettesButton.addEventListener("click", showModal);

let foieButton = document.querySelector("#foie-button");
foieButton.addEventListener("click", showModal);

let vegetablesButton = document.querySelector("#vegetables-button");
vegetablesButton.addEventListener("click", showModal);

let scallopsButton = document.querySelector("#scallops-button");
scallopsButton.addEventListener("click", showModal);

let bacalaoButton = document.querySelector("#bacalao-button");
bacalaoButton.addEventListener("click", showModal);

let fishButton = document.querySelector("#fish-button");
fishButton.addEventListener("click", showModal);

let henButton = document.querySelector("#hen-button");
henButton.addEventListener("click", showModal);

let duckButton = document.querySelector("#duck-button");
duckButton.addEventListener("click", showModal);

let cochinilloButton = document.querySelector("#cochinillo-button");
cochinilloButton.addEventListener("click", showModal);

let solomilloButton = document.querySelector("#solomillo-button");
solomilloButton.addEventListener("click", showModal);

let asparagusButton = document.querySelector("#asparagus-button");
asparagusButton.addEventListener("click", showModal);

let potatoesButton = document.querySelector("#potatoes-button");
potatoesButton.addEventListener("click", showModal);

let shishitosButton = document.querySelector("#shishitos-button");
shishitosButton.addEventListener("click", showModal);

let mushroomsButton = document.querySelector("#mushrooms-button");
mushroomsButton.addEventListener("click", showModal);

let friedOystersButton = document.querySelector("#fried-oysters-button");
friedOystersButton.addEventListener("click", showModal);

let squashSoupButton = document.querySelector("#squash-soup-button");
squashSoupButton.addEventListener("click", showModal);

let pralineButton = document.querySelector('#praline-button')
pralineButton.addEventListener('click', showModal)

let boqueronesButton = document.querySelector("#boquerones-button");
boqueronesButton.addEventListener("click", showModal);

let shortribsButton = document.querySelector("#shortribs-button");
shortribsButton.addEventListener("click", showModal);

let salmonButton = document.querySelector("#salmon-button");
salmonButton.addEventListener("click", showModal);

let cheeseButton = document.querySelector("#cheese-button");
cheeseButton.addEventListener("click", showModal);

let torrijaButton = document.querySelector("#torrija-button");
torrijaButton.addEventListener("click", showModal);

let tropicalButton = document.querySelector("#tropical-button");
tropicalButton.addEventListener("click", showModal);

let cannoliMisuButton = document.querySelector("#cannoli-misu-button");
cannoliMisuButton.addEventListener("click", showModal);

let chocolateTexturesButton = document.querySelector(
  "#chocolate-textures-button"
);
chocolateTexturesButton.addEventListener("click", showModal);

let veganChocolateMousseButton = document.querySelector(
  "#vegan-chocolate-mousse-button"
);
veganChocolateMousseButton.addEventListener("click", showModal);

let lemonPieButton = document.querySelector("#lemon-pie-button");
lemonPieButton.addEventListener("click", showModal);

// let meringueButton = document.querySelector('#meringue-button');
// meringueButton.addEventListener('click', showModal);

let nathanButton = document.querySelector("#nathan-button");
nathanButton.addEventListener("click", showModal);

let blackForestButton = document.querySelector("#black-forest-button");
blackForestButton.addEventListener("click", showModal);

let mezquilaMelonButton = document.querySelector("#mezquila-melon-button");
mezquilaMelonButton.addEventListener("click", showModal);


let lastWordButton = document.querySelector("#last-word-button");
lastWordButton.addEventListener("click", showModal);

let verdeButton = document.querySelector("#verde-button");
verdeButton.addEventListener("click", showModal);

let smokedManhattanButton = document.querySelector("#smoked-manhattan-button");
smokedManhattanButton.addEventListener("click", showModal);

let autumnSpiritsButton = document.querySelector("#autumn-spirits-button");
autumnSpiritsButton.addEventListener("click", showModal);

let velvetButton = document.querySelector("#velvet-button");
velvetButton.addEventListener("click", showModal);

let vodkaTropicalButton = document.querySelector("#vodka-tropical-button");
vodkaTropicalButton.addEventListener("click", showModal);

let misteriosChipotleButton = document.querySelector(
  "#misterios-chipotle-button"
);
misteriosChipotleButton.addEventListener("click", showModal);

let veranoSanlucarButton = document.querySelector("#verano-sanlucar-button");
veranoSanlucarButton.addEventListener("click", showModal);

let cavaGimletButton = document.querySelector("#cava-gimlet-button");
cavaGimletButton.addEventListener("click", showModal);

let blancaButton = document.querySelector("#blanca-button");
blancaButton.addEventListener("click", showModal);

let rosadaButton = document.querySelector("#rosada-button");
rosadaButton.addEventListener("click", showModal);

let tintaButton = document.querySelector("#tinta-button");
tintaButton.addEventListener("click", showModal);

let kiwiSodaButton = document.querySelector("#kiwi-soda-button");
kiwiSodaButton.addEventListener("click", showModal);

let palomaButton = document.querySelector("#paloma-button");
palomaButton.addEventListener("click", showModal);

let redGingerFizzButton = document.querySelector("#red-ginger-fizz-button");
redGingerFizzButton.addEventListener("click", showModal);

let strawberriesCreamButton = document.querySelector(
  "#strawberries-cream-button"
);
strawberriesCreamButton.addEventListener("click", showModal);

let flanButton = document.querySelector("#flan-button");
flanButton.addEventListener("click", showModal);

let winterSaladButton = document.querySelector("#winter-salad-button");
winterSaladButton.addEventListener("click", showModal);

let codButton = document.querySelector("#cod-button");
codButton.addEventListener("click", showModal);


let lobsterButton = document.querySelector("#lobster-button");
lobsterButton.addEventListener("click", showModal);


let empanadaButton = document.querySelector("#empanada-button");
empanadaButton.addEventListener("click", showModal);

let musselsButton = document.querySelector("#mussels-button");
musselsButton.addEventListener("click", showModal);

let honeycombBonbonButton = document.querySelector("#honeycomb-bonbon-button");
honeycombBonbonButton.addEventListener("click", showModal);


function showModal(e) {
  if (e.target.closest("p").id == "jamon-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/jamon.jpg?v=1678906477601";
    modalText.innerHTML = `${jamon}`;
  } else if (e.target.closest("p").id == "charcuterie-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/charcuterie.jpg?v=1678944414940";
    modalText.innerHTML = `${charcuterie}`;
  } else if (e.target.closest("p").id == "honeycomb-bonbon-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20240604_195556.jpg?v=1717604606407";
    modalText.innerHTML = `${honeycombBonbon}`;
  } else if (e.target.closest("p").id == "mussels-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20240604_183916.jpg?v=1717604473397";
    modalText.innerHTML = `${mussels}`;    
  } else if (e.target.closest("p").id == "kale-salad-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20231107_175556.jpg?v=1699397844988";
    modalText.innerHTML = `${kaleSalad}`;
  } else if (e.target.closest("p").id == "mushroom-risotto-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20231107_182157.jpg?v=1699402155888";
    modalText.innerHTML = `${mushroomRisotto}`;
  } else if (e.target.closest("p").id == "strawberries-cream-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/strawberries-and-cream.jpg?v=1717524823298";
    modalText.innerHTML = `${strawberriesCream}`;
  } else if (e.target.closest("p").id == "chocolate-semifreddo-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20231101_224757.jpg?v=1699376231792";
    modalText.innerHTML = `${chocolateSemifreddo}`;
  } else if (e.target.closest("p").id == "salad-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/salad.jpg?v=1678944618515";
    modalText.innerHTML = `${salad}`;
  } else if (e.target.closest("p").id == "gazpacho-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/gazpacho.jpg?v=1678944831789";
    modalText.innerHTML = `${gazpacho}`;
  } else if (e.target.closest("p").id == "ceviche-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/ceviche.jpg?v=1679423511157";
    modalText.innerHTML = `${ceviche}`;
  } else if (e.target.closest("p").id == "tartare-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/tuna.jpg?v=1678945114849";
    modalText.innerHTML = `${tartare}`;
  } else if (e.target.closest("p").id == "pulpo-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/pulpo.jpg?v=1678945347728";
    modalText.innerHTML = `${pulpo}`;
  } else if (e.target.closest("p").id == "chipirones-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/chipirones.jpg?v=1678945465983";
    modalText.innerHTML = `${chipirones}`;
  } else if (e.target.closest("p").id == "croquettes-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/croquettes.jpg?v=1678945594529";
    modalText.innerHTML = `${croquettes}`;
  } else if (e.target.closest("p").id == "foie-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/foie.jpg?v=1678945696302";
    modalText.innerHTML = `${foie}`;
  } else if (e.target.closest("p").id == "vegetables-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20230316_181449.jpg?v=1679005047642";
    modalText.innerHTML = `${vegetables}`;
  } else if (e.target.closest("p").id == "scallops-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/scallops.jpg?v=1678946383192";
    modalText.innerHTML = `${scallops}`;
  } else if (e.target.closest("p").id == "bacalao-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/bacalao.jpg?v=1678946568263";
    modalText.innerHTML = `${bacalao}`;
  } else if (e.target.closest("p").id == "fish-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/fish.jpg?v=1678946621891";
    modalText.innerHTML = `${fish}`;
  } else if (e.target.closest("p").id == "hen-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/hen.jpg?v=1678946752396";
    modalText.innerHTML = `${hen}`;
  } else if (e.target.closest("p").id == "duck-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/duck.jpg?v=1678946878712";
    modalText.innerHTML = `${duck}`;
  } else if (e.target.closest("p").id == "cochinillo-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/cochinillo.jpg?v=1679423339415";
    modalText.innerHTML = `${cochinillo}`;
  } else if (e.target.closest("p").id == "solomillo-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/solomillo.jpg?v=1678947122267";
    modalText.innerHTML = `${solomillo}`;
  } else if (e.target.closest("p").id == "asparagus-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/asparagus.jpg?v=1678947228239";
    modalText.innerHTML = `${asparagus}`;
  } else if (e.target.closest("p").id == "potatoes-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/potatoes.jpg?v=1678947386187";
    modalText.innerHTML = `${potatoes}`;
  } else if (e.target.closest("p").id == "shishitos-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/shishitos.jpg?v=1678947487739";
    modalText.innerHTML = `${shishitos}`;
  } else if (e.target.closest("p").id == "mushrooms-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20230328_175658.jpg?v=1680102599301";
    modalText.innerHTML = `${mushrooms}`;
  } else if (e.target.closest("p").id == "mushroom-veloute-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20230401_172651.jpg?v=1680386088732";
    modalText.innerHTML = `${mushroomVeloute}`;
  } else if (e.target.closest("p").id == "winter-salad-button") {
  
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20240604_183741.jpg?v=1717623943501";
    modalText.innerHTML = `${winterSalad}`;
  } else if (e.target.closest("p").id == "fried-oysters-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20230928_173406.jpg?v=1695936984833";
    modalText.innerHTML = `${friedOysters}`;
  } else if (e.target.closest("p").id == "boquerones-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/boquerones.jpg?v=1678977209937";
    modalText.innerHTML = `${boquerones}`;
  } else if (e.target.closest("p").id == "smoked-salmon-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20240416_174753.jpg?v=1717523953191";
    modalText.innerHTML = `${smokedSalmon}`;
  } else if (e.target.closest("p").id == "brisket-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/brisket.jpg?v=1681917768444";
    modalText.innerHTML = `${brisket}`;
  } else if (e.target.closest("p").id == "empanada-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/empanada.jpg?v=1680890327178";
    modalText.innerHTML = `${empanada}`;
  } else if (e.target.closest("p").id == "squash-soup-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20231107_174904.jpg?v=1699397881786";
    modalText.innerHTML = `${squashSoup}`;
   
  } else if (e.target.closest("p").id == "praline-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20231226_215612.jpg?v=1704580871973";
    modalText.innerHTML = `${praline}`;
  } 
  
  else if (e.target.closest("p").id == "shortribs-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20240222_193801.jpg?v=1708727845002";
    modalText.innerHTML = `${shortribs}`;
  } 
  
  else if (e.target.closest("p").id == "cod-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20240503_203610.jpg?v=1717523837193";
    modalText.innerHTML = `${cod}`;
  } 
  
  else if (e.target.closest("p").id == "lobster-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20240105_175302.jpg?v=1704580736263";
    modalText.innerHTML = `${lobster}`;
  } 
  else if (e.target.closest("p").id == "cream-cheese-mousse-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20231026_214440.jpg?v=1698438755473";
    modalText.innerHTML = `${creamCheeseMousse}`;
  } else if (e.target.closest("p").id == "salmon-button") {
    modalImage.src = "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20231107_185622.jpg?v=1699402695702";
    modalText.innerHTML = `${salmon}`;
  } else if (e.target.closest("p").id == "cheese-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/cheese.jpg?v=1678977503546";
    modalText.innerHTML = `${cheese}`;
  } else if (e.target.closest("p").id == "torrija-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/torrija.jpg?v=1678977678624";
    modalText.innerHTML = `${torrija}`;
  } else if (e.target.closest("p").id == "tropical-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/tropical.jpg?v=1678977804805";
    modalText.innerHTML = `${tropical}`;
  } else if (e.target.closest("p").id == "cannoli-misu-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/cannoli-misu.jpg?v=1678977914196";
    modalText.innerHTML = `${cannoliMisu}`;
  } else if (e.target.closest("p").id == "chocolate-textures-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/chocolate-textures.jpg?v=1678978115841";
    modalText.innerHTML = `${chocolateTextures}`;
  } else if (e.target.closest("p").id == "lemon-pie-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/lemon-pie.jpg?v=1687361175547";
    modalText.innerHTML = `${lemonPie}`;
  } else if (e.target.closest("p").id == "sobaito-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/sobaoPasiego.jpg?v=1693425257894";
    modalText.innerHTML = `${sobaito}`;
  } else if (e.target.closest("p").id == "flan-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20231215_192820.jpg?v=1702704568552";
    modalText.innerHTML = `${flan}`;
  } else if (e.target.closest("p").id == "vegan-chocolate-mousse-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/vegan-chocolate-mousse.jpg?v=1678978287608";
    modalText.innerHTML = `${veganChocolateMousse}`;
  } else if (e.target.closest("p").id == "nathan-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/nathan.jpg?v=1678978496294";
    modalText.innerHTML = `${nathan}`;
  } else if (e.target.closest("p").id == "black-forest-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/black-forest.jpg?v=1678978598478";
    modalText.innerHTML = `${blackForest}`;
  } else if (e.target.closest("p").id == "last-word-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/last-word.jpg?v=1680627234538";
    modalText.innerHTML = `${lastWord}`;
  } else if (e.target.closest("p").id == "verde-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/verde.jpg?v=1678978734822";
    modalText.innerHTML = `${verde}`;
  } else if (e.target.closest("p").id == "mezquila-melon-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20240608_191549.jpg?v=1718057478445";
    modalText.innerHTML = `${mezquilaMelon}`;  
  } else if (e.target.closest("p").id == "last-word-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/last-word.jpg?v=1678978857116";
    modalText.innerHTML = `${lastWord}`;
  } else if (e.target.closest("p").id == "smoked-manhattan-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/smoked-manhattan.jpg?v=1678979002613";
    modalText.innerHTML = `${smokedManhattan}`;
  } else if (e.target.closest("p").id == "paper-plane-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/paper-plane.jpg?v=1678979144789";
    modalText.innerHTML = `${paperPlane}`;
  } else if (e.target.closest("p").id == "autumn-orchard-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/autumn-orchard.jpg?v=1678979282989";
    modalText.innerHTML = `${autumnOrchard}`;
  } else if (e.target.closest("p").id == "los-siete-m-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/LosSieteM.jpg?v=1678979421005";
    modalText.innerHTML = `${losSieteM}`;
  } else if (e.target.closest("p").id == "velvet-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/velvet.jpg?v=1678979572270";
    modalText.innerHTML = `${velvet}`;
  } else if (e.target.closest("p").id == "autumn-spirits-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20231103_211655.jpg?v=1699122511348";
    modalText.innerHTML = `${autumnSpirits}`;
  } else if (e.target.closest("p").id == "vodka-tropical-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20230420_172506.jpg?v=1682542664605";
    modalText.innerHTML = `${vodkaTropical}`;
  } else if (e.target.closest("p").id == "misterios-chipotle-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20230427_181316.jpg?v=1682635088804";
    modalText.innerHTML = `${misteriosChipotle}`;
  } else if (e.target.closest("p").id == "verano-sanlucar-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/Screenshot_20230428_175453_Brave.jpg?v=1682718933868";
    modalText.innerHTML = `${veranoSanlucar}`;
  } else if (e.target.closest("p").id == "cava-gimlet-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20230504_175946.jpg?v=1683310315251";
    modalText.innerHTML = `${cavaGimlet}`;
  } else if (e.target.closest("p").id == "blanca-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/blanca.jpg?v=1678979695720";
    modalText.innerHTML = `${blanca}`;
  } else if (e.target.closest("p").id == "rosada-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/rosada.jpg?v=1678979857594";
    modalText.innerHTML = `${rosada}`;
  } else if (e.target.closest("p").id == "tinta-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/tinta.jpg?v=1678979968083";
    modalText.innerHTML = `${tinta}`;
  } else if (e.target.closest("p").id == "kiwi-soda-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/kiwi-soda.jpg?v=1678980070591";
    modalText.innerHTML = `${kiwiSoda}`;
  } else if (e.target.closest("p").id == "red-ginger-fizz-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/redGingerFizz.jpg?v=1692679502944";
    modalText.innerHTML = `${redGingerFizz}`;
  } else if (e.target.closest("p").id == "pasta-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20230616_173900.jpg?v=1686951729398";
    modalText.innerHTML = `${pasta}`;
  } else if (e.target.closest("p").id == "wagyu-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/20230926_195351.jpg?v=1695850086848";
    modalText.innerHTML = `${wagyu}`;
  } else if (e.target.closest("p").id == "paloma-button") {
    modalImage.src =
      "https://cdn.glitch.global/52092fac-0ca6-4067-87eb-cf9f2c90fdaf/paloma.jpg?v=1678980187011";
    modalText.innerHTML = `${paloma}`;
  }

  modal.style.display = "grid";
}

function closeModal() {
  modal.style.display = "none";
}

function dinnerDisplay() {
  if (dinnerButton.classList.contains("current-page")) return;

  if (specialsButton.classList.contains("current-page")) {
    specialsButton.classList.toggle("current-page");
    specialsWrapper.style.right = "110vw";
  }

  if (dessertButton.classList.contains("current-page")) {
    dessertButton.classList.toggle("current-page");
    dessertWrapper.style.right = "110vw";
  }

  if (wineButton.classList.contains("current-page")) {
    wineButton.classList.toggle("current-page");
    wineWrapper.style.right = "110vw";
    setTimeout(() => wineMenu.classList.toggle("height0"), 500);
  }

  if (drinksButton.classList.contains("current-page")) {
    drinksButton.classList.toggle("current-page");
    drinksWrapper.style.right = "110vw";
  }

  dinnerButton.classList.toggle("current-page");
  dinnerWrapper.style.right = 0;
}

function specialsDisplay() {
  if (specialsButton.classList.contains("current-page")) return;

  if (dinnerButton.classList.contains("current-page")) {
    dinnerButton.classList.toggle("current-page");
    dinnerWrapper.style.right = "110vw";
  }

  if (dessertButton.classList.contains("current-page")) {
    dessertButton.classList.toggle("current-page");
    dessertWrapper.style.right = "110vw";
  }

  if (wineButton.classList.contains("current-page")) {
    wineButton.classList.toggle("current-page");
    wineWrapper.style.right = "110vw";
    setTimeout(() => wineMenu.classList.toggle("height0"), 500);
  }

  if (drinksButton.classList.contains("current-page")) {
    drinksButton.classList.toggle("current-page");
    drinksWrapper.style.right = "110vw";
  }

  specialsButton.classList.toggle("current-page");
  specialsWrapper.style.right = 0;
}

function dessertDisplay() {
  if (dessertButton.classList.contains("current-page")) return;

  if (dinnerButton.classList.contains("current-page")) {
    dinnerButton.classList.toggle("current-page");
    dinnerWrapper.style.right = "110vw";
  }

  if (specialsButton.classList.contains("current-page")) {
    specialsButton.classList.toggle("current-page");
    specialsWrapper.style.right = "110vw";
  }

  if (wineButton.classList.contains("current-page")) {
    wineButton.classList.toggle("current-page");
    wineWrapper.style.right = "110vw";
    setTimeout(() => wineMenu.classList.toggle("height0"), 500);
  }

  if (drinksButton.classList.contains("current-page")) {
    drinksButton.classList.toggle("current-page");
    drinksWrapper.style.right = "110vw";
  }

  dessertButton.classList.toggle("current-page");
  dessertWrapper.style.right = 0;
}

function wineDisplay() {
  if (wineButton.classList.contains("current-page")) return;

  if (dinnerButton.classList.contains("current-page")) {
    dinnerButton.classList.toggle("current-page");
    dinnerWrapper.style.right = "110vw";
  }

  if (specialsButton.classList.contains("current-page")) {
    specialsButton.classList.toggle("current-page");
    specialsWrapper.style.right = "110vw";
  }

  if (dessertButton.classList.contains("current-page")) {
    dessertButton.classList.toggle("current-page");
    dessertWrapper.style.right = "110vw";
  }

  if (drinksButton.classList.contains("current-page")) {
    drinksButton.classList.toggle("current-page");
    drinksWrapper.style.right = "110vw";
  }
  wineMenu.classList.toggle("height0");
  wineButton.classList.toggle("current-page");
  wineWrapper.style.right = 0;
}

function drinksDisplay() {
  if (drinksButton.classList.contains("current-page")) return;

  if (dinnerButton.classList.contains("current-page")) {
    dinnerButton.classList.toggle("current-page");
    dinnerWrapper.style.right = "110vw";
  }

  if (specialsButton.classList.contains("current-page")) {
    specialsButton.classList.toggle("current-page");
    specialsWrapper.style.right = "110vw";
  }

  if (dessertButton.classList.contains("current-page")) {
    dessertButton.classList.toggle("current-page");
    dessertWrapper.style.right = "110vw";
  }
  if (wineButton.classList.contains("current-page")) {
    wineButton.classList.toggle("current-page");
    wineWrapper.style.right = "110vw";
    setTimeout(() => wineMenu.classList.toggle("height0"), 500);
  }

  drinksButton.classList.toggle("current-page");
  drinksWrapper.style.right = 0;
}

let bread = document.querySelector("#bread");
let tortilla = document.querySelector("#tortilla");
let financiers = document.querySelector("#financiers");

function clearMenu() {
  jamonButton.classList.remove("hidden");
  charcuterieButton.classList.remove("hidden");
  saladButton.classList.remove("hidden");
  gazpachoButton.classList.remove("hidden");
  cevicheButton.classList.remove("hidden");
  tartareButton.classList.remove("hidden");
  pulpoButton.classList.remove("hidden");
  chipironesButton.classList.remove("hidden");
  croquettesButton.classList.remove("hidden");
  foieButton.classList.remove("hidden");
  vegetablesButton.classList.remove("hidden");
  scallopsButton.classList.remove("hidden");
  bacalaoButton.classList.remove("hidden");
  fishButton.classList.remove("hidden");
  henButton.classList.remove("hidden");
  duckButton.classList.remove("hidden");
  cochinilloButton.classList.remove("hidden");
  solomilloButton.classList.remove("hidden");
  asparagusButton.classList.remove("hidden");
  potatoesButton.classList.remove("hidden");
  shishitosButton.classList.remove("hidden");
  mushroomsButton.classList.remove("hidden");
  bread.classList.remove("hidden");
  tortilla.classList.remove("hidden");
  financiers.classList.remove("hidden");
}
function clearButtons() {
  fullMenu.classList.remove("allergy-active-page");
  glutenFree.classList.remove("allergy-active-page");
  nutFree.classList.remove("allergy-active-page");
  dairyFree.classList.remove("allergy-active-page");
  garlicFree.classList.remove("allergy-active-page");
  shellfishFree.classList.remove("allergy-active-page");
  vegetarian.classList.remove("allergy-active-page");
  vegan.classList.remove("allergy-active-page");
}

let fullMenu = document.querySelector("#full-menu");
fullMenu.addEventListener("click", showFullMenu);
function showFullMenu() {
  clearMenu();
  clearButtons();
  fullMenu.classList.add("allergy-active-page");
}

let glutenFree = document.querySelector("#gluten-free");
glutenFree.addEventListener("click", showGlutenFree);
function showGlutenFree() {
  clearMenu();
  clearButtons();
  glutenFree.classList.add("allergy-active-page");
  tartareButton.classList.add("hidden");
  chipironesButton.classList.add("hidden");
  croquettesButton.classList.add("hidden");
  bread.classList.add("hidden");
}

let nutFree = document.querySelector("#nut-free");
nutFree.addEventListener("click", showNutFree);
function showNutFree() {
  clearMenu();
  clearButtons();
  nutFree.classList.add("allergy-active-page");
  bread.classList.add("hidden");
  financiers.classList.add("hidden");
}

let dairyFree = document.querySelector("#dairy-free");
dairyFree.addEventListener("click", showDairyFree);
function showDairyFree() {
  clearMenu();
  clearButtons();
  dairyFree.classList.add("allergy-active-page");
  pulpoButton.classList.add("hidden");
  chipironesButton.classList.add("hidden");
  croquettesButton.classList.add("hidden");
  financiers.classList.add("hidden");
}

let garlicFree = document.querySelector("#garlic-free");
garlicFree.addEventListener("click", showGarlicFree);
function showGarlicFree() {
  clearMenu();
  clearButtons();
  garlicFree.classList.add("allergy-active-page");
  gazpachoButton.classList.add("hidden");
  cevicheButton.classList.add("hidden");
  pulpoButton.classList.add("hidden");
  chipironesButton.classList.add("hidden");
  croquettesButton.classList.add("hidden");
  bacalaoButton.classList.add("hidden");
  fishButton.classList.add("hidden");

  cochinilloButton.classList.add("hidden");
  solomilloButton.classList.add("hidden");
  mushroomsButton.classList.add("hidden");
}

let shellfishFree = document.querySelector("#shellfish-free");
shellfishFree.addEventListener("click", showShellfishFree);
function showShellfishFree() {
  clearMenu();
  clearButtons();
  shellfishFree.classList.add("allergy-active-page");
  cevicheButton.classList.add("hidden");
  pulpoButton.classList.add("hidden");
  chipironesButton.classList.add("hidden");
  scallopsButton.classList.add("hidden");
}

let vegetarian = document.querySelector("#vegetarian");
vegetarian.addEventListener("click", showVegetarian);
function showVegetarian() {
  clearMenu();
  clearButtons();
  vegetarian.classList.add("allergy-active-page");
  jamonButton.classList.add("hidden");
  charcuterieButton.classList.add("hidden");
  cevicheButton.classList.add("hidden");
  tartareButton.classList.add("hidden");
  pulpoButton.classList.add("hidden");
  chipironesButton.classList.add("hidden");
  croquettesButton.classList.add("hidden");
  foieButton.classList.add("hidden");
  scallopsButton.classList.add("hidden");
  bacalaoButton.classList.add("hidden");
  fishButton.classList.add("hidden");
  henButton.classList.add("hidden");
  salmonButton.classList.add("hidden")
  duckButton.classList.add("hidden");
  cochinilloButton.classList.add("hidden");
  solomilloButton.classList.add("hidden");
}

let vegan = document.querySelector("#vegan");
vegan.addEventListener("click", showVegan);
function showVegan() {
  clearMenu();
  clearButtons();
  vegan.classList.add("allergy-active-page");
  jamonButton.classList.add("hidden");
  charcuterieButton.classList.add("hidden");
  cevicheButton.classList.add("hidden");
  tartareButton.classList.add("hidden");
  pulpoButton.classList.add("hidden");
  chipironesButton.classList.add("hidden");
  croquettesButton.classList.add("hidden");
  foieButton.classList.add("hidden");
  scallopsButton.classList.add("hidden");
  salmonButton.classList.add("hidden");
  fishButton.classList.add("hidden");
  henButton.classList.add("hidden");
  duckButton.classList.add("hidden");
  cochinilloButton.classList.add("hidden");
  solomilloButton.classList.add("hidden");
  tortilla.classList.add("hidden");
  financiers.classList.add("hidden");
}
