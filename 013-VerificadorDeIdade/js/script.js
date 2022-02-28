function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('input#txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || fano.value > ano || fano.value == 0)
    {
        res.innerHTML = 'Verifique os dados e tente novamente!';
    }
    else
    {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');

        if (fsex[0].checked)
        {
            genero = 'Homem';

            if (idade >= 0 && idade <= 10)
            {
                //criança
               // img.style.width = '200px';
              //  img.style.height = '300px';
                img.setAttribute('src','images/criancaM.jpg');
            }
            else if (idade < 21)
            {
                img.setAttribute('src','images/jovemH.jpg');
                //jovem
            }
            else if (idade < 50)
            {
                //adulto
                img.setAttribute('src', 'images/adultoH.jpg');
            }
            else
            {
                img.setAttribute('src','images/idosoH.jpg');
                //idoso
            }
        }
        else
        {
            genero = 'Mulher';

            if (idade >= 0 && idade <= 10)
            {
                //criança
                img.setAttribute('src','images/criancaF.jpg');
            }
            else if (idade < 21)
            {
                //jovem
                img.setAttribute('src','images/jovemM.jpg');
            }
            else if (idade < 50)
            {
                //adulto
                img.setAttribute('src','images/adultoM.jpg');
            }
            else
            {
                //idoso
                img.setAttribute('src','images/idosoF.jpg');
            }
        }
       // res.style.textAlign = 'center';
        res.innerHTML = `Detecado ${genero} com ${idade} anos de idade <br>`;
        res.appendChild(img);
        
    }

    
}