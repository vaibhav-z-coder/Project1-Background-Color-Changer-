let randomBtn=document.querySelector(".randomBtn")
let colorInput=document.querySelector("#colorInput")
let applyBtn=document.querySelector(".applyBtn")
let currentColorValue=document.querySelector(".currentColorValue")
let container=document.querySelector(".container")

const changeColor=(color)=>{
    container.style.backgroundColor=color
    currentColorValue.innerHTML= color

}

const colorArry=['#FF6B6B', '#6BCB77' , '#4D96FF', '#FFD93D' , '#FF8E72','#2EC4B6', '#3A86FF', '#8338EC', '#06D6A0', '#118AB2',
'#F7C8E0', '#CDB4DB', '#BDE0FE', '#E2F0CB', '#FFF1E6',
'#495057', '#264653', '#2B2D42', '#3D405B', '#344E41']
const generateRandomColors=()=>{
const randomDigits=Math.floor(Math.random()*colorArry.length)
return colorArry[randomDigits]

}



const handleRandomButton=()=>{
let rvalue=generateRandomColors();    
changeColor(rvalue)
}

const handleApplyButton=()=>{
const inputColorValue=colorInput.value
changeColor(inputColorValue)

}


randomBtn.addEventListener('click', handleRandomButton)
applyBtn.addEventListener('click', handleApplyButton)

