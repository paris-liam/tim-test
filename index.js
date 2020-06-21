let mouseIsHeldDown = false

document.addEventListener("mousedown", () => {
    return mouseIsHeldDown = true}
);

document.addEventListener("mouseup", () => {
    return mouseIsHeldDown = false;
});

const textContainer = document.querySelector("#text-container");

const textArea = document.querySelector("#textarea");

textArea.addEventListener('blur', (elem)=> {

    textContainer.innerHTML = null;
    text = elem.target.value;

    let wordList = text.split(' ');

let wordListWithClass = wordList.map((word) => {
    let length = 0;
    let chars = word.split("");
    let wordClass = null;
    chars.forEach((char) => {
        if(char !== "'") {
            length++;
        }
    })
    if(length <= 4) {
        wordClass = {word, class: "highlight1"}
    } else {
        wordClass = {word, class: "highlight2"}
    }
    return wordClass;
})


wordListWithClass.forEach((word) => {
    word.word.split("").forEach((char) => {
        createSpan(char,word.class);
    })
    createSpan('&nbsp;',"highlight1");

});

document.querySelectorAll('p').forEach((p) => {
    p.addEventListener("mouseenter", () => {
        if(mouseIsHeldDown) {
            return whichClass(p);
        }
    });
    p.addEventListener("drag", () => {
        if(mouseIsHeldDown) {
            return whichClass(p);
        }
    });
    p.addEventListener("click", () => {
        if(mouseIsHeldDown) {
            return whichClass(p);
        }
    });
})
})









function createSpan(charToUse, classToUse){
    span = document.createElement("P");
    span.innerHTML = charToUse;
    span.classList.add(classToUse);
    textContainer.appendChild(span);
}
  
function whichClass(element) {
    if(element.classList.contains('highlight1')) {
        element.classList.remove("highlight1");
        element.classList.remove("highlight2");
        element.classList.remove("highlight3");
        element.classList.add("highlight2");
    } else if(element.classList.contains('highlight2')) {
        element.classList.remove("highlight1");
        element.classList.remove("highlight2");
        element.classList.remove("highlight3");
        element.classList.add("highlight3");
    } else if(element.classList.contains('highlight3')) {
        element.classList.remove("highlight1");
        element.classList.remove("highlight2");
        element.classList.remove("highlight3");
        element.classList.add("highlight1");
    } else {
        element.classList.add("highlight1");
    }
  }