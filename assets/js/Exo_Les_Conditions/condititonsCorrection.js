//Les conditions:
/* 1 - Parité
Ecrivez un programme qui demande un nombre à l'utilisateur puis qui teste si ce nombre est pair. Le
programme doit afficher le résultat « nombre pair » ou « nombre impair ». Vous devez utiliser
l'opérateur **modulo `%`** qui donne le reste d'une division. `a%2` donne le reste de la division de `a` par
2, si ce reste est égal à zéro, `a` est divisible par 2.*/
var nb = parseInt(prompt("Saisir un entier"));
    
     if (nb%2 == 0) 
    
    {
        alert("Le nombre "+nb+" est pair");
    } 
    else 
    {
         alert("Le nombre "+nb+" est impair"); 
    }



/* 2 - Age
Ecrivez un programme qui demande l'année de naissance à l'utilisateur.
En réponse votre programme doit afficher l'âge de l'utilisateur et indiquer si l'utilisateur est majeur
ou mineur.*/

    var annee_naissance = parseInt(prompt("Saisir année de naissance"));
    
    age = 2019-annee_naissance;
   
    if (age < 18) 
    {
        alert("Vous avez "+age+" ans, vous êtes mineur");
    } 
    else 
    {
        alert("Vous avez "+age+" ans, vous êtes majeur");
    } 
/* 3 - Calculette
Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur '+', '-', '*' ou '/'.
Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur
"division par 0"), puis affichera le résultat. */


    var nb1 = parseInt(prompt("Entrez votre premier nombre entier"));
    var nb2 = parseInt(prompt("Entrez votre deuxième nombre entier"));
    var operateur = prompt("entrez un opérateur +, -, * ou /")
;  
 // On traite d'abord le cas de la division par 0 :
if (operateur=="/" && nb2==0) 
    {
 	   alert("Division par zéro : impossible");
    } 
    else 
 { /* Sinon, tout est OK pour effectuer le calcul demandé,
      * la structure conditionnelle 'switch' est parfaitement adaptée  
      */ 
		switch (operateur) 
	    {
case "+":
	 			resultat = nb1 + nb2;
	 			break;
	
	 		case "-":
	 			resultat = nb1 - nb2;
	 			break;
	
	 		case "*":
	 			resultat = nb1 * nb2;
	 			break;
	
	 		case "/":
	 			resultat = nb1 / nb2;
	 			break;
	        
            /* Si on n'est pas rentré dans l'un des cas précédents, c'est que l'opérateur saisi est invalide,
            * on peut alors utiliser le cas par défaut pour afficher un message d'erreur */
	 		default:
	 			alert("Opérateur '"+operateur+"' invalide");
	 	 } // fin du switch  
     } // fin du else

     /* Si la variable resultat est de type entier, on l'affiche
	 * mettre une condition ici permet de ne pas afficher 
	 * le message s'il y a une des 2 erreurs divison par zéro ou opérateur invalide 
	 * donc pas de résultat 
	 */ 
	 if (typeof resultat === 'number') 
	 {	        	    
	     alert(nb1+operateur+nb2+" = "+resultat);
	 }   

/* 4 - Participation
Un patron décide de calculer le montant de sa participation au prix du repas de ses employés de la
façon suivante :

* si il est célibataire : participation de 20%
* si il est marié : participation de 25%
* si il a des enfants : participation de 10% supplémentaires par enfant

La participation est plafonnée à 50%.

Si le salaire mensuel est inférieur à 1200 €, la participation est majorée de 10%.

Ecrire le programme qui lit les informations au clavier et affiche pour chaque salarié, la participation
à laquelle il a droit.*/

    var salaire = parseInt(prompt("Entrez votre salaire"));
	var mar = prompt("Etes-vous marié?");
	var enf = parseInt(prompt("Nombre d'enfants ?"));
	var perc = 0;
	
    console.log("Salaire : "+salaire);
    console.log("Marié : "+mar);
    console.log("Nombre d'enfants : "+enfant);

	if (salaire < 1200)
	{
	    if (mar=="oui")
	    {
	        perc = 25 + (10* enf) + 10;
	        
	    }
	    else
	    {   
	        perc =  20 + (10 * enf) + 10;
	        
	    }
	}
	else // Cas > 1200 
	{
	    if (mar=="oui")
	    {
	        perc = 25 + (10* enf);   
	    }
	    else
	    {   
	        perc =  20 + (10 * enf);
	    }    
	}
	
    // Pour limiter au minimum de 50, on le force lorsque c'est supérieur
	if (perc > 50)
	{
	    perc = 50;	    
	}
	
	alert("Le taux de participation final est : "+perc); 