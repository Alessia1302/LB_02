let firstObject = {
    firstname: "Alessia",
    name: function(){
        return this.firstname;
    }
}
console.log(firstObject.name());

function BMI(){
    let groesse = parseInt(document.querySelector('#groesse').value);
    let gewicht = parseInt(document.querySelector('#gewicht').value);
    let resultat = document.querySelector('#resultat');
    if(groesse === '' || isNaN(groesse) || groesse < 0 || groesse < 120 || groesse > 250){
        resultat.innerHTML = 'Bitte geben Sie eine gültige Grösse an';
    }else if(gewicht === '' || isNaN(gewicht) ||  gewicht < 0 || gewicht < 30 || gewicht > 250){
        resultat.innerHTML = 'Bitte geben Sie ein gültiges Gewicht an';
    }

    else{
         let bmi = (gewicht / ((groesse * groesse) / 10000)).toFixed(1); 

         if(bmi < 18){
             resultat.innerHTML = `Sie haben einen BMI von ${bmi}.`;
             resultat.innerHTML = `Ihr BMI beträgt ${bmi}, was bedeutet, dass Ihr Gewicht in die Kategorie Untergewicht für Erwachsene liegt.
             Sprechen Sie mit Ihrem medizinischen Betreuer, um mögliche Ursachen für Ihr Untergewicht zu ermitteln und ob Sie zunehmen müssen.`;
                         
         }else if(bmi >= 18 && bmi < 24.9){
            resultat.innerHTML = `Sie haben einen BMI von ${bmi}.`;
            resultat.innerHTML = `Ihr BMI beträgt ${bmi}, was bedeutet, dass Ihr Gewicht in die Kategorie "Normal" für Erwachsene liegt.
            Die Aufrechterhaltung eines gesunden Gewichts kann das Risiko von chronischen Krankheiten, die mit Übergewicht und 
            Fettleibigkeit einhergehen, verringern.`;

         } else{
            resultat.innerHTML = `Sie haben einen BMI von ${bmi}.`;
            resultat.innerHTML = `Sie haben einen BMI von ${bmi}, was bedeutet, dass Ihr Gewicht in die Kategorie Übergewicht 
            für Erwachsene liegt. Menschen, die übergewichtig oder fettleibig sind, haben ein höheres 
            Risiko für chronische Erkrankungen wie ein hoher Blutdruck, Diabetes oder hohe Cholesterinwerte. Suchen Sie bitte Ihren Arzt auf.`;
         }
    }
}



       

