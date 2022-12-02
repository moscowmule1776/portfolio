function showHidden(className) {
  var ele = document.getElementById(className);
    if(ele.style.display == "block") {
            ele.style.display = "none";
    } else {
        ele.style.display = "block";
    }
}
