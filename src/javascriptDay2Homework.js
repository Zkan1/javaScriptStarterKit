//istediğimiz kadar parametre gönderebildiğimiz ve gönderdiğimiz sayıların asal olup olmadığını söyleyen fonksiyon
function findPrime(...numbers) {
let isPrime=true
    for (let i = 0; i < numbers.length; i++) {

        
        if (numbers[i]==2) {
            console.log(numbers[i]+" sayısı asaldır")
        
            
        }else if (numbers[i]>1&numbers[i]!=2) {
            for (let j = 2; j < numbers[i]/2; j++) {
                if (numbers[i]%j == 0) {
                    isPrime=false
                    break
                }
            }
            if (isPrime) {
                console.log(numbers[i]+" Sayısı asaldır.")
            }else{console.log(numbers[i]+" Sayısı asal değildir")}
            
        }else  {console.log("Sıfırdan büyük bir sayı giriniz...")}
        
        
    }
}
findPrime(73,2,6,15)

console.log("------------------------")
    
//1000 e kadar olan asal sayıları bastır
function printPrimeNumbers(){
    let x = 0
    for (let i = 0; i <= 1000; i++) {
    
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                x = 1
                break
            }
        }

        if (i > 1 && x == 0) {
            console.log(i)
        }
    }
}

printPrimeNumbers()

console.log("---------------------")

//1000 e kadar olan tüm mükemmel sayılar
function isPerfect(number) {
    let total=1
    for (let i = 2; i <= number/2; i++) {
        if (number % i ==0) {
            total+=i  
        }  
    }
    if (total==number) {
        return 1    
    }
    else{return 0}
    
}

for (let j = 0; j <= 1000; j++) {
    if (isPerfect(j)==1) {
        console.log(j+" Mükemmel sayıdır")   
    }
}

//arkadaş sayılar

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
        
    
    

