//  RegExp /[^[A-Za-z\.]+$]/
// var variable = /[^[A-Za-z\.]+$]/
/*
var filtreC = /^[0-9]{5}$/ ;
var teste = parseInt(prompt("Entrez votre code postale"));

if (teste = filtreC) 
    {
    console.log("code postal : "+teste);
    }
    console.log("Ceci n'est pas un code postal "+teste);

var check= document.getElementById("codeP");
console.log(check.value);
*/
document.getElementById("button1").addEventListener('click',function() 
{
    // filtre = on demande 5 chiffre de 0 a 9 
    var filtre = /^[0-9]{5}$/;
    var code = document.getElementById("code").value;
    var result = filtre.test(code);

    if (result == false) 
    {
        
       alert("Code postal invalide !");
       console.log(result);

    }
    console.log(result);
});

/*
document.getElementById("button1").addEventListener('click',function() 
{
    // filtre = on demande 5 chiffre de 0 a 9 
    var filtre = /^[0-9]{5}$/;
    var code = document.getElementById("code").value;
    
    if (!filtre.test(code)) 
    {     
       alert("Code postal invalide !");
       console.log(code);
       return false;
    }
});

 function foncitonMail() {
    // \w = [^_A-Za-z0-9] 
    //var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regex= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[az0-9])?/;
    //var b= /[_a-z0-9]+(\.[_a-z0-9])*@([a-z0-9]\.)+[a-z{3}] / ;
    var mail = document.getElementById("mails");
    var result = filtre.test(mail);

    if (mail.matches(regex)) {
        console.log(mail);
    } else {
        alert("Adresse mail invalide !");
    }
};

*/