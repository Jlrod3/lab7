function init(){
    //add your javascrip between these two lines of code
    var click = document.getElementById("entrybutton");
    
    function outputtext(){
        var input = document.getElementById("entryinput");
        document.getElementById("textoutput").innerHTML = input.value;
        alert("This website says: ", input.value);
    }
    
    click.addEventListener('click', outputtext);

    }    
    window.addEventListener('load', init);