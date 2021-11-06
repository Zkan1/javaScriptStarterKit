//rest-->Javada varArgs
let showProducts = function (id,...products){//...products aslında bir array
    console.log(id)
    console.log(products[1])
    
}//typeof ile son aldığı değerin tipini öğrenebilirsin
console.log(typeof showProducts)
showProducts(10,"ahmet","mehmet","veli")
//...products'a array de gönderebiliriz. Eğer bunu yaparsak array içinde array yapmış oluruz
//Yani [["a","b",c]] olacak ve ...products un 0. elemanı bir array olacak
//Bu değeri okumak istiyorsan da products[0] yapman gerekir.
//Buna rest parametre denir.
console.log("--------")

//spread 
let points = [1,2,3,4,5,6,7,8,9,10]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")//ekstra örnek
//spread e elimizdeki arrayi ayrıştırıyoruz
// Math.max() bize girilen sayıların en büyüğü veriyor. Ancak buna değerleri (1,2,3) şeklinde göndermemiz gerekli
//rest kısmındaki gibi array gelirse NaN hatası alırız
// bunun için üstte points arrayini tanımladık daha sonra rest kullanarak onları ayırdık
//böylece math.max() array içerisindeki değerleri okudu
console.log("--------------")

//Destructuring
//elimizdeki arrayin değerlerini değişkene atama yöntemi
let populations = [10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)      //üstte her bir değişkeni sırayla sayılara atadı
console.log(medium)     //populations un 3. elemanı array olduğu için
console.log(high)       //altında da o arrayin içindekilere atadık
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number){
    console.log("-----")
    console.log(small1)
}
someFunction(populations)// burada içerisini boş bırakırsak hata alırız bi anlamda değer göndermeyi zorunlu kıldık

let category = {id:1,name:"içecek"}
console.log(category.id)
console.log(category["name"])//bir üstteki kodun farklı kullanımı

let {id,name} = category// objeyi parçaladık
console.log(id)
console.log(name)