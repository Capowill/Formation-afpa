//test 1

/*
Votre programme doit générer un nombre aléatoire à l'aide de la fonction Math.random.
Ecrivez la fonction verif qui doit vérifier si la saisie de l'utilisateur (dans textBox1) correspond au
nombre magique, elle affiche des informations (trop grand, trop petit dans le label1.
Quand votre programme fonctionne, modifiez-le pour rendre le javascript non intrusif
*/


function verif(){
    document.querySelector("label1").innerHTML = "Gagner, le nombre magique etait : " + magic;
}



/*
    <div id="label1">Entrez votre proposition</div>
    <input id="textBox1" value="">
    <input type="button" id="button1" value="Verifier" onclick="verif();">
*/


var magic = parseInt(Math.random() * 100);
var element = parseInt(document.querySelector("textBox1"));
//Math.random genère un nombre aleatoire *100
var n = 0;

function verif(element){
    while (n != magic) // condition de sorti
    {
        n = parseInt(prompt("Saisissez un nombre: "));
        if (n > magic)
        document.querySelector("label1").innerHTML ="trop grand ";
        
        else if (n < magic)
        document.querySelector("label1").innerHTML ="trop petit ";
        else
        document.querySelector("label1").innerHTML = "Gagner, le nombre magique etait : " + magic;
    }
}

        
//=============================================================================================================
/*
<div id="myDIV">
  <p>This is a p element in div.</p>
  <p>This is also a p element in div.</p>
</div>

<p>Click the button to change the text of the first p element in div.</p>

<button onclick="myFunction()">Try it</button>
//=====================================================================================
/*
function myFunction() {
  var x = document.getElementById("myDIV");
  x.querySelector("p").innerHTML = "Hello World!";
}

// Par isabel
  
var magic = parseInt(Math.random()*100);
    console.log(magic);
    document.getElementById(“verif”).addEventListener(‘click’,function()
    {
        if (parseInt(document.getElementById(“nombre”).value) == magic)
        {
            window.alert(“Gagné !“);
            document.getElementById(“lab”).innerHTML = “Entrez votre proposition de nombre (entre 0 et 100) :“;
            magic = parseInt(Math.random()*100);
        }
        else if (parseInt(document.getElementById(“nombre”).value) > magic)
        {
            document.getElementById(“lab”).innerHTML = “Plus petit !“;
        }
        else
        {
            document.getElementById(“lab”).innerHTML = “Plus grand !“;
        }
        document.getElementById(“nombre”).value = “”;
    })


*/
