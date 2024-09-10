const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")

function generatePassword() {
    let passLength = document.getElementById("pass-length").value
    let err = document.getElementById("error")
    
    if(passLength>=5 && passLength<=15) {
        let password1 = ""
        let password2 = ""
        err.textContent = ""
        for (let i=0; i<passLength; i++) {
            let indexOne = Math.floor (Math.random () * characters.length)
            password1 += characters[indexOne]
        }
        for (let j=0; j<passLength; j++) {
            let indexTwo = Math.floor (Math.random () * characters.length)
            password2 += characters[indexTwo]
        }
        passOne.textContent = password1
        passTwo.textContent = password2
        } else {
            err.textContent = "Invalid number."
        }
}
