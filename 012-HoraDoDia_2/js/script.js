function carregar(){

    var agora = new Date();
    var hora  = agora.getHours();

    var msg = document.querySelector('div#msg');
    var imagem = document.querySelector('#imagem');

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12)
    {
        imagem.src = 'images/manha.png';
        document.body.style.background = '#a28734';
       
    }
    else if (hora >= 12 && hora <= 18)
    {
        imagem.src = 'images/tarde.png';
        document.body.style.background = '#b1d3ef';
    }
    else
    {
        imagem.src = 'images/noite.png';
        document.body.style.background = '#18252c';
    }

}