let slider = document.getElementById("myrange");
let output = document.getElementById("value_span");
let imagesDiv = document.getElementById("images_div")
let sofa = document.getElementById("sofa");

output.innerHTML = slider.value + '$';

slider.oninput = function() {
    output.innerHTML = this.value + '$';
}

$("#images_div").on("click", function() {
    $("#images_div").hide();
    $("#sofa").show();
    $("#hamburger_chk_box").prop("checked", false);
})

$("#search_btn").on("click", function() {
    $("#images_div").show();
    $("#sofa").hide();
    $("#hamburger_chk_box").prop("checked", true);
})