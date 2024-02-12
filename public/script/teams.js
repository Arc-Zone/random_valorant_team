const btn = document.getElementById('btn')
let randomImg = document.getElementById('random-img')
let agentName = document.getElementById('agent-name')

btn.addEventListener('click' , function (){
    randomImg.innerHTML = ""
    agentName.innerHTML = ""
    usedIndices = []; // Réinitialiser le tableau des indices utilis
    for( let i = 0 ; i < 5 ; i++){
        let randomIndex;
        let nameAgent;
             // Générer un indice unique
            do {
                randomIndex = Math.floor(Math.random() * 19) + 1;
            } while (usedIndices.includes(randomIndex));
    
        switch (randomIndex){
            case 1 : 
            nameAgent = "Astra"
            break ;
            case 2 : 
            nameAgent = "Brimstone"
            break ; 
            case  3 : 
            nameAgent = "Harbor"
            break ;
            case  4 : 
            nameAgent = "Omen"
            break ;
            case 5 : 
            nameAgent = "Viper"
            break ;
            case  6: 
            nameAgent = "Iso"
            break ;
            case  7 : 
            nameAgent = "Jett"
            break ;
            case  8 : 
            nameAgent = "Neon"
            break ;
            case 9 : 
            nameAgent = "Phoenix"
            break ;
            case 10 : 
            nameAgent = "Raze"
            break ;
            case 11  : 
            nameAgent = "Reyna"
            break ;
            case  12 : 
            nameAgent = "Yoru"
            break ;
            case  13  : 
            nameAgent = "Breach où bien le  Perso de RACISTE"
            break ;
            case  14: 
            nameAgent = "Fade"
            break ;
            case 15 : 
            nameAgent = "Gekko"
            break ;
            case 16 : 
            nameAgent = "Kayo"
            break ;
            case 17  : 
            nameAgent = "Skye"
            break ;
            case  18 : 
            nameAgent = "Sova"
            break ;
            case  19 : 
            nameAgent = "Chamber"
            break ;
            case 20  : 
            nameAgent = "Cypher"
            break ;
            case 21   : 
            nameAgent = "Deadlock"
            break ;
            case  22 : 
            nameAgent = "Killjoy"
            break ;
            case  23 : 
            nameAgent = "Sage"
            break ;
        }


   
        usedIndices.push(randomIndex); // Ajouter l'indice à la liste des indices utilisés

        let agentImg = document.createElement('img')

        let agent = document.createElement('p')
    
        agent.innerHTML = `<div>
                                            <p> ${nameAgent} </p>
                                            </div>`
        agentName.appendChild(agent) 

    agentImg.setAttribute('src' , `../img/agent/${randomIndex}.webp`)
    agentImg.setAttribute('width' , "100%")
    randomImg.appendChild(agentImg)
    }
})