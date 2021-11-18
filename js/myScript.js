(function() {

document.getElementById("myHeading").innerHTML = "Arrmann"
document.querySelector('nav ul li').setAttribute('class', 'currentPage');
document.querySelector('nav ul li a').setAttribute('href', 'http://www.google.co.uk');

document.getElementById('myTestEvent').onclick = function(){
console.info('hi');
}

//document.getElementById("myTestEvent").addEventListener("click", function() {
//    console.info("hi");
// });


var colourButtons = document.querySelectorAll(".colPicker")
console.dir(colourButtons);
for(var i=0; i < colourButtons.length; i++){
 colourButtons[i].addEventListener("click", chgColour);
}

function chgColour(ev) {
    var colourPicked = ev.target.classList[0] + ("Back");
    document.querySelector("body").setAttribute("class", colourPicked);
}

var imageAr = ['images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'
    ];

    

    setInterval(chgImahge, 1000)
    var imgCounter = 0;
    function chgImahge(){
        document
        .getElementById("myImages")
        .setAttribute("src", imageAr[imgCounter]);
        imgCounter++
        if (imgCounter == imageAr.length)
        imgCounter = 0;
    }



})();