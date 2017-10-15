/*
1. create a div,

2. give it the CSS className "box",

3. add your username as text,

4. append the div to the element with the id "boxes",

5. add three event listeners. The listeners it needs are a click listener, a mouseover listener, and a mouseout listener.

6. The mouseover and mouseout functions will toggle a CSS className called "highlight".

7. Your click function should change the color of your border and the background-color of the box.
*/
var GUZE0001 = {
    init: function () {
        console.log("guze0001 OK");
        let childDiv = document.createElement("div");
        childDiv.classList.add("box");
        childDiv.textContent = "guze0001";
        console.log("textContent Modified");
        let boxesDiv = document.querySelector("#boxes");

        childDiv.addEventListener("click", guze0001.boxesClick);
        childDiv.addEventListener("mouseover", guze0001.boxesMouseOver);
        childDiv.addEventListener("mouseout", guze0001.boxesMouseOut);
        boxesDiv.appendChild(childDiv);
    },
    boxesClick: function (ev) {
        ev.currentTarget.style.borderColor = "#FFCC33";
        ev.currentTarget.style.backgroundColor = "#CCC";
    },
    boxesMouseOver: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    },
    boxesMouseOut: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    }
}
GUZE0001.init();
