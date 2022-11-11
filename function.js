const clickSound = new Audio('sounds/ting.mp3');
const errorSound = new Audio('sounds/XPError.mp3');
const victorySound = new Audio('sounds/victorySound.mp3');
const music = new Audio('sounds/music.mp3');
const reload = document.getElementById('reload')
reload.style.display ='none';
const BikeArray =[
    {
        name: 'Classic',
        img: 'images/classic.jpg'
    },
    {
        name: 'GT',
        img: 'images/GT.jpg'
    },
    {
        name: 'Himalayan',
        img: 'images/Himalayan.jpg'
    },
    {
        name: 'hunter',
        img: 'images/hunter.jpg'
    },
    {
        name: 'intercepor',
        img: 'images/intercepor.jpeg'
    },
    {
        name: 'Meteor',
        img: 'images/Meteor.jpg'
    },
    {
        name: 'Classic',
        img: 'images/classic.jpg'
    },
    {
        name: 'GT',
        img: 'images/GT.jpg'
    },
    {
        name: 'Himalayan',
        img: 'images/Himalayan.jpg'
    },
    {
        name: 'hunter',
        img: 'images/hunter.jpg'
    },
    {
        name: 'intercepor',
        img: 'images/intercepor.jpeg'
    },
    {
        name: 'Meteor',
        img: 'images/Meteor.jpg'
    }
]

BikeArray.sort( () => 0.5 - Math.random());

const cardDisplay= document.querySelector('#grid');

function generateCards() {
    for(let i = 0; i <BikeArray.length; i++){
        let img = document.createElement(`img`);
        img.setAttribute('src', 'images/cardBlank.png');
        img.setAttribute('data-id', i);
        img.addEventListener('click' , flip)
        cardDisplay.appendChild(img);
    }
}

generateCards()

let chooseCard = []
let chooseCardid = []
const winCards =[]

function flip(){
    const id = this.getAttribute('data-id')
    clickSound.currentTime =0;
    clickSound.play();
    chooseCard.push(BikeArray[id].name);
    chooseCardid.push(id);
    this.setAttribute('src', BikeArray[id].img);
    if(chooseCard.length === 2){
        setTimeout(check, 3000)
    }
}

function check(){
    const card = document.querySelectorAll('img');
    if(chooseCard[0] === chooseCard[1]){
    card[chooseCardid[0]].style.display = 'none';
    card[chooseCardid[1]].style.display = 'none';
    victorySound.play();
    winCards.push(chooseCard)
    console.log(winCards)
    }
    if(winCards.length === 6){
        document.getElementById('result').innerHTML ="You completed the game";
        music.play();
        reload.style.display ="block";
        reload.addEventListener('click',()=>{
            location.reload();
        })

    }
    else{
        errorSound.currentTime=0;
        errorSound.play();
        card[chooseCardid[0]].setAttribute('src', 'images/cardBlank.png')
        card[chooseCardid[1]].setAttribute('src', 'images/cardBlank.png')
    }
    chooseCard =[];
    chooseCardid =[];
}
