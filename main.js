let dynamicIMG=document.getElementById('dynamicIMG')
let correct=document.getElementById('corr')
let No=document.getElementById('uncorr')

const dynamicIMG1=['khalid__5_-removebg-preview.png','Fahad__1_-removebg-preview.png','Bander__1_-removebg-preview.png','Mohamd1__1_-removebg-preview.png' ,'mohamd2__1_-removebg-preview.png',]


function imgRandom(){
    let takeRandom=Math.floor((Math.random() *dynamicIMG1.length))
    dynamicIMG.style.backgroundImage = `url("./img/${dynamicIMG1[takeRandom]}")`
    

}

let theTimer=setInterval(imgRandom,100);
