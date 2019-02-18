const menu = document.querySelector('#menu');
const burger = document.querySelector('#burger');
const lineOne = document.querySelector('#burger span:nth-child(1)');
const lineTwo = document.querySelector('#burger span:nth-child(2)');
const lineThree = document.querySelector('#burger span:nth-child(3)')

let switchNavState = false;

burger.addEventListener("click", () => {
    switchNavState = !switchNavState;
    if(switchNavState) {
        lineOne.classList.add("lineOne");
    lineTwo.classList.add("lineTwo");
    lineThree.classList.add("lineThree");
    menu.classList.add("w-3/5", "animateMenu");
    menu.style.right = "0px";
    }
    else {
        menu.style.right = "-200px";
        lineOne.classList.remove("lineOne");
        lineTwo.classList.remove("lineTwo");
        lineThree.classList.remove("lineThree");
    }
})