function calcul(){
    // recuperer les valeurs dans balise inputs //
    let nombre1 = document.querySelector('input#firstNumber').value
    let nombre2 = document.querySelector('input#secondNumber').value

    alert('le resultat : ' + nombre1 % nombre2)
}