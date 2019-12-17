//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 1 - SAISIE

var prenom=prompt("Saisissez un prenom "+ "1");
var i = 1; 
var str ="" //chaine de caractere vide .pour afficher les prenoms entree

while (prenom != "" && prenom != null)//penser a inverser a lajout de =null
{          // ! signifie different
   str= str+prenom+" ";
   i++;
   prenom=prompt("Saisissez un prenom "+i);
}
i= i-2;
console.log(i);
console.log(str);
//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 2 Entiers inferieurs à N
var N ; //nombre
N = prompt("Entrez un nombre :");

while (N-- > 0) {
    console.log(N + "\n");
}
//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 3 Somme d'un intervalle
// n1 + n + n + n + n + n + n + n2 =
var n1 = parseInt( prompt("Entrez un nombre : "));
var n2 = parseInt(prompt("Entrez un nombre : "));
var res = 0 ;

if (n1 < n2) {
   while (n1 <= n2) {
      res = res + n1;
      n1++;
   }
}
else{
   while (n2 < n1){
      res = res+n2;
      n2++;
   }
}
console.log("le resultat est de : "+res);
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
var i =0;

while (++i <= n) {// ( 1+i <=n)
   console.log(i + "x" + x + "=" +(i * x)); // i*x=
}
//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 6 - NOMBRE DE VOYELLES 
var mot = prompt("Entre un mot : ");
var len = mot.length; // len = nombre de caractere dans la chaine de mots
var voyelles = 0;

for( i= 0; i < len; i++)
{
   if (mot[i] == "a"|| mot[i] ==  "e"|| mot[i] ==  "i" ||mot[i] ==  "o" ||mot[i] ==  "u" ||mot[i] ==  "y")
        // [i] permet d'aller recuperer des elements d'un tableau  
   voyelles++;
}
console.log("Le mot que vous avez saisi contient "+ voyelles+ " voyelles");
//==============================================================================================
// JS - 7 - LES BOUCLES
//EXERCICE 7 - UN NOMBRE EST -IL PREMIER 
/* pseudo-code :
var n 
var i=2
Pour (i=2,i<n i++)
   si n% i == 0 
   i++
   "pas premier "
   sinon 
   "premier "
    Retourner oui;
/* 
var n = parseInt(prompt("Entrez un nombre : "));
var premier = true;
for (var i = 2; i < n; i++) {
    if (n % i == 0) {       
        premier = false;
        console.log(" Ceci n'est pas un nombre premier");
        console.log(n + " Est divisible par " + i);
        break;
    }
    else(premier = true) 
        console.log(n + " Est un nombre premier");
}
*/
// Un nombre premier est divisible que pas 1 ou lui même 
var n = parseInt(prompt("Entrez un nombre : "));
for (var i = 2; i < n ; i++) {
    if (n % i === 0) {
        console.log(" Ceci n'est pas un nombre premier");
        console.log(n + " Est divisible par " + i);
        break // pas de ; au break
    }
}
if(i >=n)
console.log(n + " Est un nombre premier");
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
var n = parseInt(prompt("Saisissez un nombre: "));

while(n != magic) // condition de sorti
{
    if(n > magic)
        console.log("Plus petit ");
    else if( n < magic)
        console.log("Plus grand ");
    var n = parseInt(prompt("Saisissez un nombre: "));
}
// une foisque la/les conditions sont remplit 
    console.log("Gagner, le nombre magique etait : "+magic);
//========================================================================================================================
// JS - 06 - Instructions conditionnelles et alternatives
//EXERCICE 0 :
/* SCHEMA 
Si _prédicat_ alors
   _Instruction 1_
   _Instruction 2_
   ...
   _Instruction N_
Fin si
/*
===EXEMPLE 1===
Si Temperature > 38 alors
   Écrire "Le patient a de la fièvre"
Fin si  */
var Temperature = parseInt(window.prompt("Saisissez La Temperature du patient"));
if (Temperature > 38) {
    alert("Le patient a de la fièvre");
} else {
    alert("it's ok")
}
/*
===EXEMPLE 2===
Si Temperature > 41 et Tension > 25 alors
   Écrire "Le patient va perdre patience"
Fin si */
var Temperature = parseInt(window.prompt("Saisissez La Temperature du patient"));
var Tension = parseInt(window.prompt("Saisissez la Tensoin du patient"));

if ((Temperature > 41) && (Tension > 25)) {
    alert("Le patient va perdre patience");
} else {
    alert("BLABLABLA");
}
/*
===EXEMPLE 3===
Si non Patient alors
   Écrire "Éconduire l'olibrius"
Fin si */
var Temperature = parseInt(window.prompt("Saisissez La Temperature"));
var Tension = parseInt(window.prompt("Saisissez la tension"));

