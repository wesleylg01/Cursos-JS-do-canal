function Calcula(){
    var nota1 = parseInt(document.getElementById("nota1").value)
    var nota2 = parseInt(document.getElementById("nota2").value)
    var nota3 = parseInt(document.getElementById("nota3").value)
    var nota4 = parseInt(document.getElementById("nota4").value)

    var media = (nota1+nota2+nota3+nota4)/4

    if (media >= 7){
        document.write ("Parabens, você foi aprovado com a nota: "+media)
    }else{
        document.write ("Você foi reprovado com a nota: "+media)
    }   
    
}