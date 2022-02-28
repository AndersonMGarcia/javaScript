let num = [4,8,6,3,1,10,9,7,5,2,20];

//console.log(num);

//num.sort();//orderna os valores do array

num.push(300);//adiciona um valor ao array

/*
for(i = 0; i < num.length; i ++)
{
    console.log(`Posição ${i} tem o valor ${num[i]}`);
}
*/

for(let pos in num) // faz o mesmo que o comando for acima
{
    console.log(`Posição ${pos} tem o valor ${num[pos]}`);   
}

console.log('----------------------------------');

let posicao = num.indexOf(20);// mostra a posição do valor 10 dentro do array

if (posicao == -1){
    console.log('O valor não foi encontrado!');
}
else
{
    console.log(`O valor esta na posição ${posicao}`);
}

