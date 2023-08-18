let dynamicIMG=document.getElementById('dynamicIMG')
let correct=document.getElementById('corr')
let No=document.getElementById('uncorr')

const dynamicIMG1=['khalid__5_-removebg-preview.png','Fahad__1_-removebg-preview.png','Bander__1_-removebg-preview.png','Mohamd1__1_-removebg-preview.png' ,'mohamd2__1_-removebg-preview.png',]


function imgRandom(){
    let takeRandom=Math.floor((Math.random() *dynamicIMG1.length))
    dynamicIMG.style.backgroundImage = `url("./img/${dynamicIMG1[takeRandom]}")`
    

}

let theTimer=setInterval(imgRandom,100);

const marK=()=>{
    setTimeout(function (){
        theTimer=setInterval(imgRandom,100)
        document.getElementById('btn').disabled = false
        document.getElementById('btn').style.opacity ='100%'
    },2000)

}

let correct1=0;
let No1=0;

const istaag =() =>{
    if(dynamicIMG.style.backgroundImage === `url("./img/${dynamicIMG1[0]}")`){
    correct1++;
    correct.innerText =correct1;
    clearInterval(theTimer)

    document.getElementById('btn').disabled =true;
    document.getElementById('btn').style.opacity ='50%';

    marK();

    }else{
        No1++;
        No.innerText=No1;
        clearInterval(theTimer);

        document.getElementById('btn').disabled =true;
        document.getElementById('btn').style.opacity ='50%';

    marK();


    }
}
// done
