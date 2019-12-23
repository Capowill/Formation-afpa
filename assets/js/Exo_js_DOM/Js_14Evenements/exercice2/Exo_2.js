


var magic = parseInt(Math.random() * 100);
console.log(magic);

document.getElementById("button1").addEventListener('click', function () 
    {


        if (parseInt(document.getElementById("textBox1").value) === magic)
        {
            window.alert("Vous avez gagné !! le numéro magique était : " + magic);
        } 
        else if (parseInt(document.getElementById("textBox1").value) > magic)
        {
            document.getElementById("label1").innerHTML = " plus petit !";
            console.log("Plus petit");
        } 
        else
        {
            document.getElementById("label1").innerHTML = "Plus grand !";
            console.log("Plus grand");
        }


        console.log(parseInt(document.getElementById("textBox1").value));
    });