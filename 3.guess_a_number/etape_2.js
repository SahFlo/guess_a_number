//Le nombre à deviner est 22

function demandeUnNombre()
{
    return Number(prompt("Donne-moi un nombre !"))
}

const givenNumber = demandeUnNombre()

function didIWin(givenNumber)
{
    if(givenNumber == 22){
        return "Bravo, tu as deviné le nombre !"
    }
       else{
            if(givenNumber > 22){
            return "Plus grand"
        }
            else{
                return "Plus petit"
            }
}
}

/*Créer une fonction gamePlay qui gérera vos appels de fonctions et la transmission de votre variable d’une fonction à une autre.
Fonction gamePlay
    paramètre d'entrée : NONE
    paramètre de sortie : NONE

DEBUT
    resultat <- donnerUnNombre() // je crée une variable pour stocker le nombre issu de l'appel de la fonction
    didIWin(resultat)
    // Autre manière d'écrire
    didIWin(donnerUnNombre())

FIN
*/



function gamePlay(){
    const resultat = demandeUnNombre()
    didIWin(resultat)
}

console.log(gamePlay()) // ICI la fonction gamePlay ne renvoie rien donc le console.log non plus !