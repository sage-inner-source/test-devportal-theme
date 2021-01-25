// Toggles text to either say show or hide
function toggle(link, text) {
    if (link.innerHTML === "Show " + text + " +") {
      link.innerHTML = "Hide " + text + " -";
    } else {
      link.innerHTML = "Show " + text + " +";
    }
}