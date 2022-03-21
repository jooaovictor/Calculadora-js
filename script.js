function calcular(){
    var tn1 = document.getElementById('txtn1')
    var tn2  = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var txtn1 = Number(tn1.value)
    var txtn2 = Number(tn2.value)
    if(tn1 && tn2.value.length  == 0 ){
        window.alert('[ERRO] Verifique Seus Dados!')
    }else{
        var conta = document.getElementsByName
        ('Sconta')
        var s = ''
        if (conta[0].checked){
            s = txtn1 + txtn2
        }else if (conta[1].checked){
            s = txtn1 - txtn2
        }else if (conta[2].checked){
            s = txtn1 * txtn2   
        }else if (conta[3].checked){
            s = txtn1 / txtn2
        }
    }
    res.innerHTML = s
    res.style.backgroundColor = 'black'
    res.style.color = 'white'
    res.style.borderRadius = '10px'
    res.style.textAlign = 'center'
    res.style.fontSize = '1.9em'
}
