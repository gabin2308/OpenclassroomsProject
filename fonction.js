
function choisirPhrasesOuMots(){
    let choix = prompt("Voulez-vous jouer avec des phrases ou des mots ?")
    while(choix !== 'phrases' && choix !== 'mots'){
        let choix = prompt("Voulez-vous jouer avec des phrases ou des mots ?")
    }
    return choix
}

function lancerBoucleDeJeu(listePropositions){
    let score = 0
        for(let i = 0; i < listePropositions.length; i++){
            let motUtilisateur = prompt("Entrez le mot : "+listePropositions[i])
            if(motUtilisateur === listePropositions[i]){
                score++
            }
     }

    return score
}

function afficherResultat(score,nombreTotalMax){
   alert("votre score est de " +score +" sur "+nombreTotalMax)
    return message
}


function lancerJeu(){
    let score = 0
    let nombreTotalMax = 0
    let choix = choisirPhrasesOuMots()
    if (choix === 'mots'){
        score = lancerBoucleDeJeu(listeMots)
        nombreTotalMax = listeMots.length
    }else{
       score = lancerBoucleDeJeu(listePhrases)
        nombreTotalMax = listePhrases.length
    }
    afficherResultat(score,nombreTotalMax)
}

lancerJeu()
