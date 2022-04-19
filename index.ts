

const numerosAlunos = ['3,4,8,1,4,10,17,13,2,17,56,18,19,20,22,29']

//Crescente
numerosAlunos.sort(function(a,b){
    if(a>b) return 1;
    if(a<b) return -1;
    return 0
})

//Numeros primos
var numero1= []
var numero2= []

    function primo (numerosAlunos){
        for(var i= 0; i <= numerosAlunos; i++){
            numero2.push(true)
        }
        for(var i= 2; i <= numerosAlunos; i++){
            if(numero2 [i]){
                numero1.push(i);
                
                for(var k = 1; i * k <= numerosAlunos; k++){
                    numero2[i * k] = false
                }
            }
        }
        return numero1
    }
    //Maior nota
    const notaMaior = Math.max(3,4,8,1,4,10,17,13,2,17,56,18,19,20,22,29)

    console.log('Notas em ordem crescente', numerosAlunos)
    console.log('Numeros Primos', primo(29))
    console.log('Maior nota', notaMaior)
