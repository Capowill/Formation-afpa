/*
Mon premier JavaScript
Exercice JS 04 : Afficher du texte
*/



//var pour 
var nom = window.prompt("Saisissez votre prénom"); //prompt = ouvre une boite de dialoge avec l'utilisateur
var prenom =window.prompt("Saisissez votre prenom");


if (window.confirm("Etes vous un homme ?")) 
{ 
    alert("Bonjour MR "+nom+ " "+prenom+" \nBienvenue sur notre site !" ) // ""\n "" pour sauté de ligne
}
else
{
    alert("Bonjour Mme "+nom+" "+prenom+"\nBienvenue sur noter site !")
}
