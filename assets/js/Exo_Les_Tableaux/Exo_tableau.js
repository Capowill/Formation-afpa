// JS - 9 - TABLEAU ( anglais = Array )
//EXERCICE 1
/*
Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier.
Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau.
Puis votre programme doit afficher le contenu du tableau.
*/ 
     var n = parseInt(prompt("Saisir taille tableau"));
     var tableau = [n];
     var i = 0;

     while (i < n) {
         tableau[i] = prompt("nom de la case");
         i++;
     }
     i=0;
     while (i < n) {
         console.log(tableau[i]);
         i++;
     }

//---------------------------------------------
// JS - 9 - TABLEAU 
// EXERCICE 2 - MENU
/*
Créer le programme qui fournira un menu permettant d’obtenir les fonctionnalités suivantes à partir
d’un tableau à une dimension :

- Affichage du contenu de tous les postes(cases) du tableau,
- Affichage du contenu d’un poste(cases) dont l’index est saisi au clavier,
- Affichage du maximum et de la moyenne des postes(cases) du tableau

Ce programme sera structuré de la manière suivante :

- une fonction GetInteger pour lire un entier au clavier,
- une fonction InitTab pour créer et initialiser l’instance de tableau : le nombre de postes(cases) souhaité sera entré au clavier,
- une fonction SaisieTab pour permettre la saisie des différents postes(cases) du tableau,
- une fonction AfficheTab pour afficher tout les postes(cases) du tableau,
- une fonction RechercheTab pour afficher le contenu d’un poste(cases) de tableau dont le rang est saisi au clavier
- une fonction InfoTab qui affichera le maximum et la moyenne des postes(cases).

Les fonctions seront appelées successivement.
*/ //---------------------------

function GetInteger() { // lire un entier
    var n = parseInt(prompt("saisir un nombre"));
    return n;
} //
function InitTab() { // crée un tableau 
    var longeurDuTableau = parseInt(prompt("saisir nombre case"));
    var tableau = [longeurDuTableau];
    return tableau;
} //
function SaisieTab(monTableau) { //faire la saisie des differentes case du tableau
    i=0;
    while (i < monTableau.length) { //length = longeur du tableau
        monTableau[i] = GetInteger();
        i++;
    }
    return monTableau;
} //
function AfficheTab(monTableauRempli) { // affiche toute le scases du tableau
    var afficase = 0;
    while (afficase < monTableauRempli.length) {
        console.log(monTableauRempli[afficase]);
        afficase++;
    }
} //
function RechercheTab(monTableauRempli) { // affiche le contenue d'une case 
    var caseChoisi = parseInt(prompt("choisir une case"));
    console.log(monTableauRempli[caseChoisi]);
} //
function InfoTab(monTableauRempli) { //affichera le maximum et la moyenne des postes(cases).
    var i = 0;
    var max = 0;
    var tot = 0; // totale
    while (i < monTableauRempli.length) {
        tot += monTableauRempli[i];
        if (max < monTableauRempli[i])
            max = monTableauRempli[i];
        i++;
    }
    console.log("La moyenne est de : " + tot / i + "\nMax : " + max);
} //
// Les var des fonctions a la fin sinon ca appel une function pas cree
var monTableau = InitTab();
var monTableauRempli= SaisieTab(monTableau);
AfficheTab(monTableauRempli);
RechercheTab(monTableauRempli);
InfoTab(monTableauRempli);

//-----------------------------
//JS - 9 - TABLEAU
// EXERCICE 3 : TRI DUN TABLEAU (tri a bulles)
/* ALGO -source wikipedia
tri_à_bulles_optimisé(Tableau T)
     pour i allant de (taille de T)-1 à 1
       tableau_trié := vrai
         pour j allant de 0 à i-1
            si T[j+1] < T[j]
               échanger(T[j+1], T[j])
               tableau_trié := faux
            si tableau_trié
        fin tri_à_bulles_optimisé
*/
//source WayToLearn.com
function sort(tab){ 
    var change;
    do{
        change = false;
        for(var i=0; i < tab.length-1; i++) { //condition de sorti
            if(tab[i] > tab[i+1]) {
                var tmp = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = tmp;
                change = true;
            }
        }
    } while(change);
    console.log(tab);
}
var tab = [5, 8, 11, 6, 1, 9, 3];

sort(tab); // appel de la fonciton qui contient le trie 



