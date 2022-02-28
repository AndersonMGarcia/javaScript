function tabuada(){
    let num = document.querySelector('input#txtn');
    let tab = document.getElementById('seltab');

    if (num.value.length == 0)
    {
        window.alert('Por favor, digite um número!');
    }
    else
    {
       
        let n = Number(num.value);

        tab.innerHTML = '';
        

        for(c = 0; c <= 10; c++)
        {
            let item = document.createElement('option');
            item.value = `tab${c}`;
            item.text = `${n} + ${c} = ${n * c}`;
            tab.appendChild(item);
        }
        
    }
}