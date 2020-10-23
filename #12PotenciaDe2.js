var valor = 17179869184

if(valor == 1){
    console.log(`${valor} true 0`)
}else if(valor % 2 != 0){
    console.log(`${valor} false`)  
}else if(valor < 1){
    console.log(`${valor} false`)
}else{
    var isBase = true
    var cont = 0
    var num = valor
    while( (isBase) && (num!=1) ){
        num = num/2
        cont ++
        if( ((num%2) != 0) && (num != 1) ){
            isBase = false
        }
    }
    if(isBase){
        console.log(`${valor} true ${cont}`)
    }else{
        console.log(`${valor} false`)
    }    
}













