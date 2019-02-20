const navbarContainer = document.querySelector('#menu');
const burger = document.querySelector('#burger');
const lineOne = document.querySelector('#burger span:nth-child(1)');
const lineTwo = document.querySelector('#burger span:nth-child(2)');
const lineThree = document.querySelector('#burger span:nth-child(3)');
let switchNavState = false;




    function addHamburgerStyle() {
        lineOne.classList.add("lineOne");
        lineTwo.classList.add("lineTwo");
        lineThree.classList.add("lineThree");
    }

    function removeHamburgerStyle() {
        lineOne.classList.remove("lineOne");
        lineTwo.classList.remove("lineTwo");
        lineThree.classList.remove("lineThree");
    }


    function menuAnimation() {
        navbarContainer.classList.add("animateMenu");
        navbarContainer.style.transform = "translateX(0px)";
    }


burger.addEventListener("click", function() {
    switchNavState = !switchNavState;
    if(switchNavState) {
     addHamburgerStyle();
     menuAnimation();
    }
    else {
        removeHamburgerStyle();
        navbarContainer.style.transform = "translateX(3000px)";
    }
})