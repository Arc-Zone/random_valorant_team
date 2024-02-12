const btn = document.getElementById('btn')
let randomImg = document.getElementById('random-img')

btn.addEventListener('click' , function(){
    randomImg.innerHTML = ""
    let randomIndex = Math.floor(Math.random() * 19) + 1;  

    let agentImg = document.createElement('img')

    agentImg.setAttribute('src' , `../img/agent/${randomIndex}.webp`)
    agentImg.setAttribute('width' , "100%")
    randomImg.appendChild(agentImg)
    
})