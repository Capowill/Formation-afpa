/*var i = 0;
var j = 0;
var str = Array();

while (str[i++] != "") {
    str[i] = prompt("Saisissez le prenom N° " + i);
}
while (j++ != i - 2) {
    console.log("Prénom : " + str[j] + " N° " + j + ".\n");
}

/*_______________________________________________________________________________________*/

/*var N = prompt("Entrez une valeur :");
while (--N >= 0)
    alert(N);

    /*_______________________________________________________________________________________*/

    /*var N = prompt("Entrez N");

while (N-- > 0) {
    console.log(N + "\n");
}

/*_______________________________________________________________________________________*/

/*var n1 = parseInt(prompt("Nombre 1 :"));
var n2 = parseInt(prompt("Nombre 2 :"));
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
console.log("La somme est de : " + res);

/*_______________________________________________________________________________________*/

/*var N = 0;
var i = 0;
var tot = 0;

while (++N != 0) {
    N = prompt("Saisissez le nombre n°" + (i++ + 1) + "\nSaisissez 0 pour arrêter");
    tot += N--;
}
console.log("Moyenne : " + (tot / (i - 1)));

/*_______________________________________________________________________________________*/

/*var min = -1;
var max = 0;
var i = 1;
var tot = 0;
var N = parseInt(prompt("Entrez la valeur"));
while (N != 0) {
    tot += N;
    i++;
    N = parseInt(prompt("Entrez la valeur"));
    if (max < N)
        max = N;
    if (min > N && N != 0)
        min = N;
}
console.log("La moyenne est de " + tot / i + "\nMax : " + max + "\nMin : " + min);

/*_______________________________________________________________________________________*/

/*var i = 0;
var n = prompt("Nombre de multiples :");
var x = prompt("Pour le nombre entier :");

while (++i <= n)
    alert(i + "x" + x + "=" + (i * x));
/*_______________________________________________________________________________________*/

console.log(prompt("Entrez un mot en minuscule").match(/[aeiouy]/gi).length);

/*_______________________________________________________________________________________*/
/*var age = 0;
var jeune = 0;
var moyen = 0;
var vieux = 0;

while (age < 100) {
    age = prompt("Age?");
    if (age < 20)
        jeune++;
    else if (age > 40)
        vieux++;
    else
        moyen++;
}
console.log("Nombre de jeune : " + jeune + "Nombre de moyen : " + moyen + "Nombre de vieux : " + vieux);

/*_______________________________________________________________________________________*/

var nb;
var i;
i = 3;

nb = parseInt(prompt("Entrez un nombre"));
if (nb <= 1)
    alert("Pas premier");
else if (nb == 2 || nb == 3 || nb == 5)
    alert("Premier");
else if (nb % 2 == 0)
    alert("Pas premier");
else {
    while ((nb % i != 0) && i > Math.sqrt(nb)) {

        if (nb % i == 0)
            alert("Pas premier");
        else
            alert("Premier");
        i += 2;
    }
}

/*_______________________________________________________________________________________*/

var magic = parseInt(Math.random() * 100);
while (age < 100) {
    age = prompt("Age?");
    if (age < 20)
        jeune++;
    else if (age > 40)
        vieux++;
    else
        moyen++;
}

/*_______________________________________________________________________________________*/


var magic = parseInt(Math.random() * 100);
var N = -1;
if (confirm("Voulez vous jouer?")) {
    while (N != magic) {
        N = prompt("Donne une valeur entre 1 et 100");
        if (N < magic)
            alert("Trop petit !");
        else
            alert("Trop grand !");
    }
}