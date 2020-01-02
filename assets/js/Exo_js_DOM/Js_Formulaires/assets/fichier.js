/* JS Form EXERCICE */


/* ADRESSE MAIL  */

function testmail()
{
    var filtre = /[@]{1}/;
    var mail = document.getElementById("email").value;
    var result = filtre.test(mail);
    if(!filtre.test(mail)){
        alert("Email non valide, comprenant au moins '@'");
        filtre.lastIndex;
    }
    else{
        console.log(mail);
    }
}

/* CODE POSTAL */

function testcode()
{
    var filtre = /^[0-9]{5}$/;
    var CP = document.getElementById("postal").value;
    var result = filtre.test(CP);
    if(!filtre.test(CP)) {

        alert("Rensiegner un code postal valide (exemple : 80100)");
        filtre.lastIndex;
    }
    else{
        console.log(CP);
    }
}
 /*
function testcase()
{
    var filtre = /[\w]{1}?/;
    var testun = document.getElementById("testfun");
    var result = filtre.test(testun); 
    if(!filtre.test(testun)){
        alert("Saisi vide ")
    }
    else{
        console.log(testun.value);
    }
}
*/
/*
function commentaire()
{
    
    var select = document.getElementById("text").value;
   
    
    if(select != "choix")
    document.getElementById("arEa").innerHTML = select;
}
*/
/*
function   comment()
{
    var select = document.getElementById("selection").value;
    var affiche ;


    if (select != "choix")
        document.getElementById("text").innerHTML = affiche;
        console.log(affiche);
}
*/