if ((Temperature > 41) && (Tension > 25)) {
    alert("Le patient va perdre patience");
} else // Le point virgule a mettre a la fin de nos conditions !!
{
    alert("Econduire l'olibrius");
}
/*
===EXEMPLE 4===
Si Temperature > 42 ou (Tension < 25 et Pouls > 180) alors
   Écrire "Prévenir la famille"
Fin si  */
var Temperature=parseInt(window.prompt("Saisissez la Temperature"));
var Tension=parseInt(window.prompt("Saisissez la Tension "));
var pouls=parseInt(window.prompt("Saisissez le pouls "));

if ((Temperature > 42) || ((Tension < 25) && (pouls > 180))) {
    alert("Prévenir la famille");
}
else{
    alert("ok ok ");
}
/*
===EXEMPLE 5===
Si Temperature > 40 ou Tension >= 25 alors
   Écrire "Hospitaliser le patient"
Fin si  */
var Temperature=parseInt(window.prompt("Saisissez la Temperature"));
var Tension=parseInt(window.prompt("Saisissez la Tension"));

if ((Temperature > 40)||(Tension >= 25)) {
    alert("Hospitaliser le patient");
}
else{
    alert("ok ok ");
}
/*
===EXEMPLE 6===
Si Patient ET Pouls = 0 alors
    Écrire "Appeler le curé"
Fin si  */
var patient=window.prompt("Patient");
var pouls=parseInt(window.prompt("Saisissez le pouls"));

if ((patient) && (pouls = 0)) {
    alert("Pour le patient "+patient+" Appeler le curé");
}
// JS - 06 - Instructions conditionnelles et alternatives
//EXERCICE 1 : PARITE
var n = window.prompt("Entrez un nombre");

if (n % 2 == 0) {
    alert("Le nombre saisi est paire");
} else {
    alert("Le nombre saisi est impaire");
}
// JS - 06 - Instructions conditionnelles et alternatives
//EXERCICE 2 : AGE
var n = window.prompt("Saississez votre année de naissance");
var date = new Date();
var annee = date.getFullYear(); //demande a windows la date

if ((annee - n) < 18) {
    console.log("Vous êtes mineur");
} else {
    console.log("Vous êtes majeur");
}
// JS - 06 - Instructions conditionnelles et alternatives
//EXERCICE 3 : CALCULETTE
var nb1 = parseInt(window.prompt("Saisissez un nombre"));
var operateur = window.prompt("Saisissez un operateur ( +  -  /  *) ");
var nb2 = parseInt(window.prompt("Saisissez un nombre"));

switch (operateur)
{
    case"+":
        console.log("resultat "+(nb1+nb2));
        break;

    case"-":
        console.log(" Resulat "+(nb1-nb2));
        break;
        
    case"*":
        console.log("Resulat "+(nb1*nb2));
        break;

    case"/":
        console.log("Resulat "+(nb1/nb2));
        break;

    default:
        console.log("Operateur "+operateur+" Inconnue");
}
// JS - 06 - Instructions conditionnelles et alternatives
// EXERCICE 4 : PARTICIPATION 
var mar = prompt("entrez c por celibataire et m pour marie"); //pas obliger decrire window.
var nbe = parseInt(prompt("entrez le nombre d'enfants"));
var salaire = parseInt(prompt(" entrez le  salaire"));
var pc = 0; //participation

if (salaire < 1200) // cas ou le salaire est <1200  
{
   if (mar == true) // true = vrai
   {
      pc = 25 + (10 * nbe) + 10;
   }
   else 
   {
      pc = 20 + (10 * nbe) + 10;
   }
} else // cas ou le salaire est >1200   
   if (salaire > 1200) 
   {
      if (mar == true) 
      {
         pc = 25 + (10 * nbe);
      } 
      else 
      {
         pc = 20 + (10 * nbe);
      }
   }
if (pc > 50) 
{
   pc = 50;
}
alert("Votre participation est de : "+pc);
//===========================================================================================================================
//Exercice JS : OPERATEURS
var a = '100'; //chaine de caractère qui contient 100
var b = 100;
var c = 1;
var d = true;

alert("Ceci est une chaine " + a);
b--
alert(b);
c = c + a
alert(c);
d = !d; // ! pour inverser
alert(d);
//=============================================================
/* EXO JS : AFFICHAGE */
var nom = window.prompt("Saisissez votre prénom"); //prompt = ouvre une boite de dialoge avec l'utilisateur
var prenom = window.prompt("Saisissez votre prenom");

if (window.confirm("Etes vous un homme ?")) {
    alert("Bonjour MR " + nom + " " + prenom + " \nBienvenue sur notre site !") // ""\n "" pour sauté de ligne
} else {
    alert("Bonjour Mme " + nom + " " + prenom + "\nBienvenue sur noter site !")
}
