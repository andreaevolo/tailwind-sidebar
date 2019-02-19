const navbarContainer = document.querySelector('#menu');
const burger = document.querySelector('#burger');
const lineOne = document.querySelector('#burger span:nth-child(1)');
const lineTwo = document.querySelector('#burger span:nth-child(2)');
const lineThree = document.querySelector('#burger span:nth-child(3)');
const ulList = document.querySelector('#menu>ul');
const ulLi = document.querySelectorAll('#menu ul li');
const ulLink = document.querySelectorAll("#menu ul li a");
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
        navbarContainer.style.width = "60%";
    }

    function showList() {
        ulList.classList.remove("hidden");
        for (var i = 0; i < ulLink.length; i++) {
            ulLink[i].classList.remove("hidden");
        }
    }
    // add timeout before hide ulList
    function hideList() {
        setTimeout(function() {
            ulList.classList.add("hidden")
            for (var i = 0; i < ulLink.length; i++) {
                ulLink[i].classList.add("hidden");
            }
    
            }, 200);
    }


burger.addEventListener("click", () => {
    switchNavState = !switchNavState;
    if(switchNavState) {
     addHamburgerStyle();
     menuAnimation();
     showList();

    }
    else {
        hideList();
        removeHamburgerStyle();
        navbarContainer.style.width = "0px";

    }
})