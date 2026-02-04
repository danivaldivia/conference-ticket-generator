
document.addEventListener("DOMContentLoaded", function(){
    const svgAlert= document.querySelector('#file-error');
    const inputAvatar = document.querySelector('#avatar');
    const messageAvatar = document.querySelector('#avatar-required');
    const maxSize =  200 * 1024;
    const originalMessageText = document.querySelector('#avatar-required').textContent;
    const originalMessageColor = getComputedStyle(messageAvatar).color;




    inputAvatar.addEventListener('change', (e) => {
        const file =e.target.files[0];
        console.log(file);

        const fileSize = file.size;
        const fileType = file.type;

            if(file){
                console.log(`Peso: ${(fileSize /1024).toFixed(2)} KB`);
                console.log(`Formato: ${fileType}`);
            }

            if(fileSize > maxSize) {
                sizeAlert();
            } else{
                cleanSizeAlert()
            }

    }); 

    function sizeAlert(){
        svgAlert.querySelectorAll('path[stroke]').forEach((path, index) => {
            if (index === 1 || index === 2) {
                path.setAttribute('stroke', 'var(--orange500)');
            }


        messageAvatar.textContent = 'File too large. Please upload a photo under 500KB.';
        messageAvatar.style.color='var(--orange500)';
        });
    }

    function cleanSizeAlert(){
        svgAlert.querySelectorAll('path[stroke]').forEach((path, index) => {
            if (index === 1 || index === 2) {
                path.setAttribute('stroke', 'currentColor');
            }


        messageAvatar.textContent = originalMessageText;
        messageAvatar.style.color = originalMessageColor;
        });
    }


});
