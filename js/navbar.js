(function(){

    console.dir(window.location);
    var url = window.location.href;
    var filename = url.split("/").pop();
    console.info(filename);
    var allLinks = document.querySelectorAll("nav ul li")
    for(var i=0 ; i < allLinks.length; i++) {
        if (allLinks[i].querySelector("a").getAttribute("href") == filename){
            allLinks[i].setAttribute("Class", "currentPage");
            break;
        }
    } 


})()