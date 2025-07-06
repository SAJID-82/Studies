// showing an image using fetch API (blob)

let promise = fetch("testImg.png");
let img = document.getElementById("myImage");

promise
.then(response => response.blob())
.then(blob => {
    const imgUrl = URL.createObjectURL(blob);
    img.src = imgUrl;
}) 