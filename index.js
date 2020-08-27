function shout(string) {
return string.toUpperCase()
}

function whisper(string) {
return string.toLowerCase()
}

function logShout(string) {
console.log(string.toUpperCase())
}

function logWhisper(string) {
console.log(string.toLowerCase())
}


function sayHiToGrandma(string){
return string.toLowerCase()

return string.toUpperCase()

return string.toMixedCase()
}

var uppercase = "HELLO!"

string.toUpperCase() === uppercase // true

var lowercase = 'hello!'

string.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false
