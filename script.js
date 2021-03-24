const baseSearchURL = "https://pokeapi.co/api/v2/pokemon/";



// Main Search Look Up Section & Set to Page // Line 7 To Line 85
// 
function dig(e){
    
    url = `${baseSearchURL}${e}`
    
    fetch(url)

        .then((results) => {
            return results.json();
        })

        .then((json) => {
            setdata(json);
        })

        .catch(() => {
        })           
}
        

function setdata(e){
    setName(e)
    setSpriteOpen(e)  
    setDex(e)
    setType(e)
    setHeight(e)
    setWeight(e)
    setTimeout(function(){setSprite(e)}, 1300)
}


function setName(e){
    if (e.name) {
        document.querySelector('#dataName').innerHTML = `${e.name}`
    }  
}


function setSpriteOpen(e){
    if (e.name) {
        document.querySelector('#imageDefaultSprite').src = `assets/CloudyScarceBoa-size_restricted.gif`;
    }
}


function setSprite(e){
    if (e.name) {
        document.querySelector('#imageDefaultSprite').src = `${e.sprites.front_default}`;
    }
}


function setDex(e){
    if (e.name) {
        document.querySelector('#dex').innerHTML = `Pokedex # : ${e.id}`; 
    }
}


function setType(e){
    if (e.types[1]) {
        document.querySelector('#setType').innerHTML = `Type : ${e.types[0].type.name}  ${e.types[1].type.name}`
    }else{
        document.querySelector('#setType').innerHTML = `Type : ${e.types[0].type.name}`
    }
}


function setHeight(e){
    if (e.name) {
        document.querySelector('#height').innerHTML = `Height : ${(e.height / 3).toFixed(1)} ft`
    }
}


function setWeight(e){
    if (e.name) {
        document.querySelector('#weight').innerHTML = `Weight : ${(e.weight / 4.53).toFixed(0)} lbs`
    }
}


// 
// 


//  
// Can be used to launch main search, not in use // Line 95

dig("")


// 
// 


// 
// Event listener for search button mouse clicks that give search data from text field & starts search  // Line 105 to 111

const sb = document.querySelector('#submitButton')

const ques = document.querySelector("#searchField")

sb.onclick = () =>{
    dig(`${ques.value}`);
}


// 
// 


// 
// 

const spriteFillUpper = document.querySelector("#fadeUS2")

const spritefillNum = document.getElementsByTagName('p')[0]

spriteFillUpper.onclick = () =>{
   console.log(spritefillNum.innerHTML);
//    dig(spritefillNum.innerHTML);
}


// 
// 


function dig2(e){
    
    url = `${baseSearchURL}${e}`
    
    
    fetch(url)

        .then((results) => {
            return results.json();
        })

        .then((json) => {
            setdata2(json);
        })

        .catch(() => {
            document.querySelector('#dataName').innerHTML = `Not a Pokemon`})      
}


function logSec(){
    let sec = new Date();
    setTimeout(function(){incSec(sec.getSeconds(), sec.getMilliseconds()), logSec();}, 4400);  
}


function setFade(){
    document.querySelector('#fadeUS').src = "./assets/wash.gif";    
}


function setFade2(){
    document.querySelector('#fadeUS2').src = "./assets/wash copy.gif";
}


function incSec(x, y){
    dig2(1 + ((x * 9) + (x * (y % 7))));
}


logSec()//Starts the pokeball


function setSpriteUpper(e){
    
    document.querySelector('#spriteUpper').src = `${e.sprites.front_default}`;
    
    
    setTimeout(function(){setFade2()}, 620)
}


function setdata2(e){
    setSpriteUpper(e)
    upperDex(e)
}


function upperDex(e){
    document.querySelector('#upperDex').innerHTML = ` ${e.id}`;
    setTimeout(function(){setFade()}, 620)
}










function dig3(e){
    
    url = `${baseSearchURL}${e}`
    
    
    fetch(url)

        .then((results) => {
            return results.json();
        })

        .then((json) => {
            setdata3(json);
        })

        .catch(() => {
            document.querySelector('#dataName').innerHTML = `Not a Pokemon`})   
}



function setdata3(e){
    setSpriteBar(e)
    lowerDex(e)
}


function setSpriteBar(e){
    document.querySelector('#barImg1').src = `${e.sprites.front_default}`;
}


function logSecBar(){
    let sec = new Date();
    setTimeout(function(){incSecBar(sec.getSeconds(), sec.getMilliseconds()), logSecBar();}, 7500);
}


function incSecBar(x, y){
    dig3(8 + ((x * 9) + (x * (y % 7))));
}


function lowerDex(e){ 
    document.querySelector('#dexBarTick').innerHTML = ` ${e.id}`;
}

logSecBar()