var val;
var h, w;
function handleHeight() {
    h = document.getElementById("height_requested").value;
}

function handleWidth() {
    w = document.getElementById("width_requested").value;
}

function readURL(input, w, h) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(w)
                .height(h);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

