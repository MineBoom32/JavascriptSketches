class MenuGrid {

    title = document.getElementById("title");
    header = document.getElementById("headerbox");
    items = document.getElementsByClassName("optionBox");

    constructor() {
        for(let i = 0; i < this.items.length; i++) {
            this.items[i].addEventListener("mouseover", (event) => {
                TweenMax.to(this.items[i], {duration: 0.3, scale: 1.1, backgroundColor: "#05225C"})
            })
            this.items[i].addEventListener("mouseout", (event) => {
                TweenMax.to(this.items[i], {duration: 0.3, scale: 1, backgroundColor: "#92278F"})
            })
            this.items[i].addEventListener("click", (event) => {
                this.ExitTween();
            })
        }
    }

    EnterTween() {
        TweenMax.from(this.title, {duration:0.3, y: -50, opacity: 0})
        TweenMax.from(this.header, {duration:0.5, y: -50, opacity: 0})
        for(let i = 0; i < this.items.length; i++) {
            TweenMax.from(this.items[i], {duration: 0.8, y: 100, opacity: 0})
        }
    }
    ExitTween() {
        TweenMax.to(this.title, {duration:0.3, y: -50, opacity: 0})
        TweenMax.to(this.header, {duration:0.5, y: -50, opacity: 0})
        for(let i = 0; i < this.items.length; i++) {
            TweenMax.to(this.items[i], {duration: 0.8, y: 100, opacity: 0})
        }
    }
}

let grid = new MenuGrid();
grid.EnterTween()