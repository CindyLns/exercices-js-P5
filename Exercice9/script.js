// votre code ici

export default checkAge;

function checkAge(age) {
    if (age < 18) {
        console.log("Vous êtes mineur.");
    } else if (age <= 65) {
        console.log("Vous êtes majeur.");
    } else {
        console.log("Vous êtes senior.");
    }
}

checkAge(15);  
checkAge(30); 
checkAge(75); 