function showHidden(className) {
  var split = className.split("_")

  var ele = document.getElementById(className);
  var col = document.getElementById(split[0]);

  if (ele.style.display == "block") {
    ele.style.display = "none";
    col.style.color = "rgba(255, 255, 255, 0.5)";
    col.style.outline = "4px solid rgba(255, 255, 255, 0.25)";
    col.className = "project_card";
  } else {
    ele.style.display = "block";
    col.className = "project_card_expand"
    col.style.color = "#E2734A";
    col.style.outline = "4px solid #E2734A";
    document.getElementById("race_car_" + split[0]).className = "race_car_" + split[0] + "_animate";
  }
}

function showAllHidden() {
  var divs = ["dev_hidden", "eth_hidden", "id_hidden", "ps_hidden"]

  for (var i = 0; i < 4; i++) {
    var ele = document.getElementById(divs[i]);
    var col = document.getElementById(divs[i].split("_")[0]);

    if (ele.style.display != "block") {
      ele.style.display = "block";
      col.className = "project_card_expand"
      col.style.color = "#E2734A";
      col.style.outline = "4px solid #E2734A";
    }
  }
}

function hideAllShown() {
  var divs = ["dev_hidden", "eth_hidden", "id_hidden", "ps_hidden"]

  for (var i = 0; i < 4; i++) {
    var ele = document.getElementById(divs[i]);
    var col = document.getElementById(divs[i].split("_")[0]);

    if (ele.style.display == "block") {
      ele.style.display = "none";
      col.style.color = "rgba(255, 255, 255, 0.5)";
      col.style.outline = "4px solid rgba(255, 255, 255, 0.25)";
      col.className = "project_card";
    }
  }
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
