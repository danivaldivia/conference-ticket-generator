document.addEventListener("DOMContentLoaded", function(){
    const inputEmail = document.querySelector('#email')
    const inputGitHub= document.querySelector('#github')

    inputEmail.addEventListener('blur', validar);
    inputGitHub.addEventListener('blur', validar);



    function validar(e){
        if(e.target.value.trim() === ''){
            mostrarAlerta(`Please enter a valid ${e.target.id} address.`, e.target.parentElement);
            return;
        } 

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta(e.target.parentElement);
            return;
        } 

        limpiarAlerta(e.target.parentElement);
    }

    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);

        const image = document.createElement('SPAN');
        image.classList.add('important-icon');

        fetch('./assets/images/important-icon.svg')
            .then(res => res.text())
            .then(svg => {
                image.innerHTML = svg;

                const svgElement = image.querySelector('svg');

                svgElement.querySelectorAll('path[stroke]').forEach(path => {
                    path.setAttribute('stroke', 'var(--orange500)');
                });

                svgElement.setAttribute('width', '16');
                svgElement.setAttribute('height', '16');
        });


        const error = document.createElement('P');
        error.textContent =mensaje;
        error.classList ='form-field__hint'
        error.style.color ='var(--orange500)'

        
        const message = document.createElement('DIV');
        message.classList='form-field__message';
        message.appendChild(image);
        message.appendChild(error);
        message.classList.add('input-alert');

        referencia.appendChild(message);
    }


    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.input-alert');
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email)
        return resultado;
    }
});
