let listItems = document.getElementsByClassName("navitem")

for(let i = 0; i < listItems.length; i++) {
    listItems[i].onmouseover = function(){
        TweenLite.to(listItems[i], {duration: .4, x: 20, color: "blue"})
    }
    listItems[i].onmouseout = function(){
        TweenLite.to(listItems[i], {duration: .4, x: 0, color: "black"})
    }
}