const prompt = require("prompt-sync")({sigint: true});

// Request the user enter a language choice
lang = parseInt(prompt("Please select your language type 1 for fr, 2 for de, 3 for es, 4 for en."))
if (lang == 1){
    console.log("Hello World in French is: Bonjour la planete!")
}
else if (lang == 2){
        console.log("Hello World in German is: Gooten Dag!") 
    }
else if (lang == 3){
        console.log("Hello World in Spanish is: Hola Eartho!") 
    }
else {
        console.log("Hello World in English!") 
    }