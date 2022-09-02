class randomPicker {
    items

    constructor(items){
        this.items = items;
    }

    pickRandom() {
        return this.items[Math.floor(Math.random() * this.items.length)];
    }
}

class fortuneCookie extends randomPicker{

    outputElement
    opened
    fortune

    constructor(element) {
        super(["The fortune you seek is in another cookie.", 
        "You will be hungry again in one hour.", 
        "A conclusion is simply the place where you got tired of thinking.", 
        "We don’t know the future, but here’s a cookie.", 
        "Actions speak louder than fortune cookies.", 
        "You are not illiterate.", 
        "Change is inevitable, except for vending machines.",
        "This cookie would contain 117 calories, if it was real."]);
        this.outputElement = element;
        this.opened = false;
    }

    open() {
        this.outputElement.innerHTML = this.fortune;
    }
    newFortune() {
        this.fortune = this.pickRandom();
        this.outputElement.innerHTML = "Click 'Open Cookie' to see your fortune!";
    }
}

let myCookie = new fortuneCookie(document.getElementById("fortune"));
myCookie.newFortune();

// class cookie {
//     fortunes
//     opened
//     constructor(fortunes, opened){
//         this.fortunes = fortunes;
//         this.opened = opened;
//     }
// }

// var yourCookie;

