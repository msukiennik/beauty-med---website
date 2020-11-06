document.addEventListener("DOMContentLoaded", function () {

// submenu

var allElementsMenuList = document.getElementsByClassName("element-menu-list");

for(var i = 0; i < allElementsMenuList.length; i++) {
    if (allElementsMenuList[i].children.length >= 2) {

        allElementsMenuList[i].addEventListener("mouseenter", function() {
            var firstChildHasSubmenu = this.firstElementChild;
            var lastChildSubmenuClassList = this.lastElementChild.classList;

            lastChildSubmenuClassList.remove("close-submenu");
            lastChildSubmenuClassList.add("open-submenu");
        })

        allElementsMenuList[i].addEventListener("mouseleave", function(){
            var firstChildHasSubmenu = this.firstElementChild;
            var lastChildSubmenuClassList = this.lastElementChild.classList;

            lastChildSubmenuClassList.add("close-submenu");
            lastChildSubmenuClassList.remove("open-submenu");

        })
    }
}


// hover on bubbles

var bubble = document.getElementsByClassName("once-bubble");

for(var i = 0; i <bubble.length; i++) {

bubble[i].addEventListener("mouseenter", function () {
var classListForThis = this.classList;
classListForThis.remove("without-hover");
classListForThis.add("with-hover");

console.log("udaało sie?");

})


bubble[i].addEventListener("mouseleave", function() {
    var classListForThis = this.classList;
    classListForThis.remove("with-hover");
    classListForThis.add("without-hover");

    console.log("czy to juz?");
})

}


// MOBILE MENU:

var menuMobile = document.getElementById("mobile-menu-logo");
var menuList = document.getElementById("menu-list");
var classListMainMenu = menuList.classList;

menuMobile.addEventListener("click", function(){
    classListMainMenu.toggle("mobile-menu");
    console.log("classList: " + classListMainMenu);
})

})
