// JS - 8 - LES FONCTIONS 
//EXERCICE 1 - 

/*
Créer les 2 fonctions suivantes :
 produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.
 afficheImg(image) qui affiche l’image passée en paramètre.
*/

var x;
var y;
var image = "";

function cube(x) {
    x = prompt("Saisissez un nombre : ");
    cube = x * x * x;
    console.log("Le cube de " + x + " est egal à " + cube);
    return cube;
}

function produit(x, y) // produit = multiplication
{

    produit = x * y;
    console.log("Le produit de " + x + " x " + y + " est egal à " + produit);
    return produit;
}

function afficheImg(image) {
    document.write("<img src=\"" + image + "\">"); // permet d'appeler une image de notre html
    // Attention au guillements pour la concaténation, il faut échapper avec des \ les guillemets des attributs HTML
}
// Appels des fonctions
var resultat = cube(3);
console.log("cube : " + cube);
afficheImg("assets/images/papillon.jpg"); // Va chercher l'image dans nos dossier pour l'afficher



// JS - 8 - LES FONCTIONS 
// EXERCICE 2
/*
Ecrivez une fonction qui prend deux paramètres :
 phrase de type string
 lettre de type string
La fonction compte le nombre de fois ou lettre apparaît dans phrase. */

var phrase ;
var lettre ;
var compteur = 0;

function maVariable(phrase, lettre) {

    for (i = 0; i < phrase.length; i++) {
        if (phrase[i] == lettre) {
            compteur++;
        }
    }
    console.log("La lettre '" + lettre + "' est presente '" + compteur + "' fois dans '" + phrase + "'");
}
maVariable(phrase, lettre);

/*  Celui de camille
        var phrase;
        var lettre;
        var occurenceLettre = 0;
        const maVariable = (phrase, lettre) => {
          for (i = 0; i < phrase.length; i++) {
        if (phrase[i] == lettre) {
            occurenceLettre++;
        }
         }return occurenceLettre;
        }
        phrase1 = "Je suis nulle en javascript, mais je fais tout pour m'améliorer";
        lettre1 = "r";
        alert(maVariable(phrase1, lettre1));*/

/* CORRIGER 
        var compteur = 0;
        var phrase = prompt("Saisir une phrase");
        var lettre = prompt("Saisir une lettre");
				
		for (i=0; i<phrase.length; i++)
		{
		   if (phrase[i] == lettre) 
		   {	
 	          compteur++;
		   }
		}
		
        alert("La lettre '"+lettre+"' est présente "+compteur+" fois dans '"+phrase+"'");
            */

// JS - 8 - LES FONCTIONS 
// EXERCICE 3 - Menu

        //multiplication
        function multiplication() {
            let n = prompt("Nombre de multiples : "); // let" =varchiffre
            let x = prompt("Pour le Nombre entier");
            let i = 0;
            while (++i <= n) { // ( 1+i <=n)
                console.log(i + "x" + x + "=" + (i * x)); // i*x=
            }
        }
        // moyenne
        function moyenne() {
            let min = 0;
            let max = 0;
            let i = 1;
            let tot = 0; // totale
            let N = parseInt(prompt("Entrez la valeur"));
            while (N != 0) // different de 0
            {
                tot += N;
                i++;
                N = parseInt(prompt("Entrez la valeur"));
                if (max < N)
                    max = N;
                if (min > N && N != 0)
                    min = N;
            }
            console.log("La moyenne est de : " + tot / i + "\nMax : " + max + "\nMin : " + min);
        }
        //nombre de voyelles
        function Nvoyelles() {
            var mot = prompt("Entre un mot : ");
            var len = mot.length; // len = nombre de caractere dans la chaine de mots
            var voyelles = 0;

            for (i = 0; i < len; i++) {
                if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y")
                    // [i] permet d'aller recuperer des elements d'un tableau  
                    voyelles++;
            }
            console.log("Le mot que vous avez saisi contient " + voyelles + " voyelles");
        }
        //Chaine de mots      
        function maVariable(phrase, lettre) {
            var phrase = prompt("Saisissez une phrase");
            var lettre = prompt("Saisissez une une lettre");
            var compteur = 0;        
            for (i = 0; i < phrase.length; i++) {
                if (phrase[i] == lettre) {
                    compteur++;
                }
            }
            console.log("La lettre '" + lettre + "' est presente '" + compteur + "' fois dans '" + phrase + "'");         
        }
        var choix = prompt("Entrez le chiffre voulu selon l'operation \n1-multiplication \n2-moyenne \n3-Nombre de voyelles \n4-Chaine de caractère ");
        switch (choix) {                                            // \n1 = case"1" du switch  - \n2 = case "2"  - etc etc
             case "1":
                multiplication();
                break;

            case "2":
                moyenne()
                break;

            case "3":
                Nvoyelles();
                break;

            case "4":
                maVariable();
                break;

            default:
                alert("Choix non valide");
        }

// JS - 8 - LES FONCTIONS 
// EXERCICE 4

/* énnoncer
Concevez la fonction strtok qui prend 3 paramètres str1, str2, n en entrée et renvoie une
chaîne de caractères : str1 est composée d’une liste de mots séparés par le caractère str2.
strtok sert à extraire le nième mot de str1.
Exemple :
Pour str1 = « robert ;dupont ;amiens ;80000 », strtok (str1, « ; », 3) doit retourner « amiens »
*/

//j'ai rien compris donc faudra demander a la correction 
function strtok(str1,str2,n) 
    {
        var res = str1.split(str2);
        console.log(res[n]);
     }  

     var str1 = "robert ;dupont ;amiens ;80000";
     var str2 = ";";
     var n = 2;
     
     strtok(str1, str2, n);
