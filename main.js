const btn = document.querySelector('#btn-enviar');

btn.addEventListener('click', function(e){
    e.preventDefault();
    const nA = document.querySelector('#numberA');
    const nB = document.querySelector('#numberB');

    const valueA = nA.value;
    const valueB = nB.value;
    const mensagemSucesso = `SUCESSO: O número <b>${nB.value}</b> é maior que o <b>${nA.value}</b>`;
    const mensagemErro = `ERRO: O número <b>${nA.value}</b> é maior que o <b>${nB.value}</b>`;


    if(valueA < valueB){
        const containerMensagemSucesso = document.querySelector('#success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valueA.value = ' ';
        valueB.value = ' ';

    }else{
        const containerMensagemErro = document.querySelector('#error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        
        valueA.value = ' ';
        valueB.value = ' ';
    }
})