function calcul(){
    // recuperer les inputs 
    let nombre1 = document.querySelector('input#firstNumber').value
    let nombre2 = document.querySelector('input#secondNumber').value
    // les tranformer 
    console.log(parseInt(nombre1), parseFloat(nombre2));

    // afficher le resultat dans une boite de dialogue
    alert('le resultat : ' + parseInt(nombre1) * parseFloat(nombre2))
}