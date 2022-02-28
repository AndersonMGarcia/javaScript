function carregar(){
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('#imagem');

    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12)
    {
        //bom dia #898320  
        img.src = 'images/manha.png';
        document.body.style.background = "#898320";
    }
    else if (hora >= 12 && hora <= 18)
    {
        //boa tarde #e39c4d
        img.src = 'images/tarde.png';
        document.body.style.background = "#e39c4d";
    }
    else
    {
        //boa noite #a681b7 
        img.src = 'images/noite.png';
        document.body.style.background = "#372e4d";
    }
}
