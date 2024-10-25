function demandeUnNombre()
{
    return Number (prompt("Donne-moi un nombre !"))
}

function didIWin2(givenNumber){
    if(givenNumber == 22){
        return true
    }else{
        return false
    }
}

/* autre manière de l'écrire

function didIWin2(givenNumber){
    let resultat
    if(givenNumber == 22){
        resultat = true
    }else{
        resultat = false
    }
    return resultat
*/

//Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. 
//En revanche, si elle a retourné false, on redemande un chiffre à l’utilisateur.

function gamePlay(){
    const resultat = demandeUnNombre()
        if(didIWin2(resultat) == true){
           console.log("Bravo, tu as deviné le jeu")
        }else{
          gamePlay()
        }
        
}

gamePlay()