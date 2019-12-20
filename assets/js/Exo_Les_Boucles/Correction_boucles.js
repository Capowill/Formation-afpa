/*Les boucles 

### 1 - Saisie
Créer une page HTML qui demande à l'utilisateur un prénom.
La page doit continuer à demander des prénoms à l'utilisateur jusqu'à ce qu'il laisse le champ vide.
Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis.*/

    var compteur = 1;
    var prenom = null;
    var liste = "";

    while (prenom != "") 
    {
       prenom = prompt("Entrer un prénom");        
       liste += prenom." ";
       compteur++;          
    }

    console.log("Liste des prénoms saisis : "+liste);
    console.log("Nombre de prénoms saisis : "+compteur);

//Autre solution  :

    var compteur = 1;
    var lstPrenoms = "";

    do {
		var prenom = window.prompt("Saisissez le prénom n°" + compteur + "\n ou clic sur Annuler pour arrêter la saisie");
		console.log(prenom);
	
		if (prenom == null || prenom == "") { break; }
	
		compteur++;
		if (lstPrenoms == "") {
			lstPrenoms += (prenom);
			continue;
		}
		lstPrenoms += (", " + prenom);	
	} while (prenom != "" && prenom != null)

    console.log(compteur-1);
    alert((compteur-1) + " prénom.s saisi.s : \n" + lstPrenoms);

//### 2 - Entiers inférieurs à N
/*
Ecrivez un programme qui affiche les nombres inférieurs à N.
*/
    var n = parseInt(prompt("Saisir un nombre"));  
       
    for (i = n; i!=0; i--)
    {
        console.log(i); 
    }            

//### 3 - Somme d'un intervalle
/*
Ecrivez un programme qui saisit deux nombres n1 et n2 et qui calcule ensuite la somme des entiers de 
n1 à n2.
*/

    var n1 = parseInt(prompt("Saisir un 1er entier"));  
    var n2 = parseInt(prompt("Saisir un 2ème entier"));  
    var total = 0;      
   
    for (i = n1; i<=n2; i++)
    {
        total = total + i; 
    }         

    console.log("Total = "+total);

//Exemple : 3 et 6 saisis; on a donc la somme de 3+4+5+6 = 18.      

//#### 4 - Moyenne

//Ecrire un programme qui saisit des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0)

    var total = 0, compteur = 0, moyenne = null, entier = null;
     
    while (entier != 0)
    {
        total += entier;
        compteur++;
        var entier = parseInt(prompt("Saisir un nombre entier"));        
    } // fin while
      
    /* Une fois sorti de la boucle, on peut calculer la moyenne
    * car on a le total et le nombre de tours définitifs */
    moyenne = total/compteur;
    console.log("Moyenne : "+moyenne);

/*### 5 - Multiples

Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.
Exemple pour `n=5` et `x=7` :

1 x 7 = 7<br>
2 x 7 = 14<br>
3 x 7 = 21<br>
4 x 7 = 28<br>
5 x 7 = 35

Il est demandé de choisir la structure répétitive (`for`, `while`, `do...while`) la mieux appropriée au problème.*/

	
    
    n = parseInt(prompt("Multiplier jusqu'à :"));
    x = parseInt(prompt("Table de mulitplication du nombre :")); 
	var resultat= 0;
        for(i=1;i<=n;i++)
	    {
	        resultat=i*x;
	        console.log(x+ "x" +i+ "=" +resultat);
	    }
	}

/*
### 6 - Nombre de voyelles

Ecrire le programme qui compte le nombre de voyelles d'un mot saisi au clavier, en utilisant :
* `myVar.length` : retourne le nombre de lettres de la chaîne myVar.
* `myVar.substr(p, n)` : extrait de la chaîne `myVar` une sous-chaîne de `n` caractères à partir de la position `p` 
(attention, en Javascript, le 1<sup>er</sup> caractère se trouve à la position 0).
* `myVar.indexOf(chaine)` : retourne le rang de la première occurrence de `chaine` dans la variable donnée (`myVar`). Si la sous-chaîne n'est pas trouvée, `indexOf` Retourne la valeur -1. 
*/
        var voyelles = 0;
        var mot = prompt("Saisir un mot :");
				
		for (i=0;i<mot.length;i++)
		{
		   if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y") 
		   {	
 	          voyelles++;
		   }
		}
		
        alert("le nombre de voyelles dans :"+mot+" est de "+voyelles);
        
       // autre solution:
        var word = prompt("saisir un mot");
        var count = 0;
 for (i = 0; i < word.length; i++) {
             // utilisation d'un switch pour vérifier le cas de chaque voyelle
             switch (word[i]) {
                 case 'a':
                 case 'e':
                 case 'i':
                 case 'o':
                 case 'u':
                 case 'y':
                     // incrémentation de notre compte
                     count++;
                     break;
                 default: ' ';
             }
         }
         // affichage
         console.log('nombre de voyelle dans ' + word + ' : ' + count);

/*   
### 7 - Un nombre est-il premier

Ecrivez un programme qui permet de tester si un nombre est premier.

[Lire cette ressource] http://chatinais.pagesperso-orange.fr/coursjs/exercice/frprem0.htm
*/
	while (isNaN(number)) {
	    // on renouvèle la saisie
	    number = parseInt(window.prompt('Saisissez un premier nombre :'));
	}
	    var divide = 0;
	    var bool = true;
	    // boucle parcourant les entiers entre n et racine carré du nombre saisi
	    while (n <= Math.sqrt(number)) {
	        // on divise notre nombre par n
	        divide = number / n;
	        console.log('resultat: ' + divide);
	        // si le resultat est différent de 0 et que le reste est égale à 0
	        if ((divide != 0) && (number % n == 0)) {
	            // on definit la variable bool à false
	            bool = false;
	            // et arrêt de la boucle
	            break;
	        }
	        // incrémentation de n
	        n++;
	    }
	    // si le resultat est différent de 0 et que le reste est égale à 0
	    if (bool == false) {
	        // information
	        alert('Ce nombre n\'est pas premier');
	    } else {
	        // information
	        alert('Ce nombre est premier');
	    }
/* 8 - Nombre magique 

Ecrire un programme qui met en œuvre le jeu du nombre magique : l'ordinateur choisit un nombre aléatoire 
et l'utilisateur doit trouver ce nombre. A chaque fois que l'utilisateur saisit une valeur, il reçoit une indication lui indiquant "plus petit" ou "plus grand".

Vous aurez besoin de générer un nombre aléatoire avec la fonction `random` de l'objet `Math` : */

    var magic = parseInt(Math.random()*100);
    var nombre = 0;
    var play = true;

    do {
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
    } while (nombre != magic && nombre != null && play == true);

    if (nombre == null || play == false) 
    {
	   alert("Le nombre à trouver était " + magic);
    }
