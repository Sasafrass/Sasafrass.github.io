function changeText() {
    var changetext;
    changetext = document.getElementById("TextArea1").value;

    var finalText = "";
    for (var i=0; i < changetext.length; i++) {
        var rand = Math.random()
        if (rand > 0.5) {
            finalText += changetext[i];
        }
        else {
            finalText += changetext[i].toUpperCase();
        }
    }
    document.getElementById("TextArea2").value = finalText;
}