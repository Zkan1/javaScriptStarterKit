
function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('black') });
 //____________________________________________________________
 
 function addToCart(quantity,productName="3 Vuran Jett") {//= den sonrası default değer
    console.log("Sepete Eklendi : " + productName + " adet : "+ quantity)
    
}
addToCart(10)
//arrow function
let sayHello = ()=>{//burada sayHello yine fonksiyon ve çalıştıracağı kod da budur dedik
    console.log("Hello reis")
}
sayHello()
//değişkene fonksiyon atadık altta
let sayHello2 = function () {
    console.log("Hello world")
    
}//Farklı kullanımların sebebi this keyword ünün davranışının kullanımlara göre farklı olması
sayHello2()
console.log("-------------------------------")

let product1 = {productName:"Elma",unitPrice:10,quantity:5}//obje tanımı

function addToCart2(product) {
    console.log("Ürün : "+ product1.productName)
    console.log("Adet : "+ product1.quantity)
    console.log("Fiyat : "+ product1.unitPrice)
}
addToCart2(product1) 
console.log("--------------------")

//objeler, arrayler referans tiptir
let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2=product3//product2'nin referans numarası product3'ün referans numarasıdır
product2.productName="KARPUZ"
console.log(product3.productName)

//sayilar değer tipidir
let sayi1=10
let sayi2=20
sayi1=sayi2//sayi1'in değeri = sayi2'nin değeri 
console.log(sayi1)

console.log("----------------------------")

function addToCart4(products) {
    console.log(products)
    
}

let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Elma",unitPrice:10,quantity:5}

]
addToCart4(products)
console.log("----------------------------")


function add(...numbers) {
    let total=0
    
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
        console.log(total)
        
    }
    
}
add(20,30,40)
console.log("----------------")


let [icAnadolu,Marmara0,karadeniz,[ankara]] = [
    {name:"İç Anadolu",population:"10M"},
    {name:"Marmara",population:"20M"},
    {name:"Karadeniz",population:"30M"},
    [
        ["Ankara","Konya"],
        ["Çanakkale","İzmir"],
        
    ]
]
console.log(icAnadolu)
console.log(Marmara0)
console.log(ankara)

console.log("--------------------")

let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}=
    {productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)
