console.log("Merbaha Kodlama.io")
//JS type safe değildir
let dolarDun = 9.20
let dolarBugun = 9.30
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2

console.log(euroDun)
//birden fazla veriyi aynı yerde tutmak için array kullan

//array
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Kredi"]

for(let i = 0;i<konutKredileri.length;i++){
    
    console.log("<li>"+ konutKredileri[i] +"<li>")
}

console.log(konutKredileri)


//default parametre sona yazılır

let student = {id:1, name:"Zkan"
}

function save(ogrenci,puan=10){//örneğin burada puanı başa alırsak atadığımız ilk değer puana gider
    console.log(ogrenci.name+" : "+puan)
}
save(student)//eğer default parametreyi başa alıp aynı çıktıyı almak istiyorsan "undefined" koymalısın

console.log("--------------------------------------") 