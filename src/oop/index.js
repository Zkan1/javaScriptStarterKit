class Customer{
    constructor(id,customerNumber){
        this.id=id                              //Burada da prototyping yapıyoruz. Constructor un içerisindeki id ve customerNumber'ı 
        this.customerNumber=customerNumber      //18. satırdaki gibi tanımladık
    }
}

let customer = new Customer(1,"12345");

//prototyping-->bir nesneye bambaşka bir özellik eklemek
customer.name ="Murat"//üstte name eklemedik ama burda ekleyip ona ulaşabiliyoruz
console.log(customer.name)

Customer.bisey="Bişey"//Class'a yapılan prototyping
console.log(Customer.bisey)
console.log(customer.customerNumber)//2. satırdaki customerNumber'ı çapğırdık

class IndividualCustomer{

}

class CorporateCustomer{

}