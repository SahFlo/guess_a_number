Algorithmie de l'exercice

1. Créer une fonction DOnnerUnNOmbre 
    paramètre d'entrée : pas de paramètre d'entrée
    paramètre de sortie : ce que la fonction renvoie, un nombre entier

DEBUT
NbDonné <- prompt("Un nombre s'il vous plaît !) //(Demander un nombre à l'utilisateur :) 
retourner Entier(NbDonné) // NbDonné est une chaîne de caractères il faut le transformer en nombre avec fonction parseInt()
FIN

givenNumber <- DonnerUnNombre()

Fonction didIWin
    paramètre d'entrée : nombre(int)
    paramètre de sortie : NONE

DEBUT
    Si nombre = 22 
    Sinon  
        Si nombre < 22 
            alors affiche "Plus grand"
        Sinon 
            alors affiche "Plus petit"
        FinSi

FIN 

Fonction gamePlay
    paramètre d'entrée : NONE
    paramètre de sortie : NONE

DEBUT
    resultat <- donnerUnNombre() // je crée une variable pour stocker le nombre issu de l'appel de la fonction
    didIWin(resultat)
    // Autre manière d'écrire
    didIWin(donnerUnNombre())

FIN

ETAPE 3 On modifie la fonction didIWin car elle doit maintenant renvoyer true ou false

fonction didIWin2
    paramètre d'entrée : nombre(int)
    paramètre de sortie : résultat (booleen)

DEBUT
    Si nombre = 22 
        resultat <- Vrai
    Sinon  
        resultat <- Faux
    FinSi
    Retourner resultat
FIN 

        FinSi

FIN 

Fonction gamePlay2
    paramètre d'entrée : NONE
    paramètre de sortie : NONE

DEBUT
    Si didIWin2(DonnerUnNombre()) = Vrai 
        Alors Fin du jeu
    Sinon
        gamePlay(2)
    FinSi

FIN


LA TOTALITE DU PSEUDO CODE PAR SARA - atelier de l'aprèm quand on a déterminé que le joueur 2 devait deviner le mot du joueur 1

Fonction DonnerUnNombre
	paramètre entrée : 
	paramètre sortie : nombre (int)
Début
	NbDonné <- prompt("un nombre s'il vous plait")
	Retourner Entier(NbDonné) // parseInt()
Fin

Fonction didIWin
	paramètre entrée : nombre (int)
	paramètre sortie : 
Début
	Si nombre = 22 Alors
		Affiche "Bravo"
	Sinon
		Si nombre < 22 Alors
			Affiche "Plus grand"
		Sinon 	
			Affiche "Plus petit"
	FinSi
Fin

Fonction didIWin2
	paramètre entrée : nombre (int)
	paramètre sortie : resultat (booléen)
Début
	Si nombre = 22 Alors
		resultat <- Vrai
	Sinon
		resultat <- Faux
	FinSi
	Retourner resultat

	// Autre solution :
	Retourner (nombre = 22)
Fin

Fonction gamePlay
	paramètre entrée :
	paramètre sortie :
Début
	resultat <- DonnerUnNombre()
	didIWin(resultat)
	// Autre manière d'écrire :
	didIWin(DonnerUnNombre())
Fin

Fonction gamePlay2
	paramètre entrée :
	paramètre sortie :
Début
	// Solution avec récursivité
	Si didIWin2(DonnerUnNombre()) = Vrai Alors
		Fin du jeu
	Sinon 
		gamePlay2()
	FinSi
	
	// Autre solution avec une boucle
	nb = DonnerUnNombre()
	TantQue didIWin2(nb) = Faux Alors
		nb = DonnerUnNombre()
	FinTantQue
	Fin du Jeu
Fin

Fonction VerifierValiditeDuNombre
// à écrire

Fonction didIWin3
//à écrire

Fonction gamePlay3
// Jeu à deux joueuses
	paramètre entrée : 
	paramètre sortie :
Début
	NbADeviner <- DonnerUnNombre()
	VerifierValiditeDuNombre(NbADeviner)
	// Demander à la 2e joueuse de deviner
	PropositionNombre <- DonnerUnNombre()
	TantQue didIWin3(NbADeviner, PropositionNombre) = Faux Alors
		PropositionNombre <- DonnerUnNombre()
	FinTantQue
	Fin du jeu
Fin



LA TOTALITE DU PSEUDO CODE PAR SARA - atelier du matin, quel a été leur gameplay entre joueur 1 et joueur 2 ???

fonction demanderNombre
	paramètre entrée : 
	paramètre sortie : nombre (entier)

fonction didIWin 
	paramètre entrée : nombre (entier), nbADeviner (entier)
	paramètre sortie : A_gagné (booléen)
Début
	Si nombre = nbADeviner Alors 
		Retourner Vrai
	Sinon Retourner Faux
	Fin_Si
Fin

fonction GamePlay
Début
	resultat = didIWin(demanderNombre())
	Tant_que ( resultat = Faux) Alors
		resultat = didIWin(demanderNombre())
	Fin Tant_que
	Fin_du_jeu
Fin

fonction DemanderAuJoueur
	paramètre entrée : 
	paramètre sortie : nb (int)
Début
	nb_a_verif <- DemanderNombre()
	Si (nb_a_verif >= 0) et (nb_a_verif <=50)
		retourner nb_a_verifier
	Sinon
		DemanderAuJoueur()
	FinSi
Fin
