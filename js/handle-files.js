document.addEventListener("DOMContentLoaded", function(){
    const fileInput = document.querySelector("#avatar");
    const previewSvg = document.querySelector("#preview-svg");
    const previewImg = document.querySelector("#preview-image");

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if(!file.type.startsWith("image/"))
            return;

        const reader = new FileReader();

        reader.onload = () => {
            previewImg.src = reader.result;
            previewImg.hidden = false;
            previewSvg.hidden = true;
        };

        reader.readAsDataURL(file);
    });
});



