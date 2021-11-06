function isFriendly(num1,num2) {
    let y = 1//num1 için
    let z = 1//num2 için
    for (let i = 2; i <= num1/2; i++) {
        if (num1 % i == 0) {
            y+=i
              
        }  
    }
    for (let j = 2; j <= num2/2; j++) {
        if (num2 % j == 0) {
            z+=j
              
        }  
    }
    if (y==num2 & z==num1) {
        return 1    
    }
    else{return 0}

    
}
    if (isFriendly(220,284)===1) {
        console.log("Bu iki sayı arkadaş sayılardır.")
        
    }else{console.log("Bu sayılar arkadaş sayılar değillerdir")}
