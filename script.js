

function cle()
{

    document.getElementById("res").value="";
    
    
}

function sho(input){
    document.getElementById("res").value+=input;
}

function cal(){
    var output=eval(document.getElementById("res").value)
    document.getElementById("res").value=output
}

function er(){
    let era=document.getElementById("res").value
    document.getElementById("res").value=era.slice(0,-1)
}

