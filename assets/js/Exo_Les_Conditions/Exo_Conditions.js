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
//==============================================================================================
// JS - 06 - Instructions conditionnelles et alternatives
//EXERCICE 1 : PARITE
var n = window.prompt("Entrez un nombre");

if (n % 2 == 0) {
    alert("Le nombre saisi est paire");
} else {
    alert("Le nombre saisi est impaire");
}
//==============================================================================================
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
//==============================================================================================
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
//==============================================================================================
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

