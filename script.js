// this function is a button that changes the color of the text when clicked
function myFuzzy() {
    document.getElementById("paragraph").style.color = "blue";
}

// this function is a button that changes the font when clicked
function goodKitty() {
    document.getElementById("paragraphtwo").style.fontFamily = "impact";
}

// this function is a find and replace button
var originalText = "";
function findReplace(word, replacement) {
    if (originalText.length == 0) {
        originalText = document.getElementById("original").innerHTML;
    }
    var match = new RegExp(word, "ig");
    var replaced = "";
    if (replacement.length > 0) {
        replaced = originalText.replace(match, replacement);
    }
    else {
        var boldText = "<div style=\"background-color: yellow; display: inline; font-weight: bold;\">" + word + "</div>";
        replaced = originalText.replace(match, boldText);
    }
    document.getElementById("original").innerHTML = replaced;
}