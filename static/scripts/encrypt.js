function ShowHideDiv() {
    var chkYes = document.getElementById("Custom");
    var dvtext = document.getElementById("dvtext");
    dvtext.style.display = chkYes.checked ? "block" : "none";
}
function Upload() {
    var fileUpload = document.getElementById("fileUpload");
    var st = document.getElementById("text1").value.length;
    var reader = new FileReader();
    reader.readAsDataURL(fileUpload.files[0]);
    reader.onload = function (e) {
        var image = new Image();
        image.src = e.target.result;

        image.onload = function () {
            var height = this.height;
            var width = this.width;
            var alert = document.getElementById("alert");
            if ((height * width / 3) < st) {
                alert.style.display = "block";
            }
            else {
                alert.style.display = "none";
            }
        };
    }
}