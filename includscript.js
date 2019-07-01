var id = document.getElementById('custplaceWidget');
if (id) {

    var frame = document.createElement('iframe');
    frame.src = "https://chaimae27.github.io/test/";
    id.appendChild(frame);
    frame.style.height = "195px";
    frame.style.paddingTop = "25px";
    frame.style.marginBottom = "-75px";
    frame.style.border = "none";
    frame.style.width = "100%";

} else {
    console.log("error: ERREUR IN THE ID custplaceWidget ");

}