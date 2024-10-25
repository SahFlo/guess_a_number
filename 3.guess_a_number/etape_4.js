function demandeUnNombre()
{
    return parseInt(prompt("joueur.se 1 : donne-moi un nombre entre 0 et 50 !"))
}


function verifierValiditeDuNombre(nombreJoueur1){ // on vérifie d'abord que l'utilisateur a bien entré un chiffre entre 0 et 50
     if (0 <= nombreJoueur1 && nombreJoueur1 <= 50){
        return true
       } else {
        return false
    }
    
}

function didIWin3(){
    let chiffreGagnant = demandeUnNombre()
    while (verifierValiditeDuNombre(chiffreGagnant) == false){
        chiffreGagnant = demandeUnNombre()
    }

    let nombreJoueur2 = parseInt(prompt("Joueur 2, à ton avis, quel est le chiffre de Joueur 1 ? Saisis un chiffre entre 0 et 50"))
    while(nombreJoueur2 != chiffreGagnant){
       nombreJoueur2 = parseInt(prompt("Joueur 2, à ton avis, quel est le chiffre de Joueur 1 ? Saisis un chiffre entre 0 et 50"))
    }
            alert("Bravo, tu lis dans les pensées de Joueur 1 !")
    }

    didIWin3()

    // Idéalement, didIWin  vérifie juste la correspondance entre joueur 1 et joueur 2 et gameplay demande un nombre

