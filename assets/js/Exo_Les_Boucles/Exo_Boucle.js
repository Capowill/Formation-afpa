//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 1 - SAISIE
var prenom = prompt("Saisissez un prenom " + "1");
var i = 1;
var str = "" //chaine de caractere vide .pour afficher les prenoms entree

while (prenom != "" && prenom != null) //penser a inverser a lajout de =null
{          // "!=" signifie different
    str = str + prenom + " ";
    i++;
    prenom = prompt("Saisissez un prenom " + i);
}
i = i - 2;
console.log(i);
console.log(str);
//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 2 Entiers inferieurs à N
var N; //nombre
N = prompt("Entrez un nombre :");

while (N-- > 0) {
    console.log(N + "\n");
}
//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 3 Somme d'un intervalle
// n1 + n + n + n + n + n + n + n2 =
var n1 = parseInt(prompt("Entrez un nombre : "));
var n2 = parseInt(prompt("Entrez un nombre : "));
var res = 0;

if (n1 < n2) {
    while (n1 <= n2) {
        res = res + n1;
        n1++;
    }

} else {
    while (n2 < n1) {
        res = res + n2;
        n2++;
    }
}
console.log("le resultat est de : " + res);
//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 4 - MOYENNE
var min = 0;
var max = 0;
var i = 1;
var tot = 0; // totale
var N = parseInt(prompt("Entrez la valeur"));
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
//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 5 - MULTIPLES
var n = prompt("Nombre de multiples : ");
var x = prompt("Pour le Nombre entier");
var i = 0;

while (++i <= n) { // ( 1+i <=n)
    console.log(i + "x" + x + "=" + (i * x)); // i*x=
}
//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 6 - NOMBRE DE VOYELLES 
var mot = prompt("Entre un mot : ");
var len = mot.length; // len = nombre de caractere dans la chaine de mots
var voyelles = 0;

for (i = 0; i < len; i++) {
    if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y")
        // [i] permet d'aller recuperer des elements d'un tableau  
        voyelles++;
}
console.log("Le mot que vous avez saisi contient " + voyelles + " voyelles");

// version Vincent simplifier . 
//  console.log(prompt("Entrez un mot en minuscule").match(/[aeiouy]/gi).length);
//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 7 - UN NOMBRE EST -IL PREMIER 
/* pseudo code :
var n 
var i=2
Pour (i=2,i<n i++)
   si n% i == 0 
   i++
   "pas premier "
   sinon 
   "premier "
    Retourner oui;
*/
// Un nombre premier est divisible que pas 1 ou lui même 
var n = parseInt(prompt("Entrez un nombre : "));
var premier = true;

for (var i = 2; i < n; i++) {
    if (n % i == 0) {

        premier = false;
        console.log(" Ceci n'est pas un nombre premier");
        console.log(n + " Est divisible par " + i);

        break;
    } else(premier = true)
    console.log(n + " Est un nombre premier");
}
//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 8 - NOMBRE MAGIQUE
/* 
tantque (n != magic )
Si ( n > magic ) ALORS
    "plus petit"
SinonSi ( n < magic ) ALORS
    "plus grand"
Sinon 
    "trouver"
*/
var magic = parseInt(Math.random() * 100);
//Math.random genère un nombre aleatoire *100
console.log(magic);
var n = 0;

while (n != magic) // condition de sorti
{
    n = parseInt(prompt("Saisissez un nombre: "));
    if (n > magic)
        alert("trop grand ");

    else if (n < magic)
        alert("trop petit ");
    else
        alert("Gagner, le nombre magique etait : " + magic);
}

// AUTRES SOLUTION : Correction
var magic = parseInt(Math.random()*100);
var nombre = 0;
var play = true;

do 
{
	   nombre = parseInt(window.prompt("Saisissez un nombre\n(ou cliquez sur Annuler pour arrêter)"));
	
       if (nombre == magic) 
       {
		   alert("Gagné !\nLe nombre était bien " + magic);
		   break;
	   }
	   else if (nombre > magic) 
	   {
	       play = window.confirm("Trop grand ! Rejouer ?")
	   }
	   else 
	   {
			play = window.confirm("Trop petit ! Rejouer ?");
		}
}
while (nombre != magic && nombre != null && play == true);

    if (nombre == null || play == false) 
    {
	   alert("Le nombre à trouver était " + magic);
    }



