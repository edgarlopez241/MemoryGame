document.addEventListener('DOMContentLoaded',() => {
const cardArray = [
    {
        name: 'alaba',
        img:'images/ALABA.jpg'
    },
    {
        name: 'Benzema',
        img:'images/BENZEMA.jpg'
    },
    {
        name: 'Carvaja',
        img:'images/CARVAJAL.jpg'
    },
    {
        name: 'CUORTOIS',
        img:'images/COURTOIS.jpg'
    },
    {
        name: 'Kroos',
        img:'images/KROOS.jpg'
    },
    {
        name: 'Militao',
        img:'images/MILITAO.jpg'
    },
    {
        name: 'Modric',
        img:'images/MODRIC.jpg'
    },
    {
        name: 'Rodrygo',
        img:'images/RODRYGO.jpg'
    },
    {
        name: 'Valverde',
        img:'images/VALVERDE.jpg'
    },
    {
        name: 'Vini',
        img:'images/VINICIUS.jpg'
    },
    {
        name: 'alaba',
        img:'images/ALABA.jpg'
    },
    {
        name: 'Benzema',
        img:'images/BENZEMA.jpg'
    },
    {
        name: 'Carvaja',
        img:'images/CARVAJAL.jpg'
    },
    {
        name: 'CUORTOIS',
        img:'images/COURTOIS.jpg'
    },
    {
        name: 'Kroos',
        img:'images/KROOS.jpg'
    },
    {
        name: 'Militao',
        img:'images/MILITAO.jpg'
    },
    {
        name: 'Modric',
        img:'images/MODRIC.jpg'
    },
    {
        name: 'Rodrygo',
        img:'images/RODRYGO.jpg'
    },
    {
        name: 'Valverde',
        img:'images/VALVERDE.jpg'
    },
    {
        name: 'Vini',
        img:'images/VINICIUS.jpg'
    },
      
]

cardArray.sort(()=>0.5 - Math.random())


const gridDisplay=document.querySelector('.grid')
const resultDisplay=document.querySelector('#result')
let chooseCard=[]
let chooseCardId=[]
const cardsWon=[]

function createBoard(){
    //creo un arreglo de 10 posiciones, para dibujar los cuadros de memoria
    for(let i= 0;i<cardArray.length;i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/rm.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}




function checkMatch(){
   const card= document.querySelectorAll('img')
   const optionOneId = chooseCardId[0]
   const optionTwoId = chooseCardId[1]

    if(optionOneId===optionTwoId){
        card[optionOneId].setAttribute('src','images/rm.jpg')
        card[optionTwoId].setAttribute('src','images/rm.jpg')
        alert('Seleccionaste la misma imagen')
    }
   else if(chooseCard[0]===chooseCard[1])
   {
    card[optionOneId].setAttribute('src','images/yes.jpeg')
    card[optionTwoId].setAttribute('src','images/yes.jpeg')
    card[optionOneId].removeEventListener('click',flipCard) 
    card[optionTwoId].removeEventListener('click',flipCard)
    cardsWon.push(chooseCard)
    }else{
        card[optionOneId].setAttribute('src','images/rm.png')
        card[optionTwoId].setAttribute('src','images/rm.png')
        
    }
    resultDisplay.textContent=cardsWon.length
    chooseCard=[]
    chooseCardId=[]
    if(cardsWon.length==cardArray.length/2){
        resultDisplay.textContent='Felicitaciones encontraste todos'
    } 
}


function flipCard(){

    let cardId=this.getAttribute('data-id')
    
    chooseCard.push(cardArray[cardId].name)
    chooseCardId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    
    if(chooseCard.length===2){
        setTimeout(checkMatch,1000)
    }
}
createBoard()
})
