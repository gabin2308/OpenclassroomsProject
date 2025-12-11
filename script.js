let listePhrases = ["Pas de panique !","La vie, l'univers et le reste","Merci pour le poisson"]

let listeMots = ["Cachalot","Pétunia","Serviette"]
let score = 0
let choix = prompt(" Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")

while(choix !== "mots" && choix !== "phrases"){
   choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}

if(choix === 'mots'){
    for (let i = 0; i < listeMots.length;i++){
        let motUtlisateur = prompt("Entrez le mot : "+ listeMots[i])
        if(motUtlisateur == listeMots[i]){
            score++
        }
    }
console.log("Votre score est de "+score +" sur une liste de "+listeMots.length +" mots")
}else{
    for( i = 0; i < listePhrases.length;i++){
        motUtlisateur = prompt("Entrez le mot : "+listePhrases[i])
        if(motUtlisateur === listePhrases[i]){
            score++
        }
        
    }

    console.log("votre score est de "+score +" sur une liste de "+listePhrases.length +" mots")
    alert("Votre score est de : "+score +" sur une liste de "+listePhrases.length +" mots")
}
