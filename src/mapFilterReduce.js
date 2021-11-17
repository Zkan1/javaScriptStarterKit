let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:3, unitPrice:100},
    {id:5, productName:"Kitap", quantity:2, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
] 
 //push operasyonunu kullandığımızda bellekteki yerini değiştirmiyoruz

cart.map(product=>console.log(product.productName))//cart içerisindeki tüm elemanları dolaşacak
//istersek bi askiyonda bulunabiliriz istersek üzerlerinde bir şeyler yapabiliriz
//her dolaşmada ürüne takma isim veriyor kodda da buna product dedik
//her bir prodcut için console.log daki kısmı yap dedik

cart.map(product=>{//birden fazla işlem yapıcağımız zaman bu şekilde süslü parantez
    console.log(product.productName+" : "+product.unitPrice *product.quantity)
})
console.log("-------------------")
let quantityOver2=cart.filter(product=>product.quantity>2)

console.log(quantityOver2)
console.log("-------------------")

let total=cart.reduce((acc,product)=> acc+product.unitPrice,0)

console.log(total)

function refTest(sepet) {
    cart.push({id:7, productName:"Potcuk", quantity:5, unitPrice:50})
    
}
refTest(cart)//referans tip gönderiyoruz.
console.log(cart)

let sayi=10

function sayiTopla(number) {
    number+=1
    
}
sayiTopla()
console.log(sayi)
 