document.getElementById("button1").addEventListener('click', function fonctionCp () {
    // filtre = on demande 5 chiffre de 0 a 9 
    var filtre = /^[0-9]{5}$/;
    var code = document.getElementById("code").value;
    var result = filtre.test(code);

    if (result == false) {

        alert("Code postal invalide !");
        console.log(code);

    }
    console.log(result);


});
